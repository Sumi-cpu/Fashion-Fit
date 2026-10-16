# Fashion Fit

Fashion Fit is a second-hand and vintage clothing sizing demo. It shows how garment measurements can make unfamiliar regional size labels easier to compare, helping shoppers and sellers make more confident choices.

## Try the sample sizing demo

1. Edit the sample dress's measurements and choose centimetres or inches. The shopping-size cards update; select **Record garment sample** to use it in this separate demo.
2. Optionally enter body measurements and select a usual size and label region. This illustrative body-size path is separate from buyer photo comparison.
3. Review the approximate sample garment size, body-size recommendation and fit estimate. The regional equivalents and sample chart are illustrative—not universal or brand-specific.
4. Select **Download fit note** to save a text note for a listing.

## Compare a second-hand find while shopping

Use the buyer-side photo tool to compare a target garment with an item you own and know fits. It compares garment measurements, not a person's body measurements.

1. Enter actual circumference measurements for one or more areas of a garment you know fits, then select **Save reference on this device**. Values stay in this browser's local storage on this device only; they are not synced to other devices. Clear them with **Clear saved reference**.
2. Lay the target garment flat and take a straight-overhead, well-lit photo with a flat A4 sheet in the same plane. A4 is the only supported scale reference.
3. Choose the photo (or take one on a supported device), select the A4 edge visible in it (long: 29.7 cm; short: 21 cm), and mark each pair of endpoints: the scale edge, then any applicable target garment widths. Skip areas that do not apply. Click/tap the points or focus the image and use arrow keys and Enter.
4. Review the estimated target circumferences and differences from matching saved measurements. Areas without a saved reference are explicitly not compared; without a matching baseline the app reports that it cannot assess fit.

The image is processed locally in the browser and is not uploaded or saved by Fashion Fit; images over 40 megapixels are rejected. Select **Remove photo** to clear it from this browser session; this does not delete the original file from your device. Only photograph the garment and scale reference—never photograph or infer measurements from a person, child or baby. This user-marked estimate is approximate, not automatic image recognition or a fit guarantee. Camera perspective, style, material, stretch, wrinkles and mark placement affect results. Doubling a flat width estimates circumference only when the garment lies flat without overlap. Check the listing's actual measurements and fit preferences. The photo path does not change the separate sample-size demo.

The sample garment and body-measurement tools use transparent, illustrative rules and approximate size conversions. They are prototypes—not a connected or trained AI model, a brand-specific size chart, or a guarantee of fit. No entered measurements are uploaded.

## Original optional soundtrack

Select **Play music** in the header to hear a gentle, vintage-inspired instrumental composed for Fashion Fit and synthesized locally by the browser. Music is off until clicked, plays at a restrained volume, and pauses when the page is hidden. No audio files, external services, or additional dependencies are used.

The app is a single `index.html` file with no build step or app dependencies. GitHub Pages serves the public demo at <https://sumi-cpu.github.io/Fashion-Fit/>.

## Open or share the live demo

Scan the QR code near the top of the app, or use the cache-busted live URL:
<https://sumi-cpu.github.io/Fashion-Fit/?v=buyer-fit-20261016>.
The high-contrast QR image is tracked at [`assets/fashion-fit-qr.png`](assets/fashion-fit-qr.png).
