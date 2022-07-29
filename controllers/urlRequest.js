import { isHttpUri, isHttpsUri } from "valid-url";

import ShortUrl from "#models/url.js";
import uid from "#utils/shortUniqueId.js";

export const createUrl = async (req, res) => {
  const requestUrl = req.body.url;
  const requestUsername = req.body.username;
  try {
    if (isHttpUri(requestUrl) || isHttpsUri(requestUrl)) {
      const validateDbUrl = await ShortUrl.findOne({
        fullUrl: requestUrl,
        username: requestUsername,
      });
      console.log("validateDbUrl", validateDbUrl);

      if (validateDbUrl) {
        return res.status(200).json({
          validateDbUrl,
          msg: "url has already been generated before",
        });
      }

      const shortened = await new ShortUrl({
        fullUrl: requestUrl,
        shortUrl: uid(),
        username: requestUsername,
      });

      await shortened.save();

      return res.json({ ok: 1, shortenedUrl: shortened.shortUrl });
    } else {
      return res.status(422).json("requested url or user not find!");
    }
  } catch (error) {
    console.log("createUrl_error", error);
    return res.status(422).json("something went wrong! ");
  }
};

export const getUrl = async (req, res) => {
  const targetUrl = req.params.shortUrl;

  const validateDbUrl = await ShortUrl.findOne({ shortUrl: targetUrl });

  if (!validateDbUrl)
    return res
      .status(404)
      .json({ message: "can't find related shortened url!" });

  validateDbUrl.clicks++;
  await validateDbUrl.save();
  return res.redirect(validateDbUrl.fullUrl);
};
