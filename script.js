/*
  EDIT THIS LIST to update your cards. Nothing else needs to change.

  When you finish an artifact:
    1. Change status from "idea" to "done"
    2. Set title, summary, link, and reflection (leave "kind" as is)
    3. Commit and push. The channel list and progress bar update by themselves.
*/
const CARDS = [
  {
    number: 1,
    kind: "Your Portfolio",
    status: "done",
    title: "This portfolio site",
    summary: "A front-end site that holds a card for each artifact this quarter and is how I hand in every one.",
    link: "./",
    linkText: "You're on it",
    reflection: "TODO: write a few sentences on how this went and what you learned. Mention any place the AI misread you."
  },
  {
    number: 2,
    kind: "Something You Will Use",
    status: "idea",
    title: "TODO: your idea",
    idea: "TODO: something you might build, a problem you'd like to solve, or a tool you wish existed.",
    link: "",
    reflection: ""
  },
  {
    number: 3,
    kind: "AI Inside It",
    status: "idea",
    title: "TODO: your idea",
    idea: "TODO: another idea. You won't be held to it.",
    link: "",
    reflection: ""
  },
  {
    number: 4,
    kind: "For Someone Else",
    status: "idea",
    title: "TODO: your idea",
    idea: "TODO: another idea. You won't be held to it.",
    link: "",
    reflection: ""
  },
  {
    number: 5,
    kind: "The Moonshot",
    status: "idea",
    title: "TODO: your idea",
    idea: "TODO: another idea. You won't be held to it.",
    link: "",
    reflection: ""
  }
];

const AUTHOR = "Jeremiah Celestra";
const INITIALS = "JC";

/* ---------- rendering (no need to edit below) ---------- */

function el(tag, className, text) {
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (text) node.textContent = text;
  return node;
}

function renderCard(card) {
  const done = card.status === "done";

  // Each artifact is a chat message from you, containing an embed
  const message = el("article", "message");
  message.id = "artifact-" + card.number;

  const avatar = el("div", "avatar", INITIALS);
  avatar.setAttribute("aria-hidden", "true");
  message.appendChild(avatar);

  const content = el("div", "content");
  content.appendChild(el("span", "author", AUTHOR));

  const embed = el("div", "embed " + (done ? "done" : "idea"));
  embed.appendChild(el("p", "label", "Artifact " + card.number + (card.kind ? ": " + card.kind : "")));
  embed.appendChild(el("h2", "", card.title));
  embed.appendChild(el("span", "status " + (done ? "done" : "idea"), done ? "Built" : "Idea"));

  const body = done ? card.summary : card.idea;
  if (body) embed.appendChild(el("p", "", body));

  if (done && card.link) {
    const a = el("a", "open", card.linkText || "Open artifact");
    a.href = card.link;
    embed.appendChild(a);
  }

  if (done && card.reflection) {
    embed.appendChild(el("p", "reflection", card.reflection));
  }

  if (!done) {
    embed.appendChild(el("p", "hint", "The link and reflection go here once this is built."));
  }

  content.appendChild(embed);
  message.appendChild(content);
  return message;
}

function renderChannel(card) {
  const done = card.status === "done";
  const a = el("a", "channel");
  a.href = "#artifact-" + card.number;

  const hash = el("span", "hash", "#");
  hash.setAttribute("aria-hidden", "true");
  a.appendChild(hash);
  a.appendChild(document.createTextNode("artifact-" + card.number));

  const dot = el("span", "dot " + (done ? "done" : "idea"));
  dot.setAttribute("aria-hidden", "true");
  a.appendChild(dot);
  a.appendChild(el("span", "sr", done ? "built" : "idea"));
  return a;
}

function render() {
  const cardsEl = document.getElementById("cards");
  const channelsEl = document.getElementById("channel-list");
  const segmentsEl = document.getElementById("segments");

  CARDS.forEach(function (card) {
    cardsEl.appendChild(renderCard(card));
    channelsEl.appendChild(renderChannel(card));
    segmentsEl.appendChild(el("span", card.status === "done" ? "filled" : ""));
  });

  const built = CARDS.filter(function (c) { return c.status === "done"; }).length;
  document.querySelectorAll("[data-progress]").forEach(function (node) {
    node.textContent = built + " of " + CARDS.length + " built";
  });
}

render();
