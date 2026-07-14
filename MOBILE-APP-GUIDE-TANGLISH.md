# BIT GPA Mate — Android Mobile App Guide

இந்த final project-ல் website/PWA உடன் ஒரு real Android app project-மும் சேர்க்கப்பட்டுள்ளது.

## Android app features

- App name: BIT GPA Mate
- Package ID: `com.naleerkhan.bitgpamate`
- Offline embedded app — internet தேவையில்லை
- Native mobile splash screen
- Splash text:
  - Developed by : Naleer Khan BSc (Hons) IT, UOM
  - Trainee Software Engineer
  - Calculate Your GPA Own Way
- GPA data phone local storage-ல் save ஆகும்
- Diploma eligible animation உட்பட எல்லா calculator features-மும் இருக்கும்
- Android Print / Save PDF support

## GitHub மூலம் APK build செய்வது

1. இந்த project files அனைத்தையும் existing `bit-gpa-mate` repository-க்கு paste செய்து Replace செய்யவும்.
2. GitHub Desktop-ல் commit message:
   `Add native Android mobile app`
3. `Commit to main` → `Push origin`.
4. GitHub website → repository → `Actions`.
5. `Build Android APK` workflow open செய்யவும்.
6. Green tick வந்ததும் workflow page கீழே `Artifacts` பகுதியில்:
   `BIT-GPA-Mate-Android-APK`
7. அதை download செய்து ZIP extract செய்யவும்.
8. உள்ளே இருக்கும் `BIT-GPA-Mate-v1.0.apk` file-ஐ Android phone-க்கு அனுப்பி install செய்யவும்.

## Phone installation

Android security warning வந்தால்:

`Settings → Allow from this source → Install`

APK உங்கள் சொந்த GitHub workflow-ல் build ஆகிறது. இது Google Play Store signed release இல்லை; personal/testing installation-க்கு debug-signed APK ஆகும்.

## Android Studio project

Android Studio-ல் direct open செய்ய வேண்டிய folder:

`android`

Web UI update செய்த பிறகு Android assets sync செய்ய Windows PowerShell:

```powershell
powershell -ExecutionPolicy Bypass -File .\android\sync-web.ps1
```
