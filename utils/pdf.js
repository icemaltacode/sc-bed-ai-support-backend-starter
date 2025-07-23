import fs from "fs/promises";
import { createRequire } from "module";
const require = createRequire(import.meta.url);
const pdfParse = require("pdf-parse");

export let factsheetText = "";

export async function loadFactsheet() {
  // TODO: Code Me!
}