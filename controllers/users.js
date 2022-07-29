import ENV from "../env.js";
import Email from "#utils/Email/index.js";
import ShortUrl from "#models/url.js";
import UserInfo from "#models/userInfo.js";
import base64 from "base-64";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const createUser = async (req, res) => {
  const { username, password, email } = req.body.userInfo;
  if (username && password && email) {
    try {
      const validateUsername = await UserInfo.findOne({
        username,
      });

      if (validateUsername) {
        return res
          .status(400)
          .append("rtn", "1000")
          .json({ validateUsername, message: "username already exist!" });
      }

      const hashedPassword = await bcrypt.hash(password, 12);

      const newUser = await UserInfo.create({
        password: hashedPassword,
        username: username,
        email: email,
      });

      const token = jwt.sign(
        {
          email: newUser.email,
          id: newUser._id,
        },
        ENV.USER_SECRET,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({ message: "success", newUser, token });
    } catch (error) {
      console.log("CREATE_USER_error", error);
    }
  }
  return res.status(422).json("not valid username and password");
};

export const userSignIn = async (req, res) => {
  // Email("0529bill@gmail.com");
  const { username, password } = req.body.userInfo;
  if (username && password) {
    try {
      const validateUsername = await UserInfo.findOne({
        username: username,
      });
      if (!validateUsername) {
        return res
          .status(404)
          .append("rtn", "1040")
          .json({ message: "User doesn't exist" });
      }

      const isPasswordCorrect = await bcrypt.compare(
        password,
        validateUsername.password
      );
      if (!isPasswordCorrect)
        return res.status(400).json({ message: "Invalid credentials" });

      const token = jwt.sign(
        { email: validateUsername.email, id: validateUsername._id },
        ENV.USER_SECRET,
        {
          expiresIn: "1h",
        }
      );
      return res.status(200).json({ result: validateUsername, token });
    } catch (e) {
      console.log("e", e);
      return res.status(500).json({ message: "Something went wrong" });
    }
  } else {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const getUrlByUsername = async (req, res) => {
  try {
    console.log("req", req);
    const targetUser = req.body.userInfo;
    const validateDbUrl = await ShortUrl.find({ username: targetUser });
    if (!validateDbUrl) {
      return res.status(404).json({ message: "can't find related userInfo!" });
    } else {
      return res.status(200).json({ message: "Success", url: validateDbUrl });
    }
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export const forgetPassword = async (req, res) => {
  try {
    const { email, origin } = req.body;
    const validateUsername = await UserInfo.findOne({
      email,
    });
    if (!validateUsername) {
      return res.status(404).json({ message: "can't find related userInfo!" });
    }

    Email(email, validateUsername.username, origin);
    return res.status(200).json({ message: "success!" });
  } catch (error) {
    console.log("forgetPassword_error", error);
  }
};

export const resetPassword = async (req, res) => {
  try {
    const { password, newPassword, pathParams } = req.body.userInfo;

    const decoded = base64.decode(pathParams);
    const validateUsername = await UserInfo.findOne({
      username: decoded,
    });
    if (!validateUsername) {
      return res
        .status(404)
        .append("rtn", "1040")
        .json({ message: "incorrect password" });
    }
    const isPasswordCorrect = await bcrypt.compare(
      password,
      validateUsername.password
    );

    if (isPasswordCorrect) {
      const hashedPassword = await bcrypt.hash(newPassword, 12);
      validateUsername.password = hashedPassword;
      await validateUsername.save();
      return res
        .status(200)
        .json({ message: "password changed successfully!" });
    } else {
      return res.status(400).json({ message: "incorrect Password!" });
    }
  } catch (error) {
    console.log("error", error);
    return res.status(400).json({ message: "something went wrong!" });
  }
};

// validateUsername@gmail.com
// validateUsername
// validateUsername

// 1234567890
// 0529bill@gmail.com
// 1234567890
// 1234567890123
