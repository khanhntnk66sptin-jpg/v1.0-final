document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menuToggle");
  const navMenu = document.getElementById("navMenu");
  if (menuToggle && navMenu) {
    menuToggle.addEventListener("click", function () {
      const opened = navMenu.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", String(opened));
      menuToggle.innerHTML = opened ? '<i class="bi bi-x-lg"></i>' : '<i class="bi bi-list"></i>';
    });
    navMenu.querySelectorAll("a").forEach(a => a.addEventListener("click", () => navMenu.classList.remove("is-open")));
  }

  const reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); }
    }), { threshold: 0.12 });
    reveals.forEach(el => observer.observe(el));
  } else reveals.forEach(el => el.classList.add("is-visible"));

  const topBtn = document.getElementById("backToTop");
  if (topBtn) {
    window.addEventListener("scroll", () => topBtn.classList.toggle("show", window.scrollY > 350));
    topBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  const list = document.getElementById("questionList");
  if (list) {
    const search = document.getElementById("searchQuestions"), subject = document.getElementById("filterSubject"),
      grade = document.getElementById("filterGrade"), count = document.getElementById("resultCount");
    function render() {
      const key = search.value.trim().toLowerCase();
      const rows = questionBank.filter(q => (q.question + " " + q.topic + " " + q.subject).toLowerCase().includes(key)
        && (!subject.value || q.subject === subject.value) && (!grade.value || q.grade === grade.value));
      count.textContent = rows.length + " câu hỏi";
      list.innerHTML = rows.length ? "" : '<div class="empty-state"><i class="bi bi-search"></i><h3>Chưa tìm thấy câu hỏi phù hợp</h3><p>Hãy thử từ khóa hoặc tiêu chí lọc khác.</p></div>';
      rows.forEach((q, i) => {
        const card = document.createElement("article"); card.className = "question-card";
        card.innerHTML = '<div class="question-number">' + String(i + 1).padStart(2, "0") + '</div><div class="question-body"><div class="question-meta"><span>' + esc(q.subject) + '</span><span>Lớp ' + esc(q.grade) + '</span><span>' + esc(q.topic) + '</span></div><h3>' + esc(q.question) + '</h3><details><summary>Xem lựa chọn và đáp án</summary><ol class="options-list">' + q.options.map((o, j) => '<li class="' + (j === q.answer ? 'correct-option' : '') + '">' + esc(o) + (j === q.answer ? ' <b>(Đáp án)</b>' : '') + '</li>').join("") + '</ol></details></div>';
        list.appendChild(card);
      });
    }
    [search, subject, grade].forEach(el => { el.addEventListener("input", render); el.addEventListener("change", render); }); render();
  }

  const form = document.getElementById("generatorForm");
  if (form) {
    const subject = document.getElementById("subject"), grade = document.getElementById("grade"),
      topic = document.getElementById("topic"), count = document.getElementById("questionCount"),
      answers = document.getElementById("showAnswers"), empty = document.getElementById("previewEmpty"),
      output = document.getElementById("worksheetOutput");
    function topics() {
      const prev = topic.value;
      const values = [...new Set(questionBank.filter(q => (!subject.value || q.subject === subject.value) && (!grade.value || q.grade === grade.value)).map(q => q.topic))];
      topic.innerHTML = '<option value="">Tất cả chủ đề</option>' + values.map(t => '<option value="' + esc(t) + '">' + esc(t) + '</option>').join("");
      if (values.includes(prev)) topic.value = prev;
    }
    subject.addEventListener("change", topics); grade.addEventListener("change", topics); topics();
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (!subject.value || !grade.value) { alert("Vui lòng chọn môn học và khối lớp."); return; }
      let pool = questionBank.filter(q => q.subject === subject.value && q.grade === grade.value && (!topic.value || q.topic === topic.value));
      if (!pool.length) { empty.hidden = true; output.innerHTML = '<div class="empty-state"><h3>Chưa có câu hỏi phù hợp</h3><p>Thử chọn chủ đề khác hoặc bổ sung dữ liệu trong js/data.js.</p></div>'; return; }
      pool = shuffle(pool).slice(0, Math.min(Number(count.value), pool.length)); empty.hidden = true;
      output.innerHTML = '<div class="worksheet-head"><span class="worksheet-label">EDUSHEET · PHIẾU HỌC TẬP</span><h2>PHIẾU BÀI TẬP / ÔN TẬP</h2><p><b>Môn học:</b> ' + esc(subject.value) + ' | <b>Lớp:</b> ' + esc(grade.value) + '</p>' + (topic.value ? '<p><b>Chủ đề:</b> ' + esc(topic.value) + '</p>' : '') + '<div class="student-line">Họ và tên: .................................................... &nbsp; Lớp: ............</div></div><div class="worksheet-questions">' + pool.map((q, i) => '<article class="worksheet-question"><p><b>Câu ' + (i + 1) + '.</b> ' + esc(q.question) + '</p><div class="worksheet-options">' + q.options.map((o, j) => '<div>' + String.fromCharCode(65 + j) + '. ' + esc(o) + '</div>').join("") + '</div>' + (answers.checked ? '<p class="answer-line"><i class="bi bi-check-circle-fill"></i> Đáp án: ' + String.fromCharCode(65 + q.answer) + '</p>' : '') + '</article>').join("") + '</div><div class="worksheet-actions no-print"><button type="button" class="btn btn-primary" id="printWorksheet"><i class="bi bi-printer"></i> In phiếu</button><button type="button" class="btn btn-outline" id="regenerateWorksheet"><i class="bi bi-arrow-repeat"></i> Tạo phiếu khác</button></div><div class="worksheet-signature">Chúc các em làm bài tốt!</div>';
      document.getElementById("printWorksheet").addEventListener("click", () => window.print());
      document.getElementById("regenerateWorksheet").addEventListener("click", () => form.requestSubmit());
    });
  }

  const contact = document.getElementById("contactForm");
  if (contact) contact.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("name").value.trim(), email = document.getElementById("email").value.trim(),
      message = document.getElementById("message").value.trim(), output = document.getElementById("formMessage");
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!name) return msg(output, "Vui lòng nhập họ và tên.", false);
    if (!email) return msg(output, "Vui lòng nhập email.", false);
    if (!emailPattern.test(email)) return msg(output, "Email chưa đúng định dạng. Vui lòng kiểm tra lại.", false);
    if (!message) return msg(output, "Vui lòng nhập nội dung đóng góp.", false);
    msg(output, "Thông tin đã được kiểm tra thành công! Đây là bản demo nên dữ liệu chưa được gửi đến máy chủ.", true); contact.reset();
  });
});
function esc(s) { return String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c])); }
function shuffle(a) { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { let j = Math.floor(Math.random() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; } return a; }
function msg(el, text, ok) { el.textContent = text; el.className = "form-message " + (ok ? "success" : "error"); }

document.addEventListener("DOMContentLoaded", function () {
  const themeSelect = document.getElementById("themeSelect");

  if (!themeSelect) return;

  const savedTheme = localStorage.getItem("edusheet-theme");
  const validThemes = ["light", "dark", "auto"];

  const initialTheme = validThemes.includes(savedTheme)
    ? savedTheme
    : "auto";

  function applyTheme(theme) {
    const systemPrefersDark =
      window.matchMedia("(prefers-color-scheme: dark)").matches;

    const actualTheme =
      theme === "auto"
        ? (systemPrefersDark ? "dark" : "light")
        : theme;

    document.documentElement.setAttribute(
      "data-theme",
      actualTheme
    );

    document.documentElement.setAttribute(
      "data-bs-theme",
      actualTheme
    );

    themeSelect.value = theme;
  }

  applyTheme(initialTheme);

  themeSelect.addEventListener("change", function () {
    const selectedTheme = themeSelect.value;

    localStorage.setItem("edukho-theme", selectedTheme);
    applyTheme(selectedTheme);
  });

  const systemTheme = window.matchMedia(
    "(prefers-color-scheme: dark)"
  );

  function handleSystemThemeChange() {
    const currentTheme =
      localStorage.getItem("edukho-theme") || "auto";

    if (currentTheme === "auto") {
      applyTheme("auto");
    }
  }

  if (systemTheme.addEventListener) {
    systemTheme.addEventListener(
      "change",
      handleSystemThemeChange
    );
  } else {
    systemTheme.addListener(handleSystemThemeChange);
  }
});

const translations = {
  vi: {
    home: "Trang chủ",
    categories: "Kho bài tập",
    generator: "Tạo phiếu",
    faq: "Hướng dẫn",
    contact: "Liên hệ",
    start: "Bắt đầu ngay",
    language: "Chọn ngôn ngữ"
  },

  en: {
    home: "Home",
    categories: "Exercise Library",
    generator: "Create Worksheet",
    faq: "Guide",
    contact: "Contact",
    start: "Get Started",
    language: "Choose language"
  }
};

const savedLanguage = localStorage.getItem("edusheet-language") || "vi";

function changeLanguage(language) {
  const dictionary = translations[language];

  if (!dictionary) return;

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const key = element.dataset.i18n;

    if (dictionary[key] !== undefined) {
      element.textContent = dictionary[key];
    }
  });

  document.documentElement.lang = language;

  localStorage.setItem("edusheet-language", language);

  const selector = document.getElementById("languageSelect");

  if (selector) {
    selector.value = language;
  }
}

const languageSelector = document.getElementById("languageSelect");

if (languageSelector) {
  languageSelector.addEventListener("change", function () {
    changeLanguage(this.value);
  });
}

changeLanguage(savedLanguage);
