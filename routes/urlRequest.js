import { createUrl, getUrl } from "../controllers/urlRequest.js";

import { Router } from "express";

const router = Router();

router.get("/:shortUrl", getUrl);
router.post("/", createUrl);

export default router;
