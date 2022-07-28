import {
  createUser,
  forgetPassword,
  getUrlByUsername,
  resetPassword,
  userSignIn,
} from "../controllers/users.js";
import express, { Router } from "express";

const router = Router();

router.post("/createUser", createUser);
router.post("/userSignIn", userSignIn);
router.post("/getUrl", getUrlByUsername);
router.post("/forgetPassword", forgetPassword);
router.post("/resetPassword", resetPassword);

export default router;
