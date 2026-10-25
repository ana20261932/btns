:root {
  --bg: #030412;
  --bg-strong: #090d1d;
  --panel: rgba(15, 17, 32, 0.72);
  --panel-strong: rgba(22, 27, 46, 0.9);
  --line: rgba(255, 255, 255, 0.1);
  --text: #f5f7ff;
  --muted: #a0a6c0;
  --violet: #5c33cc;
  --lavender: #7a57db;
  --pink: #ea4884;
  --aqua: #33c2cc;
  --mint: #57db96;
  --shadow: rgba(17, 24, 39, 0.65);
}

* {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: Inter, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, rgba(92, 51, 204, 0.2), transparent 30%),
    radial-gradient(circle at bottom right, rgba(234, 72, 132, 0.18), transparent 35%),
    var(--bg);
  color: var(--text);
  overflow-x: hidden;
}

img {
  display: block;
  max-width: 100%;
}

a {
  color: inherit;
  text-decoration: none;
}

button {
  font: inherit;
}

.page-shell {
  position: relative;
  min-height: 100vh;
  isolation: isolate;
}

.container {
  width: min(1180px, calc(100% - 2rem));
  margin: 0 auto;
}

.section-spacing {
  padding: 7rem 0;
}

.bg-glow {
  position: fixed;
  width: 28rem;
  height: 28rem;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.28;
  pointer-events: none;
  z-index: 0;
}

.glow-1 {
  top: 6rem;
  left: -4rem;
  background: rgba(92, 51, 204, 0.8);
}

.glow-2 {
  right: -5rem;
  bottom: 10rem;
  background: rgba(234, 72, 132, 0.6);
}

.bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  background-image: linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px);
  background-size: 68px 68px;
  mask-image: radial-gradient(circle at center, black, transparent 86%);
  pointer-events: none;
}

.site-header,
main,
.site-footer {
  position: relative;
  z-index: 1;
}

.site-header {
  position: sticky;
  top: 0;
  z-index: 50;
  backdrop-filter: blur(14px);
  background: rgba(3, 4, 18, 0.4);
  border-bottom: 1px solid rgba(255, 255, 255, 0.06);
}

.nav-wrap {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 4.8rem;
  gap: 1rem;
}

.brand {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
}

.brand-mark {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-width: 2.7rem;
  height: 2.7rem;
  padding: 0.35rem 0.7rem;
  border: 1px solid rgba(255,255,255,0.15);
  border-radius: 999px;
  background: linear-gradient(135deg, rgba(92, 51, 204, 0.5), rgba(234, 72, 132, 0.45));
  font-size: 0.8rem;
  font-weight: 700;
  letter-spacing: 0.08em;
}

.brand-tag {
  color: var(--muted);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.main-nav {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  color: var(--muted);
}

.main-nav a {
  position: relative;
  font-size: 0.9rem;
  transition: color 0.2s ease;
}

.main-nav a::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -0.45rem;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, var(--violet), var(--pink));
  transform: scaleX(0);
  transform-origin: left center;
  transition: transform 0.2s ease;
}

.main-nav a:hover {
  color: var(--text);
}

.main-nav a:hover::after {
  transform: scaleX(1);
}

.nav-actions {
  display: flex;
  align-items: center;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  min-height: 2.9rem;
  padding: 0.9rem 1.35rem;
  border-radius: 999px;
  font-weight: 600;
  transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
}

.btn:hover {
  transform: translateY(-1px);
}

.btn-primary {
  color: white;
  background: linear-gradient(135deg, var(--violet), var(--pink));
  box-shadow: 0 18px 30px rgba(234, 72, 132, 0.26);
}

.btn-ghost,
.btn-secondary {
  border: 1px solid rgba(255,255,255,0.14);
  background: rgba(255,255,255,0.03);
  color: var(--text);
}

.hero {
  padding-top: 5rem;
}

.hero-inner {
  display: grid;
  grid-template-columns: 1.05fr 0.95fr;
  align-items: center;
  gap: 2rem;
  min-height: calc(100vh - 5rem);
}

.eyebrow {
  margin: 0 0 1rem;
  color: var(--aqua);
  font-size: 0.74rem;
  font-weight: 700;
  letter-spacing: 0.24em;
  text-transform: uppercase;
}

.hero-copy h1,
.section-heading h2 {
  margin: 0;
  line-height: 0.98;
  letter-spacing: -0.06em;
  font-weight: 800;
  color: white;
}

.hero-copy h1 {
  font-size: clamp(3.2rem, 5vw, 6rem);
  max-width: 650px;
}

.gradient-text {
  background: linear-gradient(135deg, #ffffff 0%, #b9b1f3 40%, #ea4884 100%);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
}

.lead {
  max-width: 590px;
  margin-top: 1.3rem;
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.75;
}

.cta-row {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  margin-top: 2rem;
}

.metrics {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin-top: 2.4rem;
  max-width: 650px;
}

.metrics div {
  padding: 1rem 1.1rem;
  border-radius: 1.1rem;
  border: 1px solid var(--line);
  background: rgba(255,255,255,0.02);
}

.metrics strong {
  display: block;
  font-size: 1.5rem;
  margin-bottom: 0.35rem;
}

.metrics span {
  color: var(--muted);
  font-size: 0.82rem;
  line-height: 1.5;
}

.hero-visual {
  position: relative;
  min-height: 38rem;
  display: grid;
  place-items: center;
}

.orb {
  position: absolute;
  border-radius: 50%;
  filter: blur(8px);
}

.orb-large {
  width: 26rem;
  height: 26rem;
  background: radial-gradient(circle, rgba(92,51,204,0.72), rgba(92,51,204,0.08) 48%, transparent 70%);
  transform: translate(-2rem, 1rem);
}

.orb-small {
  width: 16rem;
  height: 16rem;
  right: 2rem;
  bottom: 3rem;
  background: radial-gradient(circle, rgba(234,72,132,0.68), rgba(234,72,132,0.08) 42%, transparent 68%);
}

.glass-panel {
  position: relative;
  background: rgba(15, 17, 32, 0.72);
  border: 1px solid rgba(255,255,255,0.1);
  box-shadow: 0 18px 42px var(--shadow);
  backdrop-filter: blur(18px);
}

.hero-card {
  position: absolute;
  width: min(20rem, 82%);
  padding: 1.2rem 1.2rem 1rem;
  border-radius: 1.2rem;
}

.hero-card-top {
  right: 1rem;
  top: 3rem;
}

.hero-card-bottom {
  left: 0.5rem;
  bottom: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.pill {
  display: inline-block;
  padding: 0.35rem 0.7rem;
  border-radius: 999px;
  background: rgba(51,194,204,0.12);
  border: 1px solid rgba(51,194,204,0.2);
  color: var(--aqua);
  font-size: 0.7rem;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.hero-card h3 {
  margin: 1rem 0 0.75rem;
  font-size: 1.5rem;
  font-weight: 700;
}

.hero-card ul {
  margin: 0;
  padding-left: 1.1rem;
  color: var(--muted);
  line-height: 1.8;
}

.mini-chart {
  display: flex;
  align-items: end;
  gap: 0.35rem;
  width: 8rem;
  height: 4.2rem;
  padding: 0.6rem 0.5rem 0.2rem;
  border-radius: 0.8rem;
  background: rgba(255,255,255,0.02);
}

.mini-chart span {
  flex: 1;
  display: block;
  border-radius: 999px 999px 0 0;
  background: linear-gradient(180deg, rgba(124, 90, 255, 0.9), rgba(234, 72, 132, 0.8));
}

.mini-chart span:nth-child(1) { height: 32%; }
.mini-chart span:nth-child(2) { height: 52%; }
.mini-chart span:nth-child(3) { height: 70%; }
.mini-chart span:nth-child(4) { height: 88%; }
.mini-chart span:nth-child(5) { height: 100%; }

.hero-card-bottom small {
  display: block;
  color: var(--muted);
  margin-bottom: 0.2rem;
}

.hero-card-bottom strong {
  font-size: 1.1rem;
}

.split-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  align-items: center;
}

.section-heading {
  max-width: 620px;
}

.section-heading h2 {
  font-size: clamp(2.5rem, 4vw, 4rem);
}

.about-copy {
  color: var(--muted);
  font-size: 1.06rem;
  line-height: 1.9;
}

.about-copy p {
  margin: 0 0 1.2rem;
}

.centered {
  text-align: center;
  margin: 0 auto 2.5rem;
}

.service-grid,
.projects-grid,
.testimonial-grid {
  display: grid;
  gap: 1.4rem;
}

.service-grid {
  grid-template-columns: repeat(4, minmax(0, 1fr));
}

.service-card {
  padding: 1.5rem 1.3rem;
  border-radius: 1.3rem;
}

.icon-wrap {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem;
  height: 3rem;
  border-radius: 0.8rem;
  background: linear-gradient(135deg, rgba(92,51,204,0.18), rgba(234,72,132,0.18));
  border: 1px solid rgba(255,255,255,0.08);
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--aqua);
}

.service-card h3 {
  margin: 1.2rem 0 0.75rem;
  font-size: 1.4rem;
}

.service-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

.projects-grid {
  grid-template-columns: repeat(2, minmax(0, 1fr));
}

.project-card {
  overflow: hidden;
  border-radius: 1.4rem;
}

.project-card img {
  width: 100%;
  height: 18rem;
  object-fit: cover;
  border-bottom: 1px solid rgba(255,255,255,0.08);
}

.project-copy {
  padding: 1.2rem 1.2rem 1.5rem;
}

.project-copy span {
  display: inline-block;
  color: var(--aqua);
  font-size: 0.76rem;
  letter-spacing: 0.18em;
  text-transform: uppercase;
}

.project-copy h3 {
  margin: 0.8rem 0 0;
  font-size: 1.4rem;
  line-height: 1.3;
}

.testimonial-grid {
  grid-template-columns: repeat(3, minmax(0, 1fr));
}

.testimonial {
  margin: 0;
  padding: 1.6rem 1.4rem;
  border-radius: 1.3rem;
  color: var(--text);
  line-height: 1.75;
  font-size: 1rem;
}

.testimonial footer {
  margin-top: 1rem;
  color: var(--muted);
  font-size: 0.82rem;
}

.contact-wrap {
  padding-bottom: 5rem;
}

.contact-box {
  display: flex;
  align-items: end;
  justify-content: space-between;
  gap: 2rem;
  padding: 2rem;
  border-radius: 1.6rem;
}

.contact-box h2 {
  margin: 0;
  font-size: clamp(2rem, 3vw, 3rem);
}

.contact-meta {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.6rem;
  color: var(--muted);
}

.site-footer {
  padding-bottom: 2.4rem;
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(255,255,255,0.08);
  color: var(--muted);
}

.menu-toggle {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 0.3rem;
  width: 2.7rem;
  height: 2.7rem;
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 0.75rem;
  background: rgba(255,255,255,0.02);
  cursor: pointer;
}

.menu-toggle span {
  display: block;
  width: 1.2rem;
  height: 2px;
  margin: 0 auto;
  background: white;
  border-radius: 99px;
}

.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}

.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 980px) {
  .hero-inner,
  .split-layout,
  .service-grid,
  .testimonial-grid,
  .contact-box {
    grid-template-columns: 1fr;
    display: grid;
  }

  .service-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .projects-grid {
    grid-template-columns: 1fr;
  }

  .contact-box {
    align-items: flex-start;
  }

  .contact-meta {
    align-items: flex-start;
  }
}

@media (max-width: 760px) {
  .main-nav,
  .nav-actions {
    display: none;
  }

  .menu-toggle {
    display: flex;
  }

  .site-header.open .main-nav {
    display: flex;
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: calc(100% + 0.5rem);
    flex-direction: column;
    align-items: flex-start;
    padding: 1rem 1.1rem;
    border: 1px solid var(--line);
    border-radius: 1rem;
    background: rgba(10, 12, 20, 0.96);
    box-shadow: 0 18px 24px rgba(0,0,0,0.28);
  }

  .site-header.open .nav-actions {
    display: flex;
    position: absolute;
    left: 1rem;
    right: 1rem;
    top: calc(100% + 16.1rem);
  }

  .service-grid {
    grid-template-columns: 1fr;
  }

  .metrics {
    grid-template-columns: 1fr;
  }

  .hero-copy h1 {
    font-size: clamp(2.8rem, 16vw, 4.2rem);
  }

  .hero-visual {
    min-height: 30rem;
  }

  .hero-card {
    width: min(18rem, 84%);
  }

  .brand-tag {
    display: none;
  }

  .footer-inner {
    flex-direction: column;
    text-align: center;
  }
}
