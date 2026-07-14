# BIT GPA Mate — Premium UI v5

A polished, installable GPA and qualification progress tracker for University of Moratuwa BIT students following the 2024 curriculum.

## Highlights

- Premium responsive dashboard for desktop, tablet, and mobile
- Level 1 LGPA and **Diploma** progress
- Level 2 LGPA and **Higher Diploma** progress
- Level 3 LGPA and **BIT Degree** progress
- Semester SGPA, overall CGPA, credits, and provisional Level 3 degree class
- Grade or percentage-marks input
- Level 3 elective selector: choose 4 modules / 12 credits
- ITE 2913 compulsory NGPA completion tracker
- Repeat, incomplete, absent, and pending guidance
- Automatic local saving, dark mode, print/PDF, offline PWA, and install support
- Cache-busted v5 assets so GitHub Pages updates appear correctly

## Developer

**Naleer Khan**  
BSc (Hons) IT · UOM  
Trainee Software Engineer

## Official-rule disclaimer

This is an unofficial planning tool. The calculator checks the handbook credit and minimum LGPA conditions, but official awards also depend on Faculty requirements, registration conditions, time limits, and Board of Examiners decisions.

## Run locally

Open `index.html`, or run a local server for complete PWA behaviour:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deploy to GitHub Pages

1. Copy every file and folder into the repository root.
2. Commit and push to `main`.
3. Open **Repository → Settings → Pages**.
4. Select **GitHub Actions** as the source.
5. Re-run the deployment workflow from the **Actions** tab when required.

Typical live URL:

```text
https://YOUR-USERNAME.github.io/bit-gpa-mate/
```

After deploying this version, use `Ctrl + Shift + R` once. The new service worker will remove older app caches automatically.
