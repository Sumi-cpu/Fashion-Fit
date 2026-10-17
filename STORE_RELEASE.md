# App store release checklist

## Current status

Capacitor iOS and Android projects package the existing static app. They are preparation only: no store listing has been created, no build has been signed or submitted, and Fashion Fit is not available in either store. The QR code in the app and the pitch deck points to the current GitHub Pages web demo, not a store listing. Keep it that way until a store listing URL exists; then update the QR target and regenerate the committed QR image together.

The bundle ID `com.sumicpu.fashionfit` is provisional. Confirm the publisher owns and can use it before creating store records. The app name, publisher name, support contact, and final listing text also need publisher approval.

## Publisher-provided release inputs

- Active Apple Developer Program and Google Play Console accounts, with the publisher's legal identity and contact details.
- A confirmed, unique iOS bundle ID and Android application ID.
- A public support contact and a stable, publicly accessible privacy-policy URL. Review `PRIVACY.md`, fill in publisher-specific contact details, and publish the final policy before entering its URL in either store.
- App Store listing copy, screenshots for the required device sizes, category, age/content ratings, and Apple privacy disclosures.
- Google Play listing copy, screenshots, content rating, target-audience answers, Data safety form, and any required declarations.
- Privately stored signing credentials: an Android upload key and the Apple signing team/certificates/provisioning. Do not add these to this repository.
- Device testing, signed release builds, and approval through each store's review process.

The store forms must be answered from the final app binary and the publisher's complete data practices, including hosting and third-party providers. `PRIVACY.md` records the app behavior visible in this repository; it is not legal advice or a substitute for the publisher's policy review.

## App behavior relevant to store disclosures

- The camera/photo picker is used only when a user chooses an image for a garment. Image processing is on-device; the app code does not upload the selected image.
- Buyer reference and seller-confirmed garment measurements are kept in local app storage on that device. There is no account, cross-device sync, analytics SDK, or advertising SDK in this project.
- The app requests live weather from Open-Meteo using a fixed Sydney coordinate. It does not request the device's location.
- The soundtrack is synthesized locally. The app does not record audio and does not need microphone access.
- iOS declares camera and photo-library usage descriptions for the web-view capture and image picker. Android does not declare a camera permission; image selection/capture uses the system file/camera chooser.
- The web version is served by GitHub Pages. The packaged app loads its bundled web assets and can run without the site; its live-weather feature still makes the Open-Meteo request when online.

## Local build

Use Node.js 22+ and npm. From the repository root run `npm ci` and `npm run build:mobile`; this builds the web bundle, syncs both native projects, and regenerates the platform icons and splash images. Open Android with `npx cap open android` on a machine with Android Studio and the Android SDK. Open iOS with `npx cap open ios` on macOS with Xcode. Configure signing and produce release builds in the platform IDEs; iOS signing and App Store submission require macOS/Xcode.

Before a release, test camera capture and file selection, saved profiles and clearing them, offline use, external links, and the generated soundtrack on supported physical devices.
