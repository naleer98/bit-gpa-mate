# Changelog

## v6.0 — Flutter-inspired UI final

- Recreated the app shell with a Material/Flutter-inspired top app bar.
- Added a glass-style University of Moratuwa brand card, polished logo treatment, and compact mobile title layout.
- Added a floating rounded mobile navigation bar with a clearer active state.
- Improved elevation, card shapes, touch feedback, spacing, and mobile responsiveness.
- Kept all GPA, qualification, offline, eligibility animation, Android, and signed-release functionality unchanged.
- Android version updated to 1.1.0 (versionCode 2).

# Android APK Build Fix

- Fixed Android 12 splash theme resource compilation.
- Updated APK workflow action versions.
- Added detailed Gradle logging.

# Changelog

## v5.2 — Diploma Eligibility Celebration

- Shows an animated **“Diploma Eligible!”** celebration when the entered Level 1 results satisfy:
  - 30 earned Level 1 GPA credits
  - Minimum Level 1 LGPA of 2.00
- Adds animated gold eligibility badge to the Level 1 qualification card.
- Celebration is shown once while eligible, and becomes available again after eligibility is lost/reset and later regained.
- Keeps the official verification disclaimer because final award eligibility depends on all Faculty and University requirements.
- Updated PWA cache version so GitHub Pages/mobile installations receive the new UI.

# Changelog

## Premium UI v5 — 2026-07-14

- Completely redesigned the dashboard hero and academic journey presentation
- Added a professional header, desktop navigation, and mobile bottom navigation
- Rebuilt Level 1, Level 2, and Level 3 selector cards for clearer spacing and usability
- Improved summary cards, qualification cards, level-progress bars, and degree-class panel
- Improved calculator tables, result fields, status chips, elective selection, and mobile layouts
- Redesigned Curriculum, Grades, and About pages
- Added stronger accessibility states for navigation and level tabs
- Added URL hash page restoration
- Added asset versioning and a network-first service worker strategy for CSS and JavaScript
- Updated PWA cache to `bit-gpa-mate-v5-premium-ui`
- Preserved existing saved grades and calculator data

## Final Level Update — 2026-07-14

- Added level-by-level LGPA calculations and qualification progress
- Added Diploma, Higher Diploma, and BIT Degree checks
- Added minimum LGPA 2.00 checks for every level
- Added Level 2 NGPA and Level 3 elective requirement checks
- Added developer credit for Naleer Khan
