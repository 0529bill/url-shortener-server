<<<<<<< HEAD
<<<<<<< HEAD
import mongoose from "mongoose";
import uid from "#utils/shortUniqueId.js";
=======
import mongoose from 'mongoose';
import uid from '#utils/shortUniqueId.js';
>>>>>>> feat: add new controller
=======
import mongoose from "mongoose";
import uid from "#utils/shortUniqueId.js";
>>>>>>> feat: email

const shortUrlSchema = new mongoose.Schema({
  fullUrl: {
    type: String,
    // required: true,
  },
  shortUrl: {
    type: String,
    required: true,
    default: uid(),
  },
  clicks: {
    type: Number,
    // required: true,
    default: 0,
  },
  username: {
    type: String,
    required: true,
  },
});

const ShortUrl = mongoose.model("ShortUrl", shortUrlSchema);
export default ShortUrl;
