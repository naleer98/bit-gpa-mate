# BIT GPA Mate — Final Update

A student-friendly, installable GPA and qualification progress tracker for the University of Moratuwa BIT 2024 curriculum.

## Main features

- Level 1 LGPA and **Diploma** progress
- Level 2 LGPA and **Higher Diploma** progress
- Level 3 LGPA and **BIT Degree** progress
- Semester SGPA, overall CGPA, earned credits, and Level 3 degree class
- Grade or marks input modes
- Level 3 elective selector (choose 4 / 12 credits)
- ITE 2913 NGPA completion tracker
- Repeat / incomplete / absent guidance
- Automatic browser saving, dark mode, offline PWA, print / PDF report
- Developer credit: **Naleer Khan — BSc (Hons) IT, UOM · Trainee Software Engineer**

## Official-rule disclaimer

This is an unofficial planning tool. The calculator checks the handbook credit and minimum LGPA conditions, but official awards also depend on Faculty requirements, registration conditions, time limits, and Board of Examiners decisions.

## Run locally

Open `index.html` in a browser. For full PWA testing, use a local server:

```bash
python -m http.server 5500
```

Then open `http://localhost:5500`.

## Deploy to GitHub Pages

1. Put all project files in the repository root.
2. Commit and push to `main`.
3. Open **Repository → Settings → Pages**.
4. Set **Source** to **GitHub Actions**.
5. Open the **Actions** tab and run/re-run the deployment workflow.

The live URL will usually be:

```text
https://YOUR-USERNAME.github.io/bit-gpa-mate/
```
