# Personal Portfolio Website

A responsive personal portfolio website built with HTML, CSS, and
JavaScript — no frameworks, no build step. Open `index.html` and it runs.

**Live demo:** SOON
**Repository:** https://github.com/abhipathak18/Personal-Portfolio 

---

## Project Overview

This site showcases my profile, my project, my skills, and how to get in
touch. The design uses a "code editor" direction — file-tab style navigation
(`~/about`, `~/projects`...) and line-numbered section headers — since it's a
developer's portfolio.

## Technologies Used

- **HTML5** — semantic structure (`header`, `main`, `section`, `article`, `footer`)
- **CSS3** — custom properties (design tokens), Flexbox, CSS Grid, media queries
- **JavaScript (vanilla)** — DOM manipulation, form validation, `IntersectionObserver`
- **Google Fonts** — Space Grotesk / JetBrains Mono / Inter

No external JS libraries or CSS frameworks are required.

## Features

- Fully responsive layout (desktop, tablet, mobile) with a hamburger menu below 720px
- Sticky header with smooth-scrolling in-page navigation
- Hero section with a profile card (avatar, role, location, education, availability)
- "Hire me" button with a confirmation alert
- Expandable "Read more about me" section
- Contact form with client-side validation (name, email format, message length)
- Animated, scroll-triggered skill bars
- Scroll-to-top button
- Dark/light theme toggle
- Keyboard-focus styles and `prefers-reduced-motion` support

## About Me

**Abhi Pathak** — Full-Stack Developer, B.Tech Computer Science Engineering
student at GLA University. I'm focused on full-stack development with a
growing interest in applied AI, and I'm currently looking for internships /
full-stack developer roles.

## Featured Project

### AI Meeting Summarizer
A team-built tool that transcribes and summarizes meetings automatically.

- **Transcription:** Whisper
- **Speaker diarization:** Pyannote.audio
- **Summarization:** GPT-4o / Gemini
- **Backend:** FastAPI
- **App:** Flutter / React Native

**Live demo:** https://smart-meeting-analyzer.vercel.app/
**Source:** https://github.com/vaibhavprakash55/Smart-Meeting-Analyzer

## Contact

| | |
|---|---|
| Email | abhipathakorg@gmail.com |
| Phone | +91 9xxxxxxxx9 |
| LinkedIn | https://www.linkedin.com/in/abhi-pathak-1281b1389 |
| GitHub | https://github.com/abhipathak18 |

## Folder Structure

```
Personal-Portfolio/
│
├── index.html          # Page structure and content
├── style.css            # All styling, layout, and media queries
├── script.js             # Interactivity (validation, animations, toggles)
├── README.md
│
├── images/               # project screenshots
│   └── 
│
└── projects/             # Extra project assets, if any
    └── 
```

## Installation / Running Locally

No build tools or dependencies needed.

1. Clone this repository.
   ```bash
   git clone https://github.com/abhipathak18/Personal-Portfolio.git
   cd Personal-Portfolio
   ```
2. Open `index.html` directly in a browser, **or** serve it locally:
   ```bash
   npx serve .
   # or
   python3 -m http.server 8000
   ```
3. Visit `http://localhost:8000` (or double-click `index.html`).

## Screenshots

![Desktop view 1](<images/Screenshot 2026-07-15 002105.png>)
![Desktop view 2](<images/Screenshot 2026-07-15 002122.png>)
![Mobile view 2](<images/Screenshot 2026-07-15 002225.png>)
![Mobile view 2](<images/Screenshot 2026-07-15 002240.png>)


## Future Improvements

- Wire the contact form to a real backend or a service like EmailJS
- Add a resume download button
- Add the GitHub source link for the AI Meeting Summarizer project
- Deploy this portfolio itself to GitHub Pages / Vercel / Netlify and add the live link above
- Add more projects as they're completed

## Author

**Abhi Pathak**
Full-Stack Developer · B.Tech CSE, GLA University
[GitHub](https://github.com/abhipathak18) · [LinkedIn](https://www.linkedin.com/in/abhi-pathak-1281b1389) · abhipathakorg@gmail.com

---

Built as part of a Personal Portfolio Website project assignment (Phases 1–6:
setup, content, JavaScript functionality, responsive testing, code
optimization, and documentation).