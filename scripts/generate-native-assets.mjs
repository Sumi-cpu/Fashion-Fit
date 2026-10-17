import { mkdir, readdir, readFile, writeFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const icon = path.join(root, "assets", "icon-only.png");
const splash = path.join(root, "assets", "splash.png");
const androidRes = path.join(root, "android", "app", "src", "main", "res");
const iosAssets = path.join(root, "ios", "App", "App", "Assets.xcassets");

for (const file of [icon, splash, androidRes, iosAssets]) {
  await readFile(file).catch(async (error) => {
    if (error.code === "EISDIR") return;
    throw new Error(`Required native asset input is missing: ${file}`, { cause: error });
  });
}

const densities = [
  ["mdpi", 48],
  ["hdpi", 72],
  ["xhdpi", 96],
  ["xxhdpi", 144],
  ["xxxhdpi", 192],
];

for (const [density, size] of densities) {
  const dir = path.join(androidRes, `mipmap-${density}`);
  await mkdir(dir, { recursive: true });
  for (const name of ["ic_launcher.png", "ic_launcher_round.png", "ic_launcher_foreground.png"]) {
    await sharp(icon).resize(size, size).png().toFile(path.join(dir, name));
  }
}

const appIconSet = path.join(iosAssets, "AppIcon.appiconset");
await mkdir(appIconSet, { recursive: true });
await sharp(icon).resize(1024, 1024).png().toFile(path.join(appIconSet, "AppIcon-512@2x.png"));

const splashSet = path.join(iosAssets, "Splash.imageset");
const splashFiles = (await readdir(splashSet)).filter((file) => /^splash-2732x2732.*\.png$/.test(file));
for (const file of splashFiles) {
  await sharp(splash).resize(2732, 2732).png().toFile(path.join(splashSet, file));
}

const androidSplashDirs = (await readdir(androidRes, { withFileTypes: true }))
  .filter((entry) => entry.isDirectory() && entry.name.startsWith("drawable"))
  .map((entry) => path.join(androidRes, entry.name));
for (const dir of androidSplashDirs) {
  const target = path.join(dir, "splash.png");
  const dimensions = await sharp(target).metadata().catch(() => null);
  if (!dimensions?.width || !dimensions?.height) continue;
  const image = await sharp(splash)
    .resize(dimensions.width, dimensions.height, { fit: "contain", background: "#f6f4ef" })
    .png()
    .toBuffer();
  await writeFile(target, image);
}

const contentFiles = await readdir(appIconSet);
if (!contentFiles.includes("Contents.json")) {
  await writeFile(
    path.join(appIconSet, "Contents.json"),
    `${JSON.stringify({
      images: [{
        filename: "AppIcon-512@2x.png",
        idiom: "universal",
        platform: "ios",
        size: "1024x1024",
      }],
      info: { author: "xcode", version: 1 },
    }, null, 2)}\n`,
  );
}
