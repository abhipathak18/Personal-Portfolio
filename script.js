// =========================================================
// Personal Portfolio — script.js
// Uses getElementById(), querySelector(), addEventListener()
// =========================================================

document.addEventListener('DOMContentLoaded', () => {

  /* ---------- Footer year ---------- */
  document.getElementById('year').textContent = new Date().getFullYear();

  /* ---------- Hire Me button (alert) ---------- */
  const hireMeBtn = document.getElementById('hireMeBtn');
  hireMeBtn.addEventListener('click', () => {
    alert("Thanks for your interest! Reach out at abhi.pathak@example.com and let's talk.");
  });

  /* ---------- Show / Hide "More About Me" ---------- */
  const moreAboutBtn = document.getElementById('moreAboutBtn');
  const moreAboutText = document.getElementById('moreAboutText');
  moreAboutBtn.addEventListener('click', () => {
    const isHidden = moreAboutText.classList.contains('hidden');
    moreAboutText.classList.toggle('hidden');
    moreAboutBtn.textContent = isHidden ? 'Show less ↑' : 'Read more about me ↓';
    moreAboutBtn.setAttribute('aria-expanded', String(isHidden));
  });

  /* ---------- Contact form validation ---------- */
  const submitBtn = document.getElementById('submitBtn');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const formStatus = document.getElementById('formStatus');

  function setError(input, errorEl, message) {
    if (message) {
      input.classList.add('invalid');
      errorEl.textContent = message;
      return false;
    } else {
      input.classList.remove('invalid');
      errorEl.textContent = '';
      return true;
    }
  }

  function validateForm() {
    let valid = true;

    const nameVal = nameInput.value.trim();
    const nameOk = setError(
      nameInput,
      document.getElementById('nameError'),
      nameVal.length < 2 ? 'Please enter your name.' : ''
    );
    valid = valid && nameOk;

    const emailVal = emailInput.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const emailOk = setError(
      emailInput,
      document.getElementById('emailError'),
      !emailPattern.test(emailVal) ? 'Please enter a valid email address.' : ''
    );
    valid = valid && emailOk;

    const messageVal = messageInput.value.trim();
    const messageOk = setError(
      messageInput,
      document.getElementById('messageError'),
      messageVal.length < 10 ? 'Message should be at least 10 characters.' : ''
    );
    valid = valid && messageOk;

    return valid;
  }

  submitBtn.addEventListener('click', () => {
    formStatus.classList.add('hidden');

    if (validateForm()) {
      formStatus.textContent = 'Message sent — thanks! I\'ll reply within a couple of days.';
      formStatus.classList.remove('hidden');
      nameInput.value = '';
      emailInput.value = '';
      messageInput.value = '';
    }
  });

  // Clear individual field errors as the person types
  [nameInput, emailInput, messageInput].forEach((input) => {
    input.addEventListener('input', () => {
      input.classList.remove('invalid');
    });
  });

  /* ---------- Smooth scrolling navigation ---------- */
  document.querySelectorAll('a[href^="#"]').forEach((link) => {
    link.addEventListener('click', (e) => {
      const targetId = link.getAttribute('href');
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        // Close mobile nav after navigating
        const nav = document.getElementById('siteNav');
        if (nav.classList.contains('open')) {
          nav.classList.remove('open');
          navToggle.setAttribute('aria-expanded', 'false');
        }
      }
    });
  });

  /* ---------- Scroll-to-top button ---------- */
  const scrollTopBtn = document.getElementById('scrollTopBtn');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      scrollTopBtn.classList.add('visible');
    } else {
      scrollTopBtn.classList.remove('visible');
    }
  });
  scrollTopBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });

  /* ---------- Hamburger menu (mobile nav) ---------- */
  const navToggle = document.getElementById('navToggle');
  const siteNav = document.getElementById('siteNav');
  navToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
  });

  /* ---------- Dark / Light mode toggle (bonus) ---------- */
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const root = document.documentElement;

  function applyTheme(theme) {
    root.setAttribute('data-theme', theme);
    themeIcon.textContent = theme === 'light' ? '☀' : '☾';
  }

  // In-memory only (no localStorage per artifact/browser-storage rules) —
  // defaults to dark on load.
  let currentTheme = 'dark';
  applyTheme(currentTheme);

  themeToggle.addEventListener('click', () => {
    currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(currentTheme);
  });

  /* ---------- Animated skill bars (bonus) ---------- */
  const skillFills = document.querySelectorAll('.skill-fill');

  const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const fillEl = entry.target;
        const targetWidth = fillEl.getAttribute('data-fill');
        fillEl.style.width = targetWidth + '%';
        skillObserver.unobserve(fillEl);
      }
    });
  }, { threshold: 0.4 });

  skillFills.forEach((fill) => skillObserver.observe(fill));

});