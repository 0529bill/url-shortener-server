import ENV from "../../env.js";
import nodemailer from "nodemailer";

let transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: ENV.EMAIL,
    pass: ENV.EMAIL_PASSWORD,
    clientId: ENV.OAUTH_CLIENTID,
    clientSecret: ENV.OAUTH_CLIENTSECRET,
    refreshToken: ENV.EMAIL_REFRESH_TOKEN,
    accessToken: ENV.EMAIL_ACCESS_TOKEN,
  },
});

export default transporter;
