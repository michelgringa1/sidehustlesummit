// Copies the static export (out/) into deploy/, the folder Hostinger serves.
import { rmSync, cpSync, existsSync } from "node:fs";

if (!existsSync("out")) {
  console.error("out/ not found — run `npm run build` first.");
  process.exit(1);
}

rmSync("deploy", { recursive: true, force: true });
cpSync("out", "deploy", { recursive: true });
console.log("Static site copied to deploy/");
