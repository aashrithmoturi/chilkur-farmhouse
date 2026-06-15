// One-off placeholder image generator.
// Run: node scripts/generate-placeholders.mjs
// Creates simple labeled placeholder images so the site renders before
// real photos are dropped into public/images. Safe to re-run; it overwrites.
import sharp from "sharp";
import { mkdir } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, "..", "public", "images");

// [filename, label, width, height]
const scenes = [
  ["hero.jpg", "Hero / Exterior", 1600, 900],
  ["villa.jpg", "Villa", 1200, 800],
  ["pool-1.jpg", "Swimming Pool", 1200, 800],
  ["pool-2.jpg", "Poolside Deck", 1200, 800],
  ["room-master.jpg", "Master Bedroom", 1200, 800],
  ["room-twin.jpg", "Twin Bedroom", 1200, 800],
  ["living.jpg", "Living Room", 1200, 800],
  ["dining.jpg", "Dining Area", 1200, 800],
  ["kitchen.jpg", "Kitchen", 1200, 800],
  ["bonfire.jpg", "Bonfire Night", 1200, 800],
  ["lawn.jpg", "Event Lawn", 1200, 800],
  ["farm-1.jpg", "Organic Farm", 1200, 800],
  ["farm-2.jpg", "Nature Trail", 1200, 800],
  ["attraction-temple.jpg", "Chilkur Balaji Temple", 1000, 700],
  ["attraction-lake.jpg", "Osman Sagar Lake", 1000, 700],
  ["attraction-himayat.jpg", "Himayat Sagar", 1000, 700],
  ["attraction-park.jpg", "Mrugavani Park", 1000, 700],
];

const avatars = [
  ["guest-1.jpg", "G1"],
  ["guest-2.jpg", "G2"],
  ["guest-3.jpg", "G3"],
  ["guest-4.jpg", "G4"],
  ["guest-5.jpg", "G5"],
  ["guest-6.jpg", "G6"],
];

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function sceneSvg(label, w, h, clean = false) {
  const decoration = clean
    ? ""
    : `
  <rect x="24" y="24" width="${w - 48}" height="${h - 48}" rx="18" fill="none" stroke="#ffffff" stroke-opacity="0.25" stroke-width="3"/>
  <text x="50%" y="46%" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="${Math.round(w / 22)}" font-weight="700" text-anchor="middle">${esc(label)}</text>
  <text x="50%" y="56%" fill="#ffffff" fill-opacity="0.7" font-family="Segoe UI, Arial, sans-serif" font-size="${Math.round(w / 45)}" text-anchor="middle">Sample image — replace later</text>`;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}">
  <defs>
    <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#1f6f53"/>
      <stop offset="100%" stop-color="#0e3b2c"/>
    </linearGradient>
    <radialGradient id="v" cx="50%" cy="42%" r="75%">
      <stop offset="55%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#000000" stop-opacity="0.35"/>
    </radialGradient>
  </defs>
  <rect width="${w}" height="${h}" fill="url(#g)"/>
  <rect width="${w}" height="${h}" fill="url(#v)"/>${decoration}
</svg>`);
}

function avatarSvg(label) {
  const s = 256;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}">
  <rect width="${s}" height="${s}" fill="#caa14a"/>
  <text x="50%" y="54%" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="96" font-weight="700" text-anchor="middle">${esc(label)}</text>
</svg>`);
}

function logoSvg() {
  const s = 256;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${s}" height="${s}">
  <circle cx="128" cy="128" r="120" fill="#1f6f53"/>
  <text x="50%" y="56%" fill="#ffffff" font-family="Segoe UI, Arial, sans-serif" font-size="110" font-weight="800" text-anchor="middle">CF</text>
</svg>`);
}

// A stately, royal-looking farmhouse / villa at golden hour — used as the hero cover.
function heroSvg(w, h) {
  // Symmetric warm window cells for the palace facade
  const grandWindow = (x, y, ww, hh) =>
    `<g>
      <rect x="${x}" y="${y}" width="${ww}" height="${hh}" rx="${ww / 2}" fill="url(#glow)" stroke="#caa14a" stroke-width="3"/>
      <line x1="${x + ww / 2}" y1="${y + 4}" x2="${x + ww / 2}" y2="${y + hh - 4}" stroke="#a9812f" stroke-width="2"/>
      <line x1="${x + 4}" y1="${y + hh * 0.55}" x2="${x + ww - 4}" y2="${y + hh * 0.55}" stroke="#a9812f" stroke-width="2"/>
    </g>`;
  return Buffer.from(`<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 1600 900">
  <defs>
    <linearGradient id="sky" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#241046"/>
      <stop offset="30%" stop-color="#5a2c63"/>
      <stop offset="55%" stop-color="#a8456b"/>
      <stop offset="78%" stop-color="#e08a4c"/>
      <stop offset="100%" stop-color="#f9d488"/>
    </linearGradient>
    <radialGradient id="sun" cx="50%" cy="74%" r="48%">
      <stop offset="0%" stop-color="#fff6dd" stop-opacity="0.98"/>
      <stop offset="32%" stop-color="#ffd98a" stop-opacity="0.55"/>
      <stop offset="100%" stop-color="#ffd98a" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="water" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#caa24e"/>
      <stop offset="22%" stop-color="#7d5a86"/>
      <stop offset="100%" stop-color="#1e1238"/>
    </linearGradient>
    <linearGradient id="lawn" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#1f6f53"/>
      <stop offset="100%" stop-color="#0a2c1f"/>
    </linearGradient>
    <linearGradient id="wall" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#fbf2dc"/>
      <stop offset="100%" stop-color="#e3cf9f"/>
    </linearGradient>
    <linearGradient id="wallShade" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#e9d6ad"/>
      <stop offset="100%" stop-color="#cbb077"/>
    </linearGradient>
    <linearGradient id="roof" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#b06a2c"/>
      <stop offset="100%" stop-color="#7c3f1c"/>
    </linearGradient>
    <linearGradient id="dome" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffe9a8"/>
      <stop offset="50%" stop-color="#e8b94e"/>
      <stop offset="100%" stop-color="#a9812f"/>
    </linearGradient>
    <radialGradient id="glow" cx="50%" cy="45%" r="65%">
      <stop offset="0%" stop-color="#fff0bf"/>
      <stop offset="100%" stop-color="#f0ad48"/>
    </radialGradient>
    <radialGradient id="vig" cx="50%" cy="42%" r="82%">
      <stop offset="52%" stop-color="#000000" stop-opacity="0"/>
      <stop offset="100%" stop-color="#1a0a25" stop-opacity="0.55"/>
    </radialGradient>
  </defs>

  <!-- Sky, glow & sun -->
  <rect width="1600" height="900" fill="url(#sky)"/>
  <rect width="1600" height="900" fill="url(#sun)"/>
  <circle cx="800" cy="640" r="130" fill="#fff3d2" opacity="0.9"/>
  <!-- Stars -->
  <g fill="#fff7e0">
    <circle cx="180" cy="90" r="2.2" opacity="0.8"/>
    <circle cx="320" cy="150" r="1.6" opacity="0.6"/>
    <circle cx="520" cy="70" r="2" opacity="0.7"/>
    <circle cx="1120" cy="120" r="1.8" opacity="0.7"/>
    <circle cx="1300" cy="80" r="2.4" opacity="0.85"/>
    <circle cx="1440" cy="170" r="1.6" opacity="0.6"/>
    <circle cx="980" cy="60" r="1.6" opacity="0.55"/>
  </g>
  <!-- Drifting clouds catching light -->
  <g fill="#f6c98e" opacity="0.35">
    <ellipse cx="430" cy="300" rx="230" ry="34"/>
    <ellipse cx="1180" cy="260" rx="270" ry="40"/>
    <ellipse cx="820" cy="210" rx="180" ry="26"/>
  </g>

  <!-- Distant tree line -->
  <path d="M0 600 q 120 -34 240 -10 q 130 26 260 -8 q 150 -36 300 -2 q 160 30 320 -6 q 140 -30 280 -4 l 200 14 V 700 H0 Z" fill="#10362a" opacity="0.6"/>

  <!-- Lawn -->
  <rect y="640" width="1600" height="260" fill="url(#lawn)"/>

  <!-- Reflecting pool -->
  <ellipse cx="800" cy="812" rx="430" ry="70" fill="url(#water)"/>
  <ellipse cx="800" cy="812" rx="430" ry="70" fill="none" stroke="#caa24e" stroke-width="3" opacity="0.5"/>
  <!-- Mirror glints -->
  <g fill="#ffe7ad" opacity="0.5">
    <rect x="640" y="804" width="80" height="3" rx="1.5"/>
    <rect x="780" y="816" width="120" height="3" rx="1.5"/>
    <rect x="900" y="800" width="70" height="3" rx="1.5"/>
  </g>

  <!-- Palace group -->
  <g>
    <!-- Side wings -->
    <rect x="400" y="466" width="186" height="180" fill="url(#wallShade)"/>
    <rect x="1014" y="466" width="186" height="180" fill="url(#wallShade)"/>
    <rect x="384" y="448" width="218" height="24" fill="url(#roof)"/>
    <rect x="998" y="448" width="218" height="24" fill="url(#roof)"/>
    <!-- Wing corner domes -->
    <path d="M430 448 q60 -64 120 0 Z" fill="url(#dome)"/>
    <path d="M1050 448 q60 -64 120 0 Z" fill="url(#dome)"/>

    <!-- Main block -->
    <rect x="575" y="380" width="450" height="266" fill="url(#wall)"/>
    <!-- Cornice & balustrade -->
    <rect x="557" y="360" width="486" height="24" fill="url(#roof)"/>
    <g fill="#efe3c8">
      <rect x="566" y="346" width="10" height="16"/>
      <rect x="606" y="346" width="10" height="16"/>
      <rect x="646" y="346" width="10" height="16"/>
      <rect x="944" y="346" width="10" height="16"/>
      <rect x="984" y="346" width="10" height="16"/>
      <rect x="1024" y="346" width="10" height="16"/>
    </g>

    <!-- Central pediment -->
    <polygon points="800,278 686,362 914,362" fill="url(#roof)"/>
    <polygon points="800,296 712,360 888,360" fill="#caa14a" opacity="0.35"/>
    <!-- Grand central dome -->
    <path d="M748 290 q52 -96 104 0 Z" fill="url(#dome)"/>
    <ellipse cx="800" cy="290" rx="52" ry="10" fill="#a9812f" opacity="0.4"/>
    <rect x="794" y="232" width="12" height="56" fill="url(#dome)"/>
    <circle cx="800" cy="226" r="11" fill="#fff0bf"/>
    <circle cx="800" cy="226" r="5" fill="#e8b94e"/>

    <!-- Portico columns -->
    <g fill="#f3e8ce">
      <rect x="624" y="462" width="22" height="184" rx="4"/>
      <rect x="702" y="462" width="22" height="184" rx="4"/>
      <rect x="876" y="462" width="22" height="184" rx="4"/>
      <rect x="954" y="462" width="22" height="184" rx="4"/>
    </g>
    <!-- Column capitals & base entablature -->
    <rect x="606" y="452" width="388" height="14" fill="#efe3c8"/>
    <rect x="606" y="640" width="388" height="8" fill="#d9c79b"/>

    <!-- Grand arched entrance -->
    <path d="M766 646 V 528 q34 -52 68 0 V 646 Z" fill="#4a2f1c"/>
    <path d="M766 528 q34 -52 68 0" fill="none" stroke="#e8c45f" stroke-width="6"/>
    <rect x="788" y="556" width="24" height="90" fill="#6e4a2a"/>
    <!-- Entrance glow -->
    <ellipse cx="800" cy="640" rx="70" ry="20" fill="#ffdf9b" opacity="0.45"/>

    <!-- Lanterns flanking entrance -->
    <g>
      <rect x="724" y="572" width="10" height="74" fill="#3c2614"/>
      <circle cx="729" cy="566" r="11" fill="#ffe7ad"/>
      <rect x="866" y="572" width="10" height="74" fill="#3c2614"/>
      <circle cx="871" cy="566" r="11" fill="#ffe7ad"/>
    </g>

    <!-- Upper windows (main block) -->
    ${grandWindow(606, 398, 46, 70)}
    ${grandWindow(684, 398, 46, 70)}
    ${grandWindow(870, 398, 46, 70)}
    ${grandWindow(948, 398, 46, 70)}
    <!-- Wing windows -->
    ${grandWindow(430, 500, 44, 64)}
    ${grandWindow(500, 500, 44, 64)}
    ${grandWindow(1042, 500, 44, 64)}
    ${grandWindow(1112, 500, 44, 64)}
  </g>

  <!-- Cypress trees framing the palace -->
  <g fill="#0c2c20">
    <path d="M250 660 q -42 -150 0 -300 q 42 150 0 300 Z"/>
    <path d="M360 666 q -34 -130 0 -250 q 34 120 0 250 Z"/>
    <path d="M1350 660 q -42 -150 0 -300 q 42 150 0 300 Z"/>
    <path d="M1240 666 q -34 -130 0 -250 q 34 120 0 250 Z"/>
  </g>

  <!-- Manicured topiary hedges -->
  <g fill="#0e3a28">
    <circle cx="470" cy="676" r="34"/>
    <circle cx="540" cy="682" r="40"/>
    <circle cx="1130" cy="676" r="34"/>
    <circle cx="1060" cy="682" r="40"/>
  </g>

  <!-- Vignette for cinematic depth -->
  <rect width="1600" height="900" fill="url(#vig)"/>
</svg>`);
}

await mkdir(outDir, { recursive: true });

for (const [name, label, w, h] of scenes) {
  const isHero = name === "hero.jpg";
  const svg = isHero ? heroSvg(w, h) : sceneSvg(label, w, h, false);
  const quality = isHero ? 95 : 70;
  await sharp(svg)
    .jpeg({ quality, chromaSubsampling: "4:4:4", mozjpeg: true })
    .toFile(join(outDir, name));
  console.log("✓", name);
}
for (const [name, label] of avatars) {
  await sharp(avatarSvg(label)).jpeg({ quality: 70 }).toFile(join(outDir, name));
  console.log("✓", name);
}
await sharp(logoSvg()).png().toFile(join(outDir, "logo.png"));
console.log("✓ logo.png");

console.log("\nAll placeholder images generated in public/images/");
