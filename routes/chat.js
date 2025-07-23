import express from "express";
import { openai } from "../openai/index.js";
import { lookupProductInfo } from "../utils/lookup.js";

const router = express.Router();

router.post("/", async (req, res) => {
  // TODO: Code Me!
});

export default router;