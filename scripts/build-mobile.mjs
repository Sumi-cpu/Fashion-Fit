import { cp, mkdir, rm } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const webDir = path.join(root, "www");

await rm(webDir, { recursive: true, force: true });
await mkdir(path.join(webDir, "assets"), { recursive: true });

for (const file of ["index.html", "manifest.json", "icon-192.png", "icon-512.png"]) {
  await cp(path.join(root, file), path.join(webDir, file));
}

await cp(
  path.join(root, "assets", "fashion-fit-qr.png"),
  path.join(webDir, "assets", "fashion-fit-qr.png"),
);
