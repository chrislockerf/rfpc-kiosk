/* ============================================================================
   RFPC KIOSK — EDITABLE CONTENT
   ----------------------------------------------------------------------------
   ALL words shown on the kiosk live in this file. Nothing editable is left in
   the HTML. Edit the text between the "quotes". Keep the quotes, colons,
   commas and [ ] { } brackets exactly as they are — they're the scaffolding.

   Punctuation you can copy/paste:
     curly quotes  “ ”  ’      em dash —      middle dot ·
     arrow →       times ×     ellipsis …     diamond ◆

   HOW IT'S ORGANIZED
     games[]  → one block per machine, in floor order. Inside each machine,
                pages[] is that machine's screens IN THE ORDER THEY PLAY.
                Everything one page shows sits in that page's single { } block:

                  key        → which layout to use. Built-ins: intro ·
                               gameoverview · rundown · multiball · strategy ·
                               hold. Any other key is a themed box page.
                  pageTitle  → the big text on the RIGHT of the header
                  eyebrow    → the small line under it
                  proTip     → this page's italic footer tip
                  kicker     → the small label above each box's title
                  boxes[]    → the cards on the page (each expands full-stage)

                To reorder pages, move a whole { } block. To delete a page,
                delete its block. To add one, copy a block and change the key.

     labels{} → the handful of shared labels used by the floor screen and the
                between-game breather pages.
     combos / tips / glossary / quip / general → the shared breather content.
   ============================================================================ */

window.RFPC_CONTENT = {

  /* ==========================================================================
     SHARED LABELS — the floor screen and breather pages
     ========================================================================== */
  labels: {
    floor:    { eyebrow: "The Lockedown", title: "On The Floor", nowUpPrefix: "Now Up · ", nowUpChip: "Now Up", venue: "The Lockedown" },
    houseTip: { eyebrow: "House Rules", title: "House Tip", pageTitle: "Play Better Tonight", kicker: "House Tip" },
    lingo:    { eyebrow: "Speak The Language", title: "Pinball Lingo", pageTitle: "The Words On The Floor", kicker: "Pinball Lingo" },
    overheard:{ eyebrow: "Real Talk", title: "Overheard", pageTitle: "The Lockedown", byline: "— overheard at The Lockedown",
                proTip: "You’re not mad at the machine. You’re mad at yourself." },
    holdFallback: "Now playing at The Lockedown.",
  },

  /* ==========================================================================
     THE EIGHT MACHINES — in floor order.
     ========================================================================== */
  games: [

    /* ======================================================================
       JAMES BOND 007
       Pages play in the order they appear below. To reorder pages, move a
       whole { … } block. To remove one, delete its block.
       ====================================================================== */
    {
      game: "james-bond",            // code key — DO NOT change (wires photos, badge, accent)
      title: "James Bond 007",
      maker: "Stern · 2022",
      proTip: "The Action Button activates Smart Bombs, Multipliers and Add a Ball — it’s the machine’s #1 scoring tool if used properly.",  // fallback footer tip if a page has none

      pages: [

        /* PAGE 1 · INTRO — cabinet, playfield & credits ----------------- */
        {
          key: "intro",
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2022",
          proTip: "The Action Button activates Smart Missles, Multipliers and Add-a-ball.  Its the game's #1 scoring tool if used wisely.",
          credits: [
            { role: "Game Design", names: "George Gomez" },
            { role: "Engineering / Mechanics", names: "Elliot Eismin, Harrison Drake, John Rotharmel, Robert Blakeman, Tom Kopera" },
            { role: "Software", names: "Lonnie D. Ropp, Mike Vinikour" },
            { role: "Artwork", names: "Kevin O’Connor" },
            { role: "Sound", names: "Jerry Thompson, Ken Hale" },
          ],
        },

        /* PAGE 2 · GAME OVERVIEW — the big bullet points ---------------- */
        {
          key: "gameoverview",
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Smart Missles (Blue Action Button) spot the most valable shot on the playfield. Collect them and use them wisely.",
          intro: "Designed by George Gomez in his first pinball machine since Deadpool, James Bond 007 takes players on an international espionage journey. Across six assignments, James Bond gets help from the gadgets of the Q Branch as he takes on a wide variety of Villains and Henchmen.",
          bullets: [
            "Experience six classic Sean Connery 007 films.",
            "Battle the Villian, Henchmen and SPECTRE Weapon from each film.",
            "Activate the Bond Women from each film to provide stacking multipliers.",
            "Visit Q during each film to obtain his special toys and weapons.",
            "Try to stack BirdOne and Jetpack multiball during Villian and Henchmen modes.",
            "Control the Action button as there are several uses, Blue (Smart Missle), Pink (Multipier) and Green (Add a Ball).",
          ],
        },

        /* PAGE 3 · THE RUNDOWN — six boxes, each expands full-stage ----- */
        {
          key: "rundown",
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2022",
          proTip: "Each film has four modes — Villains, Henchmen, SPECTRE Weapon, Q Branch. Play each mode to complete the film and add to your end of ball bonus.",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Villains, henchmen, Q-Branch and SPECTRE weapons.",
            rows: [
              { label: "Villains", target: "Right Ramp", desc: "Battle each film’s villain." },
              { label: "Henchmen", target: "Side Ramp", desc: "Take out the muscle." },
              { label: "SPECTRE Weapon", target: "Spell SPECTRE at Rocket", desc: "Battle the SPECTRE Weapon." },
              { label: "Q Branch", target: "Scoop", desc: "Once lit, access Q’s gadgets." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Stack Bird One and Jetpack Multiballs with Villain and Henchment battles.",
            rows: [
              { label: "Bird One", target: "The Rocket", desc: "Lock three balls in the Rocket; jackpots light green, super jackpot at the Rocket." },
              { label: "Jetpack Multiball", target: "Left Ramp", desc: "Qualify at the left Scuba eject, then the left ramp to start." },
              { label: "Bond, James Bond Multiball", target: "Left Eject or Right Ramp", desc: "Qualify by battling one Villain, one Henchmen and playing both Bird One and Jetpack Multiballs." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "OHMSS → MI6 Multiball",
            body: "Finish all six films to open On Her Majesty’s Secret Service — a flip-count showdown that ends in MI6 Multiball, the goal of the whole game.",
            chip: "◆ Finish all 6 films",
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            lead: "Hold the left flipper as you plunge to steer the skill shot.",
            rows: [
              { label: "Lane Skill", target: "Flashing Lane", desc: "Plunge into the lit top lane." },
              { label: "Super Skill", target: "Right Ramp", desc: "Hold left flipper, then rip the right ramp." },
            ],
          },
          button: {
            kicker: "The #1 scoring tool",
            title: "Action Button",
            lead: "Charge it, then spend it on the biggest shot on the field.",
            rows: [
              { label: "Smart Missiles", target: "Fires Lit Shot", desc: "Collect the most valuable lit shot instantly." },
              { label: "Multipliers", target: "Playfield X", desc: "Stack 2×, then 3× across the playfield." },
            ],
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Master the Action Button before films — it’s the machine’s #1 scoring tool.",
            rows: [
              { name: "Button First", body: "Learn the Action Button before chasing films." },
              { name: "Vary Your Shots", body: "Repeating a film’s shots only scores points — spread them to advance." },
            ],
          },
        },

        /* PAGE 4 · THE MOVIES ------------------------------------------- */
        {
          key: "movies",
          pageTitle: "The Movies",
          eyebrow: "Play Them In Any Order",
          proTip: "Take the time to watch the iconic film clips that accompany each mode.",
          kicker: "The Six Films",
          imgShape: "poster",
          boxes: [
            {
              name: "Dr. No",
              target: "1962",
              detail: "Bond investigates a missing agent in Jamaica and uncovers Dr. No, a reclusive scientist sabotaging American rocket launches from a hidden island base. Bond infiltrates the base, survives Dr. No’s traps, and destroys his nuclear reactor before it melts down.",
              img: "assets/bond-movie-drno.jpg",
            },
            {
              name: "From Russia With Love",
              target: "1963",
              detail: "SPECTRE lures Bond into a trap using a Soviet decoding machine and a clerk posing as a defector. Bond survives a train journey stalked by an assassin and a poisoned-blade attack, ultimately exposing and escaping SPECTRE’s elaborate plot.",
              img: "assets/bond-movie-fromrussia.jpg",
            },
            {
              name: "Goldfinger",
              target: "1964",
              detail: "Bond investigates gold smuggler Auric Goldfinger and uncovers a scheme to irradiate the U.S. gold reserve at Fort Knox, boosting the value of his own hoard. With help from pilot Pussy Galore, Bond foils the plan and stops Goldfinger’s bodyguard Oddjob.",
              img: "assets/bond-movie-goldfinger.jpg",
            },
            {
              name: "Thunderball",
              target: "1965",
              detail: "SPECTRE agent Largo hijacks two NATO atomic bombs and holds the world ransom. Bond traces the warheads to Largo’s yacht in the Bahamas, romancing his mistress Domino along the way, and leads a climactic underwater battle to recover the bombs.",
              img: "assets/bond-movie-thunderball.jpg",
            },
            {
              name: "You Only Live Twice",
              target: "1967",
              detail: "Faking his own death, Bond goes undercover in Japan to find who is hijacking American and Soviet spacecraft and pushing the two superpowers toward war. He traces the plot to SPECTRE chief Blofeld’s hollowed-out volcano base and destroys it from within.",
              img: "assets/bond-movie-yolt.jpg",
            },
            {
              name: "Diamonds Are Forever",
              target: "1971",
              detail: "Posing as a smuggler, Bond infiltrates a diamond-trafficking pipeline running through Amsterdam and Las Vegas, tracing it to a returning Blofeld, who is stockpiling diamonds to build a satellite laser weapon. Bond breaks up the scheme aboard an offshore oil rig.",
              img: "assets/bond-movie-diamonds.jpg",
            },
          ],
        },

        /* PAGE 5 · THE VILLAINS ----------------------------------------- */
        {
          key: "villains",
          pageTitle: "The Villains",
          eyebrow: "One Of The Four Mode Types",
          proTip: "Defeating a Villan gives you an extra Smart Missle and adds to your end of ball bonus.",
          kicker: "Beat The Boss",
          chipByFilm: true,
          boxes: [
            {
              name: "Dr. No",
              target: "Dr. No",
              detail: "Trouble in Jamaica — build value at the bumpers or right orbit, then cash out at the Dragon Tank. 10 successful shots to win.",
              img: "assets/bond-villain-drno.png",
            },
            {
              name: "Rosa Klebb",
              target: "From Russia With Love",
              detail: "SPECTRE Island — clear all nine major shots, then finish with the left eject and DB5 eject.",
              img: "assets/bond-villain-klebb.png",
            },
            {
              name: "Auric Goldfinger",
              target: "Goldfinger",
              detail: "The Incredible Laser Ray — shoot the Goldfinger target to relight shots; 7 total shots lights the DB5 eject to escape.",
              img: "assets/bond-villain-goldfinger.png",
            },
            {
              name: "Emilio Largo",
              target: "Thunderball",
              detail: "Disco Volante Demolition — shoot the left eject, side ramp, or right ramp; 10 shots to win.",
              img: "assets/bond-villain-largo.png",
            },
            {
              name: "Blofeld",
              target: "You Only Live Twice",
              detail: "Feeding Frenzy — shoot the Bird 1 rocket or drop targets to beat Blofeld.",
              img: "assets/bond-villain-blofeld.png",
            },
            {
              name: "Blofeld",
              target: "Diamonds Are Forever",
              detail: "Diamonds of Destruction — Blofeld, disguised as Willard Whyte, calibrating the satellite via left eject, center loop, and right ramp.",
              img: "assets/bond-villain-blofeld.png",
            },
          ],
        },

        /* PAGE 6 · THE HENCHMEN ----------------------------------------- */
        {
          key: "henchmen",
          pageTitle: "The Henchmen",
          eyebrow: "Fast, Repeatable Progress",
          proTip: "Henchmen are the fast, repeatable film progress — lean on them early.",
          kicker: "Take Out The Muscle",
          chipByFilm: true,
          boxes: [
            {
              name: "Professor Dent",
              target: "Dr. No",
              detail: "Sinister Summit — lock in the moving yellow shot with the Dragon Tank; 10 yellow shots to win.",
              img: "assets/bond-henchman-dent.png",
            },
            {
              name: "Red Grant",
              target: "From Russia With Love",
              detail: "Encounter on the Orient Express — shoot the right orbit to light combos across the right side; 10 red shots to win.",
              img: "assets/bond-henchman-grant.png",
            },
            {
              name: "Oddjob",
              target: "Goldfinger",
              detail: "He Blew a Fuse — hit the left ramp, side ramp, right orbit, and right ramp, then the rocket lane to win.",
              img: "assets/bond-henchman-oddjob.png",
            },
            {
              name: "Fiona Volpe",
              target: "Thunderball",
              detail: "Femme Fatale — chase her down: left ramp, right ramp, left ramp, right orbit, side ramp, left ramp, DB5 eject.",
              img: "assets/bond-henchman-volpe.png",
            },
            {
              name: "Mr. Osato",
              target: "You Only Live Twice",
              detail: "Arrange Usual Reception Please — flee Osato’s clutches via the three ramps and upper loop.",
            },
            {
              name: "Mr. Wint & Mr. Kidd",
              target: "Diamonds Are Forever",
              detail: "Shoot the left ramp then center lane, repeated three times, to complete the mode.",
              img: "assets/bond-henchman-wintkidd.png",
            },
          ],
        },

        /* PAGE 7 · THE BOND GIRLS --------------------------------------- */
        {
          key: "bondGirls",
          pageTitle: "The Bond Girls",
          eyebrow: "Boost The Current Film",
          proTip: "Bond girls: Pussy Galore - enough said.",
          kicker: "Collect The Allies",
          chipByFilm: true,
          boxes: [
            { name: "Honey Ryder", target: "Dr. No", detail: "Qualified by 25 bumper hits." },
            { name: "Tatiana Romanova", target: "From Russia With Love", detail: "Qualified by 3 right orbit shots." },
            { name: "Pussy Galore", target: "Goldfinger", detail: "Qualified by 4 DB5 ejects." },
            { name: "Domino Derval", target: "Thunderball", detail: "Qualified by 4 left ejects." },
            { name: "Kissy Suzuki", target: "You Only Live Twice", detail: "Qualified by 10 rocket hits — strong shots register more." },
            { name: "Tiffany Case", target: "Diamonds Are Forever", detail: "Qualified by 200 spinner spins." },
          ],
        },

        /* PAGE 8 · Q-BRANCH TOYS ---------------------------------------- */
        {
          key: "qbranch",
          pageTitle: "Q-Branch Toys",
          eyebrow: "Light Them, Then Cash In",
          proTip: "Q gadgets are gravy — spend them from the scoop, but don’t drain reaching for it.",
          kicker: "Spend The Gadgets",
          chipByFilm: true,
          boxes: [
            {
              name: "Radioactive Reconnaissance",
              target: "Dr. No",
              detail: "Bumper hits qualify it — take control of the Geiger Counter to find the big-award shot.",
            },
            {
              name: "Attaché Case",
              target: "From Russia With Love",
              detail: "Six right-orbit shots qualify it; the case’s five components start Hunted by Helicopter Multiball.",
            },
            { name: "DB5", target: "Goldfinger", detail: "Three DB5 eject shots qualify it; six shots reveal the car’s amenities and start DB5 Multiball." },
            {
              name: "Power Pack",
              target: "Thunderball",
              detail: "Three left-eject shots qualify it; the underwater jetpack gadget leads into Power Pack Multiball.",
            },
            { name: "Little Nellie", target: "You Only Live Twice", detail: "20 rocket hits qualify it; five right-ramp shots start Little Nellie Multiball." },
            { name: "Q’s Ring", target: "Diamonds Are Forever", detail: "400 spinner spins qualify it — test the electromagnet ring on the flashing blue shots." },
          ],
        },

        /* PAGE 9 · MULTIBALL OVERVIEW — one box per multiball ----------- */
        {
          key: "multiball",
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2022",
          proTip: "Start a Villan or Henchmen mode and then stack BirdOne or JetPack Multiball to add to the scoring.",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Bird One",
              target: "Rocket Dropdowns, Center Lock",
              detail: "Complete rocket drop down targets to light lock, then lock three balls in the rocket at the center loop.",
              objective: "Lock three balls in the rocket for the game's signature multiball assault.",
              jackpots: "Every shot lights green to build the jackpot; blast the rocket for the Super Jackpot.",
              tip: "Earn an extended Bird One by shooting the two top flashing green targets at the start of the multiball.",
            },
            {
              name: "Jetpack",
              target: "Scuba Scoop, Left Orbit",
              detail: "Shoot the tank to drop the Jetpack ball.  Shoot white shots to build jackpot and collect at left orbit",
              objective: "Drop the Jetpack ball and build white-shot value before collecting at the orbit.",
              jackpots: "After hitting several white shots, shoot the left orbit to have 007 grap the ball - time your tank shot to drop the ball on it to earn a super jackpot.",
              tip: "Best used when stacked with a Villain or Henchman mode - not very useful on its own.",
            },
            {
              name: "Bond, James Bond",
              target: "Scuba Scoop or Right Ramp",
              detail: "Activated by battling a Villain, a Henchman, and playing Bird One and Jetpack Multiballs",
              objective: "Chain jackpots for as long as the timed mode runs — no ball is safe from ending it early.",
              jackpots: "Timed mode with unlimited balls.  Shoot lit shots to earn a jackpots",
              tip: "Each shot earns a different Bond introduction voice over from one of the films.",
            },
          ],
        },

        /* PAGE 10 · STRATEGY & TIPS ------------------------------------- */
        {
          key: "strategy",
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Collect Bond Girl mulitpliers and activate them using the Pink Action Button. Best used during a Villain or Henchmen mode, better yet stacked with a multiball.",
          kicker: "House Advice",
          boxes: [
            { name: "Button First", detail: "Learn the Action Button before chasing films — it's the machine's #1 scoring tool." },
            { name: "Vary Your Shots", detail: "Repeating a film's shots only scores points — spread them across modes to advance." },
            { name: "Stack Bird One", detail: "Start Bird One during a Villain or Henchman mode to double up on scoring." },
            { name: "Save Jetpack", detail: "Jetpack is weak alone — always stack it with a Villain or Henchman mode." },
            { name: "Chase Bond Girls", detail: "Bond Girl multipliers boost whatever film mode is currently running." },
            { name: "Mind The Colors", detail: "Blue, Pink and Green Action Button uses each do something different — know which is lit." },
          ],
        },

        /* PAGE · MODS — geeky additions & customization -------------- */
        {
          key: "mods",
          pageTitle: "Mods",
          eyebrow: "Geeky Additions and Customization",
          proTip: "PLACEHOLDER — footer tip for the Mods page.",
          kicker: "The Mod",
          boxes: [
            { name: "PLACEHOLDER MOD ONE",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD TWO",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD THREE", target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FOUR",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FIVE",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD SIX",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
          ],
        },

        /* PAGE 11 · NOW PLAYING — the closing hold card ----------------- */
        {
          key: "hold",
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Finish all six films for MI6 Multiball — yeah right.",
          line: "The most famous secret agent ever. Six iconic films. Push Start.",
        },

      ],
    },

    /* ======================================================================
       STAR WARS: FALL OF THE EMPIRE
       Pages play in the order they appear below. To reorder pages, move a
       whole { … } block. To remove one, delete its block.
       ====================================================================== */
    {
      game: "star-wars",            // code key — DO NOT change (wires photos, badge, accent)
      title: "Star Wars",
      maker: "Stern · 2025",
      proTip: "Play a Rebel Mission for every character you can — each one boosts that character’s jackpots in every multiball.",  // fallback footer tip if a page has none

      pages: [

        /* PAGE 1 · INTRO — cabinet, playfield & credits ----------------- */
        {
          key: "intro",
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2025",
          proTip: "John Borg’s return to Star Wars — his very first pinball design was Data East’s 1992 Star Wars.",
          credits: [
            { role: "Game Design", names: "John Borg" },
            { role: "Code / Rules", names: "Raymond Davidson, Andrew Wilkening" },
            { role: "Engineering / Mechanics", names: "John Rotharmel, Robert Blakeman" },
            { role: "Sound", names: "Jerry Thompson, Bob Baffy" },
            { role: "Release", names: "Stern · 2025 · Premium" },
          ],
        },

        /* PAGE 2 · GAME OVERVIEW — the big bullet points ---------------- */
        {
          key: "gameoverview",
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Every mission you play makes that character’s jackpots pay 2×, 3× or 4× in multiball.",
          intro: "Star Wars: Fall of the Empire marks designer John Borg’s return to the Star Wars license more than 30 years after his very first pinball machine, Data East’s 1992 Star Wars. Built on Stern’s new SPIKE 3 platform, it retells the Original Trilogy and digs into corners of the story earlier Star Wars machines passed over, as Luke and a ragtag band of rebels set out to bring down the Empire.",
          bullets: [
            "Spell FORCE to light Rebel Missions for eight characters.",
            "Played missions boost that character’s multiball jackpots.",
            "Falcon Features at the center ramp; Jabba Events in the Sarlacc Pit.",
            "Return lanes qualify Vader modes at the left scoop.",
            "Rip the spinners to spell JEDI for the magnet ball save.",
            "Five mini-wizards on the road to Jedi Master.",
          ],
        },

        /* PAGE 3 · THE RUNDOWN — six boxes, each expands full-stage ----- */
        {
          key: "rundown",
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2025",
          proTip: "Battle of Hoth and Lightspeed are the only two multiballs that stack — run them together.",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Four sets of modes run side by side: Rebel Missions, Falcon Features, Jabba Events and Vader modes.",
            rows: [
              { label: "Rebel Missions", target: "FORCE Targets", desc: "Spell FORCE to light the eight character shots." },
              { label: "Falcon Features", target: "Center Ramp", desc: "Shoot it when the Falcon’s engines are lit." },
              { label: "Jabba Events", target: "Sarlacc Pit", desc: "Drop Salacious Crumb twice, then spin the Pit to pick." },
              { label: "Vader Modes", target: "Left Scoop", desc: "Return lanes qualify; start when nothing else runs." },
              { label: "Rebel Combos", target: "Name Inserts", desc: "Two combos at one character starts its Super Mode." },
              { label: "Hyperspace Loops", target: "Right Ramp", desc: "TIE fighter thresholds start the loop jackpot." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Take down the AT-ATs, then both Death Stars.",
            rows: [
              { label: "Battle of Hoth", target: "Luke VUK", desc: "The Droids target lights locks; spell AT-AT for the super." },
              { label: "Death Star", target: "Death Star Ramp", desc: "Open the lock, then lock three balls." },
              { label: "Death Star II", target: "Death Star Ramp", desc: "Destroy the first Death Star to move on to the second." },
              { label: "Lightspeed", target: "Center Ramp", desc: "The first Falcon Feature — don’t miss its timed start." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "Jedi Master",
            body: "Five mini-wizards stand in the way — Not a Jedi Yet, Ewok Encounter, Sarlacc Escape, Never Tell Me The Odds and Dark Side Multiball — before the final showdown, Jedi Master.",
            chip: "◆ Five mini-wizards first",
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            lead: "Plunge and hit any flashing shot. Make it within three switches for a 2× Super Skill Shot.",
            rows: [
              { label: "Right Orbit", target: "Relight", desc: "Relights every skill shot to collect again." },
              { label: "Luke VUK", target: "FORCE", desc: "Spots three FORCE letters." },
              { label: "Left Orbit", target: "JEDI", desc: "Adds two JEDI letters." },
              { label: "Stormtrooper", target: "Hurry-Up", desc: "Starts the Stormtrooper hurry-up." },
            ],
          },
          button: {
            kicker: "Use the Force",
            title: "Action Button",
            lead: "Small button, big saves.",
            rows: [
              { label: "JEDI Ball Save", target: "Outlanes", desc: "Spell JEDI, then fire the magnet to toss a draining ball back." },
              { label: "Lock In Jabba", target: "Sarlacc Pit", desc: "Press while the ball spins to keep the Jabba Event you want." },
              { label: "Add-A-Ball", target: "Sarlacc Pit", desc: "Ten Pit spins in multiball light it." },
            ],
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Play missions before multiball — Force Boost multiplies those characters’ jackpots.",
            rows: [
              { name: "Missions First", body: "Every character you play boosts its jackpots in every multiball." },
              { name: "Respect Lightspeed", body: "Drain or time out in Lightspeed Escape and that multiball is gone." },
            ],
          },
        },

        /* PAGE 4 · REBEL MISSIONS ---------------------------------------- */
        {
          key: "missions",
          pageTitle: "Rebel Missions",
          eyebrow: "Spell FORCE To Light Them",
          proTip: "Four blue shots finish a mission — white shots don’t count, but they pump up the value.",
          kicker: "The Rebels",
          boxes: [
            { name: "Yoda", target: "Spinners", detail: "Spinners add 10k to the shot value per spin. Missions: Meeting Yoda, Jedi Training, Seeing the Future. Bonus: The Final Lesson — a long spinner mode with ball-save checkpoints." },
            { name: "Luke", target: "Luke VUK", detail: "The Luke VUK is always a possible blue shot, and it and the right ramp score 2×. Missions: Discovering the Force, Escaping the Death Star, Leaving Dagobah. Bonus: Dark Side Cave — spell FORCE inside the cave to face Vader." },
            { name: "Droids", target: "Slings & Bumpers", detail: "Slingshots and bumpers move which shot is lit for 2×. Missions: Rebel Ship, Welcome to Tatooine, Ewok Deity. Bonus: Find R2-D2 — lock in roving shots with the Droids target." },
            { name: "Lando", target: "Starts At 2×", detail: "Every blue shot starts at 2×, but too many sling or bumper hits drop it to 1×. Missions: Lando Calrissian, The Sellout, Lando’s Redemption. Bonus: Rescue Luke — a combo chase across the ramps." },
          ],
        },

        /* PAGE 5 · MORE REBEL MISSIONS ----------------------------------- */
        {
          key: "missions2",
          pageTitle: "More Rebel Missions",
          eyebrow: "Green · Yellow · Orange · Bonus",
          proTip: "Finish a mission, then shoot that character again with nothing running to start their Bonus Mission.",
          kicker: "The Rebels",
          boxes: [
            { name: "Han", target: "Hurry-Ups", detail: "Every shot is a hurry-up that starts high and counts down. Missions: Han vs Greedo, Where’s Luke, Frozen in Carbonite. Bonus: Han & Leia — alternate left and right shots, then finish at the center ramp." },
            { name: "Chewie", target: "Sarlacc Spins", detail: "Sarlacc Pit spins add 50k per spin, and the center ramp scores 2×. Missions: Dejarik, Find C-3PO, Fix C-3PO. Bonus: Reunion — trade Pit shots and center ramps." },
            { name: "Leia", target: "Right Ramp 2×", detail: "The Luke VUK and center ramp build value; the right ramp scores 2×. Missions: Jailbreak, Trash Compactor, Rescuing Han. Bonus: Speeder Bikes — hurry-ups that roll into a 2-ball multiball." },
            { name: "Obi-Wan", target: "VUK & Right Orbit", detail: "The Luke VUK and right orbit score 2× whenever they’re lit blue. Missions: Ben Meets Luke, The Message, Duel with Darth Vader. Bonus: Revealing the Truth — a marathon 28-shot mode." },
          ],
        },

        /* PAGE 6 · FALCON FEATURES --------------------------------------- */
        {
          key: "falcon",
          pageTitle: "Falcon Features",
          eyebrow: "Center Ramp · Engines Lit",
          proTip: "Right ramp into the center ramp as a combo gives two Falcon advances at once.",
          kicker: "The Millennium Falcon",
          boxes: [
            { name: "Lightspeed Escape", target: "Center Ramp", detail: "Build the jackpot, then make the timed center ramp to start Lightspeed Multiball. Drain or run out of time and — like Alderaan — it’s gone." },
            { name: "That’s No Moon", target: "Sets Of Three", detail: "Search for Alderaan through sets of three lit shots. The center shot of each set scores 2×, and leftover time pays a bonus." },
            { name: "Dogfight", target: "Center ↔ Right Ramp", detail: "Alternate the center and right ramps to shoot down TIE fighters. Combos into the right ramp score 2×." },
            { name: "Never Tell Me The Odds", target: "Mini-Wizard", detail: "The fourth Falcon Feature — a multiball run through the asteroid field. Hit white shots, dodge the red asteroids." },
            { name: "Welcome to Cloud City", target: "Both Orbits", detail: "Loop the left and right orbits for multiplied values, then cash both in at the center ramp." },
          ],
        },

        /* PAGE 7 · JABBA EVENTS ------------------------------------------ */
        {
          key: "jabba",
          pageTitle: "Jabba Events",
          eyebrow: "Into The Sarlacc Pit",
          proTip: "Press the action button while the ball spins in the Pit to lock in the Jabba Event you want.",
          kicker: "Jabba’s Palace",
          boxes: [
            { name: "Luke’s Gift", target: "Sarlacc Pit", detail: "Guide the droids into Jabba’s palace. Each shot resets a 30-second timer, and the final shot is always the Sarlacc Pit." },
            { name: "Jabba’s Palace", target: "Drop Target", detail: "Make lit shots to relight Salacious Crumb for bigger awards. Three drop target hits light the Pit for 5×." },
            { name: "Rancor Battle", target: "Shot Sequence", detail: "Untimed: Luke VUK, right orbit, right ramp, center ramp twice, Luke VUK, then the Pit. Quick combos multiply up to 3×." },
            { name: "Sarlacc Escape", target: "Mini-Wizard", detail: "Play all three Jabba Events to unlock the fourth — a multiball where every Pit spin scores the jackpot." },
          ],
        },

        /* PAGE 8 · VADER MODES ------------------------------------------- */
        {
          key: "vader",
          pageTitle: "Vader Modes",
          eyebrow: "The Dark Side",
          proTip: "The shot that starts a Vader mode adds +1× every time you return to it — slow down and farm it.",
          kicker: "Lord Vader",
          boxes: [
            { name: "Qualify", target: "Return Lanes", detail: "The return lanes alternate between lighting Dark Side Mystery and qualifying a Vader mode at the left scoop. Start it when nothing else is running." },
            { name: "Pick Your Scene", target: "Left Scoop", detail: "After the scoop, the lit shot you hit picks the scene. Each Vader mode can only be played once per game." },
            { name: "The Eight Scenes", target: "Start Shots", detail: "Tarkin (bumpers) · Lord Vader Arrives (left scoop) · Emperor’s Guidance (orbits) · Family Reunion (Luke VUK) · Death Star II Plans (Death Star) · Bounty Hunters (Sarlacc Pit) · Lack of Faith (Stormtrooper) · Emperor’s Orders (return lanes)." },
            { name: "Finish At Vader", target: "Vader Scoop", detail: "Every Vader mode ends with a shot to the Vader scoop, and each one you finish adds 500k to the next mode’s shot value." },
            { name: "Dark Side Scoring", target: "Purple Shot", detail: "Finish any Vader mode and a roving purple shot pays 5% of your Vader points for the rest of the ball. Five of them light extra ball." },
            { name: "Dark Side Multiball", target: "Ten Purple Shots", detail: "Ten Dark Side shots light a 3-ball mini-wizard. The Death Star scores 2× and relights every shot." },
          ],
        },

        /* PAGE 9 · WIZARD MODES ------------------------------------------ */
        {
          key: "wizards",
          pageTitle: "Wizard Modes",
          eyebrow: "The Road To Jedi Master",
          proTip: "Each Bonus Mission you finish cuts the characters needed for Not a Jedi Yet and Ewok Encounter by one.",
          kicker: "The End Game",
          boxes: [
            { name: "Not a Jedi Yet", target: "4 Characters", detail: "Play a mission for four different characters. Duel Vader in Cloud City — shots go white, blue, then red, and once a red shot is made it’s gone." },
            { name: "Ewok Encounter", target: "All 8 Characters", detail: "Play a mission for all eight characters. A four-phase battle on Endor, peaking with a six-ball Battle Multiball." },
            { name: "Sarlacc Escape", target: "3 Jabba Events", detail: "A switch-frenzy multiball. Every Pit spin scores the jackpot, and four jackpots light the super at the left scoop." },
            { name: "Never Tell Me The Odds", target: "3 Falcon Features", detail: "A 3-ball asteroid field where scoring multiplies by balls in play. Hit white shots, avoid the red, then escape up the center ramp." },
            { name: "Dark Side Multiball", target: "10 Dark Side Shots", detail: "A 3-ball multiball where every shot scores the Dark Side award. Finish with a hurry-up at the left scoop." },
            { name: "Jedi Master", target: "The Final Wizard", detail: "The end of the road — the final wizard mode waiting beyond the mini-wizards." },
          ],
        },

        /* PAGE 10 · OTHER SCORING ---------------------------------------- */
        {
          key: "other",
          pageTitle: "Other Scoring",
          eyebrow: "Points Are Points",
          proTip: "Light an Ion Cannon multiplier on your best shot — it stays 2× for the rest of the ball.",
          kicker: "Everything Else",
          boxes: [
            { name: "Ion Cannons", target: "Pop Bumpers", detail: "Bumper hits charge the cannons. The next pulsing shot you make locks in at 2× for the rest of the ball." },
            { name: "Rebel Combos", target: "Name Inserts", detail: "Combo into a flashing yellow character name. Two combos at one character starts its untimed Super Mode." },
            { name: "Hyperspace Loops", target: "Right Ramp", detail: "Collect TIE fighters at the right ramp. 5, 15 and 45 start Hyperspace Loops; 10, 30 and 60 light extra ball." },
            { name: "Stormtrooper Hurry-Up", target: "Stormtrooper Target", detail: "Two Stormtroopers start a 10M hurry-up at the far-right target. Each one you finish adds +1× to bonus." },
            { name: "Dark Side Mystery", target: "Left Scoop", detail: "The return lanes light Mystery. Two Mystery awards unlock Mynock Multiball on the Premium — pound the lowered center ramp." },
            { name: "JEDI Ball Save", target: "Spinners", detail: "Rip the spinners to spell JEDI. On the Premium, the action button fires the magnet under the flippers to toss a draining ball back." },
          ],
        },

        /* PAGE 11 · MULTIBALL OVERVIEW — one box per multiball ---------- */
        {
          key: "multiball",
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2025",
          proTip: "Play Rebel Missions before multiball — Force Boost makes those characters’ jackpots pay 2×, 3× or 4×.",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Battle of Hoth",
              target: "Droids Target → Luke VUK",
              detail: "Hit the Droids target in front of the AT-AT to light locks at the Luke VUK. Lock three to start.",
              objective: "Spell AT-AT, then take the walker down at the Luke shot.",
              jackpots: "Score a jackpot anywhere, then the Droids target for a letter jackpot worth everything before it. Spell AT-AT and the Luke VUK pays the super.",
              tip: "Stack it with Lightspeed — the only two multiballs that run together.",
            },
            {
              name: "Death Star",
              target: "Death Star Ramp",
              detail: "Shoot the ramp to open the lock, then again to lock a ball. Three locks start it.",
              objective: "Score fifteen jackpots, then open the Death Star for a 20M super.",
              jackpots: "Every shot is lit; a shot goes dark until you hit a different one. Jackpots during the super phase raise it to 2×, then 3×.",
              tip: "Super jackpot progress carries over between Death Star attempts.",
            },
            {
              name: "Death Star II",
              target: "Death Star Ramp",
              detail: "Destroy the first Death Star and the locks move on to the second.",
              objective: "Climb through 2× and 3× jackpots to light a 12× super.",
              jackpots: "The super lands at the center ramp — two balls through it in quick succession.",
              tip: "Jackpot shots don’t relight here — spread your shots.",
            },
            {
              name: "Lightspeed",
              target: "Center Ramp",
              detail: "The first Falcon Feature. Build value, then make the timed center ramp to launch it.",
              objective: "Hit three lit shots to light a looping super jackpot.",
              jackpots: "The super is 5× the jackpot — repeat the center jump ramp before time runs out.",
              tip: "Stack it with Battle of Hoth for double the chaos.",
            },
          ],
        },

        /* PAGE 12 · STRATEGY & TIPS -------------------------------------- */
        {
          key: "strategy",
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Spell JEDI early — the Premium’s magnet save is the best friend you’ll have on this table.",
          kicker: "House Advice",
          boxes: [
            { name: "Missions First", detail: "Every character mission you play boosts its jackpots in every multiball for the rest of the game." },
            { name: "Respect Lightspeed", detail: "Lightspeed Escape is one chance — drain or time out and that multiball is gone." },
            { name: "Stack Hoth + Lightspeed", detail: "They’re the only two multiballs that stack. Run them together." },
            { name: "Spell JEDI", detail: "Rip the spinners early; the magnet ball save bails you out of outlane drains." },
            { name: "Farm The Start Shot", detail: "In Vader modes the starting shot adds +1× each time — patience pays." },
            { name: "Ion Cannons Early", detail: "Lock 2× multipliers on your favorite shots before the big modes." },
          ],
        },

        /* PAGE · MODS — geeky additions & customization -------------- */
        {
          key: "mods",
          pageTitle: "Mods",
          eyebrow: "Geeky Additions and Customization",
          proTip: "PLACEHOLDER — footer tip for the Mods page.",
          kicker: "The Mod",
          boxes: [
            { name: "PLACEHOLDER MOD ONE",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD TWO",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD THREE", target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FOUR",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FIVE",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD SIX",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
          ],
        },

        /* PAGE 9 · NOW PLAYING — the closing hold card ------------------ */
        {
          key: "hold",
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Five mini-wizards stand between you and Jedi Master.",
          line: "The Empire’s on the ropes. Go finish it.",
        },

      ],
    },

    /* ======================================================================
       GODZILLA
       Pages play in the order they appear below. To reorder pages, move a
       whole { … } block. To remove one, delete its block.
       ====================================================================== */
    {
      game: "godzilla",            // code key — DO NOT change (wires photos, badge, accent)
      title: "Godzilla",
      maker: "Stern · 2021",
      proTip: "Just starting an objective counts — you don’t have to finish it to move the city along.",  // fallback footer tip if a page has none

      pages: [

        /* PAGE 1 · INTRO — cabinet, playfield & credits ----------------- */
        {
          key: "intro",
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2021",
          proTip: "Four cities, four Kaiju — defend them all the way to Planet X.",
          credits: [
            { role: "Game Design", names: "Keith Elwin" },
            { role: "Code / Rules", names: "Rick Naegele, Keith Elwin" },
            { role: "Engineering", names: "Harrison Drake" },
            { role: "Artwork", names: "Zombie Yeti" },
            { role: "CG Art", names: "Chuck Ernst" },
            { role: "Sound", names: "Jerry Thompson" },
          ],
        },

        /* PAGE 2 · GAME OVERVIEW — the big bullet points ---------------- */
        {
          key: "gameoverview",
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Just starting a city objective advances it — you don’t have to finish.",
          intro: "Godzilla is the fourth Stern pinball machine designed by Keith Elwin and the first machine to implement Stern Insider Connected, released in September 2021. The table depicts events from 10 classic Godzilla films in an original story depicting Godzilla fighting against the Xilien invasion of Earth, while tearing up a few cities for good measure.",
          bullets: [
            "Defend four cities from the Xilien invasion.",
            "Just starting a city objective advances it — you don’t have to finish.",
            "Kaiju battles, Tesla strikes, and building multiball anchor the game.",
            "Pick an ally at the scoop for a scoring or safety boost.",
            "Conquer every city and reach Planet X for King of the Monsters.",
            "Three multiballs: Godzilla, Mechagodzilla, Saucer Attack.",
          ],
        },

        /* PAGE 3 · THE RUNDOWN — six boxes, each expands full-stage ----- */
        {
          key: "rundown",
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2021",
          proTip: "Three multiballs stomp the city: Godzilla, Mechagodzilla, Saucer Attack.",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Defend four cities from the Xilien invasion. Start every objective in a city, beat its Kaiju, then push on to Planet X.",
            rows: [
              { label: "Kaiju Battle", target: "The Scoop", desc: "Shoot both ramps to light it, then pick your monster." },
              { label: "Tesla Strike", target: "Powerlines", desc: "Down the power grid for a bonus mode." },
              { label: "Bridge Attack", target: "The Bridge", desc: "Multiball — topple the span." },
              { label: "Tank Attack", target: "The Tanks", desc: "Multiball — crush the armor." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Three multiballs stomp the city flat.",
            rows: [
              { label: "Godzilla Multiball", target: "The Building", desc: "Batter it down, then shoot it again to start." },
              { label: "Mechagodzilla Multiball", target: "Right Spinner", desc: "Ramp the spinner, hit the blue targets, rip again." },
              { label: "Saucer Attack Multiball", target: "Pop Bumpers", desc: "Down the saucers to trigger it." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "King of the Monsters",
            body: "Conquer the cities and reach Planet X. Monster Zero, Terror of Mechagodzilla and Planet X Multiball lead to the King of the Monsters finale.",
            chip: "◆ Conquer every city",
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            lead: "The plunger is player-controlled — aim your skill shot.",
            rows: [
              { label: "Short Plunge", target: "Bumper Lane", desc: "Feed the first switch for a building skill shot." },
              { label: "Secret Skill", target: "Left Spinner", desc: "Plunge behind the upper flipper for the big one." },
            ],
          },
          button: {
            kicker: "Choose your monster",
            title: "Ally Select",
            lead: "Use the flipper buttons to pick the ally you collect at the scoop.",
            rows: [
              { label: "Rodan", target: "2× Scoring", desc: "A minute of doubled points." },
              { label: "Mothra", target: "Ball Save", desc: "Lights the left outlane." },
              { label: "Anguirus", target: "Add-A-Ball", desc: "Qualifies an extra ball in multiball." },
            ],
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Just starting an objective advances the city — you don’t have to finish it.",
            rows: [
              { name: "Start, Don’t Finish", body: "Starting any objective moves the city along." },
              { name: "Powerups Matter", body: "Feed the Godzilla Powerup meter toward the wizard modes." },
            ],
          },
        },

        /* PAGE 4 · CITIES ----------------------------------------------- */
        {
          key: "cities",
          pageTitle: "Cities",
          eyebrow: "Each One A Battleground",
          proTip: "Just starting an objective counts — you don’t have to finish it to move the city along.",
          kicker: "Defend & Destroy",
          boxes: [
            { name: "City Round 1", target: "The Building", detail: "Topple the tower and clear the first city’s objectives." },
            { name: "City Round 2", target: "The Bridge", detail: "Down the span, then sweep the flashing city shots." },
            { name: "City Round 3", target: "The Tanks", detail: "Crush the armor rolling through the third city." },
            { name: "City Round 4", target: "Powerlines", detail: "Kill the grid to finish the last city before Planet X." },
          ],
        },

        /* PAGE 5 · KAIJU BATTLES ---------------------------------------- */
        {
          key: "kaiju",
          pageTitle: "Kaiju Battles",
          eyebrow: "Light It At The Scoop",
          proTip: "Just starting an objective counts — you don’t have to finish it to move the city along.",
          kicker: "Choose Your Monster",
          boxes: [
            { name: "Mechagodzilla", target: "Right Spinner", detail: "The mechanical menace — ramp the spinner, then rip it again." },
            { name: "King Ghidorah", target: "The Scoop", detail: "The three-headed terror from Planet X." },
            { name: "Ebirah", target: "Left Ramp", detail: "The giant crustacean rising from the bay." },
            { name: "Titanosaurus", target: "Right Ramp", detail: "The aquatic dinosaur summoned to level the city." },
            { name: "Gigan", target: "Left Orbit", detail: "The cyborg with the buzzsaw chest." },
            { name: "Megalon", target: "Right Orbit", detail: "The drill-handed defender of the underground." },
          ],
        },

        /* PAGE 6 · MINI WIZARD MODES ------------------------------------ */
        {
          key: "miniwizards",
          pageTitle: "Mini Wizard Modes",
          eyebrow: "Earned, Not Given",
          proTip: "Just starting an objective counts — you don’t have to finish it to move the city along.",
          kicker: "The Big Rounds",
          boxes: [
            { name: "Monster Zero", target: "All Shots", detail: "A frenzy earned by starting enough Kaiju battles." },
            { name: "Terror of Mechagodzilla", target: "All Shots", detail: "The reward for defending every city." },
            { name: "Planet X", target: "The Scoop", detail: "The gateway multiball on the road to King of the Monsters." },
          ],
        },

        /* PAGE 7 · MORE FROM TOKYO -------------------------------------- */
        {
          key: "moreTokyo",
          pageTitle: "More From Tokyo",
          eyebrow: "Fill In With Real Content",
          proTip: "Placeholder pro tip — replace with real copy.",
          kicker: "Placeholder Section",
          boxes: [
            { name: "Placeholder 1", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 2", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 3", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 4", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 5", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 6", target: "TBD", detail: "Add real content here." },
          ],
        },

        /* PAGE 8 · MULTIBALL OVERVIEW — one box per multiball ----------- */
        {
          key: "multiball",
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2021",
          proTip: "Batter the building down first — it’s the fastest path into Godzilla Multiball.",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Godzilla Multiball",
              target: "The Building",
              detail: "Batter the building down, then shoot it again to start.",
              objective: "Batter the building flat for repeated jackpot runs.",
              jackpots: "Six jackpots light the Super.",
              tip: "Save it to stack with a city objective.",
            },
            {
              name: "Mechagodzilla Multiball",
              target: "Right Spinner",
              detail: "Ramp the spinner, hit the blue targets, then rip it again.",
              objective: "Grind the spinner and blue targets to build toward the mechanical menace's jackpots.",
              jackpots: "Spinner rips build every jackpot’s value.",
              tip: "Keep the spinner spinning to grow the jackpots.",
            },
            {
              name: "Saucer Attack Multiball",
              target: "Pop Bumpers",
              detail: "Down the saucers in the bumpers to trigger it.",
              objective: "Clear the pop bumpers to unleash a fast, chaotic jackpot round.",
              jackpots: "Jackpots at the orbits and ramps.",
              tip: "Feed the pops early to light it fast.",
            },
          ],
        },

        /* PAGE 9 · STRATEGY & TIPS -------------------------------------- */
        {
          key: "strategy",
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Feed the Powerup meter between modes; it fuels the wizard run.",
          kicker: "House Advice",
          boxes: [
            { name: "Start, Don’t Finish", detail: "Starting any objective advances the city — bank progress fast." },
            { name: "Pick Rodan", detail: "Choose the 2× ally before a big multiball for doubled points." },
            { name: "Feed The Powerup", detail: "Build the Godzilla Powerup meter toward the wizard modes." },
            { name: "Stack The Building", detail: "Start Godzilla Multiball inside a city mode to double up." },
            { name: "Secret Skill", detail: "Plunge behind the upper flipper for the big skill shot." },
            { name: "Save Mothra", detail: "Choose Mothra’s ball save when your outlanes are hungry." },
          ],
        },

        /* PAGE · MODS — geeky additions & customization -------------- */
        {
          key: "mods",
          pageTitle: "Mods",
          eyebrow: "Geeky Additions and Customization",
          proTip: "PLACEHOLDER — footer tip for the Mods page.",
          kicker: "The Mod",
          boxes: [
            { name: "PLACEHOLDER MOD ONE",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD TWO",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD THREE", target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FOUR",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FIVE",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD SIX",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
          ],
        },

        /* PAGE 10 · NOW PLAYING — the closing hold card ----------------- */
        {
          key: "hold",
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Conquer every city and reach Planet X for King of the Monsters.",
          line: "The city’s yours to save. Go be King of the Monsters.",
        },

      ],
    },

    /* ======================================================================
       DEADPOOL
       Pages play in the order they appear below. To reorder pages, move a
       whole { … } block. To remove one, delete its block.
       ====================================================================== */
    {
      game: "deadpool",            // code key — DO NOT change (wires photos, badge, accent)
      title: "Deadpool",
      maker: "Stern · 2018",
      proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole playfield.",  // fallback footer tip if a page has none

      pages: [

        /* PAGE 1 · INTRO — cabinet, playfield & credits ----------------- */
        {
          key: "intro",
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2018",
          proTip: "Start battles at the scoop; team-ups make everything hit harder.",
          credits: [
            { role: "Game Design", names: "George Gomez" },
            { role: "Code / Rules", names: "Tanio Klyce" },
            { role: "Artwork", names: "Zombie Yeti" },
            { role: "Release", names: "Stern · 2018" },
          ],
        },

        /* PAGE 2 · GAME OVERVIEW — the big bullet points ---------------- */
        {
          key: "gameoverview",
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Bank Wolverine before a battle — it doubles all the damage you deal.",
          intro: "Deadpool, based on the Marvel character of the same name, is a George Gomez design released in 2018. The game uses a video game-inspired aesthetic to convey Deadpool’s mischievous nature as he fights against various villains and travels back in time to obtain valuable artifacts, though Mr. Sinister is plotting something even Deadpool might not expect.  Features hilarious callouts and an amazing custom soundtrack of original, Deadpool themed songs.",
          bullets: [
            "Start battles at the scoop; beat the villain’s flashing shots.",
            "Team-ups double your damage and points — bank them first.",
            "Spell BOOM and hold the button to spot the best shot on the field.",
            "Four multiballs keep the field busy.",
            "Beat every battle twice to reach the Final Battle with Mr. Sinister.",
            "Multiballs: Ninja, Disco, Mechsuit — Sauron caps them.",
          ],
        },

        /* PAGE 3 · THE RUNDOWN — six boxes, each expands full-stage ----- */
        {
          key: "rundown",
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2018",
          proTip: "Three multiballs and Sinister: Ninja, Disco, Mechsuit, then the Final Battle.",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Start battles at the scoop, beat the villain’s flashing shots, then finish him off. Bank team-ups to hit a whole lot harder.",
            rows: [
              { label: "Battles", target: "The Scoop", desc: "Complete DEAD, then start Juggernaut, Mystique or Sabretooth." },
              { label: "Wolverine Team-Up", target: "Center Spinner", desc: "Bank it to double all battle damage." },
              { label: "Ninja Multiball", target: "Right Ramp", desc: "Lock three balls to start it." },
              { label: "Playfield X", target: "SNIKT Target", desc: "Ricochet onto the right ramp for up to 5×." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Four multiballs, one merc with a mouth.",
            rows: [
              { label: "Ninja Multiball", target: "Right Ramp", desc: "Lock three balls to start it." },
              { label: "Disco Multiball", target: "Left Spinner", desc: "Rip the spinner enough times." },
              { label: "Mechsuit Multiball", target: "Weapons → Scoop", desc: "Cash out weapons to start it." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "The Final Battle",
            body: "Replay the three battles — harder — for Clone Multiball, then face Mr. Sinister in the Final Battle at the end of it all.",
            chip: "◆ Beat every battle twice",
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            lead: "Hold the left flipper and pick your skill shot.",
            rows: [
              { label: "Lane Skill", target: "Flashing BAM! Lane", desc: "Plunge into the lit lane." },
              { label: "Super Secret", target: "SNIKT → Right Ramp", desc: "Combo it for a fortune plus a playfield X." },
            ],
          },
          button: {
            kicker: "Spell BOOM",
            title: "The BOOM Button",
            lead: "Spots the highest-value shot on the field. Stack four for a Big Boom that spots everything.",
            rows: [
              { label: "Boom", target: "Highest Shot", desc: "Instantly collect the top lit shot." },
              { label: "Big Boom", target: "Everything", desc: "Four BOOMs spot the whole field." },
            ],
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole field.",
            rows: [
              { name: "Stack Team-Ups", body: "Wolverine doubles damage; Colossus doubles points." },
              { name: "Playfield X", body: "Ricochet the SNIKT target to the right ramp for up to 5×." },
            ],
          },
        },

        /* PAGE 4 · THE BATTLES ------------------------------------------ */
        {
          key: "battles",
          pageTitle: "The Battles",
          eyebrow: "Complete DEAD First",
          proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole playfield.",
          kicker: "Start At The Scoop",
          boxes: [
            { name: "Juggernaut", target: "The Scoop", detail: "The unstoppable freight-train fight." },
            { name: "Sabretooth", target: "The Scoop", detail: "A brawl of claws and healing factors." },
            { name: "Mystique", target: "The Scoop", detail: "The shape-shifter who never fights straight." },
          ],
        },

        /* PAGE 5 · THE QUESTS ------------------------------------------- */
        {
          key: "quests",
          pageTitle: "The Quests",
          eyebrow: "Points On The Way",
          proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole playfield.",
          kicker: "Side Missions",
          boxes: [
            { name: "Chimichanga", target: "Left Ramp", detail: "Collect food shots for a quick scoring run." },
            { name: "Disco", target: "Left Spinner", detail: "Rip the spinner to fuel the Disco multiball." },
            { name: "Weapons Plus", target: "Standups", detail: "Bank weapon targets to cash out at the scoop." },
          ],
        },

        /* PAGE 6 · TEAM-UPS --------------------------------------------- */
        {
          key: "teamups",
          pageTitle: "Team-Ups",
          eyebrow: "Stack Before A Battle",
          proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole playfield.",
          kicker: "Bank The Ally",
          boxes: [
            { name: "Wolverine", target: "Center Spinner", detail: "Doubles all battle damage — the essential stack." },
            { name: "Colossus", target: "Right Ramp", detail: "Doubles points during the battle." },
            { name: "Domino", target: "Left Ramp", detail: "Luck powers add-a-ball and saves." },
            { name: "Negasonic", target: "Left Orbit", detail: "Explosive help for a big finish." },
          ],
        },

        /* PAGE 7 · LIL’ DEADPOOL ---------------------------------------- */
        {
          key: "lildeadpool",
          pageTitle: "Lil’ Deadpool",
          eyebrow: "Little Merc, Big Points",
          proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole playfield.",
          kicker: "The Bonus Bug",
          boxes: [
            { name: "Lil’ Deadpool", target: "Mini Playfield", detail: "Feed the little guy to build a growing bonus multiplier." },
          ],
        },

        /* PAGE 8 · MR. SINISTER MODES ----------------------------------- */
        {
          key: "sinister",
          pageTitle: "Mr. Sinister Modes",
          eyebrow: "Beat Every Battle Twice",
          proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole playfield.",
          kicker: "The End Game",
          boxes: [
            { name: "Clone Multiball", target: "All Shots", detail: "Replay the three battles — harder — for the clone army." },
            { name: "The Final Battle", target: "The Scoop", detail: "Face Mr. Sinister himself — the goal of the whole game." },
          ],
        },

        /* PAGE 9 · MORE MERC MAYHEM ------------------------------------- */
        {
          key: "moreMayhem",
          pageTitle: "More Merc Mayhem",
          eyebrow: "Fill In With Real Content",
          proTip: "Placeholder pro tip — replace with real copy.",
          kicker: "Placeholder Section",
          boxes: [
            { name: "Placeholder 1", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 2", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 3", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 4", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 5", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 6", target: "TBD", detail: "Add real content here." },
          ],
        },

        /* PAGE 10 · MULTIBALL OVERVIEW — one box per multiball ---------- */
        {
          key: "multiball",
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2018",
          proTip: "Lock three on the right ramp for Ninja — the easiest multiball to start.",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Ninja Multiball",
              target: "Right Ramp",
              detail: "Lock three balls at the right ramp.",
              objective: "Lock three at the right ramp for a straightforward jackpot run.",
              jackpots: "Jackpots at the lit ramps and loops.",
              tip: "Stack with a team-up for doubled jackpots.",
            },
            {
              name: "Disco Multiball",
              target: "Left Spinner",
              detail: "Rip the spinner enough times to light it.",
              objective: "Keep the spinner spinning for a groove-powered jackpot party.",
              jackpots: "Spinner value feeds the jackpots.",
              tip: "Keep the ball on the left for spinner rips.",
            },
            {
              name: "Mechsuit Multiball",
              target: "Weapons → Scoop",
              detail: "Cash out collected weapons at the scoop.",
              objective: "Cash in banked weapons for an armored jackpot assault.",
              jackpots: "Each weapon cashed raises the jackpot.",
              tip: "Collect weapons before cashing for a bigger start.",
            },
          ],
        },

        /* PAGE 11 · STRATEGY & TIPS ------------------------------------- */
        {
          key: "strategy",
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Ricochet the SNIKT target to the right ramp for up to 5× playfield.",
          kicker: "House Advice",
          boxes: [
            { name: "Spell BOOM", detail: "Hold the button to spot the highest-value shot on the field." },
            { name: "Stack Team-Ups", detail: "Wolverine doubles damage; Colossus doubles points." },
            { name: "Playfield X", detail: "Ricochet the SNIKT target to the right ramp for up to 5×." },
            { name: "Battle Order", detail: "Chip the easy villains first to build toward Sauron." },
            { name: "Super Secret", detail: "Combo SNIKT to the right ramp for a fortune plus a multiplier." },
            { name: "Don’t Camp", detail: "Move between battles and multiballs — repeats score less." },
          ],
        },

        /* PAGE · MODS — geeky additions & customization -------------- */
        {
          key: "mods",
          pageTitle: "Mods",
          eyebrow: "Geeky Additions and Customization",
          proTip: "PLACEHOLDER — footer tip for the Mods page.",
          kicker: "The Mod",
          boxes: [
            { name: "PLACEHOLDER MOD ONE",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD TWO",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD THREE", target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FOUR",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FIVE",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD SIX",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
          ],
        },

        /* PAGE 12 · NOW PLAYING — the closing hold card ----------------- */
        {
          key: "hold",
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Beat every battle twice for Clone Multiball, then face Mr. Sinister.",
          line: "Maximum effort. Go break the fourth wall.",
        },

      ],
    },

    /* ======================================================================
       FOO FIGHTERS
       Pages play in the order they appear below. To reorder pages, move a
       whole { … } block. To remove one, delete its block.
       ====================================================================== */
    {
      game: "foo-fighters",            // code key — DO NOT change (wires photos, badge, accent)
      title: "Foo Fighters",
      maker: "Stern · 2023",
      proTip: "Mod the van before you start a city — a modded run scores far, far more.",  // fallback footer tip if a page has none

      pages: [

        /* PAGE 1 · INTRO — cabinet, playfield & credits ----------------- */
        {
          key: "intro",
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2023",
          proTip: "Tour the country in the van; save each city from the Overlord.",
          credits: [
            { role: "Game Design", names: "Jack Danger" },
            { role: "Code / Rules", names: "Tanio Klyce, Raymond Davidson" },
            { role: "Artwork", names: "Zombie Yeti" },
            { role: "Sound", names: "Bob Baffy" },
            { role: "Release", names: "Stern · 2023" },
          ],
        },

        /* PAGE 2 · GAME OVERVIEW — the big bullet points ---------------- */
        {
          key: "gameoverview",
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Mod the van before a city — a modded run scores far, far more.",
          intro: "Jack Danger’s first full-fledged pinball machine. Foo Fighters is based on a fictional Saturday morning cartoon series where the band is a group of heroes with a giant robot, fighting against a being known only as the Overlord that aims to reformat the world and erase all music from existence. Players take control of the Fighters’ stylish van, mod it out, and save the cities that the Overlord has conquered while defeating his army of spider-bots.",
          bullets: [
            "Travel the country in the Foo Fighter's tour van; save each city from the Overlord.",
            "Mod the van before a city — a modded run scores far more.",
            "Charge the Action Button at the captive ball to collect lit shots.",
            "Climb the Rock-O-Meter to 2× then 3× playfield.",
            "Save six cities to reach the Final Battle.",
            "Three multiballs: Overlord, Area 51, Combotron.",
          ],
        },

        /* PAGE 3 · THE BAND --------------------------------------------- */
        {
          key: "band",
          pageTitle: "The Band",
          eyebrow: "Who You’re Playing With",
          proTip: "Six players, one van — the real Foo Fighters ride along the whole tour.",
          kicker: "Foo Fighters",
          boxes: [
            { name: "Dave Grohl", target: "Vocals · Guitar", detail: "Founder and frontman — the ex-Nirvana drummer who put the band together in 1994." },
            { name: "Nate Mendel", target: "Bass", detail: "On bass since day one — the low-end backbone of every record." },
            { name: "Pat Smear", target: "Guitar", detail: "Founding guitarist and punk veteran — the wall of rhythm guitar." },
            { name: "Chris Shiflett", target: "Lead Guitar", detail: "Lead guitar since 1999 — the solos and the sharp riffs." },
            { name: "Rami Jaffee", target: "Keys", detail: "Keyboards and organ — the texture under the anthems." },
            { name: "Taylor Hawkins", target: "Drums", detail: "The powerhouse drummer and Grohl’s foil from 1997 — forever a Foo Fighter." },
          ],
        },

        /* PAGE 4 · THE RUNDOWN — six boxes, each expands full-stage ----- */
        {
          key: "rundown",
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2023",
          proTip: "Three multiballs on the tour: Overlord, Area 51, Combotron.",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Tour the country in the van, save each city from the Overlord, and mod the van so every run scores more.",
            rows: [
              { label: "Van Mode", target: "Left Ramp", desc: "Spell V-A-N with white shots, then start a city." },
              { label: "Mod the Van", target: "Paddle Target", desc: "Behind the drops — upgrades boost the whole run." },
              { label: "Charge the Button", target: "Captive Ball", desc: "Bank hits so the button collects lit shots." },
              { label: "Rock-O-Meter", target: "Right Orbit", desc: "Climb toward 2×, then 3× playfield." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Three multiballs save the tour.",
            rows: [
              { label: "Overlord Multiball", target: "The Overlord", desc: "Green it, lock a ball, pound the captive ball." },
              { label: "Area 51 Multiball", target: "Right Ramp", desc: "Five ramp shots; super is ramp → captive combo." },
              { label: "Combotron Multiball", target: "Side Ramp", desc: "Six combos, then the side ramp." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "The Final Battle",
            body: "Clear the major objectives — cities, frenzies, Area 51 — for FooBot Multiball, then take on the Overlord in the Final Battle.",
            chip: "◆ Save six cities",
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            lead: "A skill shot waits at every plunge.",
            rows: [
              { label: "Rock-O-Meter", target: "Plunge Lane", desc: "Time the flashing insert for a full level." },
              { label: "Super Skill", target: "Left Crossover", desc: "Chain the side loop up to a six-way." },
            ],
          },
          button: {
            kicker: "Charge it first",
            title: "Action Button",
            lead: "Charge the button at the captive ball, then press it to collect lit shots during modes and multiballs.",
            rows: [
              { label: "Charge", target: "Captive Ball", desc: "Bank hits to load the button." },
              { label: "Collect", target: "Lit Shots", desc: "Press to grab lit value hands-free." },
            ],
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Mod the van before you start a city — a modded run scores far, far more.",
            rows: [
              { name: "Mod The Van", body: "Hit the paddle first; a modded run scores far more." },
              { name: "Climb The Meter", body: "Right orbit builds 2× then 3× playfield." },
            ],
          },
        },

        /* PAGE 5 · VAN MODES (CITIES) ----------------------------------- */
        {
          key: "vanmodes",
          pageTitle: "Van Modes (Cities)",
          eyebrow: "Save Each City",
          proTip: "Mod the van before you start a city — a modded run scores far, far more.",
          kicker: "Spell V-A-N",
          chipByCity: true,
          boxes: [
            { name: "Los Angeles", target: "Left Ramp", detail: "Kick off the tour and save the first city from the Overlord.", img: "assets/foo-city-la.png" },
            { name: "Chicago", target: "Right Ramp", detail: "Work the ramps to clear the second stop.", img: "assets/foo-city-chicago.png" },
            { name: "New York", target: "Left Orbit", detail: "A crowded run — combo the loops to clear it.", img: "assets/foo-city-newyork.png" },
            { name: "New Orleans", target: "Left Loop", detail: "Second-line through the loop shots to clear the city.", img: "assets/foo-city-neworleans.png" },
            { name: "Seattle", target: "Right Orbit", detail: "The rainy city and its tricky shots.", img: "assets/foo-city-seattle.png" },
            { name: "Roswell", target: "Captive Ball", detail: "Strange lights over the desert — the road to Area 51.", img: "assets/foo-city-roswell.png" },
          ],
        },

        /* PAGE 6 · THE MODULATOR ---------------------------------------- */
        {
          key: "modulator",
          pageTitle: "The Modulator",
          eyebrow: "Upgrade Before A City",
          proTip: "Mod the van before you start a city — a modded run scores far, far more.",
          kicker: "Mod The Van",
          boxes: [
            { name: "Mod The Van", target: "Paddle Target", detail: "Behind the drops — upgrades boost the whole run." },
            { name: "Rock-O-Meter", target: "Right Orbit", detail: "Climb toward 2×, then 3× playfield." },
            { name: "Charge Up", target: "Captive Ball", detail: "Bank hits so the action button collects lit shots." },
          ],
        },

        /* PAGE 7 · WIZARD MODES ----------------------------------------- */
        {
          key: "wizards",
          pageTitle: "Wizard Modes",
          eyebrow: "Clear The Objectives",
          proTip: "Mod the van before you start a city — a modded run scores far, far more.",
          kicker: "The Big Finishes",
          boxes: [
            { name: "FooBot Multiball", target: "All Shots", detail: "Earned by clearing cities, frenzies and Area 51." },
            { name: "The Final Battle", target: "Side Ramp", detail: "Take on the Overlord for the whole tour." },
          ],
        },

        /* PAGE 8 · MORE FROM THE TOUR ----------------------------------- */
        {
          key: "moreTour",
          pageTitle: "More From The Tour",
          eyebrow: "Fill In With Real Content",
          proTip: "Placeholder pro tip — replace with real copy.",
          kicker: "Placeholder Section",
          boxes: [
            { name: "Placeholder 1", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 2", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 3", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 4", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 5", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 6", target: "TBD", detail: "Add real content here." },
          ],
        },

        /* PAGE 9 · MULTIBALL OVERVIEW — one box per multiball ----------- */
        {
          key: "multiball",
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2023",
          proTip: "Green the Overlord, lock a ball, then pound the captive ball for jackpots.",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Overlord Multiball",
              target: "The Overlord",
              detail: "Green the Overlord, lock a ball, pound the captive ball.",
              objective: "Lock a ball on the Overlord and pound the captive ball for escalating jackpots.",
              jackpots: "Each start is worth more — and demands more shots.",
              tip: "Mod the van first so jackpots pay bigger.",
            },
            {
              name: "Area 51 Multiball",
              target: "Right Ramp",
              detail: "Five ramp shots light it.",
              objective: "Chain ramp shots to unlock the alien conspiracy's jackpots.",
              jackpots: "The Super is a ramp → captive combo.",
              tip: "Groove the right ramp before starting.",
            },
            {
              name: "Combotron Multiball",
              target: "Side Ramp",
              detail: "Six combos, then the side ramp.",
              objective: "String together combos for a high-value jackpot frenzy.",
              jackpots: "Combo count sets the jackpot value.",
              tip: "Chain combos through the crossover for a big start.",
            },
          ],
        },

        /* PAGE 10 · STRATEGY & TIPS ------------------------------------- */
        {
          key: "strategy",
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Climb the Rock-O-Meter on the right orbit to 2×, then 3× playfield.",
          kicker: "House Advice",
          boxes: [
            { name: "Mod The Van", detail: "Hit the paddle first; a modded run scores far more." },
            { name: "Climb The Meter", detail: "Right orbit builds 2× then 3× playfield — bank it before a mode." },
            { name: "Charge First", detail: "Load the button at the captive ball before you need it." },
            { name: "Save The Super", detail: "Time Area 51’s ramp → captive combo for the Super." },
            { name: "Six-Way Skill", detail: "Chain the left crossover on the plunge for a big skill shot." },
            { name: "City Order", detail: "Start the closest city — half-saved cities waste the tour." },
          ],
        },

        /* PAGE · MODS — geeky additions & customization -------------- */
        {
          key: "mods",
          pageTitle: "Mods",
          eyebrow: "Geeky Additions and Customization",
          proTip: "PLACEHOLDER — footer tip for the Mods page.",
          kicker: "The Mod",
          boxes: [
            { name: "PLACEHOLDER MOD ONE",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD TWO",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD THREE", target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FOUR",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FIVE",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD SIX",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
          ],
        },

        /* PAGE 11 · NOW PLAYING — the closing hold card ----------------- */
        {
          key: "hold",
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Save six cities to reach the Final Battle with the Overlord.",
          line: "Gas up the van. The tour’s yours.",
        },

      ],
    },

    /* ======================================================================
       JURASSIC PARK
       Pages play in the order they appear below. To reorder pages, move a
       whole { … } block. To remove one, delete its block.
       ====================================================================== */
    {
      game: "jurassic-park",            // code key — DO NOT change (wires photos, badge, accent)
      title: "Jurassic Park",
      maker: "Stern · 2019",
      proTip: "Stack a paddock mode with a multiball — the rescue shots pay double under all that chaos.",  // fallback footer tip if a page has none

      pages: [

        /* PAGE 1 · INTRO — cabinet, playfield & credits ----------------- */
        {
          key: "intro",
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2019",
          proTip: "Nedry’s virus loosed the dinosaurs — rescue the staff and escape the island.",
          credits: [
            { role: "Game Design", names: "Keith Elwin" },
            { role: "Code / Rules", names: "Rick Naegele, Keith Elwin" },
            { role: "Engineering", names: "Harrison Drake" },
            { role: "Artwork", names: "Jonathan Bergeron" },
            { role: "CG Art", names: "Chuck Ernst" },
            { role: "Sound", names: "Jerry Thompson" },
          ],
        },

        /* PAGE 2 · GAME OVERVIEW — the big bullet points ---------------- */
        {
          key: "gameoverview",
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Stack a paddock mode inside a multiball — rescues pay double in the chaos.",
          intro: "Jurassic Park is the second Stern Pinball machine designed by Keith Elwin. Directly after the events of the film, Nedry’s computer virus has continued to plunge the park into chaos - meaning the dinosaurs are loose and the employees are in danger. The player has to rescue as many staff as they can and capture the dinosaurs, all while trying to survive the horrors of the abandoned park and eventually staging an escape.",
          bullets: [
            "Nedry’s virus loosed the dinosaurs across the island.",
            "Rescue staff, capture paddocks, and stage your escape.",
            "Spell M-A-P to enter paddocks; bag the flashing trap to capture.",
            "The Smart Missile lets you pick and fire an award.",
            "Capture every paddock to reach Escape Nublar.",
            "Three multiballs: Chaos, Raptor Tri-Ball, T-Rex.",
          ],
        },

        /* PAGE 3 · THE RUNDOWN — six boxes, each expands full-stage ----- */
        {
          key: "rundown",
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2019",
          proTip: "Three ways to lose control: Chaos, Raptor Tri-Ball, and T-Rex Multiball.",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Nedry’s virus loosed the dinosaurs. Rescue the staff, capture the paddocks, and stage your escape from the island.",
            rows: [
              { label: "Enter Paddock", target: "Left Ramp", desc: "Spell M-A-P with white shots to light it." },
              { label: "Capture Dino", target: "Yellow Trap Shot", desc: "Hit rescues to light the traps, then bag the flashing shot." },
              { label: "Control Room", target: "Left Target", desc: "Pick one of three modes with the flippers." },
              { label: "T-Rex", target: "The Truck", desc: "Three hits start a hurry-up into multiball." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Three ways to lose control of the island.",
            rows: [
              { label: "Chaos Multiball", target: "Spell CHAOS", desc: "Then the target between the bumpers." },
              { label: "Raptor Tri-Ball", target: "Raptor Pit", desc: "Lock a ball, then batter the pit." },
              { label: "T-Rex Multiball", target: "The Truck", desc: "Three truck hits start the hurry-up." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "Escape Nublar",
            body: "Clear the control rooms and paddocks to reach Escape Nublar, then the ultimate When Dinosaurs Ruled the Earth.",
            chip: "◆ Capture every paddock",
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            lead: "The skill shot is a ramp combo — chain it for multipliers.",
            rows: [
              { label: "Combo Skill", target: "Left → Right → Side", desc: "Each shot multiplies the base value." },
              { label: "Secret Skill", target: "Pops Standup", desc: "Soft plunge to a flipper, then bash the pops." },
            ],
          },
          button: {
            kicker: "Pick your award",
            title: "Smart Missile",
            lead: "When lit, choose an award with the action button, then fire it at the target between the bumpers.",
            rows: [
              { label: "Select", target: "Action Button", desc: "Cycle to the award you want." },
              { label: "Fire", target: "Center Target", desc: "Cash it in." },
            ],
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Stack a paddock mode with a multiball — the rescue shots pay double under the chaos.",
            rows: [
              { name: "Stack The Chaos", body: "Run a paddock mode inside a multiball for double rescues." },
              { name: "Feed The Amber", body: "Supply drops and 2× scoring come from the purple standups." },
            ],
          },
        },

        /* PAGE 4 · PADDOCK MODES ---------------------------------------- */
        {
          key: "paddocks",
          pageTitle: "Paddock Modes",
          eyebrow: "Enter, Then Rescue",
          proTip: "Stack a paddock mode with a multiball — the rescue shots pay double under all that chaos.",
          kicker: "Spell M-A-P",
          boxes: [
            { name: "Raptor Pen", target: "Left Ramp", detail: "Contain the clever girls before they learn the door." },
            { name: "Dilophosaurus", target: "Center Scoop", detail: "Watch for the spit — a fast, dangerous rescue." },
            { name: "Triceratops", target: "Right Ramp", detail: "Tend the sick trike and move the herd." },
            { name: "Pteranodon", target: "Left Orbit", detail: "Aviary chaos — keep the ball moving." },
            { name: "Brachiosaurus", target: "Right Orbit", detail: "A gentle giant guarding a tricky lane." },
            { name: "Spinosaurus", target: "Side Ramp", detail: "The apex threat of the deep paddocks." },
          ],
        },

        /* PAGE 5 · T-REX EVENTS ----------------------------------------- */
        {
          key: "trex",
          pageTitle: "T-Rex Events",
          eyebrow: "Three Hits To Start",
          proTip: "Stack a paddock mode with a multiball — the rescue shots pay double under all that chaos.",
          kicker: "The Truck",
          boxes: [
            { name: "T-Rex Encounter", target: "The Truck", detail: "Three truck hits start the hurry-up into multiball." },
            { name: "Truck Escape", target: "Left Ramp", detail: "Outrun the jaws in the mirror." },
            { name: "T-Rex Paddock", target: "Right Ramp", detail: "Return to the pen where it all broke loose." },
          ],
        },

        /* PAGE 6 · WIZARD MODES ----------------------------------------- */
        {
          key: "wizards",
          pageTitle: "Wizard Modes",
          eyebrow: "Capture Every Paddock",
          proTip: "Stack a paddock mode with a multiball — the rescue shots pay double under all that chaos.",
          kicker: "The End Game",
          boxes: [
            { name: "Escape Nublar", target: "All Shots", detail: "Stage the escape after clearing the control rooms and paddocks." },
            { name: "Visitor Center", target: "Center Scoop", detail: "Regroup where the tour began." },
            { name: "When Dinosaurs Ruled", target: "All Shots", detail: "The ultimate wizard mode — the top of the mountain." },
          ],
        },

        /* PAGE 7 · OTHER FEATURES --------------------------------------- */
        {
          key: "other",
          pageTitle: "Other Features",
          eyebrow: "Points Are Points",
          proTip: "Stack a paddock mode with a multiball — the rescue shots pay double under all that chaos.",
          kicker: "Everything Else",
          boxes: [
            { name: "Smart Missile", target: "Action Button", detail: "Pick an award, then fire it at the center target." },
            { name: "Chaos", target: "Spell CHAOS", detail: "Loose dinos everywhere — a multiball of pure mayhem." },
            { name: "Amber / 2×", target: "Purple Standups", detail: "Supply drops and doubled scoring." },
            { name: "Control Room", target: "Left Target", detail: "Pick one of three modes with the flippers." },
          ],
        },

        /* PAGE 8 · MORE FROM THE ISLAND --------------------------------- */
        {
          key: "moreIsland",
          pageTitle: "More From The Island",
          eyebrow: "Fill In With Real Content",
          proTip: "Placeholder pro tip — replace with real copy.",
          kicker: "Placeholder Section",
          boxes: [
            { name: "Placeholder 1", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 2", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 3", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 4", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 5", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 6", target: "TBD", detail: "Add real content here." },
          ],
        },

        /* PAGE 9 · MULTIBALL OVERVIEW — one box per multiball ----------- */
        {
          key: "multiball",
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2019",
          proTip: "Three truck hits start the T-Rex hurry-up straight into multiball.",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Chaos Multiball",
              target: "Spell CHAOS",
              detail: "Spell CHAOS, then hit the target between the bumpers.",
              objective: "Spell CHAOS to unleash every dinosaur at once for a jackpot free-for-all.",
              jackpots: "Jackpots at the major shots.",
              tip: "Run a paddock mode inside it for double rescues.",
            },
            {
              name: "Raptor Tri-Ball",
              target: "Raptor Pit",
              detail: "Lock a ball, then batter the pit to release all three.",
              objective: "Free all three raptors from the pit for a fast, aggressive jackpot round.",
              jackpots: "Pit hits and ramps score jackpots.",
              tip: "Cradle up and pick your jackpot shots.",
            },
            {
              name: "T-Rex Multiball",
              target: "The Truck",
              detail: "Three truck hits start the hurry-up into multiball.",
              objective: "Survive the hurry-up, then bank its value into the multiball's jackpots.",
              jackpots: "The hurry-up value carries into the multiball.",
              tip: "Cash the hurry-up high before it counts down.",
            },
          ],
        },

        /* PAGE 10 · STRATEGY & TIPS ------------------------------------- */
        {
          key: "strategy",
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Feed the purple standups for supply drops and 2× scoring.",
          kicker: "House Advice",
          boxes: [
            { name: "Stack The Chaos", detail: "Run a paddock mode inside a multiball for double rescues." },
            { name: "Feed The Amber", detail: "Supply drops and 2× scoring come from the purple standups." },
            { name: "Capture Fast", detail: "Light traps early so a rescue always has somewhere to go." },
            { name: "Combo Skill", detail: "Chain left → right → side on the plunge for multipliers." },
            { name: "Pick Your Missile", detail: "Choose the Smart Missile award, then fire the center target." },
            { name: "Hold Your Butts", detail: "Cradle in chaos — the center drain is hungry here." },
          ],
        },

        /* PAGE · MODS — geeky additions & customization -------------- */
        {
          key: "mods",
          pageTitle: "Mods",
          eyebrow: "Geeky Additions and Customization",
          proTip: "PLACEHOLDER — footer tip for the Mods page.",
          kicker: "The Mod",
          boxes: [
            { name: "PLACEHOLDER MOD ONE",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD TWO",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD THREE", target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FOUR",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FIVE",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD SIX",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
          ],
        },

        /* PAGE 11 · NOW PLAYING — the closing hold card ----------------- */
        {
          key: "hold",
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Capture every paddock to reach Escape Nublar.",
          line: "Life finds a way. Go survive the island.",
        },

      ],
    },

    /* ======================================================================
       MONSTER BASH
       Pages play in the order they appear below. To reorder pages, move a
       whole { … } block. To remove one, delete its block.
       ====================================================================== */
    {
      game: "monster-bash",            // code key — DO NOT change (wires photos, badge, accent)
      title: "Monster Bash",
      maker: "Williams · 1998",
      proTip: "Completing a mode earns its instrument; merely playing it only lights the mini-wizard, Monster Bash.",  // fallback footer tip if a page has none

      pages: [

        /* PAGE 1 · INTRO — cabinet, playfield & credits ----------------- */
        {
          key: "intro",
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Williams · 1998",
          proTip: "Round up six monsters and their instruments for the scariest band around.",
          credits: [
            { role: "Game Design", names: "George Gomez" },
            { role: "Software", names: "Lyman Sheats" },
            { role: "Music", names: "Vince Pontarelli" },
            { role: "Artwork", names: "Kevin O’Connor" },
            { role: "Engineering", names: "Chris Shipman" },
            { role: "Release", names: "Williams · 1998" },
          ],
        },

        /* PAGE 2 · GAME OVERVIEW — the big bullet points ---------------- */
        {
          key: "gameoverview",
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Complete a mode to earn its instrument — playing it only lights the mini-wizard.",
          intro: "Monster Bash brings together Universal’s classic movie monsters — Dracula, Frankenstein, Wolfman, the Mummy, the Bride of Frankenstein, and Creature from the Black Lagoon — who’ve formed a band and are looking to make it big. Help this rag-tag monster band pull off the concert of a lifetime.  It’s a monster-mash sitcom — campy, silly, and dripping with early Bally/Williams charm and wit.",
          bullets: [
            "Round up six classic monsters and their instruments.",
            "Complete a mode to earn its instrument; playing it only lights the mini-wizard.",
            "No action button — Phantom Flip flips for you at the right moment.",
            "Two big multiballs precede the encore.",
            "Collect all six instruments to start Monsters of Rock.",
            "Six monsters: Creature, Wolfman, Bride, Dracula, Frankenstein, Mummy.",
          ],
        },

        /* PAGE 3 · THE RUNDOWN — six boxes, each expands full-stage ----- */
        {
          key: "rundown",
          pageTitle: "The Rundown",
          eyebrow: "Williams · 1998",
          proTip: "Six monster modes, two multiballs, and the Monsters of Rock encore.",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Round up six classic monsters and their instruments to put together the scariest band since KISS.",
            rows: [
              { label: "Creature Feature", target: "Creature’s Lagoon", desc: "Sweep every major shot before the hurry-up dies." },
              { label: "Full Moon Fever", target: "Left Loop", desc: "Rip the Wolfman’s loop for his mode." },
              { label: "Ball & Chain", target: "Left Ramp", desc: "Play the Bride’s tight figure-8 ramp." },
              { label: "Drac Attack", target: "Dracula Loop", desc: "Spell DRAC-ATTACK, then ride the coffin loop." },
              { label: "Frankenstein", target: "Center Ramp", desc: "Drop Frank’s targets, then jolt the monster alive." },
              { label: "The Mummy", target: "Mummy Target", desc: "Bash the sarcophagus open to wake him." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Two big multiballs before the encore.",
            rows: [
              { label: "Frankenstein Multiball", target: "Frank’s Drops", desc: "Drop the targets, open the center ramp, jolt him alive." },
              { label: "Mosh Pit Multiball", target: "The Scoop", desc: "Feed the Mosh lane, then start it at the scoop." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "Monsters of Rock",
            body: "Complete all six modes to collect the instruments — then start Monsters of Rock, the six-ball encore and the whole point of the game.",
            chip: "◆ Collect all 6 instruments",
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            lead: "The skill shot lives in the rollover lanes.",
            rows: [
              { label: "Skill Shot", target: "D-I-G Lanes", desc: "Land the lit lane for points plus a Monster Bomb." },
            ],
          },
          button: {
            kicker: "No button here",
            title: "Phantom Flip",
            lead: "This 1998 classic has no action button — hit the Phantom Flip targets and the game flips for you at the perfect moment.",
            rows: [
              { label: "Phantom Flip", target: "Three Targets", desc: "Auto-flips a shot you’d otherwise miss." },
              { label: "Monster Bombs", target: "The Plunger", desc: "Banked bombs spot progress on every monster." },
            ],
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Completing a mode earns its instrument; merely playing it only lights the mini-wizard.",
            rows: [
              { name: "Complete, Don’t Just Play", body: "Finishing a mode earns the instrument." },
              { name: "Build The Jets", body: "Sixty jet hits light Mummy Mayhem and super jets." },
            ],
          },
        },

        /* PAGE 4 · THE MONSTERS ----------------------------------------- */
        {
          key: "monsters",
          pageTitle: "The Monsters",
          eyebrow: "Collect The Instruments",
          proTip: "Completing a mode earns its instrument; merely playing it only lights the mini-wizard, Monster Bash.",
          kicker: "One Mode Each",
          boxes: [
            { name: "Frankenstein", target: "Center Ramp", detail: "Drop Frank’s targets, then jolt the monster alive." },
            { name: "Dracula", target: "Dracula Loop", detail: "Spell DRAC-ATTACK, then ride the coffin loop." },
            { name: "Wolfman", target: "Left Loop", detail: "Rip the loop under a full moon." },
            { name: "The Bride", target: "Left Ramp", detail: "Play the tight figure-8 ramp for Ball & Chain." },
            { name: "The Creature", target: "Creature’s Lagoon", detail: "Sweep every major shot before the hurry-up dies." },
            { name: "The Mummy", target: "Mummy Target", detail: "Bash the sarcophagus open to wake him." },
          ],
        },

        /* PAGE 5 · MORE FROM THE BASH ----------------------------------- */
        {
          key: "moreBash",
          pageTitle: "More From The Bash",
          eyebrow: "Fill In With Real Content",
          proTip: "Placeholder pro tip — replace with real copy.",
          kicker: "Placeholder Section",
          boxes: [
            { name: "Placeholder 1", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 2", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 3", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 4", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 5", target: "TBD", detail: "Add real content here." },
            { name: "Placeholder 6", target: "TBD", detail: "Add real content here." },
          ],
        },

        /* PAGE 6 · MULTIBALL OVERVIEW — one box per multiball ----------- */
        {
          key: "multiball",
          pageTitle: "Multiball Overview",
          eyebrow: "Williams · 1998",
          proTip: "Drop Frank’s targets to open the center ramp, then jolt him alive.",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Frankenstein Multiball",
              target: "Frank’s Drops",
              detail: "Drop the targets, open the center ramp, and jolt him alive.",
              objective: "Jolt the monster alive for a ramp-and-loop jackpot rampage.",
              jackpots: "Jackpots at the ramps and loops.",
              tip: "Start it with a mode running for stacked scoring.",
            },
            {
              name: "Mosh Pit Multiball",
              target: "The Scoop",
              detail: "Feed the Mosh lane, then start it at the scoop.",
              objective: "Spread hits across all six monsters for a high-energy jackpot round.",
              jackpots: "Every monster shot scores a jackpot.",
              tip: "Spread hits across all six monsters for the Super.",
            },
          ],
        },

        /* PAGE 7 · STRATEGY & TIPS -------------------------------------- */
        {
          key: "strategy",
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Sixty jet-bumper hits light Mummy Mayhem and super jets.",
          kicker: "House Advice",
          boxes: [
            { name: "Complete, Don’t Just Play", detail: "Finishing a mode earns the instrument — the whole point of the game." },
            { name: "Build The Jets", detail: "Sixty jet hits light Mummy Mayhem and super jets." },
            { name: "Phantom Flip", detail: "Hit the three targets so the game auto-flips a shot you’d miss." },
            { name: "Bank The Bombs", detail: "Plunge-collected Monster Bombs spot progress on every monster." },
            { name: "Pick Easy Monsters", detail: "Start with the loops you can hit to bank instruments fast." },
            { name: "Watch The Right Ramp", detail: "It feeds the center — cradle instead of chasing it." },
          ],
        },

        /* PAGE · MODS — geeky additions & customization -------------- */
        {
          key: "mods",
          pageTitle: "Mods",
          eyebrow: "Geeky Additions and Customization",
          proTip: "PLACEHOLDER — footer tip for the Mods page.",
          kicker: "The Mod",
          boxes: [
            { name: "PLACEHOLDER MOD ONE",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD TWO",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD THREE", target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FOUR",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FIVE",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD SIX",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
          ],
        },

        /* PAGE 8 · NOW PLAYING — the closing hold card ------------------ */
        {
          key: "hold",
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Collect all six instruments to start Monsters of Rock.",
          line: "The band’s assembled. Go start the encore.",
        },

      ],
    },

    /* ======================================================================
       JOHN WICK
       Pages play in the order they appear below. To reorder pages, move a
       whole { … } block. To remove one, delete its block.
       ====================================================================== */
    {
      game: "john-wick",            // code key — DO NOT change (wires photos, badge, accent)
      title: "John Wick",
      maker: "Stern · 2024",
      proTip: "Spawn enemies before you start a job — lit shots multiply by the blue circles stacked in front of them.",  // fallback footer tip if a page has none

      pages: [

        /* PAGE 1 · INTRO — cabinet, playfield & credits ----------------- */
        {
          key: "intro",
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2024",
          proTip: "Out of retirement — work for seven factions, survive five adversaries, and reach the Special Assignment.",
          credits: [
            { role: "Game Design", names: "Elliot Eismin" },
            { role: "Code / Rules", names: "Mike Vinikour, Joshua Henderson, Tim Sexton" },
            { role: "Engineering", names: "Robert Blakeman" },
            { role: "Artwork", names: "Randy Martinez" },
            { role: "Sound", names: "Jerry Thompson" },
            { role: "Release", names: "Stern · 2024 · Code 1.02" },
          ],
        },

        /* PAGE 2 · GAME OVERVIEW — the big bullet points ---------------- */
        {
          key: "gameoverview",
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Spawn enemies before a job — lit shots multiply by the blue circles in front.",
          intro: "Following the death of his beloved pet dog Daisy at the hands of a Russian crime family, John Wick comes out of retirement from his old life as a cold-blooded assassin with the sole goal of taking revenge on those who wronged him. Worse comes to worse when former associates and fellow assassins aim to take John down. With the help of Winston, owner of the New York Continental, and other allies, John must defeat the members of the High Table. John Wick is the first pinball machine designed by former mechanical engineer Elliot Eismin and takes influence from all four mainline films in the series.",
          bullets: [
            "Light jobs at the weapons crate, then start them at the right VUK.",
            "Seven factions — cash a job out at the left eject for its perk.",
            "Blue-circle enemies multiply the shots behind them.",
            "Defeat ten enemies to light an Adversary Battle.",
            "Six multiballs: four Car Chases, Excommunicado, Deconsecrated.",
            "Four wizard modes, ending with the game-ending Special Assignment.",
          ],
        },

        /* PAGE 3 · THE RUNDOWN — six boxes, each expands full-stage ----- */
        {
          key: "rundown",
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2024",
          proTip: "Six multiballs: four Car Chases, plus Excommunicado and Deconsecrated.",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Out of retirement, out for blood. Take jobs for seven factions, survive five adversaries, and fight your way to the Special Assignment.",
            rows: [
              { label: "Take A Job", target: "Weapons Crate", desc: "Light three blue lights, then start the job at the right VUK." },
              { label: "Cash Out", target: "Left Eject", desc: "Finish a job’s shots; the eject pays 20% plus the faction perk." },
              { label: "Adversary Battle", target: "Left Eject", desc: "Defeat ten enemies in single-ball play to light the fight." },
              { label: "Enemies", target: "Blue Circles", desc: "Each one adds +1× to the shot behind it, up to 4×." },
              { label: "Allies", target: "Gold Coin Targets", desc: "Light allies, then a ramp qualifies one for the next job." },
              { label: "Lights Out", target: "Spell YAGA", desc: "Cycle the inlanes, then the action button doubles scoring." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Six multiballs — four Car Chases plus Excommunicado and Deconsecrated.",
            rows: [
              { label: "Car Chase Multiball", target: "Left Orbit", desc: "Bash the car to light it; car hits change which of four chases is lit." },
              { label: "Excommunicado Multiball", target: "Red Circle", desc: "Max out the dance floor, then shoot the Red Circle." },
              { label: "Deconsecrated Multiball", target: "Center Ramp", desc: "Spell WINSTON at the captive ball, then lock three balls." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "Special Assignment",
            body: "Red Circle Reckoning lights early. Play all of one category — every job, battle or multiball — for The Staircase, then The Duel, then the game-ending Special Assignment.",
            chip: "◆ Jobs · Battles · Multiballs",
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            lead: "Four ways to start a ball right.",
            rows: [
              { label: "Baba Yaga", target: "Right VUK", desc: "Plunge clean with no switches — 1.5M and starts the lit job." },
              { label: "VIP Skill", target: "Red Circle Backdoor", desc: "Plunge into the club; starts Excommunicado if it’s lit." },
              { label: "MXV Skill", target: "Orbit → Ramp → Eject", desc: "Full-plunge combo for 10M and ten bonus enemies." },
              { label: "Car Skill", target: "Behind The Car", desc: "Premium only — advances the next Car Chase." },
            ],
          },
          button: {
            kicker: "Hold the button",
            title: "Action Button",
            lead: "Saved for the moments that matter.",
            rows: [
              { label: "Lights Out", target: "YAGA Lit", desc: "30 seconds of doubled scoring." },
              { label: "Add-A-Ball", target: "Tarasov Perk", desc: "Hold it in any multiball." },
              { label: "Swipe-A-Ball", target: "Center Locks", desc: "Premium — pull a locked ball into another multiball." },
              { label: "The Duel", target: "Crosshair", desc: "Time the press dead center for up to 25M." },
            ],
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Spawn enemies before you start a job — lit shots multiply by the circles in front of them.",
            rows: [
              { name: "Spawn First", body: "Load enemies before a job — every circle multiplies the shot." },
              { name: "Grab The Perks", body: "Night Watch and Security Detail perks make every multiball last longer." },
            ],
          },
        },

        /* PAGE 4 · JOBS — LEFT SIDE ------------------------------------- */
        {
          key: "jobs",
          pageTitle: "Jobs",
          eyebrow: "Left Side Factions",
          proTip: "Shoot a faction’s shot before starting the job at the VUK to pick who you work for.",
          kicker: "Take The Contract",
          boxes: [
            { name: "Night Watch", target: "Left Eject", detail: "The Bowery · All seven shots lit purple; a roving white shot scores 2×. Perk: +5 seconds on every ball saver." },
            { name: "Assassination", target: "Left Orbit", detail: "New York Continental · Green shots light the captive ball for kill shots — five to cash out. Perk: marker ball save at both outlanes." },
            { name: "Security Detail", target: "Left Ramp", detail: "Osaka Continental · Chase one blinking red shot across the playfield, seven times. Perk: multiball extend, once per ball." },
            { name: "VIP Award", target: "Red Circle", detail: "High Table · Hit the blinking 5M hurry-up shot six times; the solid shot resets it. Perk: bonus starts every ball at 2×." },
          ],
        },

        /* PAGE 5 · JOBS — RIGHT SIDE ------------------------------------ */
        {
          key: "jobs2",
          pageTitle: "More Jobs",
          eyebrow: "Right Side Factions",
          proTip: "Play three jobs to light extra ball — and all seven to light a wizard mode.",
          kicker: "Take The Contract",
          boxes: [
            { name: "Heist", target: "Center Ramp", detail: "Ruska Roma · Standups light yellow shots; the gold coin targets collect them all at once. Perk: motion sensors during Lights Out." },
            { name: "Gather Intel", target: "Right Orbit", detail: "Marquis de Gramont · Combo the left and right ramps to build a center ramp jackpot. Perk: +20 seconds of Lights Out." },
            { name: "Task A Crew", target: "Right Ramp", detail: "Tarasov Family · Build the left orbit spinner value, then rip it four times. Perk: add-a-ball with the action button." },
          ],
        },

        /* PAGE 6 · ADVERSARIES ------------------------------------------ */
        {
          key: "adversaries",
          pageTitle: "Adversaries",
          eyebrow: "Defeat Ten Enemies To Light",
          proTip: "Make half the shots and hit the blood marker to cash the escape jackpot — or keep fighting for up to 4×.",
          kicker: "One-On-One",
          boxes: [
            { name: "Viggo", target: "Car & Captive Ball", detail: "Shoot the car or captive ball to light gold bonus shots. Twelve lit shots earn Be Seeing You." },
            { name: "Kirill", target: "Red Circle", detail: "Clear the alternating red shots, then the Red Circle pays their total. Skip the Red Circle for a whole wave to add 1M." },
            { name: "Cassian", target: "Switch Frenzy", detail: "Everything scores and builds the jackpot; one roving purple shot collects it. Six jackpots earn Be Seeing You." },
            { name: "Ares", target: "Roving Red Shot", detail: "Find Ares — one red shot hops around, and bumpers or slings briefly reveal it. Eight red shots earn Be Seeing You." },
            { name: "Zero", target: "Combos", detail: "Chain light-blue shots, then collect at the car, captive ball, or the left eject for 2×. Four combos earn Be Seeing You." },
          ],
        },

        /* PAGE 7 · CAR CHASE MULTIBALLS --------------------------------- */
        {
          key: "carchase",
          pageTitle: "Car Chase Multiballs",
          eyebrow: "Bash The Car To Light",
          proTip: "Bagarre a L’Étoile is the highest-scoring Car Chase on average — hit the car to cycle to it.",
          kicker: "The Car",
          boxes: [
            { name: "Helipad Showdown", target: "Chase 1", detail: "Red shots build the car jackpot up to 4×. Nine jackpots light a 5× super at the car." },
            { name: "Taxicab Chase", target: "Chase 2", detail: "A 15-second hurry-up at the car locks in the value. Four jackpots light a 5× super at the left orbit." },
            { name: "Motorcycle Pursuit", target: "Chase 3", detail: "Pursuit shots on one side, then the car to switch sides. Four jackpots light the super at the Continental." },
            { name: "Bagarre a L’Étoile", target: "Chase 4", detail: "Ramps light the car, orbits raise the multiplier. Four jackpots set up four 5× supers at the car." },
          ],
        },

        /* PAGE 8 · ALLIES & OTHER SCORING ------------------------------- */
        {
          key: "other",
          pageTitle: "Allies & Other Scoring",
          eyebrow: "Stack The Odds",
          proTip: "Lights Out stays lit across balls if you don’t use it — save it for a big job or multiball.",
          kicker: "Everything Else",
          boxes: [
            { name: "Akira", target: "Left Ramp", detail: "Ally · Rotates enemies one shot to the right — hold the left flipper to rotate them left." },
            { name: "Charon", target: "Center Ramp", detail: "Ally · For four seconds, defeated enemies instantly respawn for another multiplied shot." },
            { name: "Katia", target: "Right Ramp", detail: "Ally · Moves enemies off unlit shots and onto the shots that score right now." },
            { name: "Lights Out", target: "Spell YAGA", detail: "Cycle the inlanes to spell YAGA, then the action button kills the lights for 30 seconds of 2× scoring." },
            { name: "Gold Coins", target: "Coin Targets", detail: "Bounces light random coin shots. Each coin adds 1M to bonus, and ten light extra ball." },
            { name: "Marker Ball Save", target: "Left Standups", detail: "Five hits light an outlane ball save; the flippers move which lane is lit." },
          ],
        },

        /* PAGE 9 · WIZARD MODES ----------------------------------------- */
        {
          key: "wizards",
          pageTitle: "Wizard Modes",
          eyebrow: "Played In Order",
          proTip: "Red Circle Reckoning lights after just one job, one battle and one of each multiball type.",
          kicker: "The End Game",
          boxes: [
            { name: "Red Circle Reckoning", target: "Mini-Wizard", detail: "A 60-second, 4-ball run — 10M per shot, 30M at the Red Circle, and an extra ball when you finish." },
            { name: "The Staircase", target: "Center Ramp", detail: "Three levels of enemies, then fight back up as a 2-ball multiball. Collect the white arrows to multiply each level’s bonus." },
            { name: "The Duel", target: "Action Button", detail: "Keep both balls alive for 2×, lock both, then time the button to the crosshair for up to 25M. Three rounds, then a 50M finish." },
            { name: "Special Assignment", target: "Final Mode", detail: "60 flips to clear every shot and find Iosef. Win or lose, the game ends." },
          ],
        },

        /* PAGE 10 · MULTIBALL OVERVIEW — one box per multiball ---------- */
        {
          key: "multiball",
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2024",
          proTip: "The Security Detail and Task a Crew perks extend or add a ball to any multiball.",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Car Chase Multiball",
              target: "Left Orbit",
              detail: "Two car hits light the first one on the Premium (3 balls). Hit the car again to change which chase is lit.",
              objective: "Four chases to play — each one adds a ball to the next.",
              jackpots: "The car jackpot starts at 2M and grows with every car hit; supers land at the car or left orbit.",
              tip: "Hit the car in single-ball play to build the jackpot before you start.",
            },
            {
              name: "Excommunicado Multiball",
              target: "Red Circle",
              detail: "Work the Red Circle bumper and targets to max out the dance floor, then shoot the Red Circle.",
              objective: "Survive a 15-second build phase, then a 2-ball multiball.",
              jackpots: "Gold shots pan out from the center; all six light the Red Circle super.",
              tip: "Premium: short-plunge into the Red Circle during the build to lock balls and raise the super.",
            },
            {
              name: "Deconsecrated Multiball",
              target: "Center Ramp",
              detail: "Spell WINSTON at the captive ball to light the locks, then lock three balls.",
              objective: "Score seven green jackpots to light the captive ball.",
              jackpots: "The captive ball then pays repeated super jackpots for 15 seconds.",
              tip: "Defeat enemies during the mode — they feed every jackpot.",
            },
          ],
        },

        /* PAGE 11 · STRATEGY & TIPS ------------------------------------- */
        {
          key: "strategy",
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Bank gold coins — they light allies, add 1M each to bonus, and ten light extra ball.",
          kicker: "House Advice",
          boxes: [
            { name: "Spawn First", detail: "Load enemies before a job — each circle multiplies the shot behind it." },
            { name: "Pick Your Faction", detail: "Shoot a faction’s shot before starting the job to choose the perk you want." },
            { name: "Perks Early", detail: "Night Watch, Security Detail and Task a Crew make every multiball last longer." },
            { name: "Use Your Allies", detail: "Katia moves enemies onto lit shots — perfect before a big job." },
            { name: "Save Lights Out", detail: "It carries across balls — fire it during a job or multiball." },
            { name: "Car Hits Count", detail: "Bash the car in single-ball play to build the Car Chase jackpot." },
          ],
        },

        /* PAGE · MODS — geeky additions & customization -------------- */
        {
          key: "mods",
          pageTitle: "Mods",
          eyebrow: "Geeky Additions and Customization",
          proTip: "PLACEHOLDER — footer tip for the Mods page.",
          kicker: "The Mod",
          boxes: [
            { name: "PLACEHOLDER MOD ONE",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD TWO",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD THREE", target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FOUR",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD FIVE",  target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
            { name: "PLACEHOLDER MOD SIX",   target: "Where It Goes", detail: "PLACEHOLDER — what this mod is and why it was added." },
          ],
        },

        /* PAGE 11 · NOW PLAYING — the closing hold card ----------------- */
        {
          key: "hold",
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Clear every job, battle or multiball to reach the wizard modes.",
          line: "You’re back. Go earn your place at the High Table.",
        },

      ],
    },

  ],

  /* ==========================================================================
     SHARED BREATHER CONTENT — plays between machines
     ========================================================================== */
  combos: [
    {
      lead: "Between machines — a habit worth keeping, a word worth knowing, and something somebody actually yelled.",
      tipTitle: "Dead Bounce",
      tip: "Hold both flippers DOWN and let the ball bounce off a still flipper back into play. Flipping at the wrong instant is how you drain.",
      lingoTitle: "SDTM",
      lingo: "Straight down the middle. Drains between the flippers, unsaveable. Nothing you can do. Sad.",
      quip: "“That ramp feeds it straight down the middle. That’s bullshit.”",
    },
    {
      lead: "A breather. One thing to practice, one thing to say, one thing everybody says.",
      tipTitle: "Cradle",
      tip: "Trap the ball against a raised flipper. Reset, breathe, aim your next shot — then release. The whole game slows down.",
      lingoTitle: "Brick",
      lingo: "A shot that clanks off the target instead of going in. Everybody bricks. Aim, don’t panic.",
      quip: "“One more ball. I mean it this time. This is the last one.”",
    },
    {
      lead: "Stretch your flipping hand. A save to learn, a term to drop, a truth to accept.",
      tipTitle: "Nudge, Don’t Tilt",
      tip: "Bump the machine to nudge the ball off a drain. Shove it three times in a row and the game bites back: TILT kills your ball.",
      lingoTitle: "Slap Save",
      lingo: "A two-flipper panic swat at a draining ball. Undignified. Sometimes it even works.",
      quip: "“I had it. I totally had it. Did you see that?”",
    },
  ],

  tips: [
    { name: "Dead Bounce", body: "Hold both flippers DOWN and let the ball bounce off a still flipper back into play." },
    { name: "Cradle", body: "Trap the ball against a raised flipper. Reset, breathe, aim your next shot — then release." },
    { name: "Nudge, Don’t Tilt", body: "Bump the machine to nudge the ball off a drain. Three shoves in a row and TILT kills your ball." },
    { name: "Drop Catch", body: "The instant the ball lands on a raised flipper, drop it to kill the bounce — then re-cradle." },
    { name: "Post Pass", body: "Tap the flipper to slide a cradled ball across to the other flipper, so you get the shot you wanted." },
  ],

  glossary: [
    { term: "SDTM", def: "Straight Down The Middle. Drains between the flippers, unsaveable. Sad." },
    { term: "Drain", def: "Losing the ball down an outlane or the center. The end of your turn." },
    { term: "Cradle", def: "Holding the ball still against a raised flipper to reset and aim." },
    { term: "Dead Bounce", def: "Letting the ball bounce off a still flipper instead of risking a flip." },
    { term: "Multiball", def: "Two or more balls in play at once. Chaos, and a lot of points." },
    { term: "Wizard Mode", def: "The hidden end-game mode you unlock after finishing everything." },
    { term: "Nudge / Tilt", def: "Bumping the machine to steer the ball — vs. over-bumping and getting punished." },
    { term: "Slap Save", def: "A two-flipper panic swat at a draining ball. Sometimes it even works." },
  ],

  quip: {
    intro: "I mean, come on. That’s not fair.",
    setup: "The right ramp on Monster Bash feeds the ball straight down the middle.",
    punch: "That’s bullshit.",
    byline: "— every regular, eventually",
  },

  general: [
    {
      id: "tips",
      eyebrow: "House Rules",
      title: "House Tips",
      meta: "Play Better Tonight",
      proTip: "A still flipper is a save. A panicked flipper is a drain.",
    },
    {
      id: "lingo",
      eyebrow: "Speak The Language",
      title: "Pinball Lingo",
      meta: "The Words On The Floor",
      proTip: "If you can say SDTM out loud, you’ve officially lost a ball to it.",
    },
    {
      id: "combo0",
      eyebrow: "House Rules",
      title: "Between Games",
      meta: "Tips · Lingo · Quips",
      proTip: "A still flipper is a save. A panicked flipper is a drain.",
    },
    {
      id: "combo1",
      eyebrow: "House Rules",
      title: "Between Games",
      meta: "Tips · Lingo · Quips",
      proTip: "Cradle first, aim second. The rushed shot drains.",
    },
    { id: "quip", eyebrow: "Real Talk", title: "Overheard", meta: "The Lockedown", proTip: "You’re not mad at the machine. You’re mad at yourself." },
    {
      id: "combo2",
      eyebrow: "House Rules",
      title: "Between Games",
      meta: "Tips · Lingo · Quips",
      proTip: "The machine wants you to panic. Don’t give it the satisfaction.",
    },
  ],
};
