# BIT GPA Mate — GitHub Pages PWA

A student-friendly, unofficial GPA calculator for University of Moratuwa CODL BIT students, based on the supplied 2024 curriculum handbook screenshots.

## App features

- Semester GPA (SGPA), Level GPA (LGPA), and overall CGPA
- Level 3 degree class estimate
- Marks mode and grade mode
- Level 3 elective selector
- Credit progress and repeat/pending advice
- Dark mode and automatic local save
- Mobile bottom navigation
- Installable PWA (works like an app)
- Offline support after the first successful load
- GitHub Pages auto-deployment workflow

## Test locally

Opening `index.html` directly is enough for the calculator, but PWA/offline features require a local web server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deploy

Read **DEPLOY-GITHUB-TANGLISH.md**. The included workflow deploys automatically whenever code is pushed to `main` or `master`.

## Important

This is an unofficial planning tool. Always verify academic results and regulations using the latest official University of Moratuwa/CODL records.
