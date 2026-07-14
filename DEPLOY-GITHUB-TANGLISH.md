# GitHub-la Deploy செய்வது — Easy Tanglish Guide

இந்த folder already **GitHub Pages ready**. Build command / npm install எதுவும் தேவையில்லை.

## Method 1 — GitHub website மூலம் upload

1. GitHub open செய்து **New repository** click செய்யுங்கள்.
2. Repository name: `bit-gpa-mate` மாதிரி கொடுக்கலாம்.
3. Repository-ஐ **Public** ஆக create செய்யுங்கள்.
4. **Add file → Upload files** open செய்யுங்கள்.
5. இந்த project folder உள்ளே இருக்கும் எல்லா files/folders-ஐ upload செய்யுங்கள்.
   - `.github` hidden folder-மும் upload ஆக வேண்டும்.
   - `index.html` repository root-ல் இருக்க வேண்டும்.
6. **Commit changes** click செய்யுங்கள்.
7. Repository-ல் **Settings → Pages** open செய்யுங்கள்.
8. **Build and deployment → Source** பகுதியில் **GitHub Actions** select செய்யுங்கள்.
9. **Actions** tab open செய்து deployment complete ஆகும் வரை wait செய்யுங்கள்.
10. Green tick வந்ததும் **Settings → Pages**-ல் live website link கிடைக்கும்.

Usually link format:

```text
https://YOUR-USERNAME.github.io/bit-gpa-mate/
```

## Method 2 — VS Code / Git commands

Project folder terminal-ல்:

```bash
git init
git add .
git commit -m "Initial BIT GPA Mate app"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/bit-gpa-mate.git
git push -u origin main
```

அதற்குப் பிறகு GitHub repository-ல் **Settings → Pages → Source → GitHub Actions** select செய்யுங்கள்.

## App install செய்வது

### Android / Desktop Chrome அல்லது Edge

- Live website open செய்யுங்கள்.
- மேலே வரும் **Install App** button click செய்யுங்கள்.
- Button வரவில்லை என்றால் browser menu → **Install app / Add to Home screen**.

### iPhone / iPad

- Safari-ல் website open செய்யுங்கள்.
- Share icon tap செய்யுங்கள்.
- **Add to Home Screen** select செய்யுங்கள்.

## Update செய்வது

Files edit செய்து GitHub-க்கு push/commit செய்தால் workflow automatic-a latest version deploy செய்யும்.

## Common problems

### 404 வருகிறது

- `index.html` repository root-ல் இருக்கிறதா check செய்யுங்கள்.
- Settings → Pages source **GitHub Actions** ஆக இருக்கிறதா check செய்யுங்கள்.
- Actions tab-ல் red error இருக்கிறதா பாருங்கள்.

### Logo/CSS load ஆகவில்லை

இந்த project relative paths use செய்கிறது. Folder structure மாற்றாமல் upload செய்யுங்கள்.

### `.github` folder upload ஆகவில்லை

Windows File Explorer hidden files show செய்யாமல் இருக்கலாம். ZIP extract செய்த பிறகு VS Code மூலம் முழு folder-ஐ GitHub-க்கு push செய்வது easiest.
