# Build log

Notes on what I asked the AI for and what changed. Newest entries at the bottom.

## Artifact 1: Portfolio site

**AI used:** Claude (free web chat)

### Entry 1: first draft
- **Asked for:** A static portfolio site (HTML/CSS/JS, no server) built from the assignment PDF, with a card for each of the five artifacts. Card 1 describes the site itself; cards 2 to 5 are placeholders for ideas. Cards should be easy to edit later.
- **Got:** `index.html`, `style.css`, and `script.js`. The cards live in a `CARDS` list at the top of `script.js`, so updating a card means editing that list and changing `status` from `"idea"` to `"done"`.
- **Changed / notes:** (write what you edited yourself, e.g. your name, about text, ideas)

### Entry 2
- **Asked for:**
- **Got:**
- **Changed / notes:**

### Where the AI misread me
(Write down anything it got wrong or that you had to explain twice. This is worth a line in your Card 1 reflection.)

### Deploy notes
- Repo name:
- Live link:
- Anything that went wrong while deploying:

## Artifact 3: Quant Scout

**AI used:** Claude Code (desktop app)

- **Asked for:** A project where a model does real work every run. I wanted a stock-trading helper based on quant statistics; it became a screener where Python computes the stats and Claude ranks the stocks and explains its picks, with code fact-checking every number.
- **Got:** The [quant-scout repo](https://github.com/Jcelestra03/quant-scout) (its own LOG.md has the full build history), a Roblox-style [project page](https://jcelestra03.github.io/quant-scout/), and card 3 filled in here.
- **Changed / notes:** Getting the Claude CLI logged in on Windows took a few tries (PowerShell vs Bash commands, and the app's files live in a hidden packaged-app folder).

## Artifact 4: Desktop Sigil (in progress)

**AI used:** Claude Code (desktop app)

- **Asked for:** Card 4 updated with our Artifact 4 idea for the Week 4 check-in.
- **Got:** Card 4 filled in as an in-progress egg: Desktop Sigil, a Witch Hat Atelier-style
  overlay where drawing a sigil opens a game, app, or website, built with Tiffany as a
  surprise for a friend. Links to the [Desktop-Sigil-idea repo](https://github.com/Jcelestra03/Desktop-Sigil-idea).
- **Changed / notes:** Left the friend's name off this public page so the surprise isn't
  spoiled. Switch the card to `"done"` and add a reflection after the handover.
- **Later:** Added Tiffany to the Party panel. Added a `"hatching"` status: card 4's egg
  is now cracked open with the gold sigil ✦ peeking out, and its tab says "Hatching!
  Still being built." with a link to the repo.
- **Nov 8 update:** Card 4 now describes where Desktop Sigil stands: the Sigil Book grimoire
  with four looks (painted Candlelight and Midnight, Parchment, Obsidian), Paint-style pens,
  the tour with a practice cast and "?" help, Tiffany's sigil sharing and even text layout,
  and the Desktop Sigil.exe. Tiffany's Party entry now says what each of us built. Still
  `"hatching"`: switch to `"done"`, link the release, and add a reflection after the handover.
- **Nov 8, release:** Desktop Sigil v1.0 is out
  ([release](https://github.com/Jcelestra03/Desktop-Sigil-idea/releases/tag/v1.0)). Card 4 is
  now `"done"`: its button downloads the release, and the summary links both the release and
  the repo. Reflection still to write after the handover.
- **Nov 8, sprite:** Card 4's ✦ became a pixel sigil sprite (`sigil` in `SPRITES`): a red
  triangle sigil inside a gold rune circle, in the same 12×12 style as the other cards.
