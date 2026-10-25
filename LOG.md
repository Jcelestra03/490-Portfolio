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
