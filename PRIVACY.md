# Fashion Fit privacy notes for store preparation

This document describes the behavior implemented in this repository for publisher review. It is not legal advice or a complete privacy policy. Before release, the publisher must verify these facts against the final signed apps and its own practices, add an appropriate contact method and any required disclosures, and publish a final policy at a stable public URL.

## Photos and measurements

When a user chooses or captures a garment image, Fashion Fit processes it on the device. The app code does not upload or save the image; removing it from the screen clears the app's reference to that image, not the original file in the device's photo library. Do not photograph a person.

Buyer reference measurements and seller-confirmed garment measurements are saved in local app storage on the device. They are separate profiles, are not sent to a Fashion Fit account or synchronized by this app, and can be cleared in the app. Removing the app or clearing its app data may also remove locally saved data. Fit notes are generated on-device for the user to download.

## Network requests

The app requests current weather from Open-Meteo using a fixed Sydney coordinate. It does not request precise device location. The request is optional to the experience: sample weather remains available if the service or network is unavailable. Review Open-Meteo's current terms and privacy information before release and reflect any applicable provider disclosures in the publisher's final policy.

The native projects bundle the app's web files. The existing browser demo is hosted by GitHub Pages, whose own hosting practices apply when users visit that site. This project contains no user account, cross-device sync, analytics SDK, or advertising SDK.

## Device access

The app presents the operating system's camera/photo or file chooser when the user selects an image. iOS includes camera and photo-library purpose strings for those user-initiated flows. The Android project uses the system chooser and does not declare camera or microphone permission. The optional soundtrack is synthesized locally and does not record sound.
