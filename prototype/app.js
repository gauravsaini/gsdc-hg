/* PROTOTYPE — Personal room direction. Remove after the winning direction is absorbed into Hugo. */

const avatar = "../site/static/images/avatars/gsdc.jpg";

const commonFooter = `
  <footer class="site-footer personal-footer">
    <span>Made with coffee in Melbourne · © 2026 Gaurav</span>
    <span class="footer-socials">
      <a class="footer-link" href="https://github.com/gauravsaini" target="_blank" rel="noreferrer">GitHub ↗</a>
      <a class="footer-link" href="https://www.linkedin.com/in/gauravsainidotcom/" target="_blank" rel="noreferrer">LinkedIn ↗</a>
      <a class="footer-link" href="https://www.instagram.com/_gauravsaini.com_/" target="_blank" rel="noreferrer">Instagram ↗</a>
    </span>
  </footer>`;

const variants = {
  a: {
    label: "Personal room",
    className: "personal-a",
    template: () => `
      <section class="personal-hero personal-hero-a" id="top">
        <canvas class="hero-canvas" id="heroCanvas" role="img" aria-label="A glowing sun at the centre of a moving planetary system"></canvas>
        <div class="hero-voyager" id="heroVoyager" role="button" tabindex="0" aria-pressed="false" aria-label="Launch the voyager and travel between themes">
          <span class="voyager-trail" aria-hidden="true"></span>
          <span class="voyager-ship" aria-hidden="true"><span class="voyager-nose"></span><span class="voyager-window"><img src="${avatar}" alt="Gaurav Saini in the voyager cockpit"></span><span class="voyager-fin voyager-fin-top"></span><span class="voyager-fin voyager-fin-bottom"></span><span class="voyager-flame"></span></span>
          <span class="voyager-signal" aria-hidden="true">GAURAV / VOYAGER</span>
        </div>
        <span class="hero-art-label">PERSONAL STUDY / NO. 01</span>
        <div class="personal-copy" data-reveal>
          <span class="personal-eyebrow">hello from Melbourne <span>✳</span></span>
          <h1>Hi, I’m <em>Gaurav.</em></h1>
          <p class="personal-lede">I make things with code, ask a lot of questions, and try to keep the internet a little more human.</p>
          <div class="personal-facts"><span>React / AI / Blockchain</span><span>Currently at IAG</span></div>
          <div class="actions"><a class="button primary magnetic" href="https://github.com/gauravsaini" target="_blank" rel="noreferrer">Wander through my GitHub <span>↗</span></a><a class="button quiet" href="#now">See the projects ↓</a></div>
        </div>
        <span class="hand-note note-a">drinks coffee.<br>spits code.</span>
      </section>

      <section class="personal-section personal-projects personal-now" id="now"><div class="project-art" aria-hidden="true"><span>WORK</span><i></i><b>SELECTED / PUBLIC</b></div>
        <div class="personal-section-heading" data-reveal><span class="personal-eyebrow">selected projects</span><h2>A few things I’ve<br><em>made.</em></h2></div>
        <div class="project-list">
          <article class="project-item project-kevin" data-reveal><span class="project-number">01</span><div><span class="project-meta">Browser agent / TypeScript / public repo</span><h3>Kevin <em>⚡</em></h3><p>An on-device browser agent built around WebGPU, Playwright and fast, private decision loops.</p><div class="project-tags"><span>WebGPU</span><span>Playwright</span><span>Local-first</span></div></div><a class="project-open" href="https://github.com/gauravsaini/kevin" target="_blank" rel="noreferrer" aria-label="Open Kevin on GitHub">↗</a></article>
          <article class="project-item project-bitresearch" data-reveal><span class="project-number">02</span><div><span class="project-meta">Autoresearch / Python / Apple Silicon</span><h3>BitResearch MLX</h3><p>A swarm of Macs running autonomous ML research loops across a local network.</p><div class="project-tags"><span>MLX</span><span>mDNS</span><span>WebSockets</span></div></div><a class="project-open" href="https://github.com/gauravsaini/bitresearch-mlx" target="_blank" rel="noreferrer" aria-label="Open BitResearch MLX on GitHub">↗</a></article>
          <article class="project-item project-chronoquant" data-reveal><span class="project-number">03</span><div><span class="project-meta">Research / Python / compression</span><h3>ChronoQuant</h3><p>Compressing the KV cache like a video: anchor frames, residuals and no metadata overhead.</p><div class="project-tags"><span>LLMs</span><span>Quantization</span><span>Research</span></div></div><a class="project-open" href="https://github.com/gauravsaini/chronoquant" target="_blank" rel="noreferrer" aria-label="Open ChronoQuant on GitHub">↗</a></article>
          <article class="project-item project-pager" data-reveal><span class="project-number">04</span><div><span class="project-meta">Agent tooling / Python / public repo</span><h3>pager</h3><p>A tiny communication system for coding agents: less text, same technical intent.</p><div class="project-tags"><span>Skills</span><span>Agents</span><span>~66% fewer tokens</span></div></div><a class="project-open" href="https://github.com/gauravsaini/pager" target="_blank" rel="noreferrer" aria-label="Open pager on GitHub">↗</a></article>
        </div>
      </section>

      <section class="personal-section personal-about" id="about"><div class="about-art" data-reveal aria-hidden="true"><span>G</span><i></i><small>88—∞<br>CURIOUS BY DEFAULT</small></div><div class="about-copy" data-reveal><span class="personal-eyebrow">the longer version</span><p>I’m currently a digital consultant at <a href="https://www.iag.com.au" target="_blank" rel="noreferrer">IAG (Insurance Australia Group)</a>, based in Melbourne. By day I work on complicated things with good people. Outside of that, I’m usually tinkering with an idea, learning something new, or trying to make a blank page less blank.</p><p>Before GSDC, there were chapters at <a href="https://www.pepperstone.com" target="_blank" rel="noreferrer">Pepperstone</a>, <a href="https://www.iress.com.au" target="_blank" rel="noreferrer">IRESS</a> and <a href="https://www.accenture.com" target="_blank" rel="noreferrer">Accenture</a>. The job titles changed. The curiosity stayed.</p></div><div class="about-aside" data-reveal><span class="aside-label">origin / orbit</span><strong class="heritage-mark">127.0.0.1<br>🇮🇳 🇦🇺</strong><span class="aside-label">Currently in</span><strong>Melbourne,<br>Australia</strong></div></section>

      <section class="personal-section personal-links" id="links"><div class="personal-link-card" data-reveal><div class="link-art" aria-hidden="true"><span>✳</span><i></i><b>HELLO<br>FROM<br>THE<br>OTHER<br>SIDE</b></div><span class="personal-eyebrow">the internet bits</span><h2>If you’d like to<br><em>say hello.</em></h2><div class="link-row"><a href="mailto:me@gauravsaini.com">Email me <span>↗</span></a><a href="https://github.com/gauravsaini" target="_blank" rel="noreferrer">See my code <span>↗</span></a><a href="https://www.linkedin.com/in/gauravsainidotcom/" target="_blank" rel="noreferrer">Find me on LinkedIn <span>↗</span></a></div></div></section>${commonFooter}`
  }
};

const root = document.querySelector("#prototype-root");
const island = document.querySelector("#islandToggle");
const islandPanel = document.querySelector("#islandPanel");
const themeToggle = document.querySelector("#themeToggle");
const signalLocalTime = document.querySelector("#signalLocalTime");
const signalOrbit = document.querySelector("#signalOrbit");
let signalPulseTimer = 0;
let lightTheme = false;
let artFrame = 0;
let galaxyScene = { stars: [], planets: [], seed: 0 };
let voyagerRoute = { start: 0, end: 1, curve: .25 };
let traveling = false;
let travelStartedAt = 0;
let travelClock = 0;
let lastFrameAt = 0;
const travelDuration = 2400;
let travelTimer = 0;

function closeIsland() {
  island.setAttribute("aria-expanded", "false");
  islandPanel.setAttribute("aria-hidden", "true");
  islandPanel.classList.remove("is-open");
  island.classList.remove("is-awake");
}

function updateSignalReadout() {
  if (signalLocalTime) {
    signalLocalTime.textContent = new Intl.DateTimeFormat("en-AU", {
      timeZone: "Australia/Melbourne",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false
    }).format(new Date());
  }
  if (signalOrbit) {
    const states = ["STABLE", "CURIOUS", "IN MOTION", "STABLE"];
    signalOrbit.textContent = states[Math.floor(Date.now() / 5000) % states.length];
  }
}

function setTheme(light) {
  lightTheme = light;
  document.body.classList.toggle("theme-light", light);
  if (themeToggle) {
    themeToggle.setAttribute("aria-pressed", String(light));
    themeToggle.setAttribute("aria-label", light ? "Launch into dark theme" : "Launch into light theme");
  }
  const heroVoyager = document.querySelector("#heroVoyager");
  if (heroVoyager) heroVoyager.setAttribute("aria-pressed", String(light));
}

function randomBetween(min, max) {
  return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
  return Math.floor(randomBetween(min, max + 1));
}

function shuffled(values) {
  return [...values].sort(() => Math.random() - .5);
}

function createVoyagerRoute() {
  const start = randomInteger(0, 3);
  let end = randomInteger(0, 3);
  while (end === start) end = randomInteger(0, 3);
  return { start, end, curve: (Math.random() > .5 ? 1 : -1) * randomBetween(.2, .34) };
}

function createGalaxyScene() {
  const planetPalettes = [
    { highlight: "#dedbd2", mid: "#a7a39b", shadow: "#555450", glow: "rgba(178, 174, 163, .16)", ring: "rgba(190, 185, 172, .38)" },
    { highlight: "#ead8b6", mid: "#b99768", shadow: "#6f543b", glow: "rgba(202, 165, 112, .16)", ring: "rgba(202, 175, 127, .34)" },
    { highlight: "#a9cbd3", mid: "#5f8f86", shadow: "#274d58", glow: "rgba(92, 145, 152, .2)", ring: "rgba(133, 178, 181, .34)" },
    { highlight: "#dc9275", mid: "#ae5c47", shadow: "#60352f", glow: "rgba(185, 91, 68, .18)", ring: "rgba(190, 111, 84, .34)" },
    { highlight: "#eee1c6", mid: "#b88d6d", shadow: "#66483e", glow: "rgba(203, 161, 126, .16)", ring: "rgba(216, 182, 149, .34)" },
    { highlight: "#e9d79c", mid: "#b89c63", shadow: "#66533b", glow: "rgba(207, 171, 98, .18)", ring: "rgba(218, 190, 128, .4)" }
  ];
  const orbitCount = randomInteger(5, 8);
  const planetCount = randomInteger(4, Math.min(6, orbitCount));
  const planetOrbitIndexes = [
    ...shuffled(Array.from({ length: orbitCount - 1 }, (_, index) => index))
      .slice(0, planetCount - 1)
      .sort((left, right) => left - right),
    orbitCount - 1
  ];
  const paletteIndexes = [
    ...shuffled([0, 1, 2, 3, 4]).slice(0, planetCount - 1),
    5
  ];

  return {
    seed: Math.random(),
    orbitCount,
    stars: Array.from({ length: 74 }, () => ({
      x: Math.random(),
      y: Math.random(),
      size: randomBetween(.35, 1.8),
      alpha: randomBetween(.18, .7),
      twinkle: randomBetween(.4, 1.7),
      phase: randomBetween(0, Math.PI * 2)
    })),
    planets: paletteIndexes.map((paletteIndex, index) => ({
      ringIndex: planetOrbitIndexes[index] + 1,
      radius: randomBetween(9, 20) * randomBetween(.8, 1.85),
      palette: planetPalettes[paletteIndex],
      phase: paletteIndex === 5
        ? randomBetween(Math.PI * .72, Math.PI * 1.28)
        : randomBetween(0, Math.PI * 2),
      orbitDirection: Math.random() > .5 ? 1 : -1,
      orbitSpeed: randomBetween(.18, .36) + (planetCount - index) * .025,
      ringSpeed: randomBetween(.35, 1.1),
      ring: paletteIndex === 5
    }))
  };
}

function randomizeGalaxy() {
  galaxyScene = createGalaxyScene();
  voyagerRoute = createVoyagerRoute();
}

function getThemeControls() {
  return [themeToggle, document.querySelector("#heroVoyager")].filter(Boolean);
}

function clearLaunchState() {
  getThemeControls().forEach((control) => control.classList.remove("is-launching"));
}

function launchThemeSwitch() {
  const nextTheme = !lightTheme;
  document.body.classList.remove("is-traveling");
  clearLaunchState();
  void document.body.offsetWidth;
  document.body.classList.add("is-traveling");
  getThemeControls().forEach((control) => control.classList.add("is-launching"));
  traveling = true;
  travelStartedAt = performance.now();
  randomizeGalaxy();
  setTheme(nextTheme);
  window.clearTimeout(travelTimer);
  travelTimer = window.setTimeout(() => {
    traveling = false;
    document.body.classList.remove("is-traveling");
    clearLaunchState();
  }, travelDuration);
}

function wireVoyager(voyager) {
  if (!voyager) return;
  voyager.addEventListener("click", launchThemeSwitch);
  voyager.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      launchThemeSwitch();
    }
  });
}

function setVariant(updateUrl = true) {
  const variant = variants.a;
  traveling = false;
  window.clearTimeout(travelTimer);
  clearLaunchState();
  root.innerHTML = variant.template();
  document.body.className = variant.className;
  setTheme(false);
  if (updateUrl) window.history.replaceState({}, "", "?variant=a");
  window.scrollTo({ top: 0, behavior: "instant" });
  closeIsland();
  wireInteractions();
}

island.addEventListener("click", () => {
  const open = island.getAttribute("aria-expanded") === "true";
  island.setAttribute("aria-expanded", String(!open));
  islandPanel.setAttribute("aria-hidden", String(open));
  islandPanel.classList.toggle("is-open", !open);
  island.classList.toggle("is-awake", !open);
  if (!open) {
    updateSignalReadout();
    document.body.classList.remove("signal-pulse");
    void document.body.offsetWidth;
    document.body.classList.add("signal-pulse");
    window.clearTimeout(signalPulseTimer);
    signalPulseTimer = window.setTimeout(() => document.body.classList.remove("signal-pulse"), 1100);
  }
});

if (themeToggle) themeToggle.addEventListener("click", launchThemeSwitch);

document.addEventListener("keydown", (event) => {
  if (["INPUT", "TEXTAREA", "SELECT"].includes(document.activeElement.tagName)) return;
  if (event.key === "Escape") closeIsland();
});

function wireInteractions() {
  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: .12, rootMargin: "0px 0px -7%" });
  document.querySelectorAll("[data-reveal]").forEach((element) => revealObserver.observe(element));

  document.querySelectorAll(".magnetic").forEach((button) => {
    button.addEventListener("pointermove", (event) => {
      const bounds = button.getBoundingClientRect();
      const x = (event.clientX - bounds.left - bounds.width / 2) * .16;
      const y = (event.clientY - bounds.top - bounds.height / 2) * .16;
      button.style.transform = `translate(${x}px, ${y}px)`;
    });
    button.addEventListener("pointerleave", () => { button.style.transform = ""; });
  });

  document.querySelectorAll("[data-tilt]").forEach((card) => {
    card.addEventListener("pointermove", (event) => {
      const bounds = card.getBoundingClientRect();
      const rotateX = ((event.clientY - bounds.top) / bounds.height - .5) * -5;
      const rotateY = ((event.clientX - bounds.left) / bounds.width - .5) * 5;
      card.style.transform = `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    });
    card.addEventListener("pointerleave", () => { card.style.transform = ""; });
  });

  wireVoyager(document.querySelector("#heroVoyager"));
  initHeroCanvas();
}

function getPlanetOpacity(progress) {
  if (!traveling) return 1;
  if (progress < .28) {
    const amount = progress / .28;
    const eased = amount * amount * (3 - 2 * amount);
    return 1 - eased;
  }
  if (progress > .76) {
    const amount = (progress - .76) / .24;
    return amount * amount * (3 - 2 * amount);
  }
  return 0;
}

function getOrbitGeometry(ring, width, height, time) {
  const pulse = Math.sin(time * (.38 + ring * .025) + ring * .8) * .018;
  return {
    radiusX: width * (.14 + ring * .03) * (1 + pulse),
    radiusY: height * (.12 + ring * .018) * (1 + pulse * .72),
    tilt: -.16 + ring * .055
  };
}

function orbitPoint(centerX, centerY, orbit, angle) {
  const localX = Math.cos(angle) * orbit.radiusX;
  const localY = Math.sin(angle) * orbit.radiusY;
  const cosTilt = Math.cos(orbit.tilt);
  const sinTilt = Math.sin(orbit.tilt);
  return {
    x: centerX + localX * cosTilt - localY * sinTilt,
    y: centerY + localX * sinTilt + localY * cosTilt
  };
}

function getVoyagerRoute(width, height) {
  const marginX = Math.max(84, Math.min(width * .08, 150));
  const marginY = Math.max(96, Math.min(height * .12, 150));
  const corners = [
    { x: marginX, y: marginY },
    { x: width - marginX, y: marginY },
    { x: width - marginX, y: height - marginY },
    { x: marginX, y: height - marginY }
  ];
  const start = corners[voyagerRoute.start];
  const end = corners[voyagerRoute.end];
  const midpoint = { x: (start.x + end.x) / 2, y: (start.y + end.y) / 2 };
  const dx = end.x - start.x;
  const dy = end.y - start.y;
  const distance = Math.max(1, Math.hypot(dx, dy));
  const normal = { x: -dy / distance, y: dx / distance };
  const bend = Math.min(width, height) * voyagerRoute.curve;
  const controlOne = {
    x: start.x + (midpoint.x - start.x) * 1.05 + normal.x * bend,
    y: start.y + (midpoint.y - start.y) * 1.05 + normal.y * bend
  };
  const controlTwo = {
    x: end.x + (midpoint.x - end.x) * 1.05 + normal.x * bend,
    y: end.y + (midpoint.y - end.y) * 1.05 + normal.y * bend
  };
  return { start, controlOne, controlTwo, end };
}

function getVoyagerPosition(time, width, height) {
  const route = getVoyagerRoute(width, height);
  const cycle = (time * .075) % 2;
  const progress = cycle <= 1 ? cycle : 2 - cycle;
  const direction = cycle <= 1 ? 1 : -1;
  const inverse = 1 - progress;
  const point = {
    x: inverse ** 3 * route.start.x + 3 * inverse ** 2 * progress * route.controlOne.x + 3 * inverse * progress ** 2 * route.controlTwo.x + progress ** 3 * route.end.x,
    y: inverse ** 3 * route.start.y + 3 * inverse ** 2 * progress * route.controlOne.y + 3 * inverse * progress ** 2 * route.controlTwo.y + progress ** 3 * route.end.y
  };
  const tangent = {
    x: 3 * inverse ** 2 * (route.controlOne.x - route.start.x) + 6 * inverse * progress * (route.controlTwo.x - route.controlOne.x) + 3 * progress ** 2 * (route.end.x - route.controlTwo.x),
    y: 3 * inverse ** 2 * (route.controlOne.y - route.start.y) + 6 * inverse * progress * (route.controlTwo.y - route.controlOne.y) + 3 * progress ** 2 * (route.end.y - route.controlTwo.y)
  };
  return { point, angle: Math.atan2(tangent.y * direction, tangent.x * direction) };
}

function initHeroCanvas() {
  if (artFrame) window.cancelAnimationFrame(artFrame);
  const canvas = document.querySelector("#heroCanvas");
  if (!canvas) return;
  const voyager = document.querySelector("#heroVoyager");
  const context = canvas.getContext("2d");
  lastFrameAt = 0;
  randomizeGalaxy();
  const resize = () => {
    const bounds = canvas.getBoundingClientRect();
    const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
    canvas.width = bounds.width * pixelRatio;
    canvas.height = bounds.height * pixelRatio;
    context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  };
  resize();
  window.addEventListener("resize", resize, { passive: true });

  const draw = (timestamp) => {
    const bounds = canvas.getBoundingClientRect();
    const width = bounds.width;
    const height = bounds.height;
    const frameSeconds = lastFrameAt ? Math.min((timestamp - lastFrameAt) / 1000, .05) : 0;
    lastFrameAt = timestamp;
    const travelProgress = traveling ? Math.min((timestamp - travelStartedAt) / travelDuration, 1) : 0;
    const speedEnvelope = traveling ? Math.sin(Math.PI * travelProgress) : 0;
    const planetOpacity = getPlanetOpacity(travelProgress);
    const travelSpeed = 1 + speedEnvelope * 7;
    travelClock += frameSeconds * .22 * travelSpeed;
    const time = travelClock;
    const centerRatio = width < 800 ? .5 : .8;
    const centerX = width * (centerRatio + (galaxyScene.seed - .5) * .045);
    const centerY = height * (.47 + (galaxyScene.seed - .5) * .04);
    if (voyager) {
      const voyagerPosition = getVoyagerPosition(time, width, height);
      const voyagerWidth = voyager.offsetWidth || 150;
      const voyagerHeight = voyager.offsetHeight || 82;
      voyager.style.setProperty("--voyager-angle", `${voyagerPosition.angle}rad`);
      voyager.style.transform = `translate3d(${voyagerPosition.point.x - voyagerWidth / 2}px, ${voyagerPosition.point.y - voyagerHeight / 2}px, 0)`;
    }
    context.clearRect(0, 0, width, height);

    const glow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, height * .55);
    glow.addColorStop(0, lightTheme ? "rgba(247, 184, 112, .2)" : "rgba(238, 179, 104, .14)");
    glow.addColorStop(.5, lightTheme ? "rgba(136, 169, 185, .055)" : "rgba(165, 157, 126, .045)");
    glow.addColorStop(1, "rgba(126, 147, 255, 0)");
    context.fillStyle = glow;
    context.fillRect(0, 0, width, height);

    galaxyScene.stars.forEach((star) => {
      const alpha = star.alpha * (.7 + Math.sin(time * star.twinkle + star.phase) * .3);
      context.beginPath();
      context.arc(star.x * width, star.y * height, star.size, 0, Math.PI * 2);
      context.fillStyle = lightTheme ? `rgba(34, 79, 132, ${alpha * .65})` : `rgba(205, 220, 255, ${alpha})`;
      context.fill();
    });

    const sunRadius = Math.max(52, Math.min(width, height) * .1);
    const sunGlow = context.createRadialGradient(centerX, centerY, 0, centerX, centerY, sunRadius * 7);
    sunGlow.addColorStop(0, lightTheme ? "rgba(255, 218, 151, .44)" : "rgba(255, 205, 128, .3)");
    sunGlow.addColorStop(.18, lightTheme ? "rgba(255, 190, 101, .2)" : "rgba(255, 180, 88, .14)");
    sunGlow.addColorStop(1, "rgba(255, 160, 71, 0)");
    context.fillStyle = sunGlow;
    context.beginPath();
    context.arc(centerX, centerY, sunRadius * 7, 0, Math.PI * 2);
    context.fill();

    const sun = context.createRadialGradient(centerX - sunRadius * .35, centerY - sunRadius * .42, sunRadius * .08, centerX, centerY, sunRadius);
    sun.addColorStop(0, "rgba(255, 249, 210, .98)");
    sun.addColorStop(.48, lightTheme ? "rgba(249, 185, 91, .9)" : "rgba(235, 158, 72, .82)");
    sun.addColorStop(1, "rgba(171, 91, 42, .42)");
    context.fillStyle = sun;
    context.shadowBlur = sunRadius * 1.8;
    context.shadowColor = "rgba(255, 177, 83, .32)";
    context.beginPath();
    context.arc(centerX, centerY, sunRadius, 0, Math.PI * 2);
    context.fill();
    context.shadowBlur = 0;

    context.save();
    context.globalAlpha = lightTheme ? .72 : .58;
    for (let flare = 0; flare < 12; flare += 1) {
      const flareAngle = flare * Math.PI / 6 + time * .12;
      const flareLength = sunRadius * (1.25 + (flare % 3) * .2);
      const startRadius = sunRadius * 1.08;
      const startX = centerX + Math.cos(flareAngle) * startRadius;
      const startY = centerY + Math.sin(flareAngle) * startRadius;
      const endX = centerX + Math.cos(flareAngle) * (startRadius + flareLength);
      const endY = centerY + Math.sin(flareAngle) * (startRadius + flareLength);
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.strokeStyle = flare % 2 ? "rgba(255, 223, 145, .34)" : "rgba(255, 183, 83, .5)";
      context.lineWidth = flare % 3 === 0 ? 2 : 1;
      context.stroke();
    }
    context.restore();

    for (let ring = 0; ring < galaxyScene.orbitCount; ring += 1) {
      const orbit = getOrbitGeometry(ring, width, height, time);
      context.beginPath();
      for (let step = 0; step <= 240; step += 1) {
        const angle = (step / 240) * Math.PI * 2;
        const point = orbitPoint(centerX, centerY, orbit, angle);
        const x = point.x;
        const y = point.y;
        if (step === 0) context.moveTo(x, y);
        else context.lineTo(x, y);
      }
      context.strokeStyle = lightTheme
        ? `rgba(78, 105, 113, ${.13 - ring * .009})`
        : `rgba(173, 184, 191, ${.17 - ring * .011})`;
      context.lineWidth = ring === Math.floor(galaxyScene.orbitCount / 2) ? 1.5 : 1;
      context.stroke();
    }

    if (planetOpacity > .01) {
      context.save();
      context.globalAlpha = planetOpacity;
      galaxyScene.planets.forEach((planet) => {
        const ring = planet.ringIndex;
        const orbit = getOrbitGeometry(ring - 1, width, height, time);
        const orbitAngle = planet.phase + time * planet.orbitDirection * planet.orbitSpeed;
        const point = orbitPoint(centerX, centerY, orbit, orbitAngle);
        const x = point.x;
        const y = point.y;
        const radius = planet.radius;
        const palette = planet.palette;

        if (planet.ring) {
          context.save();
          context.translate(x, y);
          context.rotate(-.28 + Math.sin(time * planet.ringSpeed) * .04);
          context.scale(1, .28);
          context.beginPath();
          context.ellipse(0, 0, radius * 1.9, radius * .7, 0, 0, Math.PI * 2);
          context.strokeStyle = palette.ring;
          context.lineWidth = Math.max(1.3, radius * .055);
          context.stroke();
          context.restore();
        }

        const sphere = context.createRadialGradient(x - radius * .38, y - radius * .46, radius * .08, x, y, radius * 1.12);
        sphere.addColorStop(0, palette.highlight);
        sphere.addColorStop(.48, palette.mid);
        sphere.addColorStop(1, palette.shadow);
        context.beginPath();
        context.arc(x, y, radius, 0, Math.PI * 2);
        context.fillStyle = sphere;
        context.shadowBlur = radius * 1.2;
        context.shadowColor = palette.glow;
        context.fill();
        context.shadowBlur = 0;
        if (planet.ring) {
          context.save();
          context.translate(x, y);
          context.rotate(-.28 + Math.sin(time * planet.ringSpeed) * .04);
          context.scale(1, .25);
          context.beginPath();
          context.ellipse(0, 0, radius * 1.9, radius * .7, 0, 0, Math.PI);
          context.strokeStyle = planet.palette.ring;
          context.lineWidth = Math.max(1.3, radius * .055);
          context.stroke();
          context.restore();
        }
      });
      context.restore();
    }

    for (let particle = 0; particle < 18; particle += 1) {
      const angle = time * (particle % 2 ? 1 : -1) + particle;
      const x = centerX + Math.cos(angle * .7) * (width * (.18 + (particle % 5) * .045));
      const y = centerY + Math.sin(angle) * (height * (.16 + (particle % 4) * .04));
      const radius = 1 + (particle % 3) * .5;
      context.beginPath();
      context.arc(x, y, radius, 0, Math.PI * 2);
      context.fillStyle = lightTheme
        ? (particle % 3 === 0 ? "rgba(227, 152, 93, .62)" : "rgba(58, 126, 190, .45)")
        : (particle % 3 === 0 ? "rgba(224, 196, 255, .7)" : "rgba(145, 183, 255, .54)");
      context.fill();
    }

    if (speedEnvelope > .01) {
      context.save();
      context.globalCompositeOperation = "lighter";
      for (let streak = 0; streak < 34; streak += 1) {
        const angle = (streak / 34) * Math.PI * 2 + time * .35;
        const distance = (streak % 5) * 24 + 28;
        const length = (70 + (streak % 4) * 32) * speedEnvelope * (1 + speedEnvelope * 2.4);
        const startX = centerX + Math.cos(angle) * distance;
        const startY = centerY + Math.sin(angle) * distance;
        const endX = centerX + Math.cos(angle) * (distance + length);
        const endY = centerY + Math.sin(angle) * (distance + length);
        context.beginPath();
        context.moveTo(startX, startY);
        context.lineTo(endX, endY);
        context.strokeStyle = lightTheme ? "rgba(255, 184, 115, .28)" : "rgba(186, 204, 255, .32)";
        context.lineWidth = streak % 4 === 0 ? 2.5 * speedEnvelope : 1.2 * speedEnvelope;
        context.stroke();
      }
      context.restore();
    }
    artFrame = window.requestAnimationFrame(draw);
  };
  artFrame = window.requestAnimationFrame(draw);
}

function startArtLoader() {
  const loader = document.querySelector("#artLoader");
  const progress = document.querySelector("#loaderProgress");
  if (!loader || !progress) return;
  let finished = false;
  let ignited = false;
  const ignite = () => {
    if (ignited) return;
    ignited = true;
    loader.classList.add("is-igniting");
    window.setTimeout(() => loader.classList.add("is-ignited"), 280);
  };
  const close = () => {
    if (finished) return;
    finished = true;
    ignite();
    loader.classList.add("is-leaving");
    window.setTimeout(() => loader.remove(), 1100);
  };
  loader.addEventListener("click", () => {
    ignite();
    window.setTimeout(close, 850);
  });
  window.setTimeout(ignite, 520);
  const startedAt = performance.now();
  const duration = 4200;
  const tick = (now) => {
    const amount = Math.min((now - startedAt) / duration, 1);
    progress.textContent = `${String(Math.round(amount * 100)).padStart(3, "0")}%`;
    loader.style.setProperty("--loader-progress", amount);
    if (amount < 1) window.requestAnimationFrame(tick);
    else close();
  };
  window.requestAnimationFrame(tick);
}

let ticking = false;
function updateScroll() {
  const pageHeight = document.documentElement.scrollHeight - window.innerHeight;
  document.documentElement.style.setProperty("--scroll", pageHeight > 0 ? window.scrollY / pageHeight : 0);
  ticking = false;
}
window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(updateScroll);
    ticking = true;
  }
}, { passive: true });

setVariant(false);
const normalizedUrl = new URL(window.location.href);
if (normalizedUrl.searchParams.get("variant") !== "a") {
  normalizedUrl.searchParams.set("variant", "a");
  window.history.replaceState({}, "", `${normalizedUrl.pathname}?${normalizedUrl.searchParams}${normalizedUrl.hash}`);
}
updateScroll();
startArtLoader();
updateSignalReadout();
window.setInterval(updateSignalReadout, 1000);
