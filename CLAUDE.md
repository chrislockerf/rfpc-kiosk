Whenever content.js is edited or re-uploaded — by Claude in this project OR by the user re-uploading it — (sequence/sections/breather changes), regenerate AbleSign-URLs.md before ending the turn: recompute each machine's segment runtime (floor anchor + its sequence + breather) using the same holdMs/spotHold formulas as RfpcKiosk.dc.html's scene builder, and rewrite the table + full-loop total. Don't wait to be asked.

After every publish (push to GitHub Pages), list every machine's AbleSign segment timing and the full-loop total in the reply, flagging which ones changed, so Chris can update AbleSign manually.

Timing format: always show segment times and the full-loop total in seconds only (e.g. "636s"), never minutes. In the reply, list machines in loop order with each machine's ?start= URL alongside its time.

Two-way sync (standing rule from Chris): the "RFPC Kiosk Content" Claude Doc (doc 6ef0470b-384d-46bf-b40f-bf65f08bf5e5, tab 016eaa89-df8d) and the live kiosk (content.js) must always match. Any change made directly to content.js / the kiosk must be written back into the doc in the same turn, and any doc edit gets synced into content.js before publishing.

Welcome block: content.js `welcome.pages` plays first, before Star Wars (AbleSign link ?start=welcome, 11s per page). It maps to the doc's "## Welcome (plays first)" section (parsed by work/welcomedoc.py → welcome.json → writewelcome.js). The Get On The Board QR image (assets/qr-insider.svg) is regenerated from the doc's "QR link" on every sync. List Welcome first in the AbleSign timing table.

Between-machine pages: each game in content.js has `breathers: [{type, title, text, footer}]` (type = House Tip | Lingo | Overheard), played after that machine's last page at 9s each; unused ones live in top-level `breatherPool`. In the doc these are each machine's "### Between Games" table and the final "## Spare Breathers" table. Sync = work/fromdoc.py (writes games.json + pool.json) → writejs.js → writepool.js → welcomedoc.py → writewelcome.js. Segment time = 6.5 floor + pages + 9 × breathers.
