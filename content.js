/* ============================================================================
   RFPC KIOSK — EDITABLE CONTENT
   ----------------------------------------------------------------------------
   This is the ONLY file you need to touch to change the words on the kiosk.
   Edit the text between the "quotes". Keep the quotes, colons, commas, and
   [ ] { } brackets exactly as they are — they're the scaffolding. If you
   delete a comma or a closing quote the page will go blank; just undo and
   re-save.

   Punctuation used on the stage (copy/paste if you need them):
     curly quotes  “ ”  ’      em dash —      middle dot ·
     arrow →       times ×     ellipsis …     diamond ◆

   HOW IT'S ORGANIZED
     Everything is now grouped BY MACHINE. Each table has ONE self-contained
     block in `games[]` (in floor order) holding every word that machine shows,
     top to bottom in the order the fields appear on screen:

       game       → code key. DON'T change it — it wires the table to its
                    photos, badge, and accent color.
       title/maker/proTip → the marquee title, the maker line, and this table's
                    default footer pro-tip.
       credits    → the Intro page credit list.
       — THE RUNDOWN (the six-box spotlight page) —
       lead       → the "Modes & Battles" intro line.
       shots      → the "Modes & Battles" rows (name → target — description).
       wizard     → the "Wizard Mode" box.
       keyMultiballs → the "Key Multiballs" box (lead line + rows).
       skills     → the "Skill Shots" box (lead line + rows).
       button     → the "Action Button" box (its own title/kicker + rows).
       tips       → the "Table Tips" box (footer pro-tip + two tip rows).
       — THE DEEP PAGES —
       overview   → the "Game Overview" page: big bullet points.
       multiballs → the "Multiball Overview" page: one box per multiball; each
                    expands to detail + jackpots + a tip.
       strategy   → the "Strategy & Tips" page: boxes, each expands to detail.
       sections   → custom themed pages (Movies, Villains, Cities …), keyed by
                    a sequence key: key: { title, kicker, eyebrow, boxes:[…] }.
                    Every box expands full-stage like the Rundown.
       hold       → the closing "Now Playing" hold-card line (italic serif).
       — WIRING —
       sequence   → the ordered list of pages for this machine. Each entry is a
                    built-in page key (intro · gameoverview · rundown ·
                    multiball · strategy · hold) or a custom `sections` key.
                    Reorder / add / remove freely.
       proTips    → the footer pro-tip per page, keyed by page key (intro ·
                    overview · rundown · multiball · strategy · hold, plus any
                    custom section key). Anything not listed falls back to the
                    machine's top-level `proTip`.

   The stuff AFTER games[] is shared across the whole loop, not per-machine:
     combos[]    → the "Between Games" breather pages (tip · lingo · quip)
     tips[]      → the five-card "House Tips" page
     glossary[]  → the "Pinball Lingo" page
     quip{}      → the big closing "Overheard" page
     general[]   → the eyebrow/title/footer line on each breather page
   ============================================================================ */

window.RFPC_CONTENT = {

  /* ==========================================================================
     THE EIGHT MACHINES — in floor order. Each block is everything that table
     shows; edit one machine start-to-finish without hunting through the file.
     ========================================================================== */
  games: [

    /* ======================================================================
       JAMES BOND 007
       ====================================================================== */
    {
      game: "james-bond",
      title: "James Bond 007",
      maker: "Stern · 2022",
      proTip: "Master the Action Button before you chase films — it’s the machine’s #1 scoring tool.",

      // ---- INTRO: credits --------------------------------------------------
      credits: [
        { role: "Game Design",              names: "George Gomez" },
        { role: "Engineering / Mechanics",  names: "Elliot Eismin, Harrison Drake, John Rotharmel, Robert Blakeman, Tom Kopera" },
        { role: "Software",                 names: "Lonnie D. Ropp, Mike Vinikour" },
        { role: "Artwork",                  names: "Kevin O’Connor" },
        { role: "Sound",                    names: "Jerry Thompson, Ken Hale" },
      ],

      // ---- THE RUNDOWN (six-box spotlight) ---------------------------------
      lead: "Play through six classic Sean Connery 007 films. Battle the each film's villains and henchmen.  Seduce or be seduced by iconic Bond Women. Obtain the unique weapons and toys from master scientist Q designed for each adventure.  And disarm the ominous SPECTRE weapon from each film.",
      shots: [
        { label: "Villains",        target: "Right Ramp",     desc: "Battle each film’s villain." },
        { label: "Henchmen",        target: "Side Ramp",      desc: "Take out the muscle." },
        { label: "SPECTRE Weapon",  target: "Spell SPECTRE at Rocket",  desc: "Battle the SPECTRE Weapon." },
        { label: "Q Branch",        target: "Scoop",          desc: "Once lit, access Q’s gadgets." },
      ],
      wizard: {
        title: "OHMSS → MI6 Multiball",
        body: "Finish all six films to open On Her Majesty’s Secret Service — a flip-count showdown that ends in MI6 Multiball, the goal of the whole game.",
        chip: "◆ Finish all 6 films",
      },
      keyMultiballs: { lead: "One primary multiball; the rest is the wizard finale.", rows: [
        { label: "Bird One",       target: "The Rocket", desc: "Lock three balls in the rocket; jackpots light green, super jackpot at the rocket." },
        { label: "MI6 Multiball",  target: "Side Ramp",  desc: "The OHMSS finale — jackpots paid from all six films." },
      ] },
      skills: { lead: "Hold the left flipper as you plunge to steer the skill shot.", rows: [
        { label: "Lane Skill",   target: "Flashing Lane", desc: "Plunge into the lit top lane." },
        { label: "Super Skill",  target: "Right Ramp",    desc: "Hold left flipper, then rip the right ramp." },
      ] },
      button: { kicker: "The #1 scoring tool", title: "Action Button", lead: "Charge it, then spend it on the biggest shot on the field.", rows: [
        { label: "Smart Missiles", target: "Fires Lit Shot", desc: "Collect the most valuable lit shot instantly." },
        { label: "Multipliers",    target: "Playfield X",    desc: "Stack 2×, then 3× across the playfield." },
      ] },
      tips: { proTip: "Master the Action Button before films — it’s the machine’s #1 scoring tool.", rows: [
        { name: "Button First",     body: "Learn the Action Button before chasing films." },
        { name: "Vary Your Shots",  body: "Repeating a film’s shots only scores points — spread them to advance." },
      ] },

      // ---- GAME OVERVIEW ---------------------------------------------------
      overview: [
        "Experience six classic Sean Connery 007 films.",
        "Battle the Villian, Henchmen and SPECTRE Weapon from each film.",
        "Activate the Bond Women from each film to provide stacking multipliers.",
        "Visit Q during each film to obtain his special toys and weapons.",
        "Try to stack BirdOne and Jetpack multiball during Villian and Henchmen modes.",
        "Mind the Action button as there are several uses, Blue, Pink and Green.",
      ],

      // ---- MULTIBALL OVERVIEW ----------------------------------------------
      multiballs: [
        { name: "Bird One",      target: "Rocket Dropdowns, Center Lock", detail: "Complete rocket drop down targets to light lock, then lock three balls in the rocket at the center loop.", jackpots: "Every shot lights green to build the jackpot; blast the rocket for the Super Jackpot.", tip: "Earn an extended Bird One by shooting the two top flashing green targets at the start of the multiball." },
        { name: "Jetpack", target: "Scuba Scoop, Left Orbit",  detail: "Shoot the tank to drop the Jetpack ball.  Shoot white shots to build jackpot and collect at left orbit", jackpots: "After hitting several white shots, shoot the left orbit to have 007 grap the ball - time your tank shot to drop the ball on it to earn a super jackpot.", tip: "Best used when stacked with a Villain or Henchman mode - not very useful on its own." },
        { name: "Bond, James Bond", target: "Scuba Scoop or Right Ramp",  detail: "Activated by battling a Villain, a Henchman, and playing Bird One and Jetpack Multiballs", jackpots: "Timed mode with unlimited balls.  Shoot lit shots to earn a jackpots", tip: "Each shot earns a different Bond introduction voice over from one of the films." },
      ],

      // ---- CUSTOM THEMED PAGES (Movies, Villains, Henchmen, …) -------------
      // Framed from the six Connery films — refine freely.
      sections: {
        movies: {
          title: "The Movies", kicker: "The Six Films", eyebrow: "Play Them In Any Order", imgShape: "poster",
          boxes: [
            { name: "Dr. No",                target: "1962", detail: "Bond investigates a missing agent in Jamaica and uncovers Dr. No, a reclusive scientist sabotaging American rocket launches from a hidden island base. Bond infiltrates the base, survives Dr. No’s traps, and destroys his nuclear reactor before it melts down.", img: "assets/bond-movie-drno.jpg" },
            { name: "From Russia With Love", target: "1963", detail: "SPECTRE lures Bond into a trap using a Soviet decoding machine and a clerk posing as a defector. Bond survives a train journey stalked by an assassin and a poisoned-blade attack, ultimately exposing and escaping SPECTRE’s elaborate plot.", img: "assets/bond-movie-fromrussia.jpg" },
            { name: "Goldfinger",           target: "1964", detail: "Bond investigates gold smuggler Auric Goldfinger and uncovers a scheme to irradiate the U.S. gold reserve at Fort Knox, boosting the value of his own hoard. With help from pilot Pussy Galore, Bond foils the plan and stops Goldfinger’s bodyguard Oddjob.", img: "assets/bond-movie-goldfinger.jpg" },
            { name: "Thunderball",          target: "1965", detail: "SPECTRE agent Largo hijacks two NATO atomic bombs and holds the world ransom. Bond traces the warheads to Largo’s yacht in the Bahamas, romancing his mistress Domino along the way, and leads a climactic underwater battle to recover the bombs.", img: "assets/bond-movie-thunderball.jpg" },
            { name: "You Only Live Twice",  target: "1967", detail: "Faking his own death, Bond goes undercover in Japan to find who is hijacking American and Soviet spacecraft and pushing the two superpowers toward war. He traces the plot to SPECTRE chief Blofeld’s hollowed-out volcano base and destroys it from within.", img: "assets/bond-movie-yolt.jpg" },
            { name: "Diamonds Are Forever", target: "1971", detail: "Posing as a smuggler, Bond infiltrates a diamond-trafficking pipeline running through Amsterdam and Las Vegas, tracing it to a returning Blofeld, who is stockpiling diamonds to build a satellite laser weapon. Bond breaks up the scheme aboard an offshore oil rig.", img: "assets/bond-movie-diamonds.jpg" },
          ],
        },
        villains: {
          title: "The Villains", kicker: "Beat The Boss", eyebrow: "One Of The Four Mode Types",
          boxes: [
            { name: "Dr. No",            target: "Dr. No", detail: "Trouble in Jamaica — build value at the bumpers or right orbit, then cash out at the Dragon Tank. 10 successful shots to win.", img: "assets/bond-villain-drno.png" },
            { name: "Rosa Klebb",        target: "From Russia With Love", detail: "SPECTRE Island — clear all nine major shots, then finish with the left eject and DB5 eject.", img: "assets/bond-villain-klebb.png" },
            { name: "Auric Goldfinger",  target: "Goldfinger", detail: "The Incredible Laser Ray — shoot the Goldfinger target to relight shots; 7 total shots lights the DB5 eject to escape.", img: "assets/bond-villain-goldfinger.png" },
            { name: "Emilio Largo",      target: "Thunderball", detail: "Disco Volante Demolition — shoot the left eject, side ramp, or right ramp; 10 shots to win.", img: "assets/bond-villain-largo.png" },
            { name: "Blofeld",           target: "You Only Live Twice", detail: "Feeding Frenzy — shoot the Bird 1 rocket or drop targets to beat Blofeld.", img: "assets/bond-villain-blofeld.png" },
            { name: "Blofeld",           target: "Diamonds Are Forever", detail: "Diamonds of Destruction — Blofeld, disguised as Willard Whyte, calibrating the satellite via left eject, center loop, and right ramp.", img: "assets/bond-villain-blofeld.png" },
          ],
          chipByFilm: true,
        },
        henchmen: {
          title: "The Henchmen", kicker: "Take Out The Muscle", eyebrow: "Fast, Repeatable Progress",
          boxes: [
            { name: "Professor Dent", target: "Dr. No", detail: "Sinister Summit — lock in the moving yellow shot with the Dragon Tank; 10 yellow shots to win.", img: "assets/bond-henchman-dent.png" },
            { name: "Red Grant",    target: "From Russia With Love", detail: "Encounter on the Orient Express — shoot the right orbit to light combos across the right side; 10 red shots to win.", img: "assets/bond-henchman-grant.png" },
            { name: "Oddjob",       target: "Goldfinger", detail: "He Blew a Fuse — hit the left ramp, side ramp, right orbit, and right ramp, then the rocket lane to win.", img: "assets/bond-henchman-oddjob.png" },
            { name: "Fiona Volpe",  target: "Thunderball", detail: "Femme Fatale — chase her down: left ramp, right ramp, left ramp, right orbit, side ramp, left ramp, DB5 eject.", img: "assets/bond-henchman-volpe.png" },
            { name: "Mr. Osato",    target: "You Only Live Twice", detail: "Arrange Usual Reception Please — flee Osato’s clutches via the three ramps and upper loop." },
            { name: "Mr. Wint & Mr. Kidd", target: "Diamonds Are Forever", detail: "Shoot the left ramp then center lane, repeated three times, to complete the mode.", img: "assets/bond-henchman-wintkidd.png" },
          ],
          chipByFilm: true,
        },
        bondGirls: {
          title: "The Bond Girls", kicker: "Collect The Allies", eyebrow: "Boost The Current Film",
          boxes: [
            { name: "Honey Ryder",       target: "Dr. No", detail: "Qualified by 25 bumper hits." },
            { name: "Tatiana Romanova",  target: "From Russia With Love", detail: "Qualified by 3 right orbit shots." },
            { name: "Pussy Galore",      target: "Goldfinger", detail: "Qualified by 4 DB5 ejects." },
            { name: "Domino Derval",     target: "Thunderball", detail: "Qualified by 4 left ejects." },
            { name: "Kissy Suzuki",      target: "You Only Live Twice", detail: "Qualified by 10 rocket hits — strong shots register more." },
            { name: "Tiffany Case",      target: "Diamonds Are Forever", detail: "Qualified by 200 spinner spins." },
          ],
          chipByFilm: true,
        },
        qbranch: {
          title: "Q-Branch Toys", kicker: "Spend The Gadgets", eyebrow: "Light Them, Then Cash In",
          boxes: [
            { name: "Radioactive Reconnaissance", target: "Dr. No", detail: "Bumper hits qualify it — take control of the Geiger Counter to find the big-award shot." },
            { name: "Attaché Case",      target: "From Russia With Love", detail: "Six right-orbit shots qualify it; the case’s five components start Hunted by Helicopter Multiball." },
            { name: "DB5",               target: "Goldfinger", detail: "Three DB5 eject shots qualify it; six shots reveal the car’s amenities and start DB5 Multiball." },
            { name: "Power Pack",        target: "Thunderball", detail: "Three left-eject shots qualify it; the underwater jetpack gadget leads into Power Pack Multiball." },
            { name: "Little Nellie",     target: "You Only Live Twice", detail: "20 rocket hits qualify it; five right-ramp shots start Little Nellie Multiball." },
            { name: "Q’s Ring",          target: "Diamonds Are Forever", detail: "400 spinner spins qualify it — test the electromagnet ring on the flashing blue shots." },
          ],
          chipByFilm: true,
        },
      },

      // ---- NOW PLAYING hold card ------------------------------------------
      hold: "Six iconic films. One license to kill. Push Start.",

      // ---- WIRING: page order + footer pro-tips ----------------------------
      sequence: ["intro", "gameoverview", "rundown", "movies", "villains", "henchmen", "bondGirls", "qbranch", "multiball", "strategy", "hold"],
      proTips: {
        intro:     "Learn the Skill Shots.  They can provide you with additional Smart Missiles right off the plunge.",
        overview:  "Smart Missles (Blue Action Button) spot any shot. Collect them and use them wisely.",
        rundown:   "Each film has four modes — Villains, Henchmen, SPECTRE Weapon, Q Branch. Play each mode to complete the film and add to your end of ball bonus.",
        movies:    "Take the time to watch the iconic film clips that accompany each mode.",
        villains:  "Defeating a Villan gives you an extra Smart Missle and adds to your end of ball bonus.",
        henchmen:  "Henchmen are the fast, repeatable film progress — lean on them early.",
        bondGirls: "Bond girls: Pussy Galore - enough said.",
        qbranch:   "Q gadgets are gravy — spend them from the scoop, but don’t drain reaching for it.",
        multiball: "Start a Villan or Henchmen mode and then stack BirdOne or JetPack Multiball to add to the scoring.",
        strategy:  "Collect Bond Girl mulitpliers and activate them using the Pink Action Button. Best used during a Villain or Henchmen mode, better yet stacked with a multiball.",
        hold:      "Finish all six films for MI6 Multiball — yeah right.",
      },
    },

    /* ======================================================================
       STRANGER THINGS
       ====================================================================== */
    {
      game: "stranger-things",
      title: "Stranger Things",
      maker: "Stern · 2019",
      proTip: "Don’t fear the Upside Down — its hidden ball racks up points while you flip the one you can see.",

      credits: [
        { role: "Game Design",  names: "Brian Eddy" },
        { role: "Artwork",      names: "Kevin O’Connor" },
        { role: "Sound",        names: "Jerry Thompson" },
        { role: "Release",      names: "Stern · 2019" },
      ],

      lead: "Chase the chapters through Hawkins while the Upside Down bleeds into the playfield. Start modes at the TV, then take down the Mind Flayer.",
      shots: [
        { label: "Start Chapter",  target: "The TV Scoop",   desc: "Pick a chapter, then run its flashing shots." },
        { label: "Demogorgon",     target: "Bash Toy",       desc: "Pound the creature to light its multiball." },
        { label: "Upside Down",    target: "Hidden Magnet",  desc: "Sink the ball into scoring you can’t see." },
        { label: "Bike Escape",    target: "Left Ramp",      desc: "Combo the ramps to outrun what’s chasing." },
      ],
      wizard: {
        title: "Battle of Starcourt",
        body: "Play through every chapter to reach the Battle of Starcourt — the final stand-off at the mall, and the end of the game.",
        chip: "◆ Clear every chapter",
      },
      keyMultiballs: { lead: "Multiple ways into the chaos of the Upside Down.", rows: [
        { label: "Demogorgon MB",  target: "Bash Toy",     desc: "Feed the creature to lock balls, then hammer lit shots." },
        { label: "Mind Flayer MB", target: "Center Shots", desc: "Spread across the shadow to build jackpots." },
      ] },
      skills: { lead: "Plunge for the skill shot at the flashing lane.", rows: [
        { label: "Skill Shot",   target: "Flashing Lane", desc: "Plunge into the lit rollover." },
        { label: "Super Skill",  target: "Left Ramp",     desc: "Hold left flipper, then combo the ramp." },
      ] },
      button: { kicker: "Eleven’s power", title: "The Flashlight", lead: "The action button reveals and collects hidden Upside Down value.", rows: [
        { label: "Reveal", target: "Hidden Shots", desc: "Light shots you otherwise can’t see." },
      ] },
      tips: { proTip: "Don’t fear the Upside Down — its hidden ball scores while you flip the visible one.", rows: [
        { name: "Mind The TV",     body: "Start chapters at the TV; each is a timed mode." },
        { name: "Embrace The Flip", body: "The Upside Down scores while you play the visible ball." },
      ] },

      overview: [
        "Start every mode at the TV scoop.",
        "Chapters play out across Hawkins as the Upside Down bleeds in.",
        "A hidden magnet scores the ball you can’t see.",
        "The Flashlight button reveals and collects hidden value.",
        "Clear every chapter to reach the Battle of Starcourt.",
        "Two multiballs: the Demogorgon and the Mind Flayer.",
      ],

      multiballs: [
        { name: "Demogorgon MB",  target: "Bash Toy",     detail: "Feed the creature to lock balls, then hammer the lit shots.", jackpots: "Jackpots at the lit shots; the Super lands at the beast’s mouth.", tip: "Bash the toy fully before starting for more balls." },
        { name: "Mind Flayer MB", target: "Center Shots", detail: "Spread shots across the shadow to build it.", jackpots: "Jackpots grow as the Flayer spreads across the playfield.", tip: "Keep shots moving across the center — don’t camp one lane." },
      ],

      sections: {
        seasons: {
          title: "The Seasons & Chapters", kicker: "Start At The TV", eyebrow: "Run The Flashing Shots",
          boxes: [
            { name: "The Search",     target: "The TV Scoop", detail: "Hunt for Will across Hawkins — the opening chapter." },
            { name: "Hawkins Lab",    target: "Center Scoop", detail: "Break into the lab where the gate was opened." },
            { name: "The Byers House", target: "Right Ramp",  detail: "Christmas lights and the wall of letters." },
            { name: "The Hub",        target: "Left Orbit",   detail: "Regroup with the party and pick the next move." },
            { name: "The Fun Fair",   target: "Left Ramp",    detail: "The Starcourt showdown builds from here." },
          ],
        },
        demogorgon: {
          title: "Demogorgon Battles", kicker: "Pound The Creature", eyebrow: "Escalating Fights",
          boxes: [
            { name: "The Demogorgon", target: "Bash Toy",    detail: "Hammer the creature to light and start its multiball." },
            { name: "Demodogs",      target: "Pop Bumpers",  detail: "Thin the pack before the big one arrives." },
            { name: "The Mind Flayer", target: "Center Shots", detail: "The shadow spreads across the playfield — spread your shots to match." },
          ],
        },
      },

      strategy: [
        { name: "Embrace The Flip", detail: "The Upside Down’s hidden ball scores while you flip the visible one." },
        { name: "Mind The TV",      detail: "Every chapter starts at the TV — always know which one’s lit." },
        { name: "Feed The Demogorgon", detail: "Fully bash the toy before multiball for extra balls." },
        { name: "Steer The Plunge", detail: "Hold the left flipper for the Super Skill up the ramp." },
        { name: "Don’t Fear The Dark", detail: "Hidden scoring is free — let the magnet do the work." },
        { name: "One Chapter At A Time", detail: "Finish a chapter before starting the next; half-runs waste time." },
      ],

      hold: "The gate is open. Go run the Upside Down.",

      sequence: ["intro", "gameoverview", "rundown", "seasons", "demogorgon", "multiball", "strategy", "hold"],
      proTips: {
        intro:     "Everything starts at the TV scoop — pick a chapter, then run its shots.",
        overview:  "The Upside Down’s hidden ball scores while you flip the one you can see — let it work.",
        rundown:   "Two multiballs and a wizard: Demogorgon, Mind Flayer, then the Battle of Starcourt.",
        multiball: "Feed the Demogorgon to lock balls, then hammer every lit shot before they drop.",
        strategy:  "Don’t chase the Bike Escape cold — combo the ramps when they’re already lit.",
        hold:      "Clear every chapter to reach the Battle of Starcourt — the final stand.",
      },
    },

    /* ======================================================================
       GODZILLA
       ====================================================================== */
    {
      game: "godzilla",
      title: "Godzilla",
      maker: "Stern · 2021",
      proTip: "Just starting an objective counts — you don’t have to finish it to move the city along.",

      credits: [
        { role: "Game Design",   names: "Keith Elwin" },
        { role: "Code / Rules",  names: "Rick Naegele, Keith Elwin" },
        { role: "Engineering",   names: "Harrison Drake" },
        { role: "Artwork",       names: "Zombie Yeti" },
        { role: "CG Art",        names: "Chuck Ernst" },
        { role: "Sound",         names: "Jerry Thompson" },
      ],

      lead: "Defend four cities from the Xilien invasion. Start every objective in a city, beat its Kaiju, then push on to Planet X.",
      shots: [
        { label: "Kaiju Battle",   target: "The Scoop",    desc: "Shoot both ramps to light it, then pick your monster." },
        { label: "Tesla Strike",   target: "Powerlines",   desc: "Down the power grid for a bonus mode." },
        { label: "Bridge Attack",  target: "The Bridge",   desc: "Multiball — topple the span." },
        { label: "Tank Attack",    target: "The Tanks",    desc: "Multiball — crush the armor." },
      ],
      wizard: {
        title: "King of the Monsters",
        body: "Conquer the cities and reach Planet X. Monster Zero, Terror of Mechagodzilla and Planet X Multiball lead to the King of the Monsters finale.",
        chip: "◆ Conquer every city",
      },
      keyMultiballs: { lead: "Three multiballs stomp the city flat.", rows: [
        { label: "Godzilla MB",       target: "The Building",  desc: "Batter it down, then shoot it again to start." },
        { label: "Mechagodzilla MB",  target: "Right Spinner", desc: "Ramp the spinner, hit the blue targets, rip again." },
        { label: "Saucer Attack MB",  target: "Pop Bumpers",   desc: "Down the saucers to trigger it." },
      ] },
      skills: { lead: "The plunger is player-controlled — aim your skill shot.", rows: [
        { label: "Short Plunge",  target: "Bumper Lane",  desc: "Feed the first switch for a building skill shot." },
        { label: "Secret Skill",  target: "Left Spinner", desc: "Plunge behind the upper flipper for the big one." },
      ] },
      button: { kicker: "Choose your monster", title: "Ally Select", lead: "Use the flipper buttons to pick the ally you collect at the scoop.", rows: [
        { label: "Rodan",     target: "2× Scoring", desc: "A minute of doubled points." },
        { label: "Mothra",    target: "Ball Save",  desc: "Lights the left outlane." },
        { label: "Anguirus",  target: "Add-A-Ball", desc: "Qualifies an extra ball in multiball." },
      ] },
      tips: { proTip: "Just starting an objective advances the city — you don’t have to finish it.", rows: [
        { name: "Start, Don’t Finish", body: "Starting any objective moves the city along." },
        { name: "Powerups Matter",     body: "Feed the Godzilla Powerup meter toward the wizard modes." },
      ] },

      overview: [
        "Defend four cities from the Xilien invasion.",
        "Just starting a city objective advances it — you don’t have to finish.",
        "Kaiju battles, Tesla strikes, and building multiball anchor the game.",
        "Pick an ally at the scoop for a scoring or safety boost.",
        "Conquer every city and reach Planet X for King of the Monsters.",
        "Three multiballs: Godzilla, Mechagodzilla, Saucer Attack.",
      ],

      multiballs: [
        { name: "Godzilla MB",      target: "The Building",  detail: "Batter the building down, then shoot it again to start.", jackpots: "Six jackpots light the Super.", tip: "Save it to stack with a city objective." },
        { name: "Mechagodzilla MB", target: "Right Spinner", detail: "Ramp the spinner, hit the blue targets, then rip it again.", jackpots: "Spinner rips build every jackpot’s value.", tip: "Keep the spinner spinning to grow the jackpots." },
        { name: "Saucer Attack MB", target: "Pop Bumpers",   detail: "Down the saucers in the bumpers to trigger it.", jackpots: "Jackpots at the orbits and ramps.", tip: "Feed the pops early to light it fast." },
      ],

      sections: {
        cities: {
          title: "Cities", kicker: "Defend & Destroy", eyebrow: "Each One A Battleground",
          boxes: [
            { name: "City Round 1", target: "The Building", detail: "Topple the tower and clear the first city’s objectives." },
            { name: "City Round 2", target: "The Bridge",   detail: "Down the span, then sweep the flashing city shots." },
            { name: "City Round 3", target: "The Tanks",    detail: "Crush the armor rolling through the third city." },
            { name: "City Round 4", target: "Powerlines",  detail: "Kill the grid to finish the last city before Planet X." },
          ],
        },
        kaiju: {
          title: "Kaiju Battles", kicker: "Choose Your Monster", eyebrow: "Light It At The Scoop",
          boxes: [
            { name: "Mechagodzilla",  target: "Right Spinner", detail: "The mechanical menace — ramp the spinner, then rip it again." },
            { name: "King Ghidorah",  target: "The Scoop",     detail: "The three-headed terror from Planet X." },
            { name: "Ebirah",         target: "Left Ramp",     detail: "The giant crustacean rising from the bay." },
            { name: "Titanosaurus",   target: "Right Ramp",    detail: "The aquatic dinosaur summoned to level the city." },
            { name: "Gigan",          target: "Left Orbit",    detail: "The cyborg with the buzzsaw chest." },
            { name: "Megalon",        target: "Right Orbit",   detail: "The drill-handed defender of the underground." },
          ],
        },
        miniwizards: {
          title: "Mini Wizard Modes", kicker: "The Big Rounds", eyebrow: "Earned, Not Given",
          boxes: [
            { name: "Monster Zero",           target: "All Shots", detail: "A frenzy earned by starting enough Kaiju battles." },
            { name: "Terror of Mechagodzilla", target: "All Shots", detail: "The reward for defending every city." },
            { name: "Planet X",               target: "The Scoop", detail: "The gateway multiball on the road to King of the Monsters." },
          ],
        },
      },

      strategy: [
        { name: "Start, Don’t Finish", detail: "Starting any objective advances the city — bank progress fast." },
        { name: "Pick Rodan",       detail: "Choose the 2× ally before a big multiball for doubled points." },
        { name: "Feed The Powerup", detail: "Build the Godzilla Powerup meter toward the wizard modes." },
        { name: "Stack The Building", detail: "Start Godzilla MB inside a city mode to double up." },
        { name: "Secret Skill",     detail: "Plunge behind the upper flipper for the big skill shot." },
        { name: "Save Mothra",      detail: "Choose Mothra’s ball save when your outlanes are hungry." },
      ],

      hold: "The city’s yours to save. Go be King of the Monsters.",

      sequence: ["intro", "gameoverview", "rundown", "cities", "kaiju", "multiball", "miniwizards", "strategy", "hold"],
      proTips: {
        intro:     "Four cities, four Kaiju — defend them all the way to Planet X.",
        overview:  "Just starting a city objective advances it — you don’t have to finish.",
        rundown:   "Three multiballs stomp the city: Godzilla, Mechagodzilla, Saucer Attack.",
        multiball: "Batter the building down first — it’s the fastest path into Godzilla Multiball.",
        strategy:  "Feed the Powerup meter between modes; it fuels the wizard run.",
        hold:      "Conquer every city and reach Planet X for King of the Monsters.",
      },
    },

    /* ======================================================================
       DEADPOOL
       ====================================================================== */
    {
      game: "deadpool",
      title: "Deadpool",
      maker: "Stern · 2018",
      proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole playfield.",

      credits: [
        { role: "Game Design",   names: "George Gomez" },
        { role: "Code / Rules",  names: "Tanio Klyce" },
        { role: "Artwork",       names: "Zombie Yeti" },
        { role: "Release",       names: "Stern · 2018" },
      ],

      lead: "Start battles at the scoop, beat the villain’s flashing shots, then finish him off. Bank team-ups to hit a whole lot harder.",
      shots: [
        { label: "Battles",             target: "The Scoop",       desc: "Complete DEAD, then start Juggernaut, Mystique or Sabretooth." },
        { label: "Wolverine Team-Up",   target: "Center Spinner",  desc: "Bank it to double all battle damage." },
        { label: "Ninja Multiball",     target: "Right Ramp",      desc: "Lock three balls to start it." },
        { label: "Playfield X",         target: "SNIKT Target",    desc: "Ricochet onto the right ramp for up to 5×." },
      ],
      wizard: {
        title: "The Final Battle",
        body: "Replay the three battles — harder — for Clone Multiball, then face Mr. Sinister in the Final Battle at the end of it all.",
        chip: "◆ Beat every battle twice",
      },
      keyMultiballs: { lead: "Four multiballs, one merc with a mouth.", rows: [
        { label: "Ninja MB",     target: "Right Ramp",      desc: "Lock three balls to start it." },
        { label: "Disco MB",     target: "Left Spinner",    desc: "Rip the spinner enough times." },
        { label: "Mechsuit MB",  target: "Weapons → Scoop", desc: "Cash out weapons to start it." },
      ] },
      skills: { lead: "Hold the left flipper and pick your skill shot.", rows: [
        { label: "Lane Skill",     target: "Flashing BAM! Lane", desc: "Plunge into the lit lane." },
        { label: "Super Secret",   target: "SNIKT → Right Ramp", desc: "Combo it for a fortune plus a playfield X." },
      ] },
      button: { kicker: "Spell BOOM", title: "The BOOM Button", lead: "Spots the highest-value shot on the field. Stack four for a Big Boom that spots everything.", rows: [
        { label: "Boom",      target: "Highest Shot", desc: "Instantly collect the top lit shot." },
        { label: "Big Boom",  target: "Everything",   desc: "Four BOOMs spot the whole field." },
      ] },
      tips: { proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole field.", rows: [
        { name: "Stack Team-Ups", body: "Wolverine doubles damage; Colossus doubles points." },
        { name: "Playfield X",    body: "Ricochet the SNIKT target to the right ramp for up to 5×." },
      ] },

      overview: [
        "Start battles at the scoop; beat the villain’s flashing shots.",
        "Team-ups double your damage and points — bank them first.",
        "Spell BOOM and hold the button to spot the best shot on the field.",
        "Four multiballs keep the field busy.",
        "Beat every battle twice to reach the Final Battle with Mr. Sinister.",
        "Multiballs: Ninja, Disco, Mechsuit — Sauron caps them.",
      ],

      multiballs: [
        { name: "Ninja MB",    target: "Right Ramp",       detail: "Lock three balls at the right ramp.", jackpots: "Jackpots at the lit ramps and loops.", tip: "Stack with a team-up for doubled jackpots." },
        { name: "Disco MB",    target: "Left Spinner",     detail: "Rip the spinner enough times to light it.", jackpots: "Spinner value feeds the jackpots.", tip: "Keep the ball on the left for spinner rips." },
        { name: "Mechsuit MB", target: "Weapons → Scoop",  detail: "Cash out collected weapons at the scoop.", jackpots: "Each weapon cashed raises the jackpot.", tip: "Collect weapons before cashing for a bigger start." },
      ],

      sections: {
        battles: {
          title: "The Battles", kicker: "Start At The Scoop", eyebrow: "Complete DEAD First",
          boxes: [
            { name: "Juggernaut", target: "The Scoop", detail: "The unstoppable freight-train fight." },
            { name: "Sabretooth", target: "The Scoop", detail: "A brawl of claws and healing factors." },
            { name: "Mystique",   target: "The Scoop", detail: "The shape-shifter who never fights straight." },
          ],
        },
        quests: {
          title: "The Quests", kicker: "Side Missions", eyebrow: "Points On The Way",
          boxes: [
            { name: "Chimichanga", target: "Left Ramp",    detail: "Collect food shots for a quick scoring run." },
            { name: "Disco",       target: "Left Spinner", detail: "Rip the spinner to fuel the Disco multiball." },
            { name: "Weapons Plus", target: "Standups",    detail: "Bank weapon targets to cash out at the scoop." },
          ],
        },
        teamups: {
          title: "Team-Ups", kicker: "Bank The Ally", eyebrow: "Stack Before A Battle",
          boxes: [
            { name: "Wolverine", target: "Center Spinner", detail: "Doubles all battle damage — the essential stack." },
            { name: "Colossus",  target: "Right Ramp",     detail: "Doubles points during the battle." },
            { name: "Domino",    target: "Left Ramp",      detail: "Luck powers add-a-ball and saves." },
            { name: "Negasonic", target: "Left Orbit",     detail: "Explosive help for a big finish." },
          ],
        },
        lildeadpool: {
          title: "Lil’ Deadpool", kicker: "The Bonus Bug", eyebrow: "Little Merc, Big Points",
          boxes: [
            { name: "Lil’ Deadpool", target: "Mini Playfield", detail: "Feed the little guy to build a growing bonus multiplier." },
          ],
        },
        sinister: {
          title: "Mr. Sinister Modes", kicker: "The End Game", eyebrow: "Beat Every Battle Twice",
          boxes: [
            { name: "Clone Multiball", target: "All Shots", detail: "Replay the three battles — harder — for the clone army." },
            { name: "The Final Battle", target: "The Scoop", detail: "Face Mr. Sinister himself — the goal of the whole game." },
          ],
        },
      },

      strategy: [
        { name: "Spell BOOM",      detail: "Hold the button to spot the highest-value shot on the field." },
        { name: "Stack Team-Ups",  detail: "Wolverine doubles damage; Colossus doubles points." },
        { name: "Playfield X",     detail: "Ricochet the SNIKT target to the right ramp for up to 5×." },
        { name: "Battle Order",    detail: "Chip the easy villains first to build toward Sauron." },
        { name: "Super Secret",    detail: "Combo SNIKT to the right ramp for a fortune plus a multiplier." },
        { name: "Don’t Camp",      detail: "Move between battles and multiballs — repeats score less." },
      ],

      hold: "Maximum effort. Go break the fourth wall.",

      sequence: ["intro", "gameoverview", "rundown", "battles", "quests", "teamups", "lildeadpool", "multiball", "sinister", "strategy", "hold"],
      proTips: {
        intro:     "Start battles at the scoop; team-ups make everything hit harder.",
        overview:  "Bank Wolverine before a battle — it doubles all the damage you deal.",
        rundown:   "Three multiballs and Sinister: Ninja, Disco, Mechsuit, then the Final Battle.",
        multiball: "Lock three on the right ramp for Ninja — the easiest multiball to start.",
        strategy:  "Ricochet the SNIKT target to the right ramp for up to 5× playfield.",
        hold:      "Beat every battle twice for Clone Multiball, then face Mr. Sinister.",
      },
    },

    /* ======================================================================
       FOO FIGHTERS
       ====================================================================== */
    {
      game: "foo-fighters",
      title: "Foo Fighters",
      maker: "Stern · 2023",
      proTip: "Mod the van before you start a city — a modded run scores far, far more.",

      credits: [
        { role: "Game Design",   names: "Jack Danger" },
        { role: "Code / Rules",  names: "Tanio Klyce, Raymond Davidson" },
        { role: "Artwork",       names: "Zombie Yeti" },
        { role: "Sound",         names: "Bob Baffy" },
        { role: "Release",       names: "Stern · 2023" },
      ],

      lead: "Tour the country in the van, save each city from the Overlord, and mod the van so every run scores more.",
      shots: [
        { label: "Van Mode",           target: "Left Ramp",     desc: "Spell V-A-N with white shots, then start a city." },
        { label: "Mod the Van",        target: "Paddle Target", desc: "Behind the drops — upgrades boost the whole run." },
        { label: "Charge the Button",  target: "Captive Ball",  desc: "Bank hits so the button collects lit shots." },
        { label: "Rock-O-Meter",       target: "Right Orbit",   desc: "Climb toward 2×, then 3× playfield." },
      ],
      wizard: {
        title: "The Final Battle",
        body: "Clear the major objectives — cities, frenzies, Area 51 — for FooBot Multiball, then take on the Overlord in the Final Battle.",
        chip: "◆ Save six cities",
      },
      keyMultiballs: { lead: "Three multiballs save the tour.", rows: [
        { label: "Overlord MB",   target: "The Overlord", desc: "Green it, lock a ball, pound the captive ball." },
        { label: "Area 51 MB",    target: "Right Ramp",   desc: "Five ramp shots; super is ramp → captive combo." },
        { label: "Combotron MB",  target: "Side Ramp",    desc: "Six combos, then the side ramp." },
      ] },
      skills: { lead: "A skill shot waits at every plunge.", rows: [
        { label: "Rock-O-Meter",  target: "Plunge Lane",     desc: "Time the flashing insert for a full level." },
        { label: "Super Skill",   target: "Left Crossover",  desc: "Chain the side loop up to a six-way." },
      ] },
      button: { kicker: "Charge it first", title: "Action Button", lead: "Charge the button at the captive ball, then press it to collect lit shots during modes and multiballs.", rows: [
        { label: "Charge",   target: "Captive Ball", desc: "Bank hits to load the button." },
        { label: "Collect",  target: "Lit Shots",    desc: "Press to grab lit value hands-free." },
      ] },
      tips: { proTip: "Mod the van before you start a city — a modded run scores far, far more.", rows: [
        { name: "Mod The Van",     body: "Hit the paddle first; a modded run scores far more." },
        { name: "Climb The Meter", body: "Right orbit builds 2× then 3× playfield." },
      ] },

      overview: [
        "Tour the country in the van; save each city from the Overlord.",
        "Mod the van before a city — a modded run scores far more.",
        "Charge the Action Button at the captive ball to collect lit shots.",
        "Climb the Rock-O-Meter to 2× then 3× playfield.",
        "Save six cities to reach the Final Battle.",
        "Three multiballs: Overlord, Area 51, Combotron.",
      ],

      multiballs: [
        { name: "Overlord MB",  target: "The Overlord", detail: "Green the Overlord, lock a ball, pound the captive ball.", jackpots: "Each start is worth more — and demands more shots.", tip: "Mod the van first so jackpots pay bigger." },
        { name: "Area 51 MB",   target: "Right Ramp",   detail: "Five ramp shots light it.", jackpots: "The Super is a ramp → captive combo.", tip: "Groove the right ramp before starting." },
        { name: "Combotron MB", target: "Side Ramp",    detail: "Six combos, then the side ramp.", jackpots: "Combo count sets the jackpot value.", tip: "Chain combos through the crossover for a big start." },
      ],

      sections: {
        band: {
          title: "The Band", kicker: "Foo Fighters", eyebrow: "Who You’re Playing With",
          boxes: [
            { name: "Dave Grohl",      target: "Vocals · Guitar", detail: "Founder and frontman — the ex-Nirvana drummer who put the band together in 1994." },
            { name: "Nate Mendel",     target: "Bass",           detail: "On bass since day one — the low-end backbone of every record." },
            { name: "Pat Smear",       target: "Guitar",         detail: "Founding guitarist and punk veteran — the wall of rhythm guitar." },
            { name: "Chris Shiflett",  target: "Lead Guitar",    detail: "Lead guitar since 1999 — the solos and the sharp riffs." },
            { name: "Rami Jaffee",     target: "Keys",           detail: "Keyboards and organ — the texture under the anthems." },
            { name: "Taylor Hawkins",  target: "Drums",          detail: "The powerhouse drummer and Grohl’s foil from 1997 — forever a Foo Fighter." },
          ],
        },
        vanmodes: {
          title: "Van Modes (Cities)", kicker: "Spell V-A-N", eyebrow: "Save Each City",
          chipByCity: true,
          boxes: [
            { name: "Los Angeles",  target: "Left Ramp",  detail: "Kick off the tour and save the first city from the Overlord.", img: "assets/foo-city-la.png" },
            { name: "Chicago",      target: "Right Ramp", detail: "Work the ramps to clear the second stop.", img: "assets/foo-city-chicago.png" },
            { name: "New York",     target: "Left Orbit", detail: "A crowded run — combo the loops to clear it.", img: "assets/foo-city-newyork.png" },
            { name: "New Orleans",  target: "Left Loop",  detail: "Second-line through the loop shots to clear the city.", img: "assets/foo-city-neworleans.png" },
            { name: "Seattle",      target: "Right Orbit", detail: "The rainy city and its tricky shots.", img: "assets/foo-city-seattle.png" },
            { name: "Roswell",      target: "Captive Ball", detail: "Strange lights over the desert — the road to Area 51.", img: "assets/foo-city-roswell.png" },
          ],
        },
        modulator: {
          title: "The Modulator", kicker: "Mod The Van", eyebrow: "Upgrade Before A City",
          boxes: [
            { name: "Mod The Van",  target: "Paddle Target", detail: "Behind the drops — upgrades boost the whole run." },
            { name: "Rock-O-Meter", target: "Right Orbit",   detail: "Climb toward 2×, then 3× playfield." },
            { name: "Charge Up",    target: "Captive Ball",   detail: "Bank hits so the action button collects lit shots." },
          ],
        },
        wizards: {
          title: "Wizard Modes", kicker: "The Big Finishes", eyebrow: "Clear The Objectives",
          boxes: [
            { name: "FooBot Multiball", target: "All Shots", detail: "Earned by clearing cities, frenzies and Area 51." },
            { name: "The Final Battle", target: "Side Ramp", detail: "Take on the Overlord for the whole tour." },
          ],
        },
      },

      strategy: [
        { name: "Mod The Van",   detail: "Hit the paddle first; a modded run scores far more." },
        { name: "Climb The Meter", detail: "Right orbit builds 2× then 3× playfield — bank it before a mode." },
        { name: "Charge First",  detail: "Load the button at the captive ball before you need it." },
        { name: "Save The Super", detail: "Time Area 51’s ramp → captive combo for the Super." },
        { name: "Six-Way Skill", detail: "Chain the left crossover on the plunge for a big skill shot." },
        { name: "City Order",    detail: "Start the closest city — half-saved cities waste the tour." },
      ],

      hold: "Gas up the van. The tour’s yours.",

      sequence: ["intro", "gameoverview", "band", "rundown", "vanmodes", "modulator", "multiball", "wizards", "strategy", "hold"],
      proTips: {
        intro:     "Tour the country in the van; save each city from the Overlord.",
        overview:  "Mod the van before a city — a modded run scores far, far more.",
        band:      "Six players, one van — the real Foo Fighters ride along the whole tour.",
        rundown:   "Three multiballs on the tour: Overlord, Area 51, Combotron.",
        multiball: "Green the Overlord, lock a ball, then pound the captive ball for jackpots.",
        strategy:  "Climb the Rock-O-Meter on the right orbit to 2×, then 3× playfield.",
        hold:      "Save six cities to reach the Final Battle with the Overlord.",
      },
    },

    /* ======================================================================
       JURASSIC PARK
       ====================================================================== */
    {
      game: "jurassic-park",
      title: "Jurassic Park",
      maker: "Stern · 2019",
      proTip: "Stack a paddock mode with a multiball — the rescue shots pay double under all that chaos.",

      credits: [
        { role: "Game Design",   names: "Keith Elwin" },
        { role: "Code / Rules",  names: "Rick Naegele, Keith Elwin" },
        { role: "Engineering",   names: "Harrison Drake" },
        { role: "Artwork",       names: "Jonathan Bergeron" },
        { role: "CG Art",        names: "Chuck Ernst" },
        { role: "Sound",         names: "Jerry Thompson" },
      ],

      lead: "Nedry’s virus loosed the dinosaurs. Rescue the staff, capture the paddocks, and stage your escape from the island.",
      shots: [
        { label: "Enter Paddock",  target: "Left Ramp",        desc: "Spell M-A-P with white shots to light it." },
        { label: "Capture Dino",   target: "Yellow Trap Shot", desc: "Hit rescues to light the traps, then bag the flashing shot." },
        { label: "Control Room",   target: "Left Target",      desc: "Pick one of three modes with the flippers." },
        { label: "T-Rex",          target: "The Truck",        desc: "Three hits start a hurry-up into multiball." },
      ],
      wizard: {
        title: "Escape Nublar",
        body: "Clear the control rooms and paddocks to reach Escape Nublar, then the ultimate When Dinosaurs Ruled the Earth.",
        chip: "◆ Capture every paddock",
      },
      keyMultiballs: { lead: "Three ways to lose control of the island.", rows: [
        { label: "Chaos MB",         target: "Spell CHAOS", desc: "Then the target between the bumpers." },
        { label: "Raptor Tri-Ball",  target: "Raptor Pit",  desc: "Lock a ball, then batter the pit." },
        { label: "T-Rex MB",         target: "The Truck",   desc: "Three truck hits start the hurry-up." },
      ] },
      skills: { lead: "The skill shot is a ramp combo — chain it for multipliers.", rows: [
        { label: "Combo Skill",   target: "Left → Right → Side", desc: "Each shot multiplies the base value." },
        { label: "Secret Skill",  target: "Pops Standup",        desc: "Soft plunge to a flipper, then bash the pops." },
      ] },
      button: { kicker: "Pick your award", title: "Smart Missile", lead: "When lit, choose an award with the action button, then fire it at the target between the bumpers.", rows: [
        { label: "Select",  target: "Action Button", desc: "Cycle to the award you want." },
        { label: "Fire",    target: "Center Target", desc: "Cash it in." },
      ] },
      tips: { proTip: "Stack a paddock mode with a multiball — the rescue shots pay double under the chaos.", rows: [
        { name: "Stack The Chaos", body: "Run a paddock mode inside a multiball for double rescues." },
        { name: "Feed The Amber",  body: "Supply drops and 2× scoring come from the purple standups." },
      ] },

      overview: [
        "Nedry’s virus loosed the dinosaurs across the island.",
        "Rescue staff, capture paddocks, and stage your escape.",
        "Spell M-A-P to enter paddocks; bag the flashing trap to capture.",
        "The Smart Missile lets you pick and fire an award.",
        "Capture every paddock to reach Escape Nublar.",
        "Three multiballs: Chaos, Raptor Tri-Ball, T-Rex.",
      ],

      multiballs: [
        { name: "Chaos MB",        target: "Spell CHAOS", detail: "Spell CHAOS, then hit the target between the bumpers.", jackpots: "Jackpots at the major shots.", tip: "Run a paddock mode inside it for double rescues." },
        { name: "Raptor Tri-Ball", target: "Raptor Pit",  detail: "Lock a ball, then batter the pit to release all three.", jackpots: "Pit hits and ramps score jackpots.", tip: "Cradle up and pick your jackpot shots." },
        { name: "T-Rex MB",        target: "The Truck",   detail: "Three truck hits start the hurry-up into multiball.", jackpots: "The hurry-up value carries into the multiball.", tip: "Cash the hurry-up high before it counts down." },
      ],

      sections: {
        paddocks: {
          title: "Paddock Modes", kicker: "Spell M-A-P", eyebrow: "Enter, Then Rescue",
          boxes: [
            { name: "Raptor Pen",     target: "Left Ramp",    detail: "Contain the clever girls before they learn the door." },
            { name: "Dilophosaurus",  target: "Center Scoop", detail: "Watch for the spit — a fast, dangerous rescue." },
            { name: "Triceratops",    target: "Right Ramp",   detail: "Tend the sick trike and move the herd." },
            { name: "Pteranodon",     target: "Left Orbit",   detail: "Aviary chaos — keep the ball moving." },
            { name: "Brachiosaurus",  target: "Right Orbit",  detail: "A gentle giant guarding a tricky lane." },
            { name: "Spinosaurus",    target: "Side Ramp",    detail: "The apex threat of the deep paddocks." },
          ],
        },
        trex: {
          title: "T-Rex Events", kicker: "The Truck", eyebrow: "Three Hits To Start",
          boxes: [
            { name: "T-Rex Encounter", target: "The Truck",  detail: "Three truck hits start the hurry-up into multiball." },
            { name: "Truck Escape",    target: "Left Ramp",  detail: "Outrun the jaws in the mirror." },
            { name: "T-Rex Paddock",   target: "Right Ramp", detail: "Return to the pen where it all broke loose." },
          ],
        },
        wizards: {
          title: "Wizard Modes", kicker: "The End Game", eyebrow: "Capture Every Paddock",
          boxes: [
            { name: "Escape Nublar",              target: "All Shots", detail: "Stage the escape after clearing the control rooms and paddocks." },
            { name: "Visitor Center",             target: "Center Scoop", detail: "Regroup where the tour began." },
            { name: "When Dinosaurs Ruled",       target: "All Shots", detail: "The ultimate wizard mode — the top of the mountain." },
          ],
        },
        other: {
          title: "Other Features", kicker: "Everything Else", eyebrow: "Points Are Points",
          boxes: [
            { name: "Smart Missile", target: "Action Button", detail: "Pick an award, then fire it at the center target." },
            { name: "Chaos",         target: "Spell CHAOS",   detail: "Loose dinos everywhere — a multiball of pure mayhem." },
            { name: "Amber / 2×",    target: "Purple Standups", detail: "Supply drops and doubled scoring." },
            { name: "Control Room",  target: "Left Target",   detail: "Pick one of three modes with the flippers." },
          ],
        },
      },

      strategy: [
        { name: "Stack The Chaos", detail: "Run a paddock mode inside a multiball for double rescues." },
        { name: "Feed The Amber",  detail: "Supply drops and 2× scoring come from the purple standups." },
        { name: "Capture Fast",    detail: "Light traps early so a rescue always has somewhere to go." },
        { name: "Combo Skill",     detail: "Chain left → right → side on the plunge for multipliers." },
        { name: "Pick Your Missile", detail: "Choose the Smart Missile award, then fire the center target." },
        { name: "Hold Your Butts", detail: "Cradle in chaos — the center drain is hungry here." },
      ],

      hold: "Life finds a way. Go survive the island.",

      sequence: ["intro", "gameoverview", "rundown", "paddocks", "trex", "multiball", "wizards", "other", "strategy", "hold"],
      proTips: {
        intro:     "Nedry’s virus loosed the dinosaurs — rescue the staff and escape the island.",
        overview:  "Stack a paddock mode inside a multiball — rescues pay double in the chaos.",
        rundown:   "Three ways to lose control: Chaos, Raptor Tri-Ball, and T-Rex Multiball.",
        multiball: "Three truck hits start the T-Rex hurry-up straight into multiball.",
        strategy:  "Feed the purple standups for supply drops and 2× scoring.",
        hold:      "Capture every paddock to reach Escape Nublar.",
      },
    },

    /* ======================================================================
       MONSTER BASH
       ====================================================================== */
    {
      game: "monster-bash",
      title: "Monster Bash",
      maker: "Williams · 1998",
      proTip: "Completing a mode earns its instrument; merely playing it only lights the mini-wizard, Monster Bash.",

      credits: [
        { role: "Game Design",   names: "George Gomez" },
        { role: "Software",      names: "Lyman Sheats" },
        { role: "Music",         names: "Vince Pontarelli" },
        { role: "Artwork",       names: "Kevin O’Connor" },
        { role: "Engineering",   names: "Chris Shipman" },
        { role: "Release",       names: "Williams · 1998" },
      ],

      lead: "Round up six classic monsters and their instruments to put together the scariest band since KISS.",
      shots: [
        { label: "Creature Feature",  target: "Creature’s Lagoon", desc: "Sweep every major shot before the hurry-up dies." },
        { label: "Full Moon Fever",   target: "Left Loop",         desc: "Rip the Wolfman’s loop for his mode." },
        { label: "Ball & Chain",      target: "Left Ramp",         desc: "Play the Bride’s tight figure-8 ramp." },
        { label: "Drac Attack",       target: "Dracula Loop",      desc: "Spell DRAC-ATTACK, then ride the coffin loop." },
        { label: "Frankenstein",      target: "Center Ramp",       desc: "Drop Frank’s targets, then jolt the monster alive." },
        { label: "The Mummy",         target: "Mummy Target",      desc: "Bash the sarcophagus open to wake him." },
      ],
      wizard: {
        title: "Monsters of Rock",
        body: "Complete all six modes to collect the instruments — then start Monsters of Rock, the six-ball encore and the whole point of the game.",
        chip: "◆ Collect all 6 instruments",
      },
      keyMultiballs: { lead: "Two big multiballs before the encore.", rows: [
        { label: "Frankenstein MB",  target: "Frank’s Drops", desc: "Drop the targets, open the center ramp, jolt him alive." },
        { label: "Mosh Pit MB",      target: "The Scoop",     desc: "Feed the Mosh lane, then start it at the scoop." },
      ] },
      skills: { lead: "The skill shot lives in the rollover lanes.", rows: [
        { label: "Skill Shot",  target: "D-I-G Lanes", desc: "Land the lit lane for points plus a Monster Bomb." },
      ] },
      button: { kicker: "No button here", title: "Phantom Flip", lead: "This 1998 classic has no action button — hit the Phantom Flip targets and the game flips for you at the perfect moment.", rows: [
        { label: "Phantom Flip",   target: "Three Targets", desc: "Auto-flips a shot you’d otherwise miss." },
        { label: "Monster Bombs",  target: "The Plunger",   desc: "Banked bombs spot progress on every monster." },
      ] },
      tips: { proTip: "Completing a mode earns its instrument; merely playing it only lights the mini-wizard.", rows: [
        { name: "Complete, Don’t Just Play", body: "Finishing a mode earns the instrument." },
        { name: "Build The Jets",            body: "Sixty jet hits light Mummy Mayhem and super jets." },
      ] },

      overview: [
        "Round up six classic monsters and their instruments.",
        "Complete a mode to earn its instrument; playing it only lights the mini-wizard.",
        "No action button — Phantom Flip flips for you at the right moment.",
        "Two big multiballs precede the encore.",
        "Collect all six instruments to start Monsters of Rock.",
        "Six monsters: Creature, Wolfman, Bride, Dracula, Frankenstein, Mummy.",
      ],

      multiballs: [
        { name: "Frankenstein MB", target: "Frank’s Drops", detail: "Drop the targets, open the center ramp, and jolt him alive.", jackpots: "Jackpots at the ramps and loops.", tip: "Start it with a mode running for stacked scoring." },
        { name: "Mosh Pit MB",     target: "The Scoop",     detail: "Feed the Mosh lane, then start it at the scoop.", jackpots: "Every monster shot scores a jackpot.", tip: "Spread hits across all six monsters for the Super." },
      ],

      sections: {
        monsters: {
          title: "The Monsters", kicker: "One Mode Each", eyebrow: "Collect The Instruments",
          boxes: [
            { name: "Frankenstein", target: "Center Ramp",     detail: "Drop Frank’s targets, then jolt the monster alive." },
            { name: "Dracula",      target: "Dracula Loop",    detail: "Spell DRAC-ATTACK, then ride the coffin loop." },
            { name: "Wolfman",      target: "Left Loop",       detail: "Rip the loop under a full moon." },
            { name: "The Bride",    target: "Left Ramp",       detail: "Play the tight figure-8 ramp for Ball & Chain." },
            { name: "The Creature", target: "Creature’s Lagoon", detail: "Sweep every major shot before the hurry-up dies." },
            { name: "The Mummy",    target: "Mummy Target",    detail: "Bash the sarcophagus open to wake him." },
          ],
        },
      },

      strategy: [
        { name: "Complete, Don’t Just Play", detail: "Finishing a mode earns the instrument — the whole point of the game." },
        { name: "Build The Jets",   detail: "Sixty jet hits light Mummy Mayhem and super jets." },
        { name: "Phantom Flip",     detail: "Hit the three targets so the game auto-flips a shot you’d miss." },
        { name: "Bank The Bombs",   detail: "Plunge-collected Monster Bombs spot progress on every monster." },
        { name: "Pick Easy Monsters", detail: "Start with the loops you can hit to bank instruments fast." },
        { name: "Watch The Right Ramp", detail: "It feeds the center — cradle instead of chasing it." },
      ],

      hold: "The band’s assembled. Go start the encore.",

      sequence: ["intro", "gameoverview", "rundown", "monsters", "multiball", "strategy", "hold"],
      proTips: {
        intro:     "Round up six monsters and their instruments for the scariest band around.",
        overview:  "Complete a mode to earn its instrument — playing it only lights the mini-wizard.",
        rundown:   "Six monster modes, two multiballs, and the Monsters of Rock encore.",
        multiball: "Drop Frank’s targets to open the center ramp, then jolt him alive.",
        strategy:  "Sixty jet-bumper hits light Mummy Mayhem and super jets.",
        hold:      "Collect all six instruments to start Monsters of Rock.",
      },
    },

    /* ======================================================================
       JOHN WICK
       ====================================================================== */
    {
      game: "john-wick",
      title: "John Wick",
      maker: "Stern · 2024",
      proTip: "Spawn enemies before you start a job — lit shots multiply by the blue circles stacked in front of them.",

      credits: [
        { role: "Game Design",   names: "Elliot Eismin" },
        { role: "Code / Rules",  names: "Tim Sexton, Mike Vinikour, Joshua Henderson" },
        { role: "Engineering",   names: "Robert Blakeman" },
        { role: "Artwork",       names: "Randy Martinez" },
        { role: "Sound",         names: "Jerry Thompson" },
        { role: "Release",       names: "Stern · 2024" },
      ],

      lead: "Out of retirement, out for blood. Take jobs for the seven factions, survive the adversaries, and reach the High Table.",
      shots: [
        { label: "Take a Job",         target: "Weapons Crate",     desc: "Light three blue lights, then start the job at the VUK." },
        { label: "Cash Out",           target: "Left Eject",        desc: "Finish a faction’s shots, then bank it for the perk." },
        { label: "Adversary Battle",   target: "Left Eject",        desc: "Drop ten enemies in single-ball play to light the fight." },
        { label: "Allies",             target: "Gold Coin Targets", desc: "Bank coins, then a ramp qualifies an ally." },
      ],
      wizard: {
        title: "Special Assignment",
        body: "Clear the multiballs, jobs and battles for Red Circle Reckoning, then The Staircase, The Duel, and the final Special Assignment.",
        chip: "◆ Serve every faction",
      },
      keyMultiballs: { lead: "Three multiballs off the High Table.", rows: [
        { label: "Car Chase MB",       target: "Left Orbit",  desc: "Bash the car to light it; hit it to swap showdowns." },
        { label: "Excommunicado MB",   target: "Red Circle",  desc: "Work the bumper and targets to light it." },
        { label: "Deconsecrated MB",   target: "Center Ramp", desc: "Spell WINSTON at the captive ball to light locks." },
      ] },
      skills: { lead: "Four crate skill shots wait at the plunge.", rows: [
        { label: "Baba Yaga",  target: "Right VUK",             desc: "Plunge clean — starts the lit job instantly." },
        { label: "MXV Skill",  target: "Orbit → Ramp → Eject",  desc: "A three-shot combo for a fortune and ten enemies." },
      ] },
      button: { kicker: "Stack the odds", title: "Enemies & Coins", lead: "Spawn enemies before a job so lit shots multiply; bank gold coins to qualify an ally.", rows: [
        { label: "Enemies",  target: "Blue Circles", desc: "Each circle multiplies the shot behind it." },
        { label: "Allies",   target: "Gold Coins",   desc: "Bank coins, then a ramp qualifies the ally." },
      ] },
      tips: { proTip: "Spawn enemies before you start a job — lit shots multiply by the circles in front of them.", rows: [
        { name: "Spawn First",     body: "Load enemies before starting a job for the multipliers." },
        { name: "Seven Factions",  body: "Each job serves a faction with its own perk — serve them all." },
      ] },

      overview: [
        "Out of retirement, out for blood — serve the seven factions.",
        "Take jobs at the crate, then cash them out for perks.",
        "Spawn enemies before a job so lit shots multiply.",
        "Bank gold coins to qualify an ally.",
        "Serve every faction to reach the Special Assignment.",
        "Three multiballs: Car Chase, Excommunicado, Deconsecrated.",
      ],

      multiballs: [
        { name: "Car Chase MB",     target: "Left Orbit",  detail: "Bash the car to light it; hit it again to swap showdowns.", jackpots: "Jackpots at the orbits and ramps.", tip: "Swap to the showdown that fits your best shot." },
        { name: "Excommunicado MB", target: "Red Circle",  detail: "Work the bumper and targets to light it.", jackpots: "Red Circle shots build the jackpots.", tip: "Keep the ball in the bumpers to light it faster." },
        { name: "Deconsecrated MB", target: "Center Ramp", detail: "Spell WINSTON at the captive ball to light the locks.", jackpots: "Center ramp jackpots grow with each lock.", tip: "Spell WINSTON early so the locks are ready." },
      ],

      sections: {
        jobs: {
          title: "Jobs", kicker: "Take The Contract", eyebrow: "Serve The Seven Factions",
          boxes: [
            { name: "The Continental", target: "Weapons Crate", detail: "The hotel where no business is conducted — the first contract." },
            { name: "High Table",      target: "Left Eject",    detail: "Work for the ruling council for the richest perks." },
            { name: "The Bowery",      target: "Right Ramp",    detail: "Call in the King’s network of eyes." },
            { name: "Ruska Roma",      target: "Left Ramp",     detail: "Old debts and older allies." },
            { name: "The Adjudicator", target: "Center Ramp",  detail: "Answer for broken rules — a high-stakes job." },
          ],
        },
        adversaries: {
          title: "Adversaries", kicker: "Single-Ball Fights", eyebrow: "Drop Ten To Light It",
          boxes: [
            { name: "Ares",       target: "Left Eject", detail: "The Adjudicator’s enforcer — a brutal duel." },
            { name: "Zero",       target: "Left Eject", detail: "The rival assassin with respect and a blade." },
            { name: "Cassian",    target: "Left Eject", detail: "The old friend who still has a job to do." },
            { name: "The Sommelier", target: "Left Eject", detail: "Not wine — weapons, and a fight to the finish." },
          ],
        },
        lightsout: {
          title: "Lights Out!", kicker: "Kill The Lights", eyebrow: "The Club Shootout",
          boxes: [
            { name: "Lights Out!", target: "Red Circle", detail: "The neon club sequence — stack blue circles to multiply every lit shot." },
          ],
        },
        wizards: {
          title: "Wizard Modes", kicker: "The End Game", eyebrow: "Serve Every Faction",
          boxes: [
            { name: "Red Circle Reckoning", target: "All Shots", detail: "The reward for clearing the multiballs, jobs and battles." },
            { name: "The Staircase",        target: "Center Ramp", detail: "Fight down the steps of the Continental." },
            { name: "The Duel",             target: "Left Eject",  detail: "One shot, one chance — the penultimate test." },
            { name: "Special Assignment",   target: "The Scoop",   detail: "The final contract — the goal of the whole game." },
          ],
        },
      },

      strategy: [
        { name: "Spawn First",   detail: "Load enemies before a job — lit shots multiply by the circles in front of them." },
        { name: "Seven Factions", detail: "Each job serves a faction with its own perk — serve them all." },
        { name: "Bank Coins",    detail: "Gold coins qualify allies; keep a few in reserve." },
        { name: "Baba Yaga Skill", detail: "Plunge clean to the right VUK to start the lit job instantly." },
        { name: "MXV Combo",     detail: "Orbit → ramp → eject on the plunge for a fortune and ten enemies." },
        { name: "Cash Smart",    detail: "Finish a faction’s shots before cashing for the bigger perk." },
      ],

      hold: "You’re back. Go earn your place at the High Table.",

      sequence: ["intro", "gameoverview", "rundown", "jobs", "adversaries", "lightsout", "multiball", "wizards", "strategy", "hold"],
      proTips: {
        intro:     "Out of retirement — take jobs for the seven factions and reach the High Table.",
        overview:  "Spawn enemies before a job — lit shots multiply by the blue circles in front.",
        rundown:   "Three multiballs off the High Table: Car Chase, Excommunicado, Deconsecrated.",
        multiball: "Spell WINSTON at the captive ball to light the Deconsecrated locks.",
        strategy:  "Bank gold coins, then a ramp qualifies an ally to fight beside you.",
        hold:      "Serve every faction to reach the Special Assignment.",
      },
    },

  ],

  /* ==========================================================================
     "BETWEEN GAMES" BREATHER PAGES — three of them, shown between tables.
     Each has: an intro line, a House Tip, a bit of Lingo, and an Overheard quip.
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

  /* ==========================================================================
     "HOUSE TIPS" PAGE — the five-card page. name = the header, body = the line.
     ========================================================================== */
  tips: [
    { name: "Dead Bounce",       body: "Hold both flippers DOWN and let the ball bounce off a still flipper back into play." },
    { name: "Cradle",            body: "Trap the ball against a raised flipper. Reset, breathe, aim your next shot — then release." },
    { name: "Nudge, Don’t Tilt", body: "Bump the machine to nudge the ball off a drain. Three shoves in a row and TILT kills your ball." },
    { name: "Drop Catch",        body: "The instant the ball lands on a raised flipper, drop it to kill the bounce — then re-cradle." },
    { name: "Post Pass",         body: "Tap the flipper to slide a cradled ball across to the other flipper, so you get the shot you wanted." },
  ],

  /* ==========================================================================
     "PINBALL LINGO" PAGE — the glossary. term = the word, def = the meaning.
     ========================================================================== */
  glossary: [
    { term: "SDTM",         def: "Straight Down The Middle. Drains between the flippers, unsaveable. Sad." },
    { term: "Drain",        def: "Losing the ball down an outlane or the center. The end of your turn." },
    { term: "Cradle",       def: "Holding the ball still against a raised flipper to reset and aim." },
    { term: "Dead Bounce",  def: "Letting the ball bounce off a still flipper instead of risking a flip." },
    { term: "Multiball",    def: "Two or more balls in play at once. Chaos, and a lot of points." },
    { term: "Wizard Mode",  def: "The hidden end-game mode you unlock after finishing everything." },
    { term: "Nudge / Tilt", def: "Bumping the machine to steer the ball — vs. over-bumping and getting punished." },
    { term: "Slap Save",    def: "A two-flipper panic swat at a draining ball. Sometimes it even works." },
  ],

  /* ==========================================================================
     THE BIG CLOSING "OVERHEARD" PAGE
       intro  → the small uppercase line at the top
       setup  → the italic setup sentence
       punch  → the big brass punchline
       byline → the credit line at the bottom
     ========================================================================== */
  quip: {
    intro: "I mean, come on. That’s not fair.",
    setup: "The right ramp on Monster Bash feeds the ball straight down the middle.",
    punch: "That’s bullshit.",
    byline: "— every regular, eventually",
  },

  /* ==========================================================================
     BREATHER PAGE HEADERS — the eyebrow / title / right-meta / footer pro-tip
     shown on each of the six between-game pages. Order matches how they appear
     across the loop; leave the "id" values alone (they wire each page to what
     it renders). Edit eyebrow / title / meta / proTip freely.
     ========================================================================== */
  general: [
    { id: "tips",   eyebrow: "House Rules",         title: "House Tips",     meta: "Play Better Tonight",     proTip: "A still flipper is a save. A panicked flipper is a drain." },
    { id: "lingo",  eyebrow: "Speak The Language",  title: "Pinball Lingo",  meta: "The Words On The Floor",  proTip: "If you can say SDTM out loud, you’ve officially lost a ball to it." },
    { id: "combo0", eyebrow: "House Rules",         title: "Between Games",  meta: "Tips · Lingo · Quips",    proTip: "A still flipper is a save. A panicked flipper is a drain." },
    { id: "combo1", eyebrow: "House Rules",         title: "Between Games",  meta: "Tips · Lingo · Quips",    proTip: "Cradle first, aim second. The rushed shot drains." },
    { id: "quip",   eyebrow: "Real Talk",           title: "Overheard",      meta: "The Lockedown",           proTip: "You’re not mad at the machine. You’re mad at yourself." },
    { id: "combo2", eyebrow: "House Rules",         title: "Between Games",  meta: "Tips · Lingo · Quips",    proTip: "The machine wants you to panic. Don’t give it the satisfaction." },
  ],

};
