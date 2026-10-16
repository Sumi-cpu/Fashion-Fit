# Fashion Fit

Fashion Fit is a second-hand and vintage clothing sizing demo. It shows how garment measurements can make unfamiliar regional size labels easier to compare, helping shoppers and sellers make more confident choices.

## Try the sizing demo

1. Edit the sample dress's bust, waist and hip measurements and choose centimetres or inches. The shopping size updates live; select **Record garment sample** to use those measurements in the fit comparison.
2. Enter the shopper's body measurements and choose their usual size and size-label region.
3. Review the approximate garment size shown on the dress and fabric cards, the separate body-measurement size recommendation, and the garment-to-shopper fit estimate. Approximate US, UK, EU and AU label equivalents are also shown.
4. Select **Download fit note** to save a text note that a seller can add to the listing.

## Compare a garment from a photo

Use **Compare a garment without entering body sizes** to estimate garment measurements without entering personal body measurements. The example values in the separate shopper panel are not used by this photo comparison.

1. Lay the garment flat and take a straight-overhead, well-lit photo with a flat A4 sheet next to it in the same plane; A4 paper is the only supported scale reference.
2. Choose the image and select the exact A4 edge visible in the photo: the long edge is 29.7 cm and the short edge is 21 cm.
3. Mark the two endpoints of that reference edge, then the laid-flat width across the garment at the bust/underarms, waist and fullest hip. Click/tap the points or focus the image and use arrow keys and Enter.
4. Review the approximate flat widths and doubled circumference estimates. The approximate garment size updates the shopping size and fabric cards. Optionally choose a fabric only if you can confirm it from a care label or seller; the app does not identify fabric from a photo.

The image is processed locally in the browser and is not uploaded or saved by Fashion Fit; images over 40 megapixels are rejected. Select **Remove photo** to clear it from this browser session; this does not delete the original file from your device. This is a user-marked estimate, not automatic image recognition: perspective, wrinkles, stretch and point placement affect the result. Doubling a flat width assumes the garment lies flat without overlap. A garment-only photo cannot identify a shopper's body size or predict fit; the existing body-measurement recommendation remains a separate, optional path.

The garment label estimate subtracts typical ease from the sample measurements before comparing them with an illustrative size guide. The fit estimate compares the recorded garment dimensions directly with shopper body measurements. Both use transparent, illustrative rules and approximate size conversions in the browser. This is a prototype—not a connected or trained AI model, a brand-specific size chart, or a guarantee of fit. Compare each vintage item's actual measurements. No entered measurements are uploaded.

The app is a single `index.html` file with no build step or app dependencies. GitHub Pages serves the public demo at <https://sumi-cpu.github.io/Fashion-Fit/>.
