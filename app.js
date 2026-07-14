"use strict";

const STORAGE_KEY = "bit-gpa-mate-state-v1";

const GRADE_SCALE = [
  { marks: "85 and above", grade: "A+", gp: 4.0, meaning: "Excellent", earnsCredit: true, countsInGpa: true },
  { marks: "75–84", grade: "A", gp: 4.0, meaning: "Excellent", earnsCredit: true, countsInGpa: true },
  { marks: "70–74", grade: "A-", gp: 3.7, meaning: "Excellent", earnsCredit: true, countsInGpa: true },
  { marks: "65–69", grade: "B+", gp: 3.3, meaning: "Good", earnsCredit: true, countsInGpa: true },
  { marks: "60–64", grade: "B", gp: 3.0, meaning: "Good", earnsCredit: true, countsInGpa: true },
  { marks: "55–59", grade: "B-", gp: 2.7, meaning: "Good", earnsCredit: true, countsInGpa: true },
  { marks: "50–54", grade: "C+", gp: 2.3, meaning: "Pass", earnsCredit: true, countsInGpa: true },
  { marks: "45–49", grade: "C", gp: 2.0, meaning: "Pass", earnsCredit: true, countsInGpa: true },
  { marks: "40–44", grade: "C-", gp: 1.7, meaning: "Weak Pass", earnsCredit: true, countsInGpa: true },
  { marks: "35–39", grade: "D", gp: 1.0, meaning: "Conditional Pass", earnsCredit: true, countsInGpa: true },
  { marks: "34 and below", grade: "I", gp: 0.0, meaning: "Incomplete", earnsCredit: false, countsInGpa: true },
  { marks: "—", grade: "F", gp: 0.0, meaning: "Fail", earnsCredit: false, countsInGpa: true },
  { marks: "—", grade: "T", gp: null, meaning: "Absent", earnsCredit: false, countsInGpa: false },
  { marks: "—", grade: "X", gp: null, meaning: "Exemption granted", earnsCredit: true, countsInGpa: false }
];

const GRADE_MAP = Object.fromEntries(GRADE_SCALE.map((item) => [item.grade, item]));
const GRADE_OPTIONS = ["", ...GRADE_SCALE.map((item) => item.grade)];

const course = (code, name, credits, level, semester, options = {}) => ({
  id: code.replace(/\s+/g, ""),
  code,
  name,
  credits,
  level,
  semester,
  gpa: options.gpa !== false,
  elective: Boolean(options.elective),
  note: options.note || ""
});

const SEMESTERS = [
  {
    id: "semester1",
    title: "Semester 1",
    level: 1,
    subtitle: "Level 1 · 15 GPA credits",
    courses: [
      course("ITE 1913", "Communication Skills Development", 2, 1, 1),
      course("ITE 1213", "Computer Systems", 2, 1, 1),
      course("ITE 1813", "Mathematics & Statistics for IT", 2, 1, 1),
      course("ITE 1713", "Web Design", 3, 1, 1),
      course("ITE 1123", "Fundamentals of Programming", 3, 1, 1),
      course("ITE 1923", "ICT Skills and Applications", 3, 1, 1)
    ]
  },
  {
    id: "semester2",
    title: "Semester 2",
    level: 1,
    subtitle: "Level 1 · 15 GPA credits",
    courses: [
      course("ITE 1413", "Fundamentals of Databases", 2, 1, 2),
      course("ITE 1933", "Technical Writing", 2, 1, 2),
      course("ITE 1133", "Visual Applications", 3, 1, 2),
      course("ITE 1723", "Web Programming", 3, 1, 2),
      course("ITE 1223", "System & Design Paradigms", 3, 1, 2),
      course("ITE 1943", "ICT Project", 2, 1, 2)
    ]
  },
  {
    id: "semester3",
    title: "Semester 3",
    level: 2,
    subtitle: "Level 2 · 15 GPA credits + 3 NGPA credits",
    courses: [
      course("ITE 2133", "Object Oriented Programming", 3, 2, 3),
      course("ITE 2143", "Data Structures and Algorithms", 2, 2, 3),
      course("ITE 2233", "Operating Systems", 2, 2, 3),
      course("ITE 2823", "Calculus & Statistical Distributions", 2, 2, 3),
      course("ITE 2163", "Software Engineering", 3, 2, 3),
      course("ITE 2153", "Object Oriented Analysis Design", 3, 2, 3),
      course("ITE 2913", "Industry Mentoring Program", 3, 2, 3, { gpa: false, note: "NGPA compulsory" })
    ]
  },
  {
    id: "semester4",
    title: "Semester 4",
    level: 2,
    subtitle: "Level 2 · 15 GPA credits",
    courses: [
      course("ITE 2423", "Database Management Systems", 3, 2, 4),
      course("ITE 2433", "Data Communication & Networking", 2, 2, 4),
      course("ITE 2173", "UI/UX Design", 2, 2, 4),
      course("ITE 2313", "IT Quality Assurance", 2, 2, 4),
      course("ITE 2613", "IT Project Management", 2, 2, 4),
      course("ITE 2953", "Programming Group Project", 4, 2, 4)
    ]
  }
];

const LEVEL3_COMPULSORY = [
  course("ITE 3113", "Discrete Mathematics", 2, 3, "5/6"),
  course("ITE 3123", "Professional Practice", 2, 3, "5/6"),
  course("ITE 3143", "Information Security", 2, 3, "5/6"),
  course("ITE 3153", "Essentials of AI", 2, 3, "5/6"),
  course("ITE 3963", "Project", 10, 3, "5/6", { note: "40% workload in Semester 5 and 60% in Semester 6" })
];

const LEVEL3_ELECTIVES = [
  course("ITE 3213", "Software Engineering in Practice", 3, 3, "5/6", { elective: true }),
  course("ITE 3223", "Secure Software Development", 3, 3, "5/6", { elective: true }),
  course("ITE 3233", "Quality Assurance in Practice", 3, 3, "5/6", { elective: true }),
  course("ITE 3253", "Mobile Application Development", 3, 3, "5/6", { elective: true }),
  course("ITE 3273", "Enterprise Application Development", 3, 3, "5/6", { elective: true }),
  course("ITE 3313", "Data Visualization", 3, 3, "5/6", { elective: true }),
  course("ITE 3323", "Data Infrastructure and Automation", 3, 3, "5/6", { elective: true }),
  course("ITE 3333", "Business Statistics", 3, 3, "5/6", { elective: true }),
  course("ITE 3343", "Data Mining", 3, 3, "5/6", { elective: true }),
  course("ITE 3363", "Business Analytics", 3, 3, "5/6", { elective: true }),
  course("ITE 3413", "Internet/Web Security", 3, 3, "5/6", { elective: true }),
  course("ITE 3423", "Cloud Based Application Development", 3, 3, "5/6", { elective: true }),
  course("ITE 3433", "Web Services", 3, 3, "5/6", { elective: true }),
  course("ITE 3513", "Artificial Neural Networks", 3, 3, "5/6", { elective: true }),
  course("ITE 3523", "Big Data Analytics", 3, 3, "5/6", { elective: true }),
  course("ITE 3533", "Machine Learning", 3, 3, "5/6", { elective: true }),
  course("ITE 3543", "Natural Language Processing", 3, 3, "5/6", { elective: true }),
  course("ITE 3613", "UX Engineering", 3, 3, "5/6", { elective: true }),
  course("ITE 3623", "Interaction Design", 3, 3, "5/6", { elective: true }),
  course("ITE 3633", "Graphic Application Development", 3, 3, "5/6", { elective: true }),
  course("ITE 3653", "Human Computer Interaction", 3, 3, "5/6", { elective: true }),
  course("ITE 3713", "Wireless Communications", 3, 3, "5/6", { elective: true }),
  course("ITE 3723", "Cyber Security", 3, 3, "5/6", { elective: true }),
  course("ITE 3733", "Internet of Things", 3, 3, "5/6", { elective: true }),
  course("ITE 3743", "Network Programming", 3, 3, "5/6", { elective: true }),
  course("ITE 3753", "Cloud Computing", 3, 3, "5/6", { elective: true })
];

const ALL_COURSES = [
  ...SEMESTERS.flatMap((semester) => semester.courses),
  ...LEVEL3_COMPULSORY,
  ...LEVEL3_ELECTIVES
];

const DEFAULT_STATE = {
  inputMode: "grade",
  theme: "light",
  results: {},
  selectedElectives: [],
  ngpaStatus: {}
};

let state = loadState();
let toastTimer;
let deferredInstallPrompt = null;

const elements = {
  navButtons: document.querySelectorAll(".nav-btn"),
  pages: document.querySelectorAll(".page"),
  themeToggle: document.getElementById("themeToggle"),
  inputMode: document.getElementById("inputMode"),
  resetBtn: document.getElementById("resetBtn"),
  printReportBtn: document.getElementById("printReportBtn"),
  semesterCards: document.getElementById("semesterCards"),
  summaryGrid: document.getElementById("summaryGrid"),
  levelOverview: document.getElementById("levelOverview"),
  classTitle: document.getElementById("classTitle"),
  classMessage: document.getElementById("classMessage"),
  repeatAdvice: document.getElementById("repeatAdvice"),
  curriculumContent: document.getElementById("curriculumContent"),
  gradeTableBody: document.getElementById("gradeTableBody"),
  toast: document.getElementById("toast"),
  installAppBtn: document.getElementById("installAppBtn"),
  installHelpDialog: document.getElementById("installHelpDialog"),
  installHelpText: document.getElementById("installHelpText"),
  closeInstallHelp: document.getElementById("closeInstallHelp"),
  installHelpDone: document.getElementById("installHelpDone")
};

function loadState() {
  try {
    const stored = JSON.parse(localStorage.getItem(STORAGE_KEY));
    if (!stored || typeof stored !== "object") return structuredClone(DEFAULT_STATE);

    return {
      ...structuredClone(DEFAULT_STATE),
      ...stored,
      results: stored.results || {},
      selectedElectives: Array.isArray(stored.selectedElectives) ? stored.selectedElectives.slice(0, 4) : [],
      ngpaStatus: stored.ngpaStatus || {}
    };
  } catch (error) {
    console.warn("Could not load saved calculator state.", error);
    return structuredClone(DEFAULT_STATE);
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function showToast(message) {
  clearTimeout(toastTimer);
  elements.toast.textContent = message;
  elements.toast.classList.add("show");
  toastTimer = setTimeout(() => elements.toast.classList.remove("show"), 2400);
}

function switchPage(pageId) {
  elements.navButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.page === pageId);
  });
  elements.pages.forEach((page) => page.classList.toggle("active-page", page.id === pageId));
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function gradeFromMarks(rawValue) {
  if (rawValue === "" || rawValue === null || rawValue === undefined) return "";
  const mark = Number(rawValue);
  if (!Number.isFinite(mark) || mark < 0 || mark > 100) return "";
  if (mark >= 85) return "A+";
  if (mark >= 75) return "A";
  if (mark >= 70) return "A-";
  if (mark >= 65) return "B+";
  if (mark >= 60) return "B";
  if (mark >= 55) return "B-";
  if (mark >= 50) return "C+";
  if (mark >= 45) return "C";
  if (mark >= 40) return "C-";
  if (mark >= 35) return "D";
  return "I";
}

function getResult(courseItem) {
  const stored = state.results[courseItem.id] || {};
  const grade = state.inputMode === "marks" ? gradeFromMarks(stored.marks) : (stored.grade || "");
  return { ...stored, grade };
}

function getActiveLevel3Courses() {
  const selected = new Set(state.selectedElectives);
  return [
    ...LEVEL3_COMPULSORY,
    ...LEVEL3_ELECTIVES.filter((item) => selected.has(item.id))
  ];
}

function getActiveCourses() {
  return [
    ...SEMESTERS.flatMap((semester) => semester.courses),
    ...getActiveLevel3Courses()
  ];
}

function calculateCourses(courses) {
  let attemptedCredits = 0;
  let earnedCredits = 0;
  let qualityPoints = 0;
  let gradedCourses = 0;

  courses.filter((item) => item.gpa).forEach((item) => {
    const { grade } = getResult(item);
    if (!grade || !GRADE_MAP[grade]) return;

    const gradeInfo = GRADE_MAP[grade];
    if (gradeInfo.countsInGpa) {
      attemptedCredits += item.credits;
      qualityPoints += item.credits * gradeInfo.gp;
      gradedCourses += 1;
    }
    if (gradeInfo.earnsCredit) earnedCredits += item.credits;
  });

  return {
    attemptedCredits,
    earnedCredits,
    qualityPoints,
    gradedCourses,
    gpa: attemptedCredits > 0 ? qualityPoints / attemptedCredits : null
  };
}

function calculateAll() {
  const semesterResults = {};
  SEMESTERS.forEach((semester) => {
    semesterResults[semester.id] = calculateCourses(semester.courses);
  });
  semesterResults.level3 = calculateCourses(getActiveLevel3Courses());

  const level1Courses = SEMESTERS.filter((item) => item.level === 1).flatMap((item) => item.courses);
  const level2Courses = SEMESTERS.filter((item) => item.level === 2).flatMap((item) => item.courses);
  const level3Courses = getActiveLevel3Courses();

  return {
    semesters: semesterResults,
    levels: {
      1: calculateCourses(level1Courses),
      2: calculateCourses(level2Courses),
      3: calculateCourses(level3Courses)
    },
    overall: calculateCourses([...level1Courses, ...level2Courses, ...level3Courses])
  };
}

function formatGpa(value) {
  return value === null ? "—" : value.toFixed(2);
}

function degreeClass(level3Gpa) {
  if (level3Gpa === null) return { title: "Not enough Level 3 grades", detail: "Complete Level 3 GPA modules to see your provisional class." };
  if (level3Gpa >= 3.7) return { title: "First Class", detail: "Level 3 LGPA is 3.70 or above." };
  if (level3Gpa >= 3.3) return { title: "Second Class – Upper Division", detail: "Level 3 LGPA is between 3.30 and 3.69." };
  if (level3Gpa >= 3.0) return { title: "Second Class – Lower Division", detail: "Level 3 LGPA is between 3.00 and 3.29." };
  if (level3Gpa >= 2.0) return { title: "Pass", detail: "Level 3 LGPA is between 2.00 and 2.99." };
  return { title: "Below pass classification", detail: "The current Level 3 LGPA is below 2.00." };
}

function courseOutcome(grade) {
  if (!grade) return { text: "Pending", className: "pending" };
  if (grade === "F") return { text: "Repeat", className: "fail" };
  if (grade === "I") return { text: "Incomplete", className: "fail" };
  if (grade === "T") return { text: "Absent", className: "pending" };
  if (grade === "X") return { text: "Exempt", className: "" };
  return { text: "Credit earned", className: "" };
}

function renderGradeInput(courseItem) {
  const stored = state.results[courseItem.id] || {};
  const currentGrade = getResult(courseItem).grade;

  if (!courseItem.gpa) {
    const currentStatus = state.ngpaStatus[courseItem.id] || "";
    return `
      <select class="status-select" data-ngpa-id="${courseItem.id}" aria-label="${courseItem.name} completion status">
        <option value="" ${currentStatus === "" ? "selected" : ""}>Not set</option>
        <option value="completed" ${currentStatus === "completed" ? "selected" : ""}>Completed</option>
        <option value="not-completed" ${currentStatus === "not-completed" ? "selected" : ""}>Not completed</option>
      </select>
    `;
  }

  if (state.inputMode === "marks") {
    return `
      <div class="marks-entry">
        <input
          class="marks-input"
          type="number"
          min="0"
          max="100"
          step="1"
          inputmode="decimal"
          data-marks-id="${courseItem.id}"
          value="${stored.marks ?? ""}"
          placeholder="0–100"
          aria-label="Marks for ${courseItem.name}"
        />
        <span class="grade-result ${["I", "F"].includes(currentGrade) ? "fail" : currentGrade ? "" : "pending"}">${currentGrade || "—"}</span>
      </div>
    `;
  }

  return `
    <select class="grade-select" data-grade-id="${courseItem.id}" aria-label="Grade for ${courseItem.name}">
      ${GRADE_OPTIONS.map((grade) => `<option value="${grade}" ${(stored.grade || "") === grade ? "selected" : ""}>${grade || "Select"}</option>`).join("")}
    </select>
  `;
}

function renderCourseRows(courses) {
  return courses.map((courseItem) => {
    const grade = courseItem.gpa ? getResult(courseItem).grade : "";
    const outcome = courseItem.gpa ? courseOutcome(grade) : {
      text: state.ngpaStatus[courseItem.id] === "completed" ? "Completed" : state.ngpaStatus[courseItem.id] === "not-completed" ? "Not completed" : "Pending",
      className: state.ngpaStatus[courseItem.id] === "not-completed" ? "fail" : "pending"
    };

    return `
      <tr>
        <td class="course-code">${courseItem.code}</td>
        <td class="course-name">
          ${courseItem.name}
          ${courseItem.note ? `<span class="course-meta">${courseItem.note}</span>` : ""}
        </td>
        <td>${courseItem.credits}</td>
        <td>${courseItem.gpa ? renderGradeInput(courseItem) : renderGradeInput(courseItem)}</td>
        <td><span class="grade-result ${outcome.className}">${outcome.text}</span></td>
      </tr>
    `;
  }).join("");
}

function renderElectivePicker() {
  const selectedCount = state.selectedElectives.length;
  return `
    <div class="elective-picker">
      <h4>Select 4 Level 3 electives <span class="elective-count">${selectedCount}/4 selected</span></h4>
      <p>Each elective carries 3 credits. You need 12 elective credits in Level 3.</p>
      <div class="elective-grid">
        ${LEVEL3_ELECTIVES.map((item) => {
          const checked = state.selectedElectives.includes(item.id);
          return `
            <label class="elective-option">
              <input type="checkbox" data-elective-id="${item.id}" ${checked ? "checked" : ""} />
              <span><strong>${item.code}</strong>${item.name}</span>
            </label>
          `;
        }).join("")}
      </div>
    </div>
  `;
}

function semesterCardTemplate(semester, calculation) {
  return `
    <article class="semester-card">
      <div class="semester-header">
        <div>
          <h3>${semester.title}</h3>
          <p>${semester.subtitle}</p>
        </div>
        <div class="sgpa-badge"><span>SGPA</span><strong>${formatGpa(calculation.gpa)}</strong></div>
      </div>
      <div class="table-wrap">
        <table class="course-table">
          <thead><tr><th>Code</th><th>Course module</th><th>Credits</th><th>${state.inputMode === "marks" ? "Marks / Grade" : "Grade"}</th><th>Status</th></tr></thead>
          <tbody>${renderCourseRows(semester.courses)}</tbody>
        </table>
      </div>
    </article>
  `;
}

function renderSemesterCards() {
  const calculations = calculateAll();
  const standardCards = SEMESTERS.map((semester) => semesterCardTemplate(semester, calculations.semesters[semester.id])).join("");
  const level3Courses = getActiveLevel3Courses();

  const level3Card = `
    <article class="semester-card">
      <div class="semester-header">
        <div>
          <h3>Semesters 5 & 6</h3>
          <p>Level 3 · 18 compulsory + 12 elective GPA credits</p>
        </div>
        <div class="sgpa-badge"><span>Level 3 LGPA</span><strong>${formatGpa(calculations.levels[3].gpa)}</strong></div>
      </div>
      ${renderElectivePicker()}
      <div class="table-wrap">
        <table class="course-table">
          <thead><tr><th>Code</th><th>Course module</th><th>Credits</th><th>${state.inputMode === "marks" ? "Marks / Grade" : "Grade"}</th><th>Status</th></tr></thead>
          <tbody>${renderCourseRows(level3Courses)}</tbody>
        </table>
      </div>
    </article>
  `;

  elements.semesterCards.innerHTML = standardCards + level3Card;
}

function renderSummary() {
  const calculations = calculateAll();
  const ngpaCompleted = state.ngpaStatus.ITE2913 === "completed";
  const summaryItems = [
    { label: "Current CGPA", value: formatGpa(calculations.overall.gpa), hint: "All GPA-bearing modules entered" },
    { label: "Earned GPA credits", value: `${calculations.overall.earnedCredits}/90`, hint: "D or above; X treated as fulfilled" },
    { label: "Attempted GPA credits", value: `${calculations.overall.attemptedCredits}/90`, hint: "T and X are excluded from GPA" },
    { label: "NGPA requirement", value: ngpaCompleted ? "Done" : "Pending", hint: "ITE 2913 · 3 NGPA credits" }
  ];

  elements.summaryGrid.innerHTML = summaryItems.map((item) => `
    <article class="summary-card">
      <span class="label">${item.label}</span>
      <span class="value">${item.value}</span>
      <span class="hint">${item.hint}</span>
    </article>
  `).join("");

  elements.levelOverview.innerHTML = [1, 2, 3].map((level) => {
    const result = calculations.levels[level];
    const percentage = Math.min(100, (result.earnedCredits / 30) * 100);
    return `
      <div class="level-row">
        <span class="level-name">Level ${level}</span>
        <div class="progress-track" aria-label="Level ${level} credit progress">
          <div class="progress-fill" style="width:${percentage}%"></div>
        </div>
        <span class="level-stat">${formatGpa(result.gpa)} · ${result.earnedCredits}/30</span>
      </div>
    `;
  }).join("");

  const classResult = degreeClass(calculations.levels[3].gpa);
  const isProvisional = calculations.levels[3].attemptedCredits < 30;
  elements.classTitle.textContent = `${isProvisional && calculations.levels[3].gpa !== null ? "Provisional · " : ""}${classResult.title}`;
  elements.classMessage.textContent = isProvisional && calculations.levels[3].gpa !== null
    ? `${classResult.detail} This is provisional because fewer than 30 Level 3 GPA credits have been entered.`
    : classResult.detail;

  renderRepeatAdvice();
}

function renderRepeatAdvice() {
  const advice = [];
  const activeCourses = getActiveCourses().filter((item) => item.gpa);

  activeCourses.forEach((item) => {
    const grade = getResult(item).grade;
    if (!grade) return;

    if (grade === "F") {
      advice.push({ type: "danger", title: `${item.code} · ${item.name}`, text: "F grade: repeat both Continuous Assessment and the semester examination. Maximum repeat grade is C." });
    } else if (grade === "I") {
      advice.push({ type: "warning", title: `${item.code} · ${item.name}`, text: "I grade: repeat the semester examination only. The improved grade is capped at C." });
    } else if (grade === "T") {
      advice.push({ type: "info", title: `${item.code} · ${item.name}`, text: "T grade: you completed CA but were absent for the final exam. The next exam attempt is treated as a first attempt." });
    } else if (grade === "D" || grade === "C-") {
      advice.push({ type: "info", title: `${item.code} · ${item.name}`, text: `${grade} earns credit. The handbook allows an end-of-semester exam repeat to improve the grade up to C.` });
    }
  });

  if (state.selectedElectives.length < 4) {
    advice.push({ type: "warning", title: "Level 3 electives", text: `Select ${4 - state.selectedElectives.length} more elective${4 - state.selectedElectives.length === 1 ? "" : "s"} to reach the required 12 elective credits.` });
  }

  if (state.ngpaStatus.ITE2913 !== "completed") {
    advice.push({ type: "info", title: "ITE 2913 · Industry Mentoring Program", text: "This 3-credit compulsory NGPA module must be completed, but it does not affect GPA." });
  }

  elements.repeatAdvice.innerHTML = advice.length
    ? advice.map((item) => `<div class="advice-item ${item.type}"><strong>${item.title}</strong><span>${item.text}</span></div>`).join("")
    : `<div class="empty-state">No repeat or pending warnings from the entered results. Nice work 🎉</div>`;
}

function renderCurriculum() {
  const renderCurriculumTable = (courses) => `
    <div class="table-wrap">
      <table class="data-table">
        <thead><tr><th>Code</th><th>Course module</th><th>Type</th><th>Credits</th></tr></thead>
        <tbody>
          ${courses.map((item) => `
            <tr>
              <td class="course-code">${item.code}</td>
              <td>${item.name}${item.note ? `<span class="course-meta">${item.note}</span>` : ""}</td>
              <td>${item.gpa ? (item.elective ? "Elective" : "Compulsory") : "Compulsory NGPA"}</td>
              <td>${item.credits}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;

  const semesterSections = SEMESTERS.map((semester) => `
    <article class="panel curriculum-level">
      <div class="curriculum-heading">
        <div><p class="section-kicker">Level ${semester.level}</p><h3>${semester.title}</h3></div>
        <span class="credit-pill">${semester.subtitle.split("·").pop().trim()}</span>
      </div>
      ${renderCurriculumTable(semester.courses)}
    </article>
  `).join("");

  const level3Section = `
    <article class="panel curriculum-level">
      <div class="curriculum-heading">
        <div><p class="section-kicker">Level 3</p><h3>Compulsory modules</h3></div>
        <span class="credit-pill">18 GPA credits</span>
      </div>
      ${renderCurriculumTable(LEVEL3_COMPULSORY)}
    </article>
    <article class="panel curriculum-level">
      <div class="curriculum-heading">
        <div><p class="section-kicker">Level 3</p><h3>Elective pool</h3></div>
        <span class="credit-pill">Choose 4 · 12 credits</span>
      </div>
      ${renderCurriculumTable(LEVEL3_ELECTIVES)}
    </article>
  `;

  elements.curriculumContent.innerHTML = semesterSections + level3Section;
}

function renderGradeGuide() {
  elements.gradeTableBody.innerHTML = GRADE_SCALE.map((item) => `
    <tr>
      <td>${item.marks}</td>
      <td class="course-code">${item.grade}</td>
      <td>${item.gp === null ? "—" : item.gp.toFixed(2)}</td>
      <td>${item.meaning}</td>
    </tr>
  `).join("");
}

function renderAll() {
  document.documentElement.dataset.theme = state.theme;
  elements.themeToggle.textContent = state.theme === "dark" ? "☀️" : "🌙";
  elements.inputMode.value = state.inputMode;
  renderSemesterCards();
  renderSummary();
}

function updateCourseResult(id, field, value) {
  if (!state.results[id]) state.results[id] = {};
  state.results[id][field] = value;
  saveState();
  renderAll();
}

function handleElectiveChange(checkbox) {
  const id = checkbox.dataset.electiveId;
  if (checkbox.checked) {
    if (state.selectedElectives.length >= 4) {
      checkbox.checked = false;
      showToast("You can select only 4 Level 3 electives (12 credits)." );
      return;
    }
    state.selectedElectives.push(id);
  } else {
    state.selectedElectives = state.selectedElectives.filter((item) => item !== id);
  }
  saveState();
  renderAll();
}

function attachEvents() {
  elements.navButtons.forEach((button) => button.addEventListener("click", () => switchPage(button.dataset.page)));

  document.querySelectorAll("[data-jump]").forEach((button) => {
    button.addEventListener("click", () => switchPage(button.dataset.jump));
  });

  elements.themeToggle.addEventListener("click", () => {
    state.theme = state.theme === "dark" ? "light" : "dark";
    saveState();
    renderAll();
  });

  elements.inputMode.addEventListener("change", (event) => {
    state.inputMode = event.target.value;
    saveState();
    renderAll();
    showToast(`Input mode changed to ${state.inputMode}.`);
  });

  elements.resetBtn.addEventListener("click", () => {
    const confirmed = window.confirm("Delete all entered marks, grades, elective choices, and saved progress?");
    if (!confirmed) return;
    const theme = state.theme;
    state = { ...structuredClone(DEFAULT_STATE), theme };
    saveState();
    renderAll();
    showToast("Calculator data has been reset.");
  });

  elements.printReportBtn.addEventListener("click", () => window.print());

  elements.semesterCards.addEventListener("change", (event) => {
    const target = event.target;
    if (target.matches("[data-grade-id]")) {
      updateCourseResult(target.dataset.gradeId, "grade", target.value);
    } else if (target.matches("[data-marks-id]")) {
      let value = target.value;
      if (value !== "") {
        const numeric = Number(value);
        if (numeric > 100) value = "100";
        if (numeric < 0) value = "0";
      }
      updateCourseResult(target.dataset.marksId, "marks", value);
    } else if (target.matches("[data-ngpa-id]")) {
      state.ngpaStatus[target.dataset.ngpaId] = target.value;
      saveState();
      renderAll();
    } else if (target.matches("[data-elective-id]")) {
      handleElectiveChange(target);
    }
  });

}


function isRunningStandalone() {
  return window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone === true;
}

function isIOSDevice() {
  return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
}

function openInstallHelp() {
  if (!elements.installHelpDialog) return;

  if (isIOSDevice()) {
    elements.installHelpText.innerHTML = `
      <p><strong>Safari</strong> browser use செய்யுங்கள்.</p>
      <p>Bottom share icon <strong>↥</strong> tap செய்து, <strong>Add to Home Screen</strong> select செய்யுங்கள்.</p>
    `;
  } else {
    elements.installHelpText.innerHTML = `
      <p>Browser menu open செய்து <strong>Install app</strong> அல்லது <strong>Add to Home screen</strong> select செய்யுங்கள்.</p>
      <p>Install option வரவில்லை என்றால் page-ஐ refresh செய்து மீண்டும் try செய்யுங்கள்.</p>
    `;
  }

  if (typeof elements.installHelpDialog.showModal === "function") {
    elements.installHelpDialog.showModal();
  } else {
    window.alert(elements.installHelpText.textContent.trim());
  }
}

function closeInstallHelp() {
  if (elements.installHelpDialog?.open) elements.installHelpDialog.close();
}

function setupInstallExperience() {
  if (!elements.installAppBtn || isRunningStandalone()) return;

  if (isIOSDevice()) {
    elements.installAppBtn.classList.remove("hidden");
    elements.installAppBtn.textContent = "＋ Add to Home Screen";
  }

  window.addEventListener("beforeinstallprompt", (event) => {
    event.preventDefault();
    deferredInstallPrompt = event;
    elements.installAppBtn.classList.remove("hidden");
    elements.installAppBtn.textContent = "⬇ Install App";
  });

  elements.installAppBtn.addEventListener("click", async () => {
    if (!deferredInstallPrompt) {
      openInstallHelp();
      return;
    }

    deferredInstallPrompt.prompt();
    const choice = await deferredInstallPrompt.userChoice;
    deferredInstallPrompt = null;

    if (choice.outcome === "accepted") {
      showToast("BIT GPA Mate install started 🎉");
      elements.installAppBtn.classList.add("hidden");
    } else {
      showToast("Install cancelled. You can install later.");
    }
  });

  elements.closeInstallHelp?.addEventListener("click", closeInstallHelp);
  elements.installHelpDone?.addEventListener("click", closeInstallHelp);
  elements.installHelpDialog?.addEventListener("click", (event) => {
    if (event.target === elements.installHelpDialog) closeInstallHelp();
  });

  window.addEventListener("appinstalled", () => {
    deferredInstallPrompt = null;
    elements.installAppBtn.classList.add("hidden");
    showToast("BIT GPA Mate installed successfully ✅");
  });
}

function registerServiceWorker() {
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.register("./service-worker.js", { scope: "./" }).catch((error) => {
      console.warn("Service worker registration failed.", error);
    });
  }
}

renderCurriculum();
renderGradeGuide();
renderAll();
attachEvents();
setupInstallExperience();
registerServiceWorker();
