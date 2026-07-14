# BIT GPA Mate — Signed Release Build Guide

## 1. Keystore create pannunga

Windows PowerShell / Command Prompt-la Java `keytool` use pannunga:

```powershell
keytool -genkeypair -v -keystore bit-gpa-mate-release.jks -keyalg RSA -keysize 2048 -validity 10000 -alias bitgpamate
```

Strong password use pannunga. Keystore password, key password, alias ellam safe-ah note pannunga.

## 2. Keystore backup

`bit-gpa-mate-release.jks` file-ah GitHub repository-kulla upload panna koodathu.
Two secure backup copies vainga: encrypted cloud storage + external drive.

## 3. Keystore-ah Base64 text-ah convert pannunga

PowerShell:

```powershell
[Convert]::ToBase64String([IO.File]::ReadAllBytes("bit-gpa-mate-release.jks")) | Set-Content -NoNewline keystore-base64.txt
```

`keystore-base64.txt` open panni full text copy pannunga.

## 4. GitHub Secrets add pannunga

Repository → Settings → Secrets and variables → Actions → New repository secret

Create these four secrets:

- `ANDROID_KEYSTORE_BASE64` = keystore-base64.txt full content
- `ANDROID_KEYSTORE_PASSWORD` = keystore password
- `ANDROID_KEY_ALIAS` = `bitgpamate`
- `ANDROID_KEY_PASSWORD` = key password

## 5. Files push pannunga

This project files-ah existing repo-la replace panni commit/push pannunga.

Commit message:

```text
Add signed Android release build
```

## 6. Build run pannunga

GitHub → Actions → Build Signed Android Release → Run workflow

Green tick vandha workflow page bottom-la:

```text
Artifacts → BIT-GPA-Mate-Signed-Release
```

Artifact ZIP-kulla:

- `BIT-GPA-Mate-v1.0.0.apk` — direct install/share
- `BIT-GPA-Mate-v1.0.0.aab` — Google Play upload
- `SHA256SUMS.txt` — integrity hashes

## 7. Every update-ku version increase pannunga

`android/app/build.gradle`:

```gradle
versionCode 2
versionName '1.0.1'
```

Every public update-ku `versionCode` increase pannanum. Same keystore use pannanum.
