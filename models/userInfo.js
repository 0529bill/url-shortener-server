import mongoose from "mongoose";
import uid from "#utils/shortUniqueId.js";

const userInfoSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const UserInfo = mongoose.model("UserInfo", userInfoSchema);
export default UserInfo;
