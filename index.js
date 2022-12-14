import ENV from "./env.js";
import bodyParser from "body-parser";
import cors from "cors";
import dbConnection from "./db.config.js";
import express from "express";
import mongoose from "mongoose";
import urlRequest from "./routes/urlRequest.js";
import users from "./routes/users.js";
const app = express();
console.log("ENV.PORT ", ENV.PORT);
const PORT = 4050;
const CURRENT_PORT = process.env.PORT || PORT;

//bodyParser: parse bodies from http request
//bodyParser.json: only parse json
app.use(bodyParser.json({ limit: "30mb" }));

//bodyParser.urlencoded: middleware for parsing bodies from URL.
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors({ exposedHeaders: "rtn" }));
app.options("*", cors());

///express: app.use() use middleware
//express: add router to backend
app.use("/urlRequest", urlRequest);
app.use("/users", users);

app.get("/", (req, res) => res.send("APP IS RUNNING!"));

dbConnection.once("open", () =>
  app.listen(CURRENT_PORT, () =>
    console.log(`Server running on ports: ${CURRENT_PORT}`)
  )
);
dbConnection.on("error", (error) => console.log("Error", error));
