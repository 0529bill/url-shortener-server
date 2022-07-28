import base64 from "base-64";
import mjml2html from "mjml";
import template from "./template.js";
import transporter from "./transporter.js";

async function Email(recipient, username, path, link) {
  console.log("username", username);
  console.log("recipient", recipient);
  //   const hashedUsername = await bcrypt.hash(username, 12);

  const encoded = base64.encode(username);
  console.log("encoded", encoded);
  const context = {
    link: path + `/user/resetPassword/${encoded}`,
  };
  console.log("context", context);
  const mjmlTemplate = template(context);
  const { html } = mjml2html(mjmlTemplate);
  const FROM = '"TinyURL" <officialshoppeeseller@gmail.com>';
  const options = {
    from: FROM,
    to: recipient,
    subject: "TinyURL: Forget Password message",
    html: html,
  };
  console.log("options", options);
  transporter.sendMail(options, function (error, info) {
    if (error) {
      console.log("email_error", error);
    } else {
      console.log("訊息發送: " + info.response);
    }
  });
}

export default Email;
