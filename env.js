import dotenv from "dotenv";

//dotenv: start env
dotenv.config();

export default {
  CONNECTION_URL: process.env.CONNECTION_URL,
  PORT: process.env.PORT,
  USER_SECRET: process.env.USER_SECRET,
  EMAIL: process.env.EMAIL,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,
  OAUTH_CLIENTID: process.env.OAUTH_CLIENTID,
  OAUTH_CLIENTSECRET: process.env.OAUTH_CLIENTSECRET,
  EMAIL_ACCESS_TOKEN: process.env.EMAIL_ACCESS_TOKEN,
  EMAIL_REFRESH_TOKEN: process.env.EMAIL_REFRESH_TOKEN,
};
