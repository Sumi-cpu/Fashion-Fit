# Fashion Fit

Fashion Fit is a second-hand and vintage clothing sizing demo for both shoppers and sellers. Buyers can compare a second-hand find with a garment they know fits. Sellers can photograph a listing garment, review approximate photo measurements, and save measurements they confirm. It compares garments—not a person's photo or body measurements.

## Try the sample sizing demo

1. Edit the sample dress's measurements and choose centimetres or inches. The shopping-size cards update; select **Record garment sample** to use it in this separate demo.
2. Optionally enter body measurements and select a usual size and label region. This illustrative sample-size path is separate from both camera workflows.
3. Review the approximate sample garment size, body-size recommendation and fit estimate. Regional equivalents and the sample chart are illustrative—not universal or brand-specific.
4. Select **Download fit note** to save a text note for a listing.

## Seller camera workflow

Choose **Seller · measure a listing** in the camera tools to take a photo or choose an image of the listing garment. Lay it flat with a flat A4 sheet in the same plane. A4 is the only supported scale; mark the visible long edge (29.7 cm) or short edge (21 cm), then the endpoints of any applicable garment widths. Skip areas that do not apply. Click or tap the image, or use the arrow keys and Enter.

Photo-derived circumferences are only drafts. Use **Use photo estimates as seller draft values** if useful, then check each value against the garment label or a tape and save only measurements you confirm. One seller listing profile is stored separately in this browser's local storage on this device; replace or clear it before recording another item. Fabric is never identified from the photo; a seller may optionally select fabric they have confirmed manually. Select **Remove seller photo** to clear it from this browser session; this does not delete the original file from the device.

## Buyer camera workflow

Choose **Buyer · compare a find** to photograph a second-hand target garment while shopping. Save actual circumference measurements for one or more areas of a garment you own and know fits, then mark the target garment and flat A4 sheet as described above. Select **Remove buyer photo** to clear the image from this browser session, or **Clear buyer reference** to erase the saved reference.

The comparison shows a fit estimate only for dimensions measured on the target and saved for the buyer reference. If no dimensions match, the app says it cannot assess fit. Buyer references and seller-confirmed listing measurements use separate local profiles; neither is synced to another device. Do not photograph or enter measurements for a person, child, or baby in either camera workflow.

## Photo measurement limitations and privacy

Images are processed locally in the browser, are not uploaded or saved by Fashion Fit, and must be smaller than 20 MB and 40 megapixels. These user-marked estimates are approximate—not automatic image recognition or a fit guarantee. Perspective, camera angle, clothing construction, style, material, stretch, folds and mark placement affect results. Doubling a flat width estimates circumference only when the garment lies flat without overlap. Compare actual listing measurements and fit preferences. No photo feature identifies fabric or infers a person's measurements.

The separate sample garment and body-measurement demo uses transparent, illustrative rules and approximate size conversions. It is not a connected or trained AI model, a brand-specific size chart, or a guarantee of fit.

## Original optional soundtrack

Select **Play music** in the header to hear a gentle, vintage-inspired instrumental composed for Fashion Fit and synthesized locally by the browser. Music is off until clicked, plays at a restrained volume, and pauses when the page is hidden. No audio files, external services, or additional dependencies are used.

The browser demo remains a static, dependency-free site. GitHub Pages serves the public demo at <https://sumi-cpu.github.io/Fashion-Fit/>. An optional Capacitor wrapper packages the same app for iOS and Android; its build copies the static site to `www/` and does not change the GitHub Pages deployment.

## Prepare iOS and Android store builds

The native projects are store-build scaffolding, not published apps. The QR code in the app and pitch deck still opens the live web demo; there are no App Store or Google Play listing URLs yet. Do not describe Fashion Fit as available in either store until the apps have been reviewed and the listing URLs are live.

### Build locally

Requirements: Node.js 22 or newer, npm, Android Studio with its Android SDK for Android builds, and macOS with Xcode for iOS builds. Apple requires macOS/Xcode for signing and submitting an iOS app; a Windows machine can edit the iOS project but cannot produce the signed App Store build.

```sh
npm ci
npm run build:mobile
npx cap open android
# On macOS, instead open the iOS project:
npx cap open ios
```

In Android Studio, install the configured Android SDK, choose a release build, and sign it with a private upload key kept outside this repository. In Xcode, select a team and signing identity, set the final bundle identifier, and archive the app for App Store Connect. Never commit signing keys, provisioning profiles, passwords, or store credentials. Test photo capture/file selection, offline launch, local saved profiles, and the optional audio on real iOS and Android devices.

The current bundle identifier (`com.sumicpu.fashionfit`) is a proposed starting point, not a confirmed legal or store identity. Confirm it is available and owned by the publisher before release. Review `STORE_RELEASE.md` and `PRIVACY.md` before completing store questionnaires or submitting. Store publication also requires the publisher's paid developer accounts, verified legal/contact details, final app identity, support and privacy-policy URLs, screenshots and listing copy, age/content ratings, privacy/data-safety answers, signed builds, and successful store review. These steps have not been completed; this repository does not publish or submit apps.

## Open or share the live demo

Scan the QR code near the top of the app, or use the cache-busted live URL:
<https://sumi-cpu.github.io/Fashion-Fit/?v=buyer-seller-camera-20261016>.
The high-contrast QR image is tracked at [`assets/fashion-fit-qr.png`](assets/fashion-fit-qr.png).
