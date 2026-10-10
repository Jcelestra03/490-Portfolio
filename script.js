/*
  EDIT THIS LIST to update your projects. Nothing else needs to change.

  Each card is one slot in the PC box. Eggs are ideas, sprites are built projects.

  When you finish an artifact:
    1. Change status from "idea" to "done"
    2. Fill in title, summary, link, lastUpdated, workedWith, tags, and reflection
    3. Pick an icon (see list below), or leave it out for the default "site" icon
    4. Commit and push. The box and progress bar update by themselves.

  Fields:
    kind         the assignment name (leave as is)
    icon         egg, site, phone, bot, bolt, star, book, chart, or a single emoji like "🎮"
    lastUpdated  any text, e.g. "Oct 18, 2026"
    workedWith   a list of names, e.g. ["Sam", "Priya"]. Leave [] for solo work.
    tags         short words that describe the project. They show up as its "moves".

  Adding more projects later: add another card to the end of the list. The box holds
  30 slots, and the arrows at the top of the box flip to the next box after that.
*/
const CARDS = [
  {
    number: 1,
    kind: "Your Portfolio",
    status: "done",
    icon: "site",
    title: "This portfolio site",
    summary: "A front-end site that holds a slot for each artifact this quarter and is how I hand in every one.",
    link: "./",
    linkText: "You're here",
    lastUpdated: "Oct 10, 2026",
    workedWith: [],
    tags: ["HTML", "CSS", "JavaScript", "GitHub Pages"],
    reflection: "Project took 2 sessions of 1 hour for planning and implementation using Claude LLM. At first wanted to do a Discord theme then after a meeting with a friend had inspiration for this Pokémon theme."
  },
  {
    number: 2,
    kind: "Something You Will Use",
    status: "idea",
    title: "TODO: your idea",
    idea: "TODO: something you might build, a problem you'd like to solve, or a tool you wish existed.",
    link: "",
    lastUpdated: "",
    workedWith: [],
    tags: [],
    reflection: ""
  },
  {
    number: 3,
    kind: "AI Inside It",
    status: "idea",
    title: "TODO: your idea",
    idea: "TODO: another idea. You won't be held to it.",
    link: "",
    lastUpdated: "",
    workedWith: [],
    tags: [],
    reflection: ""
  },
  {
    number: 4,
    kind: "For Someone Else",
    status: "idea",
    title: "TODO: your idea",
    idea: "TODO: another idea. You won't be held to it.",
    link: "",
    lastUpdated: "",
    workedWith: [],
    tags: [],
    reflection: ""
  },
  {
    number: 5,
    kind: "The Moonshot",
    status: "idea",
    title: "TODO: your idea",
    idea: "TODO: another idea. You won't be held to it.",
    link: "",
    lastUpdated: "",
    workedWith: [],
    tags: [],
    reflection: ""
  }
];

/*
  PEOPLE I'VE WORKED WITH (shown in the Party panel). Copy this template for each person:

  {
    name: "Their Name",
    project: "Artifact 4: Name of the project",
    description: "What we built together and what each of us did.",
    link: "https://link-to-the-project-or-repo",
    linkText: "View project"
  },

  Only list someone if they're OK with their name being on a public page.
*/
const COLLABORATORS = [
];

/* ---------- pixel sprites: 12x12 grids, one letter per pixel ---------- */

/* SPRITES-START */
const SPRITES = {
  egg: [
    "....kkkk....",
    "...kwwwwk...",
    "..kwwwwwwk..",
    "..kwwrrwwk..",
    ".kwwwrrwwwk.",
    ".kwwwwwwbbk.",
    ".kwbbwwwwwk.",
    ".kwwbwwwwwk.",
    ".kgwwwwwwgk.",
    "..kggwwwggk.",
    "...kkgggkk..",
    "....kkkk...."
  ],
  site: [
    "kkkkkkkkkkkk",
    "kbbbbbbbbbbk",
    "kbrynbbbbbbk",
    "kkkkkkkkkkkk",
    "kwwwwwwwwwwk",
    "kwccccwggggk",
    "kwccccwwwwwk",
    "kwccccwggggk",
    "kwwwwwwwwwwk",
    "kwggggggggwk",
    "kwwwwwwwwwwk",
    "kkkkkkkkkkkk"
  ],
  phone: [
    "...kkkkkk...",
    "...kGGGGk...",
    "...kcccck...",
    "...kcwwck...",
    "...kcwwck...",
    "...kcccck...",
    "...kyyyyk...",
    "...kcccck...",
    "...kcccck...",
    "...kGGGGk...",
    "...kGwwGk...",
    "...kkkkkk..."
  ],
  bot: [
    ".....rr.....",
    ".....kk.....",
    "..kkkkkkkk..",
    ".kggggggggk.",
    ".kgbbggbbgk.",
    ".kgbwggwbgk.",
    ".kgbbggbbgk.",
    ".kggggggggk.",
    ".kgkkkkkkgk.",
    ".kggggggggk.",
    "..kkkkkkkk..",
    "...kk..kk..."
  ],
  bolt: [
    "......kkkk..",
    ".....kyyyk..",
    "....kyyyk...",
    "...kyyyk....",
    "..kyyyyyyk..",
    "..kkkkyyyk..",
    ".....kyyk...",
    "....kyyk....",
    "...kyyk.....",
    "..kyyk......",
    "..kyk.......",
    "..kk........"
  ],
  star: [
    ".....kk.....",
    "....kyyk....",
    "....kyyk....",
    "kkkkkyykkkkk",
    "kyyyyyyyyyyk",
    ".kyyyyyyyyk.",
    "..kyyyyyyk..",
    "..kyyyyyyk..",
    ".kyyykkyyyk.",
    ".kyykkkkyyk.",
    ".kyk....kyk.",
    "..k......k.."
  ],
  book: [
    ".kkkkkkkkkk.",
    ".kBBBBBBBBk.",
    ".kBbbbbbbBk.",
    ".kBbbyybbBk.",
    ".kBbbyybbBk.",
    ".kBbbbbbbBk.",
    ".kBbwwwwbBk.",
    ".kBbbbbbbBk.",
    ".kBBBBBBBBk.",
    ".kwwwwwwwwk.",
    ".kggggggggk.",
    ".kkkkkkkkkk."
  ],
  chart: [
    "k...........",
    "k.......rr..",
    "k.......rr..",
    "k.......rr..",
    "k....bb.rr..",
    "k....bb.rr..",
    "k....bb.rr..",
    "k.yy.bb.rr..",
    "k.yy.bb.rr..",
    "k.yy.bb.rr..",
    "kkkkkkkkkkkk",
    "............"
  ]
};
/* SPRITES-END */

const PALETTE = {
  k: "#2a2a38", w: "#fcfcfc", g: "#c8c8d4", G: "#8c8ca0",
  r: "#e84848", R: "#a82838", b: "#5890e8", B: "#2c54a8",
  y: "#f8d048", Y: "#c8981c", n: "#58c058", N: "#2c7c3c",
  o: "#f89038", p: "#f8a8c0", c: "#60d8e8"
};

const TYPE_COLORS = ["#a8a878", "#f08030", "#6890f0", "#78c850", "#f8d030", "#f85888", "#a040a0", "#705898"];
const AVATAR_COLORS = ["#3f78d0", "#3b9c4c", "#d0467e", "#d04444", "#8a52b0", "#2a8c8c"];

const PIXEL = 16;
// names for each box, in order. Extra boxes (after 30 projects) fall back to "BOX 2", "BOX 3", ...
const BOX_NAMES = ["TCSS 490"];
const SLOTS_PER_BOX = 30;
const COLUMNS = 6;

/* ---------- helpers (no need to edit below) ---------- */

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function hashOf(text) {
  let sum = 0;
  for (let i = 0; i < text.length; i++) sum += text.charCodeAt(i);
  return sum;
}

function drawSprite(name) {
  const rows = SPRITES[name];
  if (!rows) {
    // not one of the built-in sprites, so treat it as an emoji
    const span = el("span", "sprite emoji", name);
    span.setAttribute("aria-hidden", "true");
    return span;
  }
  const canvas = el("canvas", "sprite");
  // each sprite pixel is drawn 16x16 so the picture stays clean at any size
  canvas.width = 12 * PIXEL;
  canvas.height = 12 * PIXEL;
  canvas.setAttribute("aria-hidden", "true");
  const ctx = canvas.getContext("2d");
  rows.forEach(function (row, y) {
    for (let x = 0; x < row.length; x++) {
      const color = PALETTE[row[x]];
      if (color) {
        ctx.fillStyle = color;
        ctx.fillRect(x * PIXEL, y * PIXEL, PIXEL, PIXEL);
      }
    }
  });
  return canvas;
}

function spriteFor(card) {
  if (card.status !== "done") return "egg";
  return card.icon || "site";
}

function padNumber(n) {
  return "No." + String(n).padStart(3, "0");
}

function workedWithText(card) {
  if (card.workedWith && card.workedWith.length) return card.workedWith.join(", ");
  return card.status === "done" ? "Solo" : "\u2014";
}

function addRow(list, label, value) {
  list.appendChild(el("dt", "", label));
  list.appendChild(el("dd", "", value));
}

/* ---------- the hover tab ---------- */

function renderTab(card) {
  const done = card.status === "done";
  const tab = el("div", "tab " + (done ? "done" : "idea"));

  const head = el("div", "tab-head");
  head.appendChild(el("span", "", padNumber(card.number)));
  head.appendChild(el("span", "", card.kind || ""));
  tab.appendChild(head);

  tab.appendChild(el("h3", "tab-title", card.title));

  if (done && card.link) {
    const a = el("a", "open-link", (card.linkText || "Open project") + " \u25B6");
    a.href = card.link;
    tab.appendChild(a);
  } else {
    tab.appendChild(el("p", "nolink", done ? "No link yet" : "Not built yet. This is still an egg."));
  }

  const body = done ? card.summary : card.idea;
  if (body) tab.appendChild(el("p", "", body));

  const info = el("dl", "info");
  addRow(info, "Last updated", card.lastUpdated || "\u2014");
  addRow(info, "Worked with", workedWithText(card));
  tab.appendChild(info);

  // tags are shown as moves, always at least four slots like in the game
  tab.appendChild(el("h4", "", "MOVES"));
  const moves = el("ul", "moves");
  const tags = card.tags || [];
  const slotCount = Math.max(4, tags.length);
  for (let i = 0; i < slotCount; i++) {
    if (tags[i]) {
      const li = el("li", "move");
      const dot = el("span", "type");
      dot.style.background = TYPE_COLORS[hashOf(tags[i]) % TYPE_COLORS.length];
      li.appendChild(dot);
      li.appendChild(document.createTextNode(tags[i]));
      moves.appendChild(li);
    } else {
      moves.appendChild(el("li", "move empty", "-"));
    }
  }
  tab.appendChild(moves);

  if (done && card.reflection) {
    tab.appendChild(el("h4", "", "NOTES"));
    tab.appendChild(el("p", "reflection", card.reflection));
  }

  return tab;
}

/* ---------- the box ---------- */

function renderSlot(card, position) {
  const col = position % COLUMNS;
  const row = Math.floor(position / COLUMNS);

  let classes = "slot";
  if (col >= COLUMNS / 2) classes += " flip";
  if (row >= 3) classes += " up";

  const slot = el("div", classes);
  slot.setAttribute("tabindex", "0");
  slot.setAttribute("role", "group");
  slot.setAttribute("aria-label", "Artifact " + card.number + ": " + card.title);

  slot.appendChild(el("span", "cursor"));
  slot.appendChild(drawSprite(spriteFor(card)));
  slot.appendChild(renderTab(card));
  return slot;
}

let currentBox = 0;

function closeAllTabs() {
  document.querySelectorAll(".slot.open").forEach(function (s) {
    s.classList.remove("open");
  });
}

function renderBox() {
  const grid = document.getElementById("box-grid");
  const pages = Math.max(1, Math.ceil(CARDS.length / SLOTS_PER_BOX));
  if (currentBox >= pages) currentBox = 0;

  grid.replaceChildren();
  const start = currentBox * SLOTS_PER_BOX;
  for (let i = 0; i < SLOTS_PER_BOX; i++) {
    const card = CARDS[start + i];
    grid.appendChild(card ? renderSlot(card, i) : el("div", "slot-empty"));
  }

  document.getElementById("box-name").textContent = BOX_NAMES[currentBox] || "BOX " + (currentBox + 1);
  document.getElementById("prev").disabled = pages <= 1;
  document.getElementById("next").disabled = pages <= 1;
}

function setupBoxControls() {
  const pages = function () { return Math.max(1, Math.ceil(CARDS.length / SLOTS_PER_BOX)); };

  document.getElementById("prev").addEventListener("click", function () {
    currentBox = (currentBox - 1 + pages()) % pages();
    renderBox();
  });
  document.getElementById("next").addEventListener("click", function () {
    currentBox = (currentBox + 1) % pages();
    renderBox();
  });

  // tapping a slot keeps its tab open (needed on phones); tapping elsewhere closes it
  document.addEventListener("click", function (e) {
    const slot = e.target.closest(".slot");
    if (e.target.closest("a")) return;
    const wasOpen = slot && slot.classList.contains("open");
    closeAllTabs();
    if (slot && !wasOpen) slot.classList.add("open");
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closeAllTabs();
      if (document.activeElement && document.activeElement.blur) document.activeElement.blur();
    }
  });
}

/* ---------- party: people I've worked with ---------- */

function initialsOf(name) {
  return name.split(/\s+/).filter(Boolean).slice(0, 2).map(function (w) {
    return w[0].toUpperCase();
  }).join("");
}

function renderMember(person) {
  const member = el("details", "member");
  const summary = el("summary");

  const avatar = el("div", "pavatar", initialsOf(person.name));
  avatar.style.background = AVATAR_COLORS[hashOf(person.name) % AVATAR_COLORS.length];
  avatar.setAttribute("aria-hidden", "true");
  summary.appendChild(avatar);

  const text = el("div");
  text.appendChild(el("div", "mname", person.name));
  if (person.project) text.appendChild(el("div", "mproject", person.project));
  summary.appendChild(text);
  member.appendChild(summary);

  const body = el("div", "member-body");
  if (person.project) {
    body.appendChild(el("span", "mlabel", "Worked together on"));
    body.appendChild(el("p", "", person.project));
  }
  if (person.description) body.appendChild(el("p", "", person.description));
  if (person.link) {
    const a = el("a", "", person.linkText || "View project");
    a.href = person.link;
    body.appendChild(a);
  }
  member.appendChild(body);
  return member;
}

function renderParty() {
  const box = document.getElementById("party-list");
  if (COLLABORATORS.length === 0) {
    box.appendChild(el("p", "hint", "No one yet. People I build with will show up here."));
  } else {
    COLLABORATORS.forEach(function (person) { box.appendChild(renderMember(person)); });
  }
  document.querySelectorAll("[data-party-heading]").forEach(function (node) {
    node.textContent = "PARTY \u2014 " + COLLABORATORS.length;
  });
}

/* ---------- progress + start ---------- */

function renderProgress() {
  const segmentsEl = document.getElementById("segments");
  CARDS.forEach(function (card) {
    segmentsEl.appendChild(el("span", card.status === "done" ? "filled" : ""));
  });
  const built = CARDS.filter(function (c) { return c.status === "done"; }).length;
  document.querySelectorAll("[data-progress]").forEach(function (node) {
    node.textContent = built + " of " + CARDS.length + " hatched";
  });
}

renderBox();
setupBoxControls();
renderParty();
renderProgress();
