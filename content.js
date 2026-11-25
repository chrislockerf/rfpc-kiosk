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
     breathers (per machine) / breatherPool → the between-machine pages.
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
     WELCOME — plays first, before Star Wars (AbleSign: ?start=welcome).
     Synced from the "RFPC Kiosk Content" doc. Edit there, then sync.
     ========================================================================== */
  welcome: {
    "pages": [
      {
        "pageTitle": "Welcome",
        "eyebrow": "River Forest Pinball Club",
        "proTip": "No matter how well you plan, sometimes the ball just drains.",
        "key": "splash",
        "title": "Welcome To The Lockedown",
        "taglines": [
          "Eight machines. One basement. Zero mercy.",
          "Your outlanes called. They miss you.",
          "Leave your ego at the door. The machines will take it anyway.",
          "Free play. No excuses."
        ]
      },
      {
        "pageTitle": "House Rules",
        "eyebrow": "Read Before You Flip",
        "proTip": "Questions or stuck balls  — find Chris.",
        "key": "rules",
        "intro": "Play hard, play nice. Six rules keep the basement running.",
        "bullets": [
          "Drinks never touch the glass. Ever.",
          "Nudge, don't shove. Tilts are your problem.",
          "Stuck ball? Grab Chris — don't lift the glass or open the coin door.",
          "One game at a time. Let others rotate in.",
          "Kids welcome, with a grown-up close by.",
          "Trash talk encouraged. Sore losing is not."
        ]
      },
      {
        "pageTitle": "The Lineup",
        "eyebrow": "Tonight On The Floor",
        "proTip": "Every table gets its own deep dive next — leaderboard, rules, modes and strategy.",
        "key": "lineup",
        "rows": [
          {
            "game": "star-wars",
            "name": "Star Wars",
            "line": "Eight heroes battle the Empire. Pick a mission and go."
          },
          {
            "game": "godzilla",
            "name": "Godzilla",
            "line": "Smash cities, fight monsters, save the world from the Xiliens."
          },
          {
            "game": "james-bond",
            "name": "James Bond 007",
            "line": "Play through six iconic Sean Connery 007 films."
          },
          {
            "game": "deadpool",
            "name": "Deadpool",
            "line": "Ninjas, villains and chimichangas. Fourth wall optional."
          },
          {
            "game": "foo-fighters",
            "name": "Foo Fighters",
            "line": "Defend cities from the Overlord, save the world.  Jam to some tunes along the way."
          },
          {
            "game": "jurassic-park",
            "name": "Jurassic Park",
            "line": "Help stranded workers escape Nebula Island.  Feed the T-Rex. Try not to become lunch."
          },
          {
            "game": "john-wick",
            "name": "John Wick",
            "line": "Play through the enemies of all 4 films.  Every shot has consequences. Pick your contract."
          },
          {
            "game": "monster-bash",
            "name": "Monster Bash",
            "line": "Get the band together to rock Transylvania. The monsters do the rest."
          },
          {
            "game": "darts",
            "name": "Spyder Darts",
            "line": "Pick your game carefully. Loser buys the next round."
          }
        ]
      },
      {
        "pageTitle": "Get On The Board",
        "eyebrow": "Stern Insider",
        "proTip": "Only the Stern tables connect to the online leaderboards — Monster Bash keeps its own high scores.",
        "key": "board",
        "qrUrl": "https://insider.sternpinball.com/",
        "qrCaption": "Scan to join Stern Insider — it's free",
        "bullets": [
          "Scan the code and create a free Stern Insider account.",
          "Start a game, then scan the QR code on the machine's screen with the Insider app.",
          "Every game logs to your profile and the house leaderboards.",
          "Earn achievements unique to each machine.",
          "Beat a high score and your name shows up on this TV."
        ]
      },
      {
        "pageTitle": "Pinball Lingo",
        "eyebrow": "Speak The Language",
        "proTip": "Say SDTM out loud and you’ve officially lost a ball to it.",
        "key": "lingo",
        "intro": "Eight words you’ll hear around the basement tonight.",
        "rows": [
          {
            "term": "Drain",
            "def": "Losing the ball down an outlane or between the flippers. Usually paired with a swear word from your mouth."
          },
          {
            "term": "SDTM",
            "def": "Straight Down The Middle. The worst kind of drain.  Unsaveable. Nothing you could do."
          },
          {
            "term": "Outlane",
            "def": "The far-left and far-right lanes by the flippers. Ball goes in, ball goes away."
          },
          {
            "term": "Cradle",
            "def": "Trapping the ball on a raised flipper to stop, breathe and aim."
          },
          {
            "term": "Multiball",
            "def": "Two or more balls in play at once. Chaos, and a lot of points, especially if you know how to score on the mode."
          },
          {
            "term": "Jackpot",
            "def": "The big-value shot lit during a multiball or mode. Go get it."
          },
          {
            "term": "Tilt",
            "def": "Shove the machine too hard and it kills your ball — and your bonus.  The tilt bobs are not in these machines, so a tilt is quite the accomplishment!"
          },
          {
            "term": "Wizard Mode",
            "def": "The end-game mode you earn by finishing everything else."
          }
        ]
      }
    ]
  },

  /* ==========================================================================
     THE EIGHT MACHINES — in floor order.
     ========================================================================== */
  games: [

    /* ======================================================================
       STAR WARS: FALL OF THE EMPIRE
       Synced from the "RFPC Kiosk Content" doc. Edit there, then sync.
       ====================================================================== */
    {
      game: "star-wars",
      title: "Star Wars",
      maker: "Stern · 2025",
      proTip: "Join the Rebellion and defeat the Emperor, Darth Vader and the ever Empire.",
      pages: [
        {
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2025",
          proTip: "John Borg’s return to Star Wars — his very first pinball design was Data East’s 1992 Star Wars.",
          key: "intro",
          credits: [
            { role: "Game Design", names: "John Borg" },
            { role: "Code / Rules", names: "Raymond Davidson, Andrew Wilkening" },
            { role: "Engineering / Mechanics", names: "John Rotharmel, Robert Blakeman" },
            { role: "Sound", names: "Jerry Thompson, Bob Baffy" },
            { role: "Release", names: "Stern · 2025 · Premium" },
          ],
        },
        {
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Every Rebel Mission you play makes that character’s jackpots pay 2×, 3× or 4× in multiball.",
          key: "gameoverview",
          intro: "Star Wars: Fall of the Empire marks designer John Borg’s return to the Star Wars license more than 30 years after his very first pinball machine, Data East’s 1992 Star Wars. Built on Stern’s new SPIKE 3 platform, it retells the Original Trilogy and digs into corners of the story earlier Star Wars machines passed over, as Luke and a ragtag band of rebels set out to bring down the Empire.",
          bullets: [
            "Spell FORCE to light up to three Rebel Missions for eight characters.",
            "Played missions boost that character’s multiball jackpots.",
            "Start Falcon Features at the center ramp; Jabba Events at the Sarlacc Pit.",
            "Return lanes qualify Vader modes at the left scoop.",
            "Rip the spinners to spell JEDI for the FORCE magnet ball save.",
            "Complete five mini-wizards on the road to the final Jedi Master wizard mode.",
          ],
        },
        {
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2025",
          proTip: "Start a Rebel Mission, Falcon Feature or Jabba Event first — they will carry into any multiball. Only Hoth and Lightspeed stack with each other.",
          key: "rundown",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Four sets of modes run side by side: Rebel Missions, Falcon Features, Jabba Events and Vader modes.",
            rows: [
              { label: "Rebel Missions", target: "FORCE Targets", desc: "Spell FORCE to light the eight character shots to start a Rebel Mission." },
              {
                label: "Falcon Features",
                target: "Center Ramp",
                desc: "Shoot it when the Falcon’s engines are lit to enable and activate Falcon Features.",
              },
              { label: "Jabba Events", target: "Sarlacc Pit", desc: "Drop Salacious Crumb twice, then spin the Pit to start a Jabba Event." },
              {
                label: "Vader Modes",
                target: "Left Scoop",
                desc: "Return lanes qualify; shoot Vader VUK to start.  Vader modes do not stack with any other modes.",
              },
              {
                label: "Rebel Combos",
                target: "Name Inserts",
                desc: "Two combos at one character starts its Super Mode.  Complete the mode for big points.  They can be played multiple times.",
              },
              {
                label: "Hyperspace Loops",
                target: "Right Ramp",
                desc: "TIE fighter shots to the right ramp start the mode.  Then pound the center ramp for jackpots.",
              },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            layout: "columns",
            lead: "Jump to Hyperspace in the Falcon, take down the AT-ATs, then both Death Stars.",
            rows: [
              {
                label: "Battle of Hoth",
                target: "Luke VUK",
                desc: "The Droids target lights locks; shoot Luke VUK to start; spell AT-AT for the super jackpot.",
              },
              { label: "Death Star", target: "Death Star Ramp", desc: "Hit the Death Star to open the lock, then lock three balls." },
              { label: "Death Star II", target: "Death Star Ramp", desc: "Destroy the first Death Star to move on to the second." },
              {
                label: "Lightspeed",
                target: "Center Ramp",
                desc: "The first Falcon Feature — don’t miss its timed start.  Build the jackpot value by hitting lit shots BEFORE shooting the center ramp to begin multiball.",
              },
            ],
          },
          skills: {
            kicker: "At The Plunge:",
            title: "Skill Shots",
            layout: "columns3",
            lead: "Plunge and hit any flashing shot to gain an advantage. Make it within three switches for a 2× Super Skill Shot.  Expires after 6 switch hits.",
            rows: [
              { label: "Right Orbit", target: "Relight", desc: "Relights every skill shot to collect again." },
              { label: "Either Bumper", target: "Ion Cannons", desc: "Three hits toward the next shot multiplier." },
              { label: "Left Orbit", target: "JEDI", desc: "Adds two JEDI letters." },
              { label: "Luke VUK", target: "FORCE", desc: "Spots three FORCE letters." },
              { label: "Droids Target", target: "Hoth Lock", desc: "Spots one Battle of Hoth lock — won’t start it." },
              { label: "Death Star", target: "Death Star Lock", desc: "Spots one Death Star lock — won’t start it." },
              { label: "Center Ramp", target: "Falcon", desc: "Two shots of progress toward the next Falcon Feature." },
              { label: "Sarlacc Pit / Drop", target: "Jabba", desc: "Two shots of progress toward the next Jabba Event." },
              { label: "Right Ramp", target: "TIE Fighters", desc: "Adds three TIE fighters." },
              { label: "Stormtrooper", target: "Hurry-Up", desc: "Starts the Stormtrooper hurry-up." },
            ],
          },
          button: {
            kicker: "Use the Force",
            title: "Action Button",
            lead: "Small button, big saves.",
            rows: [
              {
                label: "JEDI Ball Save",
                target: "Outlanes",
                desc: "Spell JEDI, then press the YELLOW button to fire the magnet to toss a draining ball back into play.  May the Force be with you.",
              },
              {
                label: "Lock In Jabba",
                target: "Sarlacc Pit",
                desc: "Press the ORANGE button while the ball spins in the Sarlacc Pit to select the Jabba Event you want to activate.",
              },
              { label: "Add-A-Ball", target: "Sarlacc Pit", desc: "Ten Sarlacc Pit spins during multiball light the button GREEN to add a ball." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Modes",
            layout: "columns",
            name: "Become a Jedi Master",
            body: "Five mini-wizards stand in the way — Not a Jedi Yet, Ewok Encounter, Sarlacc Escape, Never Tell Me The Odds and Dark Side Multiball — before the final showdown, Jedi Master.",
            chip: "",
            rows: [
              { label: "Not a Jedi Yet", target: "Play missions for 4 characters" },
              { label: "Ewok Encounter", target: "Play missions for all 8 characters" },
              { label: "Sarlacc Escape", target: "Play all 3 Jabba Events" },
              { label: "Never Tell Me The Odds", target: "Play 3 Falcon Features" },
              { label: "Dark Side Multiball", target: "10 Dark Side shots" },
              { label: "Jedi Master", target: "The final wizard mode" },
            ],
            note: "Bonus Missions you finish cut the characters needed for Not a Jedi Yet and Ewok Encounter by one each.",
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
        {
          pageTitle: "Rebel Missions",
          eyebrow: "Spell FORCE To Light Them",
          proTip: "Four blue shots finish a mission — white shots don’t count, but they pump up the value.",
          key: "missions",
          kicker: "The Rebels",
          boxes: [
            {
              name: "Yoda",
              target: "Spinners",
              detail: "Spinners add 10k to the shot value per spin. Missions: Meeting Yoda, Jedi Training, Seeing the Future. Bonus: The Final Lesson — a long spinner mode with ball-save checkpoints.",
              img: "assets/sw-yoda-mission.jpg",
            },
            {
              name: "Luke",
              target: "Luke VUK",
              detail: "The Luke VUK is always a possible blue shot, and it and the right ramp score 2×. Missions: Discovering the Force, Escaping the Death Star, Leaving Dagobah. Bonus: Dark Side Cave — spell FORCE inside the cave to face Vader.",
              img: "assets/sw-luke.jpg",
            },
            {
              name: "Droids",
              target: "Slings & Bumpers",
              detail: "Slingshots and bumpers move which shot is lit for 2×. Missions: Rebel Ship, Welcome to Tatooine, Ewok Deity. Bonus: Find R2-D2 — lock in roving shots with the Droids target.",
              img: "assets/sw-droids.jpg",
            },
            {
              name: "Lando",
              target: "Starts At 2×",
              detail: "Every blue shot starts at 2×, but too many sling or bumper hits drop it to 1×. Missions: Lando Calrissian, The Sellout, Lando’s Redemption. Bonus: Rescue Luke — a combo chase across the ramps.",
              img: "assets/sw-lando.jpg",
            },
          ],
        },
        {
          pageTitle: "More Rebel Missions",
          eyebrow: "Green · Yellow · Orange · Bonus",
          proTip: "Finish a mission, then shoot that character again with nothing running to start their Bonus Mission.",
          key: "missions2",
          kicker: "The Rebels",
          boxes: [
            {
              name: "Han",
              target: "Hurry-Ups",
              detail: "Every shot is a hurry-up that starts high and counts down. Missions: Han vs Greedo, Where’s Luke, Frozen in Carbonite. Bonus: Han & Leia — alternate left and right shots, then finish at the center ramp.",
              img: "assets/sw-han.jpg",
            },
            {
              name: "Chewie",
              target: "Sarlacc Spins",
              detail: "Sarlacc Pit spins add 50k per spin, and the center ramp scores 2×. Missions: Dejarik, Find C-3PO, Fix C-3PO. Bonus: Reunion — trade Pit shots and center ramps.",
              img: "assets/sw-chewie.jpg",
            },
            {
              name: "Leia",
              target: "Right Ramp 2×",
              detail: "The Luke VUK and center ramp build value; the right ramp scores 2×. Missions: Jailbreak, Trash Compactor, Rescuing Han. Bonus: Speeder Bikes — hurry-ups that roll into a 2-ball multiball.",
              img: "assets/sw-leia.jpg",
            },
            {
              name: "Obi-Wan",
              target: "VUK & Right Orbit",
              detail: "The Luke VUK and right orbit score 2× whenever they’re lit blue. Missions: Ben Meets Luke, The Message, Duel with Darth Vader. Bonus: Revealing the Truth — a marathon 28-shot mode.",
              img: "assets/sw-obiwan.jpg",
            },
          ],
        },
        {
          pageTitle: "Super Modes",
          eyebrow: "Two Combos At One Character",
          proTip: "Super Modes are untimed and stack with everything — even multiball.",
          key: "superModes",
          intro: "Combo into a flashing yellow character name twice to start that character’s Super Mode. Each one you finish pays 10M, plus 2.5M for every Super Mode already completed.",
          bullets: [
            "Yoda — Super Spinners: 100 spinner spins.",
            "Luke — Super FORCE: 5 FORCE target hits, left to right.",
            "Droids — Super Droids: 5 Droids target hits.",
            "Lando — Super Slings: 10 slingshot hits.",
            "Han — Super Lanes: 10 lit inlanes, never the same one twice in a row.",
            "Chewie — Super Sarlacc: 40 Sarlacc Pit spins.",
            "Leia — Super Ramps: 10 ramp shots.",
            "Obi-Wan — Super Pops: 10 bumper hits.",
          ],
        },
        {
          pageTitle: "Falcon Features",
          eyebrow: "Center Ramp · Engines Lit",
          proTip: "Right ramp into the center ramp as a combo gives two Falcon advances at once.",
          key: "falcon",
          kicker: "The Millennium Falcon",
          boxes: [
            {
              name: "Lightspeed Escape",
              target: "Center Ramp",
              detail: "Build the jackpot, then make the timed center ramp to start Lightspeed Multiball. Drain or run out of time and — like Alderaan — it’s gone.",
              img: "assets/sw-falcon.jpg",
            },
            {
              name: "That’s No Moon",
              target: "Sets Of Three",
              detail: "Search for Alderaan through sets of three lit shots. The center shot of each set scores 2×, and leftover time pays a bonus.",
            },
            {
              name: "Dogfight",
              target: "Center ↔ Right Ramp",
              detail: "Alternate the center and right ramps to shoot down TIE fighters. Combos into the right ramp score 2×.",
            },
            {
              name: "Never Tell Me The Odds",
              target: "Mini-Wizard",
              detail: "The fourth Falcon Feature — a multiball run through the asteroid field. Hit white shots, dodge the red asteroids.",
            },
            {
              name: "Welcome to Cloud City",
              target: "Both Orbits",
              detail: "Loop the left and right orbits for multiplied values, then cash both in at the center ramp.",
            },
          ],
        },
        {
          pageTitle: "Jabba Events",
          eyebrow: "Into The Sarlacc Pit",
          proTip: "Press the action button while the ball spins in the Pit to lock in the Jabba Event you want.",
          key: "jabba",
          kicker: "Jabba’s Palace",
          boxes: [
            {
              name: "Luke’s Gift",
              target: "Sarlacc Pit",
              detail: "Guide the droids into Jabba’s palace. Each shot resets a 30-second timer, and the final shot is always the Sarlacc Pit.",
              img: "assets/sw-jabba.jpg",
            },
            {
              name: "Jabba’s Palace",
              target: "Drop Target",
              detail: "Make lit shots to relight Salacious Crumb for bigger awards. Three drop target hits light the Pit for 5×.",
              img: "assets/sw-crumb.jpg",
            },
            {
              name: "Rancor Battle",
              target: "Shot Sequence",
              detail: "Untimed: Luke VUK, right orbit, right ramp, center ramp twice, Luke VUK, then the Pit. Quick combos multiply up to 3×.",
            },
            {
              name: "Sarlacc Escape",
              target: "Mini-Wizard",
              detail: "Play all three Jabba Events to unlock the fourth — a multiball where every Pit spin scores the jackpot.",
            },
          ],
        },
        {
          pageTitle: "Vader Modes",
          eyebrow: "The Dark Side",
          proTip: "The shot that starts a Vader mode adds +1× every time you return to it — slow down and farm it.",
          key: "vader",
          kicker: "Lord Vader",
          boxes: [
            {
              name: "Qualify",
              target: "Return Lanes",
              detail: "The return lanes alternate between lighting Dark Side Mystery and qualifying a Vader mode at the left scoop. Start it when nothing else is running.",
            },
            {
              name: "Pick Your Scene",
              target: "Left Scoop",
              detail: "After the scoop, the lit shot you hit picks the scene. Each Vader mode can only be played once per game.",
            },
            {
              name: "The Eight Scenes",
              target: "Start Shots",
              detail: "Tarkin (bumpers) · Lord Vader Arrives (left scoop) · Emperor’s Guidance (orbits) · Family Reunion (Luke VUK) · Death Star II Plans (Death Star) · Bounty Hunters (Sarlacc Pit) · Lack of Faith (Stormtrooper) · Emperor’s Orders (return lanes).",
            },
            {
              name: "Finish At Vader",
              target: "Vader Scoop",
              detail: "Every Vader mode ends with a shot to the Vader scoop, and each one you finish adds 500k to the next mode’s shot value.",
              img: "assets/sw-vader.jpg",
            },
            {
              name: "Dark Side Scoring",
              target: "Purple Shot",
              detail: "Finish any Vader mode and a roving purple shot pays 5% of your Vader points for the rest of the ball. Five of them light extra ball.",
            },
            {
              name: "Dark Side Multiball",
              target: "Ten Purple Shots",
              detail: "Ten Dark Side shots light a 3-ball mini-wizard. The Death Star scores 2× and relights every shot.",
            },
          ],
        },
        {
          pageTitle: "Wizard Modes",
          eyebrow: "The Road To Jedi Master",
          proTip: "Each Bonus Mission you finish cuts the characters needed for Not a Jedi Yet and Ewok Encounter by one.",
          key: "wizards",
          kicker: "The End Game",
          boxes: [
            {
              name: "Not a Jedi Yet",
              target: "4 Characters",
              detail: "Play a mission for four different characters. Duel Vader in Cloud City — shots go white, blue, then red, and once a red shot is made it’s gone.",
            },
            {
              name: "Ewok Encounter",
              target: "All 8 Characters",
              detail: "Play a mission for all eight characters. A four-phase battle on Endor, peaking with a six-ball Battle Multiball.",
            },
            {
              name: "Sarlacc Escape",
              target: "3 Jabba Events",
              detail: "A switch-frenzy multiball. Every Pit spin scores the jackpot, and four jackpots light the super at the left scoop.",
            },
            {
              name: "Never Tell Me The Odds",
              target: "3 Falcon Features",
              detail: "A 3-ball asteroid field where scoring multiplies by balls in play. Hit white shots, avoid the red, then escape up the center ramp.",
            },
            {
              name: "Dark Side Multiball",
              target: "10 Dark Side Shots",
              detail: "A 3-ball multiball where every shot scores the Dark Side award. Finish with a hurry-up at the left scoop.",
            },
            {
              name: "Jedi Master",
              target: "The Final Wizard",
              detail: "The end of the road — the final wizard mode waiting beyond the mini-wizards.",
            },
          ],
        },
        {
          pageTitle: "Other Scoring",
          eyebrow: "Points Are Points",
          proTip: "Light an Ion Cannon multiplier on your best shot — it stays 2× for the rest of the ball.",
          key: "other",
          kicker: "Everything Else",
          boxes: [
            {
              name: "Ion Cannons",
              target: "Pop Bumpers",
              detail: "Bumper hits charge the cannons. The next pulsing shot you make locks in at 2× for the rest of the ball.",
            },
            {
              name: "Rebel Combos",
              target: "Name Inserts",
              detail: "Combo into a flashing yellow character name. Two combos at one character starts its untimed Super Mode.",
            },
            {
              name: "Hyperspace Loops",
              target: "Right Ramp",
              detail: "Collect TIE fighters at the right ramp. 5, 15 and 45 start Hyperspace Loops; 10, 30 and 60 light extra ball.",
            },
            {
              name: "Stormtrooper Hurry-Up",
              target: "Stormtrooper Target",
              detail: "Two Stormtroopers start a 10M hurry-up at the far-right target. Each one you finish adds +1× to bonus.",
              img: "assets/sw-stormtrooper.jpg",
            },
            {
              name: "Dark Side Mystery",
              target: "Left Scoop",
              detail: "The return lanes light Mystery. Two Mystery awards unlock Mynock Multiball on the Premium — pound the lowered center ramp.",
            },
            {
              name: "JEDI Ball Save",
              target: "Spinners",
              detail: "Rip the spinners to spell JEDI. On the Premium, the action button fires the magnet under the flippers to toss a draining ball back.",
              img: "assets/sw-yoda.jpg",
            },
          ],
        },
        {
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2025",
          proTip: "Play Rebel Missions before multiball — Force Boost makes those characters’ jackpots pay 2×, 3× or 4×.",
          key: "multiball",
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
              img: "assets/sw-atat.jpg",
            },
            {
              name: "Death Star",
              target: "Death Star Ramp",
              detail: "Shoot the ramp to open the lock, then again to lock a ball. Three locks start it.",
              objective: "Score fifteen jackpots, then open the Death Star for a 20M super.",
              jackpots: "Every shot is lit; a shot goes dark until you hit a different one. Jackpots during the super phase raise it to 2×, then 3×.",
              tip: "Super jackpot progress carries over between Death Star attempts.",
              img: "assets/sw-deathstar.jpg",
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
        {
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Spell JEDI early — the Premium’s magnet save is the best friend you’ll have on this table.",
          key: "strategy",
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
        {
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Five mini-wizards stand between you and Jedi Master.",
          key: "hold",
          line: "The Empire’s on the ropes. Go finish it.",
        },
      ],
      breathers: [
        {
          type: "House Tip",
          title: "Dead Bounce",
          text: "Keep both flippers DOWN and let the ball bounce off a still flipper back into play. Resist the urge to flip!",
          footer: "Sometimes the best thing to do is nothing.",
        },
      ],
    },

    /* ======================================================================
       GODZILLA
       Synced from the "RFPC Kiosk Content" doc. Edit there, then sync.
       ====================================================================== */
    {
      game: "godzilla",
      title: "Godzilla",
      maker: "Stern · 2021",
      proTip: "Godzilla is generally considered the #1 pinball machine of all time. Lucky you.",
      pages: [
        {
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2021",
          proTip: "Four cities, four objectives, then on to Planet X and King of the Monsters.",
          key: "intro",
          credits: [
            { role: "Game Design", names: "Keith Elwin" },
            { role: "Code / Rules", names: "Rick Naegele, Keith Elwin" },
            { role: "Engineering", names: "Harrison Drake" },
            { role: "Artwork", names: "Zombie Yeti" },
            { role: "CG Art", names: "Chuck Ernst" },
            { role: "Sound", names: "Jerry Thompson" },
          ],
        },
        {
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Start all four objectives — RAID, POWER, BRIDGE, TANKS — to light Planet X.",
          key: "gameoverview",
          intro: "Godzilla is the fourth Stern pinball machine designed by Keith Elwin and the first machine to implement Stern Insider Connected, released in September 2021. The table depicts events from 10 classic Godzilla films in an original story depicting Godzilla fighting against the Xilien invasion of Earth, while tearing up a few cities for good measure.",
          bullets: [
            "Rampage through Tokyo, New York, London and Paris.",
            "Each city has four objectives: RAID, POWER, BRIDGE and TANKS.",
            "Win the city’s Kaiju Battle to conquer it and earn a permanent perk.",
            "Start all four objectives — in any cities — to light Planet X.",
            "Pick an Ally at the scoop: Rodan, Mothra or Anguirus.",
            "Charge the Heat Ray on the center spinner to collect every lit shot.",
          ],
        },
        {
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2021",
          proTip: "Batter the building down for Godzilla Multiball — its Super unlocks Monster Zero.",
          key: "rundown",
          modes: {
            kicker: "On The Playfield",
            title: "City Objectives",
            lead: "Every city has the same four objectives. Starting one is enough to count toward Planet X.",
            rows: [
              { label: "RAID · Kaiju Battle", target: "The Scoop", desc: "Shoot one ramp twice, then pick your monster." },
              { label: "POWER · Tesla Strike", target: "Powerline Targets", desc: "Complete the targets twice, then the roving one." },
              { label: "BRIDGE · Bridge Attack", target: "Captive Ball", desc: "50 switches light it; four attacks drop the bridge." },
              { label: "TANKS · Tank Attack", target: "The Scoop", desc: "Destroy 10 roving TANK shots, then the scoop." },
              { label: "City Select", target: "The Scoop", desc: "Change cities once you’ve played an objective." },
              { label: "Destruction Jackpot", target: "The Building", desc: "Lit by every objective you play." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Three core multiballs, plus Bridge and Tank Attack.",
            rows: [
              { label: "Godzilla Multiball", target: "The Building", desc: "Destroy the building, then shoot it to start." },
              { label: "Mechagodzilla Multiball", target: "Right Spinner", desc: "20 spinner shots, the 3 Neo Barrier targets, then the jump ramp." },
              { label: "Saucer Attack Multiball", target: "Saucer Bumper", desc: "Destroy 6 saucers at the far-right bumper." },
            ],
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            layout: "table",
            lead: "The plunger is player-controlled — aim your skill shot.",
            rows: [
              { label: "Skill Shot", target: "Left Spinner Lane", desc: "Plunge into the lane for 5M." },
              { label: "Secret Skill", target: "Upper Loop", desc: "Plunge to the upper flipper and reflex the loop." },
              { label: "Super Secret", target: "Spinner → Scoop", desc: "Left spinner lane straight into the scoop: 10M, +2 Power-Ups and an Ally." },
            ],
          },
          button: {
            kicker: "Charge it on the spinner",
            title: "Heat Ray",
            lead: "Spin the center spinner 60 times to charge it, then hold the action button to collect every lit shot.",
            rows: [
              { label: "Heat Ray", target: "Center Spinner", desc: "60 spins for the first, 120 for the next." },
              { label: "Super Spinner", target: "Center Spinner", desc: "After a Heat Ray, the next rip scores 2× (+1× per city conquered)." },
              { label: "Allies", target: "The Scoop", desc: "Pick with the right flipper: Rodan, Mothra or Anguirus." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "King of the Monsters",
            body: "Play Planet X plus Monster Zero or Terror of Mechagodzilla, then pick it at Power-Up 8 or 11 and shoot the building. Beat Ghidorah and Monster Island Madness awaits.",
            chip: "◆ Planet X · Power-Up 8",
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Start a Tier 1 Kaiju Battle, then start a multiball on top of it.",
            rows: [
              { name: "Start, Don’t Finish", body: "Starting an objective counts toward Planet X." },
              { name: "Stack The Battle", body: "Tier 1 battles stack with any multiball — start the battle first." },
            ],
          },
        },
        {
          pageTitle: "Cities",
          eyebrow: "Conquer Each One",
          proTip: "Win a city’s Kaiju Battle to conquer it — each city leaves a perk for the rest of the game.",
          key: "cities",
          kicker: "City Select",
          boxes: [
            { name: "Tokyo", target: "+1% Annihilation", detail: "Conquer Tokyo for a bigger Annihilation Bonus all game." },
            { name: "New York", target: "+2M Saucer Attack", detail: "Conquer New York and every Saucer Attack pays 2M more." },
            { name: "London", target: "+4M Destruction JP", detail: "Conquer London to add 4M to every Destruction Jackpot." },
            { name: "Paris", target: "+500K Loops", detail: "Conquer Paris and every loop pays 500K more." },
            { name: "Change Cities", target: "The Scoop", detail: "Play any objective in a city, then the scoop lets you move on." },
            {
              name: "Annihilation & Carnage",
              target: "Repeat Shots",
              detail: "Replay a finished objective’s shot for Annihilation; it all adds up to Carnage when you leave.",
            },
          ],
        },
        {
          pageTitle: "Kaiju Battles",
          eyebrow: "RAID · Lit At The Scoop",
          proTip: "Halfway through any battle lights an Ally at the scoop.",
          key: "kaiju",
          kicker: "60 Seconds Each",
          boxes: [
            { name: "Ebirah", target: "All 3 Spinners", detail: "Rip the left, right and center spinners, then the pop bumper for 25M." },
            {
              name: "Titanosaurus",
              target: "5 Targets In Order",
              detail: "Powerline targets left to right, the Maser Cannon, then the captive ball.",
            },
            { name: "Gigan", target: "Ramps", detail: "Eight ramp shots. Opposite-ramp combos score double." },
            { name: "Megalon", target: "Roving Purple Shot", detail: "Hit the purple shot 7 times. Miss it and he hides — a ramp brings him back." },
            {
              name: "Tier 2 · vs King Ghidorah",
              target: "Change Cities First",
              detail: "Five shots three times each, then Fight or Flee at the scoop.",
            },
            {
              name: "Tier 2 · vs Megalon & Gigan",
              target: "3-Ball Multiball",
              detail: "Godzilla and Jet Jaguar: paired jackpots, then the right spinner for supers.",
            },
          ],
        },
        {
          pageTitle: "Wizard Modes",
          eyebrow: "Earned, Not Given",
          proTip: "Score each multiball’s Super Jackpot — that’s what unlocks the two mini-wizards.",
          key: "miniwizards",
          kicker: "The Big Rounds",
          boxes: [
            {
              name: "Monster Zero",
              target: "The Building",
              detail: "Score the Godzilla MB Super, pick it at Power-Up 4 or 8. Lock 3 balls, then Victory Multiball.",
            },
            {
              name: "Terror of Mechagodzilla",
              target: "The Building",
              detail: "Score the Mechagodzilla MB Super, same Power-Up pick. Four phases on a flip count.",
            },
            { name: "Planet X Multiball", target: "City Select", detail: "Start all four objectives, then choose Planet X at the scoop." },
            {
              name: "King of the Monsters",
              target: "The Building",
              detail: "Fight all four Tier 1 Kaiju at once, then a 4-ball bounty round against Ghidorah.",
            },
            {
              name: "Monster Island Madness",
              target: "6-Ball Multiball",
              detail: "Win Planet X’s Victory Challenge and beat Ghidorah. 75 seconds, then the game ends.",
            },
          ],
        },
        {
          pageTitle: "Other Scoring",
          eyebrow: "Points Between The Battles",
          proTip: "On the last ball, the right outlane lights Oxygen Destroyer — a one-time save.",
          key: "otherScoring",
          kicker: "Everything Else",
          boxes: [
            {
              name: "Destruction Jackpot",
              target: "The Building",
              detail: "Lit by every objective. Battles, cities and Rampage raise its multiplier.",
            },
            {
              name: "Monster Rampage",
              target: "Left Spinner",
              detail: "Spell RAMPAGE. One lit shot moves every 15 seconds; 12 shots earn an extra ball.",
            },
            { name: "Jet Fighter Attack", target: "Inlanes", detail: "Six inlane missiles start it. Shoot the roving red arrows to down jets." },
            { name: "Imposter Battle", target: "Magna-Grab", detail: "Each battle pays more — the 4th is worth 250M." },
            { name: "Saucer Attack", target: "Saucer Bumper", detail: "Destroy saucers: 3 for an extra ball, 6 for Saucer Attack Multiball." },
            {
              name: "Oxygen Destroyer",
              target: "Right Outlane",
              detail: "Last ball only: shoot the new ball through the building in 12 seconds to save it.",
            },
          ],
        },
        {
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2021",
          proTip: "Take Rodan’s 2× before Godzilla Multiball for doubled jackpots.",
          key: "multiball",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Godzilla Multiball",
              target: "The Building",
              detail: "Shoot the ramps and building to destroy it, then shoot the building again.",
              objective: "3-ball. Each jackpot shot climbs from blue 1× up to red 5×.",
              jackpots: "Six jackpots light the Super at the building, worth the jackpot total.",
              tip: "The reverse building Wallop shot adds +1× to the Super once per multiball.",
            },
            {
              name: "Mechagodzilla Multiball",
              target: "Right Spinner",
              detail: "20 spinner shots, the 3 Neo Barrier targets, then the jump ramp.",
              objective: "Jackpots alternate between the ramps and building and the target bank.",
              jackpots: "The Super builds on spinners for 20 seconds, then cash it.",
              tip: "Cash the Super at the tail whip lane for 3× and +3 Power-Ups.",
            },
            {
              name: "Saucer Attack Multiball",
              target: "Saucer Bumper",
              detail: "Destroy 6 saucers at the far-right bumper.",
              objective: "Clear the white shots so the Maser Cannon locks on, then hit the bumper.",
              jackpots: "The bumper pays 10×, and every saucer jackpot adds a ball.",
              tip: "Once per game — save it for a long ball.",
            },
          ],
        },
        {
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Score both multiball Supers — Power-Ups can then light the mini-wizards.",
          key: "strategy",
          kicker: "House Advice",
          boxes: [
            { name: "Start, Don’t Finish", detail: "Starting all four objectives lights Planet X, even without finishing them." },
            { name: "Battle, Then Multiball", detail: "Tier 1 Kaiju Battles stack with multiballs — start the battle first." },
            { name: "Rodan First", detail: "Take Rodan’s 60 seconds of 2× right before Godzilla Multiball." },
            { name: "Get The Supers", detail: "Godzilla and Mechagodzilla Supers unlock Monster Zero and Terror." },
            { name: "Win First Try", detail: "A Kaiju Battle’s time bonus drops to a tenth on a second attempt." },
            { name: "Mothra Saves", detail: "Choose Mothra to light the left outlane when it’s been hungry." },
          ],
        },
        {
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Reach Planet X, then take on every monster for King of the Monsters.",
          key: "hold",
          line: "The city’s yours to save. Go be King of the Monsters.",
        },
      ],
      breathers: [
        {
          type: "Lingo",
          title: "SDTM",
          text: "Straight Down The Middle. Drains between the flippers, unsaveable. Sad.",
          footer: "Straight Down The Middle. Drains between the flippers, unsaveable. Sad.",
        },
      ],
    },

    /* ======================================================================
       JAMES BOND 007
       Synced from the "RFPC Kiosk Content" doc. Edit there, then sync.
       ====================================================================== */
    {
      game: "james-bond",
      title: "James Bond 007",
      maker: "Stern · 2022",
      proTip: "The Action Button activates Smart Missiles, 007 Scoring and Swipe-a-Ball — it’s the machine’s #1 scoring tool if used properly.",
      pages: [
        {
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2022",
          proTip: "The Action Button activates Smart Missiles, 007 Scoring and Swipe-a-Ball.  It’s the game’s #1 scoring tool if used wisely.",
          key: "intro",
          credits: [
            { role: "Game Design", names: "George Gomez" },
            { role: "Engineering / Mechanics", names: "Elliot Eismin, Harrison Drake, John Rotharmel, Robert Blakeman, Tom Kopera" },
            { role: "Software", names: "Lonnie D. Ropp, Mike Vinikour" },
            { role: "Artwork", names: "Kevin O’Connor" },
            { role: "Sound", names: "Jerry Thompson, Ken Hale" },
          ],
        },
        {
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Smart Missiles (Blue Action Button) spot the most valuable shot on the playfield. Collect them and use them wisely.",
          key: "gameoverview",
          intro: "Designed by George Gomez in his first pinball machine since Deadpool, James Bond 007 takes players on an international espionage journey. Across six assignments, James Bond gets help from the gadgets of the Q Branch as he takes on a wide variety of Villains and Henchmen.",
          bullets: [
            "Experience six classic Sean Connery 007 films.",
            "Battle the Villain, Henchmen and SPECTRE Weapon from each film.",
            "Activate the Bond Women from each film to provide stacking multipliers.",
            "Visit Q during each film to obtain his special toys and weapons.",
            "Try to stack BirdOne and Jetpack multiball during Villain and Henchmen modes.",
            "Control the Action button as there are several uses: Blue (Smart Missile), Pink (007 Scoring) and Green (Swipe-a-Ball).",
          ],
        },
        {
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2022",
          proTip: "Each film has four modes — Villains, Henchmen, SPECTRE Weapon, Q Branch. Play each mode to complete the film and add to your end of ball bonus.",
          key: "rundown",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Villains, henchmen, Q-Branch and SPECTRE weapons.",
            rows: [
              { label: "Villains", target: "Right Ramp", desc: "Battle each film’s villain." },
              { label: "Henchmen", target: "Side Ramp", desc: "Take out the muscle." },
              { label: "SPECTRE Weapon", target: "Goldfinger Target", desc: "Spell SPECTRE behind the rocket, then start the countdown." },
              { label: "Q Branch", target: "DB5 Eject", desc: "Once lit, access Q’s gadgets." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Stack Bird One and Jetpack Multiballs with Villain and Henchmen battles.",
            rows: [
              { label: "Bird One", target: "The Rocket", desc: "Lock three balls in the Rocket; jackpots light green, super jackpot at the Rocket." },
              { label: "Jetpack Multiball", target: "Left Ramp", desc: "Qualify at the left Scuba eject, then the left ramp to start." },
              {
                label: "Bond, James Bond Multiball",
                target: "Left Eject or Right Ramp",
                desc: "Qualify by battling one Villain, one Henchmen and playing both Bird One and Jetpack Multiballs.",
              },
            ],
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            layout: "table",
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
              { label: "007 Scoring", target: "Up To 7×", desc: "Each collected Bond Woman adds +1× playfield." },
              { label: "Swipe-a-Ball", target: "Premium", desc: "Pull a locked Bird One ball into play." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "OHMSS → MI6 Multiball",
            body: "Start all six of one mode type for a mini-wizard. Play all four mini-wizards for On Her Majesty’s Secret Service — six film stages on a flip count, then MI6 Multiball.",
            chip: "◆ Four mini-wizards",
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Master the Action Button before films — it’s the machine’s #1 scoring tool.",
            rows: [
              { name: "Button First", body: "Learn the Action Button before chasing films." },
              { name: "Play A Whole Film", body: "Play all four modes from one film and its Bond Woman stays lit across balls." },
            ],
          },
        },
        {
          pageTitle: "The Movies",
          eyebrow: "Play Them In Any Order",
          proTip: "Take the time to watch the iconic film clips that accompany each mode.",
          key: "movies",
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
        {
          pageTitle: "The Villains",
          eyebrow: "One Of The Four Mode Types",
          proTip: "Defeating a Villain gives you an extra Smart Missile and adds to your end of ball bonus.",
          key: "villains",
          kicker: "Beat The Boss",
          chipByFilm: true,
          boxes: [
            {
              name: "Dr. No",
              target: "Dr. No",
              detail: "Trouble in Jamaica — build value at the bumpers or right orbit, then cash out at the Dragon Tank. 10 successful shots to win.",
              img: "assets/bond-photo-drno.jpg",
            },
            {
              name: "Rosa Klebb",
              target: "From Russia With Love",
              detail: "SPECTRE Island — clear all nine major shots, then finish with the left eject and DB5 eject.",
              img: "assets/bond-photo-klebb.jpg",
            },
            {
              name: "Auric Goldfinger",
              target: "Goldfinger",
              detail: "The Incredible Laser Ray — shoot the Goldfinger target to relight shots; 7 total shots lights the DB5 eject to escape.",
              img: "assets/bond-photo-goldfinger.jpg",
            },
            {
              name: "Emilio Largo",
              target: "Thunderball",
              detail: "Disco Volante Demolition — shoot the left eject, side ramp, or right ramp; 10 shots to win.",
              img: "assets/bond-photo-largo.jpg",
            },
            {
              name: "Blofeld",
              target: "You Only Live Twice",
              detail: "Feeding Frenzy — shoot the Bird 1 rocket or drop targets to beat Blofeld.",
              img: "assets/bond-photo-blofeld.jpg",
            },
            {
              name: "Mr. Henderson",
              target: "Diamonds Are Forever",
              detail: "Diamonds of Destruction — calibrate the satellite with the left eject, center loop and right ramp. 9 shots to win.",
              img: "assets/bond-photo-henderson.jpg",
            },
          ],
        },
        {
          pageTitle: "The Henchmen",
          eyebrow: "Fast, Repeatable Progress",
          proTip: "Henchmen are the fast, repeatable film progress — lean on them early.",
          key: "henchmen",
          kicker: "Take Out The Muscle",
          chipByFilm: true,
          boxes: [
            {
              name: "Professor Dent",
              target: "Dr. No",
              detail: "Sinister Summit — lock in the moving yellow shot with the Dragon Tank; 10 yellow shots to win.",
              img: "assets/bond-photo-dent.jpg",
            },
            {
              name: "Red Grant",
              target: "From Russia With Love",
              detail: "Encounter on the Orient Express — shoot the right orbit to light combos across the right side; 10 red shots to win.",
              img: "assets/bond-photo-grant.jpg",
            },
            {
              name: "Oddjob",
              target: "Goldfinger",
              detail: "He Blew a Fuse — hit the left ramp, side ramp, right orbit, and right ramp, then the rocket lane to win.",
              img: "assets/bond-photo-oddjob.jpg",
            },
            {
              name: "Fiona Volpe",
              target: "Thunderball",
              detail: "Femme Fatale — chase her down: left ramp, right ramp, left ramp, right orbit, side ramp, left ramp, DB5 eject.",
              img: "assets/bond-photo-volpe.jpg",
            },
            {
              name: "Mr. Osato",
              target: "You Only Live Twice",
              detail: "Arrange Usual Reception Please — flee Osato’s clutches via the three ramps and upper loop.",
              img: "assets/bond-photo-osato.jpg",
            },
            {
              name: "Mr. Wint & Mr. Kidd",
              target: "Diamonds Are Forever",
              detail: "Shoot the left ramp then center lane, repeated three times, to complete the mode.",
              img: "assets/bond-photo-wintkidd.jpg",
            },
          ],
        },
        {
          pageTitle: "SPECTRE Weapons",
          eyebrow: "Spell SPECTRE Behind The Rocket",
          proTip: "Each SPECTRE countdown you beat leaves a perk for the rest of the game.",
          key: "spectre",
          kicker: "Beat The Countdown",
          chipByFilm: true,
          boxes: [
            { name: "Troublesome Tarantulas", target: "Dr. No", detail: "Perk: +17 seconds on mode timers." },
            { name: "Deadly Dagger", target: "From Russia With Love", detail: "Perk: +7 seconds on ball savers." },
            { name: "Death By Derby", target: "Goldfinger", detail: "Perk: upgraded High Stakes awards." },
            { name: "Swimming With Sharks", target: "Thunderball", detail: "Perk: two Smart Missiles per mode, plus 2 every ball." },
            { name: "Outer Space Hijack", target: "You Only Live Twice", detail: "Perk: an add-a-ball." },
            { name: "Bath-O-Sub Bash", target: "Diamonds Are Forever", detail: "Perk: super modes last the whole ball." },
          ],
        },
        {
          pageTitle: "The Bond Girls",
          eyebrow: "Boost The Current Film",
          proTip: "Bond girls: Pussy Galore - enough said.",
          key: "bondGirls",
          kicker: "Collect The Allies",
          chipByFilm: true,
          boxes: [
            { name: "Honey Ryder", target: "Dr. No", detail: "Qualified by 25 bumper hits.", img: "assets/bond-photo-honey.jpg" },
            {
              name: "Tatiana Romanova",
              target: "From Russia With Love",
              detail: "Qualified by 3 right orbit shots.",
              img: "assets/bond-photo-tatiana.jpg",
            },
            { name: "Pussy Galore", target: "Goldfinger", detail: "Qualified by 4 DB5 ejects.", img: "assets/bond-photo-galore.jpg" },
            { name: "Domino Derval", target: "Thunderball", detail: "Qualified by 4 left ejects.", img: "assets/bond-photo-domino.jpg" },
            {
              name: "Kissy Suzuki",
              target: "You Only Live Twice",
              detail: "Qualified by 10 rocket hits — strong shots register more.",
              img: "assets/bond-photo-kissy.jpg",
            },
            { name: "Tiffany Case", target: "Diamonds Are Forever", detail: "Qualified by 200 spinner spins.", img: "assets/bond-photo-tiffany.jpg" },
          ],
        },
        {
          pageTitle: "Q-Branch Toys",
          eyebrow: "Light Them, Then Cash In",
          proTip: "Q gadgets are gravy — spend them from the scoop, but don’t drain reaching for it.",
          key: "qbranch",
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
            {
              name: "DB5",
              target: "Goldfinger",
              detail: "Three DB5 eject shots qualify it; six shots reveal the car’s amenities and start DB5 Multiball.",
              img: "assets/bond-photo-db5.jpg",
            },
            {
              name: "Power Pack",
              target: "Thunderball",
              detail: "Three left-eject shots qualify it; the underwater jetpack gadget leads into Power Pack Multiball.",
              img: "assets/bond-photo-powerpack.jpg",
            },
            {
              name: "Little Nellie",
              target: "You Only Live Twice",
              detail: "20 rocket hits qualify it; five right-ramp shots start Little Nellie Multiball.",
            },
            {
              name: "Q’s Ring",
              target: "Diamonds Are Forever",
              detail: "400 spinner spins qualify it — test the electromagnet ring on the flashing blue shots.",
            },
          ],
        },
        {
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2022",
          proTip: "Start a Villain or Henchmen mode and then stack BirdOne or JetPack Multiball to add to the scoring.",
          key: "multiball",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Bird One",
              target: "Rocket Dropdowns, Center Lock",
              detail: "Complete rocket drop down targets to light lock, then lock three balls in the rocket at the center loop.",
              objective: "Lock three balls in the rocket for the game's signature multiball assault.",
              jackpots: "Every shot lights green to build the jackpot; blast the rocket for the Super Jackpot.",
              tip: "Hit the two upper-flipper shots right away — three double jackpots earn the multiball extension.",
              img: "assets/bond-photo-rocket.jpg",
            },
            {
              name: "Jetpack",
              target: "Left Eject → Left Ramp",
              detail: "The left eject lights the left ramp to start Jetpack Multiball.",
              objective: "Shoot the center lane to lock in the hurry-up as the jackpot value.",
              jackpots: "Five jackpots, then the left ramp for a double. On the Premium the jetpack carries the ball — shoot the Dragon Tank under it for the Super (10M, +5M).",
              tip: "Best used when stacked with a Villain or Henchman mode - not very useful on its own.",
              img: "assets/bond-photo-dragontank.jpg",
            },
            {
              name: "Bond, James Bond",
              target: "Left Eject or Right Ramp",
              detail: "Activated by battling a Villain, a Henchman, and playing Bird One and Jetpack Multiballs",
              objective: "2-ball with 70 seconds of unlimited ball save: shoot 10 lit shots.",
              jackpots: "2.5M (5M at the side loop). The side ramp Super is worth up to 100M plus an extra ball.",
              tip: "Each shot earns a different Bond introduction voice over from one of the films.",
              img: "assets/bond-photo-bond.jpg",
            },
          ],
        },
        {
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Collect Bond Women and activate 007 Scoring with the Pink Action Button. Best used during a Villain or Henchmen mode, better yet stacked with a multiball.",
          key: "strategy",
          kicker: "House Advice",
          boxes: [
            { name: "Button First", detail: "Learn the Action Button before chasing films — it's the machine's #1 scoring tool." },
            { name: "Play A Whole Film", detail: "Play all four modes from one film and that film’s Bond Woman stays lit across balls." },
            { name: "Stack Bird One", detail: "Start Bird One during a Villain or Henchman mode to double up on scoring." },
            { name: "Save Jetpack", detail: "Jetpack is weak alone — always stack it with a Villain or Henchman mode." },
            { name: "Chase Bond Women", detail: "Each Bond Woman adds +1× to 007 Scoring, up to 7×." },
            { name: "Mind The Colors", detail: "Blue, Pink and Green Action Button uses each do something different — know which is lit." },
          ],
        },
        {
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Play all four mini-wizards for MI6 Multiball — yeah right.",
          key: "hold",
          line: "The most famous secret agent ever. Six iconic films. Push Start.",
        },
      ],
      breathers: [
        {
          type: "Overheard",
          title: "",
          text: "“That ramp feeds it straight down the middle. That’s bullshit.”",
          footer: "You’re not mad at the machine. You’re mad at yourself.",
        },
      ],
    },

    /* ======================================================================
       DEADPOOL
       Synced from the "RFPC Kiosk Content" doc. Edit there, then sync.
       ====================================================================== */
    {
      game: "deadpool",
      title: "Deadpool",
      maker: "Stern · 2018",
      proTip: "Spell BOOM and hold the button — it spots the highest-value shot on the whole playfield.",
      pages: [
        {
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2018",
          proTip: "Battles at the scoop, Quests through the chimichanga truck, Mr. Sinister at the end.",
          key: "intro",
          credits: [
            { role: "Game Design", names: "George Gomez" },
            { role: "Code / Rules", names: "Tanio Klyce" },
            { role: "Artwork", names: "Zombie Yeti" },
            { role: "Release", names: "Stern · 2018" },
          ],
        },
        {
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Start Lil’ Deadpool while a Battle is running.",
          key: "gameoverview",
          intro: "Deadpool, based on the Marvel character of the same name, is a George Gomez design released in 2018. The game uses a video game-inspired aesthetic to convey Deadpool’s mischievous nature as he fights against various villains and travels back in time to obtain valuable artifacts, though Mr. Sinister is plotting something even Deadpool might not expect.  Features hilarious callouts and an amazing custom soundtrack of original, Deadpool themed songs.",
          bullets: [
            "Complete DEAD to light a Battle at the scoop: Juggernaut, Mystique, Sabretooth.",
            "Win all three Battles for Sauron Multiball and the Level 2 rematches.",
            "Right orbit and orange chimichanga shots light Quests: T-Rex and Megalodon.",
            "Team-Ups bring X-Men into a Battle: Dazzler, Colossus, Wolverine, Domino.",
            "Spell BOOM and hold the button to spot the best shot on the field.",
            "Mr. Sinister waits at the end: M. Rex, Clone Multiball, the Final Battle.",
          ],
        },
        {
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2018",
          proTip: "Four main multiballs: Ninja, Disco, Mechsuit and Sauron.",
          key: "rundown",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Start Battles at the scoop and hit the flashing shots, then finish the villain at the scoop. Bring in Team-Ups to make it easier.",
            rows: [
              { label: "Battles", target: "The Scoop", desc: "Complete DEAD, then pick Juggernaut, Mystique or Sabretooth." },
              { label: "Quests", target: "Right Orbit → Scoop", desc: "Advance the truck, collect the orange chimichangas, then the scoop." },
              { label: "Team-Ups", target: "Two Shots Each", desc: "Qualify an X-Man while no mode runs; they join your next Battle." },
              { label: "Lil’ Deadpool", target: "OOF Drops", desc: "Drop the targets, hit the standup twice, then the drops again." },
              { label: "Playfield X", target: "SNIKT → Right Ramp", desc: "Ricochet off SNIKT onto the ramp for up to 5×." },
              { label: "Katanarama Time", target: "Both Ramps", desc: "Three diamonds on each ramp: 30 seconds of big shots." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Four multiballs, one merc with a mouth.",
            rows: [
              { label: "Ninja Multiball", target: "Right Ramp", desc: "Complete POOL to light lock; lock three balls." },
              { label: "Disco Multiball", target: "Left Spinner", desc: "60 spins on the left spinner." },
              { label: "Mechsuit Multiball", target: "Weapons → Scoop", desc: "Cash out 45 weapons at the scoop." },
              { label: "Sauron Multiball", target: "Win 3 Battles", desc: "Beat Juggernaut, Mystique and Sabretooth." },
            ],
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            layout: "table",
            lead: "Plunge for the BAM! lane, or hold the left flipper for the big ones.",
            rows: [
              { label: "Lane Skill", target: "Flashing BAM! Lane", desc: "Plunge into the lit lane for 2.5M." },
              { label: "Super Skill", target: "Right Ramp", desc: "Hold left flipper, shoot the ramp for 5M." },
              { label: "MXV Skill", target: "Orbit → Right Ramp", desc: "Right orbit to right ramp for 12.5M plus Ninjapocalypse." },
              { label: "Super Secret", target: "SNIKT → Right Ramp", desc: "15M and +1 Playfield X." },
            ],
          },
          button: {
            kicker: "Spell BOOM",
            title: "The BOOM Button",
            lead: "Spell BOOM in the return lanes. The button spots the highest-value shot on the field (not the scoop).",
            rows: [
              { label: "Boom", target: "Highest Shot", desc: "Instantly collect the top lit shot." },
              { label: "Big Boom", target: "Everything", desc: "Bank four BOOMs to collect every lit shot." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "The Final Battle",
            body: "Beat Megakrakolodonus Rex, Clone Multiball and Mechsuit Multiball. Then hit all four Team-Up shots in 45 seconds and survive a 70-second multiball against Mr. Sinister.",
            chip: "◆ M. Rex · Clones · Mechsuit",
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Every three DEADPOOL completions light the Regeneration ball save.",
            rows: [
              { name: "Lil’ Deadpool In Battle", body: "Start Lil’ Deadpool while a Battle is running." },
              { name: "Ninjapocalypse", body: "Right orbit → right ramp grabs 10 Ninja Stars at once." },
            ],
          },
        },
        {
          pageTitle: "The Battles",
          eyebrow: "Complete DEAD First",
          proTip: "Drain mid-Battle and your damage is saved for the next try.",
          key: "battles",
          kicker: "Finish Them At The Scoop",
          boxes: [
            { name: "Juggernaut", target: "DEAD/POOL Targets", detail: "Hit any four targets to taunt him and light every shot for 20 seconds." },
            { name: "Mystique", target: "Spinner → Ramps", detail: "Center spinner, then both ramps. Hit the Team-Up shot when she shape-shifts." },
            { name: "Sabretooth", target: "Orbits & Spinner", detail: "Orbits or center spinner. Orbit shots feed the pops for extra damage." },
            { name: "Sauron Multiball", target: "Win All Three", detail: "Beat all three villains to unlock Sauron Multiball." },
            { name: "Level 2 Battles", target: "The Scoop", detail: "Harder rematches of all three. Win them for Clone Multiball." },
          ],
        },
        {
          pageTitle: "The Quests",
          eyebrow: "Through The Chimichanga Truck",
          proTip: "Win both Quests and play Sauron Multiball to face Megakrakolodonus Rex.",
          key: "quests",
          kicker: "Time-Travel Missions",
          boxes: [
            {
              name: "Light A Quest",
              target: "Right Orbit → Scoop",
              detail: "Right orbit advances the truck. Collect the orange chimichanga shots, then the scoop.",
            },
            {
              name: "T-Rex Quest",
              target: "Lil’ Deadpool Target",
              detail: "Green shots drop the OOF targets. Then bomb the Lil’ Deadpool target 5 times.",
            },
            {
              name: "Megalodon Quest",
              target: "Roving Red Shot",
              detail: "Hit the roving red shot 5 times. Finish at the scoop for the Mode Jackpot.",
            },
          ],
        },
        {
          pageTitle: "Team-Ups",
          eyebrow: "Qualify Between Battles",
          proTip: "Each Team-Up qualifies with two shots while no mode is running.",
          key: "teamups",
          kicker: "Bring In An X-Man",
          boxes: [
            { name: "Dazzler", target: "Left Orbit", detail: "More health and more time for the Battle." },
            { name: "Colossus", target: "U-Turn", detail: "Doubles Battle points." },
            { name: "Wolverine", target: "Center Spinner", detail: "Doubles the damage you deal." },
            { name: "Domino", target: "Right Orbit", detail: "Boosts the villain’s feature: targets, spinner or bumpers." },
          ],
        },
        {
          pageTitle: "Lil’ Deadpool",
          eyebrow: "Behind The OOF Drops",
          proTip: "Start Lil’ Deadpool while a Battle is running.",
          key: "lildeadpool",
          kicker: "Three Modes In Order",
          boxes: [
            {
              name: "Lil’ Deadpool Multiball",
              target: "OOF Drops",
              detail: "Drop the targets, hit the standup twice, then the drops again to start.",
            },
            { name: "Lil’ Deadpool Frenzy", target: "Every Switch", detail: "Every switch scores 100K for 60 seconds." },
            { name: "Lil’ Deadpool Bounce", target: "Roving Targets", detail: "Chase the roving targets for +1 Playfield X." },
          ],
        },
        {
          pageTitle: "Mr. Sinister Modes",
          eyebrow: "The End Game",
          proTip: "The Final Battle needs all three: M. Rex, Clone Multiball and Mechsuit.",
          key: "sinister",
          kicker: "Sinister’s Plan",
          boxes: [
            { name: "Megakrakolodonus Rex", target: "The Scoop", detail: "Win both Quests and play Sauron Multiball. A single-ball fight." },
            { name: "Clone Multiball", target: "The Scoop", detail: "Win all three Level 2 Battles." },
            {
              name: "The Final Battle",
              target: "Team-Up Shots",
              detail: "Hit all four Team-Up shots in 45 seconds, then a 70-second multiball. Win it for Special.",
            },
          ],
        },
        {
          pageTitle: "Other Scoring",
          eyebrow: "Points Between The Fights",
          proTip: "Every 100 weapons adds +1 Playfield X for the rest of the game.",
          key: "otherScoring",
          kicker: "Everything Else",
          boxes: [
            { name: "Katanarama Time", target: "Both Ramps", detail: "Three diamonds on each ramp start 30 seconds of 1M+ orbits and ramps." },
            { name: "Colossal Jackpot", target: "U-Turn", detail: "Two shots through the U-turn light it. Switch hits grow it." },
            { name: "Berserker Rage", target: "Center Loop", detail: "Four loops light it: 45 seconds of growing spinner value." },
            { name: "Weapons & Ninja Stars", target: "White Shots → Scoop", detail: "25 weapons or 50 Ninja Stars light an extra ball." },
            { name: "DEADPOOL & Mystery", target: "Standups → Scoop", detail: "DEAD lights a Battle, POOL lights a lock, DEADPOOL lights Mystery." },
            { name: "Regeneration", target: "Left Outlane", detail: "Every three DEADPOOL completions light the ball save." },
          ],
        },
        {
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2018",
          proTip: "Bank Ninja Stars from the bumpers before Ninja Multiball — they size the jackpots.",
          key: "multiball",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Ninja Multiball",
              target: "Right Ramp",
              detail: "Complete POOL to light the lock, then lock three balls at the right ramp.",
              objective: "Every major shot is a jackpot.",
              jackpots: "Ninja Stars set the value. The Super at the right ramp is the jackpot total.",
              tip: "Bump the pops and grab Ninjapocalypse first.",
            },
            {
              name: "Disco Multiball",
              target: "Left Spinner",
              detail: "60 spins on the left spinner.",
              objective: "Switch hits build the jackpots.",
              jackpots: "The left ramp collects the Super.",
              tip: "Premium Disco Loops pay off at 60, 180 and 300 spins.",
            },
            {
              name: "Mechsuit Multiball",
              target: "Weapons → Scoop",
              detail: "Cash out 45 weapons: white shots, then the scoop.",
              objective: "4-ball. Jackpots start at 5M.",
              jackpots: "Five jackpots light the Super at the scoop.",
              tip: "More white shots before the scoop cash more weapons.",
            },
            {
              name: "Sauron Multiball",
              target: "Win 3 Battles",
              detail: "Beat Juggernaut, Mystique and Sabretooth.",
              objective: "The reward for clearing the first round of Battles.",
              jackpots: "Required, with both Quests, for Megakrakolodonus Rex.",
              tip: "Play it before chasing the Level 2 rematches.",
            },
          ],
        },
        {
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Ricochet the SNIKT target to the right ramp for up to 5× playfield.",
          key: "strategy",
          kicker: "House Advice",
          boxes: [
            { name: "Spell BOOM", detail: "Hold the button to spot the highest-value shot on the field." },
            { name: "Lil’ Deadpool In Battle", detail: "Start Lil’ Deadpool while a Battle is running." },
            { name: "Playfield X", detail: "Ricochet the SNIKT target to the right ramp for up to 5×." },
            { name: "Ninjapocalypse", detail: "Right orbit → right ramp grabs 10 Ninja Stars before Ninja Multiball." },
            { name: "Team-Up Early", detail: "Qualify Wolverine and Colossus between Battles." },
            { name: "Regeneration", detail: "Three DEADPOOL completions light the left outlane save." },
          ],
        },
        {
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Beat M. Rex, the clones and the Mechsuit, then face Mr. Sinister.",
          key: "hold",
          line: "Maximum effort. Go break the fourth wall.",
        },
      ],
      breathers: [
        {
          type: "House Tip",
          title: "Cradle",
          text: "Trap the ball against a raised flipper. Reset, breathe, aim your next shot — then release.",
          footer: "Trap the ball against a raised flipper. Reset, breathe, aim your next shot — then release.",
        },
      ],
    },

    /* ======================================================================
       FOO FIGHTERS
       Synced from the "RFPC Kiosk Content" doc. Edit there, then sync.
       ====================================================================== */
    {
      game: "foo-fighters",
      title: "Foo Fighters",
      maker: "Stern · 2023",
      proTip: "Mod the van before you start a city — the mods apply to the next van mode.",
      pages: [
        {
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2023",
          proTip: "Tour the country in the van; save each city from the Overlord.",
          key: "intro",
          credits: [
            { role: "Game Design", names: "Jack Danger" },
            { role: "Code / Rules", names: "Tanio Klyce, Raymond Davidson" },
            { role: "Artwork", names: "Zombie Yeti" },
            { role: "Sound", names: "Bob Baffy" },
            { role: "Release", names: "Stern · 2023" },
          ],
        },
        {
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Finish a city on the first try — Austin pays more for every one-try city.",
          key: "gameoverview",
          intro: "Jack Danger’s first full-fledged pinball machine. Foo Fighters is based on a fictional Saturday morning cartoon series where the band is a group of heroes with a giant robot, fighting against a being known only as the Overlord that aims to reformat the world and erase all music from existence. Players take control of the Fighters’ stylish van, mod it out, and save the cities that the Overlord has conquered while defeating his army of spider-bots.",
          bullets: [
            "Spell V-A-N on the white arrows, then the left ramp picks a city.",
            "Mod the van at the paddle target: Engine, Speakers and Bomb.",
            "Three cities unlock Austin; six unlock D.C.",
            "Charge the UFO button at the captive ball to collect the best shot.",
            "Collect six FooBot parts for FooBot Multiball.",
            "Cities, all three Overlord multiballs and FooBot light the Final Battle.",
          ],
        },
        {
          pageTitle: "The Band",
          eyebrow: "Who You’re Playing With",
          proTip: "Each band member has a shot — and a FooBot part that doubles it.",
          key: "band",
          kicker: "Foo Fighters",
          boxes: [
            {
              name: "Dave Grohl",
              target: "Vocals · Guitar",
              detail: "Founder and frontman — the ex-Nirvana drummer who put the band together in 1994.",
              img: "assets/foo-band-dave.jpg",
            },
            { name: "Nate Mendel", target: "Bass", detail: "On bass since day one — the low-end backbone of every record." },
            { name: "Pat Smear", target: "Guitar", detail: "Founding guitarist and punk veteran — the wall of rhythm guitar." },
            { name: "Chris Shiflett", target: "Lead Guitar", detail: "Lead guitar since 1999 — the solos and the sharp riffs." },
            { name: "Rami Jaffee", target: "Keys", detail: "Keyboards and organ — the texture under the anthems." },
            { name: "Taylor Hawkins", target: "Drums", detail: "The powerhouse drummer and Grohl’s foil from 1997 — forever a Foo Fighter." },
          ],
        },
        {
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2023",
          proTip: "Three Overlord multiballs, plus Area 51 and Combotron.",
          key: "rundown",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Tour the country in the van, save each city from the Overlord, and mod the van so the next city is easier.",
            rows: [
              { label: "Van Mode", target: "Left Ramp", desc: "Spell V-A-N with white shots, then pick a city." },
              { label: "Mod the Van", target: "Paddle Target", desc: "Clear the drops, then hit the paddle to level up a mod." },
              { label: "Charge the Button", target: "UFO Captive Ball", desc: "Bank hits so the button collects the best shot." },
              { label: "Rock-O-Meter", target: "Right Orbit", desc: "Fill it for 2×, fill it again for 3× playfield." },
              { label: "Bot Awards", target: "4 Bot Targets", desc: "Ball save, then MOD-ulator Frenzy, then Bot Frenzy." },
              { label: "Combotron", target: "Combo Shots", desc: "Chain combos and cash them at the Overlord." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Three Overlord multiballs, then Area 51 and Combotron.",
            rows: [
              { label: "Overlord Multiballs", target: "The Overlord", desc: "All My Life, Monkey Wrench, The Pretender — in order." },
              { label: "Area 51 Multiball", target: "Area 51 Upper Playfield", desc: "Targets, spinner, loop, then the secret files target." },
              { label: "Combotron Multiball", target: "Side Ramp", desc: "Six combos, then the side ramp." },
            ],
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            layout: "table",
            lead: "Several skill shots wait at every plunge.",
            rows: [
              { label: "Rock-O-Meter", target: "Soft Plunge", desc: "Time the blinking light to qualify the meter." },
              { label: "Mod-ulator", target: "Drop Targets", desc: "Plunge into the drops to mod the van instantly." },
              { label: "Combo Hi-Five", target: "Left Crossover", desc: "Start a combo chain, up to six shots." },
              { label: "Secret Skills", target: "Two Hidden", desc: "One lights Overdrive, the other a ball save." },
            ],
          },
          button: {
            kicker: "Charge it first",
            title: "UFO Button",
            lead: "Hit the UFO captive ball to charge the button, then press it to collect the highest-value shot on the field.",
            rows: [
              { label: "Yellow", target: "8 Hits", desc: "One use." },
              { label: "Green · Red", target: "+4 Hits Each", desc: "Two uses, then three." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "The Final Battle",
            body: "Save every city including Austin and D.C., play all three Overlord multiballs, and play FooBot Multiball. Then the left ramp starts the Final Battle.",
            chip: "◆ Cities · Overlord · FooBot",
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Mod the van before you start a city — mods apply to the next van mode.",
            rows: [
              { name: "Mod First", body: "Mods apply to the next van mode you start." },
              { name: "One Try", body: "Cities finished in one visit raise Austin’s jackpots." },
            ],
          },
        },
        {
          pageTitle: "Van Modes (Cities)",
          eyebrow: "Save Each City",
          proTip: "Every van mode ends with a final shot at the Overlord.",
          key: "vanmodes",
          kicker: "Spell V-A-N",
          chipByCity: true,
          boxes: [
            {
              name: "Los Angeles",
              target: "The Ramps",
              detail: "Learn to Fly: combo the ramps for multiplied awards. The side ramp scores double.",
              img: "assets/foo-city-la.png",
            },
            {
              name: "Chicago",
              target: "Hurry-Up",
              detail: "Something From Nothing: a hurry-up spreads to nearby shots if you’re slow. Clear every arrow to boost it.",
              img: "assets/foo-city-chicago.png",
            },
            {
              name: "New York",
              target: "Spinner",
              detail: "Breakout: rip the spinner to build the value, then the center shot collects it.",
              img: "assets/foo-city-newyork.png",
            },
            {
              name: "New Orleans",
              target: "Side Loop & Ramp",
              detail: "I’ll Stick Around: every shot starts lit; hit one and only it stays lit.",
              img: "assets/foo-city-neworleans.png",
            },
            {
              name: "Seattle",
              target: "Side Loop 2×",
              detail: "This Is A Call: two lit shots sweep across and back. The side loop counts double.",
              img: "assets/foo-city-seattle.png",
            },
            {
              name: "Roswell",
              target: "Orange Shot",
              detail: "Run: the band (orange) runs from the Overlord (green). Orange pays triple; get caught and lose progress.",
              img: "assets/foo-city-roswell.png",
            },
          ],
        },
        {
          pageTitle: "Mod The Van",
          eyebrow: "Upgrade Before A City",
          proTip: "Mods apply to the next van mode you start.",
          key: "modulator",
          kicker: "The MOD-ulator",
          boxes: [
            {
              name: "How To Mod",
              target: "Drops → Paddle",
              detail: "Hit a drop to lock in the blinking mod. Clear all three, then pound the paddle.",
            },
            { name: "Engine", target: "More Time", detail: "Adds seconds to the next van mode." },
            { name: "Speakers", target: "More Points", detail: "Adds value to every shot in the next van mode." },
            { name: "Bomb", target: "Fewer Shots", detail: "Spots shots so the next city takes fewer to finish." },
            { name: "MOD-ulator Frenzy", target: "Paddle Target", detail: "The second Bot Award. Mods cycle fast and every paddle hit levels one." },
            { name: "Mod Levels", target: "Insert Colors", detail: "Each mod climbs yellow → red. Mods also raise D.C.’s jackpots." },
          ],
        },
        {
          pageTitle: "Wizard Modes",
          eyebrow: "Clear The Objectives",
          proTip: "Austin pays more for every city you finished in one try.",
          key: "wizards",
          kicker: "The Big Finishes",
          boxes: [
            {
              name: "Austin",
              target: "3 Cities",
              detail: "Times Like These: all shots lit. The spider-bot shot relights them at a multiplier.",
              img: "assets/foo-city-austin.jpg",
            },
            {
              name: "D.C.",
              target: "6 Cities",
              detail: "Holding Poison: clear the drops and paddle to light supers at band shots; each adds a ball.",
              img: "assets/foo-city-dc.jpg",
            },
            { name: "FooBot Multiball", target: "Left Ramp", detail: "Collect all six robot parts from features around the game." },
            {
              name: "Toy Time Multiball",
              target: "Band Combos",
              detail: "Make all six band-member combos and finish all six cities. Every jackpot adds a ball.",
            },
            { name: "The Final Battle", target: "Left Ramp", detail: "Every city, all three Overlord multiballs, and FooBot Multiball." },
          ],
        },
        {
          pageTitle: "Side Modes",
          eyebrow: "Between The Cities",
          proTip: "Start Bot Frenzy for the FooBot’s right arm — 25M in the frenzy upgrades it.",
          key: "sideModes",
          kicker: "Everything Else",
          boxes: [
            { name: "Bot Frenzy", target: "Left Ramp", detail: "Third Bot Award. 40 seconds: targets multiply the spinner up to 8×." },
            {
              name: "Supersonic Radio",
              target: "Radio Targets",
              detail: "Max the dial with mystery awards. 50 seconds of gray shots that turn pink.",
            },
            { name: "Super Lightning", target: "Lightning Target", detail: "Ten target hits: the ramps pay 10× the lightning value." },
            { name: "Ray Gun Targets", target: "Inlanes", detail: "One target gives 2× to the next shot; hit the other quickly for 4×." },
            { name: "Super Spinner", target: "Inlanes", detail: "Roll both inlanes three times: the spinner scores 5×." },
            { name: "Overdrive", target: "Ball Save", detail: "A ball save; one of the secret skill shots lights it instantly." },
          ],
        },
        {
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2023",
          proTip: "Area 51 can be built and started during any Overlord multiball.",
          key: "multiball",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Overlord Multiballs",
              target: "The Overlord",
              detail: "Hit the Overlord and its targets, lock a ball, then bash the captive ball 3, 5, then 7 times.",
              objective: "All My Life (2-ball), Monkey Wrench (3-ball), The Pretender (4-ball), in order.",
              jackpots: "The Overlord back target collects the Super.",
              tip: "Both Overlord targets allow a re-lock for 20 seconds of 2× jackpots.",
            },
            {
              name: "Area 51 Multiball",
              target: "Upper Playfield",
              detail: "The right ramp feeds Area 51: targets, spinner, loop, then the secret files target.",
              objective: "All shots score jackpots. Upper playfield shots raise them.",
              jackpots: "The Super is the same sequence again.",
              tip: "After it ends, the secret files target pays fresh jackpots for 30 seconds.",
            },
            {
              name: "Combotron Multiball",
              target: "Side Ramp",
              detail: "Collect six combos, then the side ramp.",
              objective: "Your best combos set the jackpot value.",
              jackpots: "Red jackpots light the Overlord for the Combotron Jackpot.",
              tip: "Turn every Combotron insert red before you cash in.",
            },
          ],
        },
        {
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Climb the Rock-O-Meter on the right orbit to 2×, then 3× playfield.",
          key: "strategy",
          kicker: "House Advice",
          boxes: [
            { name: "Mod The Van", detail: "Level the mods before you start a city." },
            { name: "One-Try Cities", detail: "Finish each city in one visit to raise Austin’s jackpots." },
            { name: "Climb The Meter", detail: "Right orbit builds 2×, then 3× playfield — start it before a mode." },
            { name: "Save The Button", detail: "Charge the UFO button for the last shots of a city or wizard." },
            { name: "Stack Area 51", detail: "Build Area 51 during an Overlord multiball." },
            { name: "Build The Bot", detail: "Each FooBot part doubles its band member’s shot." },
          ],
        },
        {
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Cities, Overlord and FooBot — then the Final Battle with the Overlord.",
          key: "hold",
          line: "Gas up the van. The tour’s yours.",
        },
      ],
      breathers: [
        {
          type: "Lingo",
          title: "Drain",
          text: "Losing the ball down an outlane or the center. The end of your turn.",
          footer: "Losing the ball down an outlane or the center. The end of your turn.",
        },
      ],
    },

    /* ======================================================================
       JURASSIC PARK
       Synced from the "RFPC Kiosk Content" doc. Edit there, then sync.
       ====================================================================== */
    {
      game: "jurassic-park",
      title: "Jurassic Park",
      maker: "Stern · 2019",
      proTip: "Clear a paddock without losing a staff member for a Perfect Paddock.",
      pages: [
        {
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2019",
          proTip: "Nedry’s virus loosed the dinosaurs — rescue the staff and escape the island.",
          key: "intro",
          credits: [
            { role: "Game Design", names: "Keith Elwin" },
            { role: "Code / Rules", names: "Rick Naegele, Keith Elwin" },
            { role: "Engineering", names: "Harrison Drake" },
            { role: "Artwork", names: "Jonathan Bergeron" },
            { role: "CG Art", names: "Chuck Ernst" },
            { role: "Sound", names: "Jerry Thompson" },
          ],
        },
        {
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Feed T-Rex is always the first T-Rex Event.",
          key: "gameoverview",
          intro: "Jurassic Park is the second Stern Pinball machine designed by Keith Elwin. Directly after the events of the film, Nedry’s computer virus has continued to plunge the park into chaos - meaning the dinosaurs are loose and the employees are in danger. The player has to rescue as many staff as they can and capture the dinosaurs, all while trying to survive the horrors of the abandoned park and eventually staging an escape.",
          bullets: [
            "Spell M-A-P, then the left ramp enters the next paddock.",
            "Rescue staff at the red shots, set the trap, then capture the dinosaur.",
            "Every capture earns a perk for the rest of the game.",
            "Spell T-REX at the truck for T-Rex Events at the left ramp.",
            "Your first capture lights the Control Room for three timed modes.",
            "Win the three mini-wizards to unlock Escape Nublar.",
          ],
        },
        {
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2019",
          proTip: "Spell CHAOS in order, then hit the target between the bumpers.",
          key: "rundown",
          modes: {
            kicker: "On The Playfield",
            title: "Modes & Battles",
            lead: "Nedry’s virus loosed the dinosaurs. Rescue the staff, capture the dinosaurs, and stage your escape from the island.",
            rows: [
              { label: "Enter Paddock", target: "Left Ramp", desc: "Spell M-A-P with white shots to light it." },
              { label: "Choose Path", target: "The Truck", desc: "Truck hits switch between the left and right paths." },
              { label: "Capture Dino", target: "Flashing Trap Shot", desc: "Rescue staff, set the trap, then hit the yellow/green shot." },
              { label: "Control Room", target: "Left Target", desc: "Pick one of three timed modes with the flippers." },
              { label: "T-Rex Events", target: "Truck → Left Ramp", desc: "Spell T-REX at the truck, then the left ramp." },
              { label: "Pteranodon Attack", target: "Right Ramp", desc: "Four right ramp shots start a switch frenzy." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Four ways to lose control of the island.",
            rows: [
              { label: "Chaos Multiball", target: "Spell CHAOS", desc: "Letters in order, then the target between the bumpers." },
              { label: "Raptor Tri-Ball", target: "Raptor Pen", desc: "Capture a raptor, then break the fence." },
              { label: "Feed T-Rex", target: "Left Ramp", desc: "A hurry-up that turns into a 2-ball multiball." },
              { label: "King of the Island", target: "Left Ramp", desc: "Capture the Spinosaurus to light it." },
            ],
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            layout: "table",
            lead: "The skill shot is a ramp combo — chain it for multipliers.",
            rows: [
              { label: "Combo Skill", target: "Left Ramp", desc: "Full plunge, then the left ramp for 2M." },
              { label: "Super → Ultra", target: "Right → Side → Orbit", desc: "Each next shot pays 2×, 4×, then 6×." },
            ],
          },
          button: {
            kicker: "Pick your award",
            title: "Smart Missile",
            lead: "Enough rescues light it at the left inlane. Pick an award with the action button, then hit the pops standup.",
            rows: [
              { label: "Select", target: "Action Button", desc: "Three seconds to cycle to the award you want." },
              { label: "Fire", target: "Pops Standup", desc: "Make the shot to collect it plus 10M." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "Escape Nublar",
            body: "Play the three mini-wizards — Visitor’s Center, Museum Mayhem and Secure Control Room — then the left ramp starts Escape Nublar. It ends the game.",
            chip: "◆ Three mini-wizards",
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Clear a paddock without losing a staff member for a Perfect Paddock.",
            rows: [
              { name: "Perfect Paddock", body: "Rescue every staff member for a bigger bounty." },
              { name: "Supply Drops", body: "Purple standups, then the big standup: 2× scoring." },
            ],
          },
        },
        {
          pageTitle: "Paddocks",
          eyebrow: "Spell M-A-P · Left Ramp",
          proTip: "Shoot the truck to switch paths before you enter the next paddock.",
          key: "paddocks",
          kicker: "Pick A Path",
          boxes: [
            { name: "Level 1", target: "Gallimimus · Brachiosaurus", detail: "One rescue sets the trap. The easy start." },
            {
              name: "Level 2",
              target: "Triceratops · Ankylosaurus",
              detail: "Triceratops makes loop awards easier; Ankylosaurus makes inlanes easier.",
            },
            { name: "Level 3", target: "Stegosaurus · Compy", detail: "More rescues and faster dinosaurs." },
            {
              name: "Level 4",
              target: "Pteranodon · Raptor",
              detail: "Pteranodon flies to any rescue. Raptors hunt in pairs. Each doubles a multiball’s jackpots.",
            },
            { name: "Rescues", target: "Red Shots", detail: "The green arrow is the dino. Reach the red staff shots before it does." },
            { name: "Visitor’s Center", target: "Spell M-A-P", detail: "Leave a Level 4 paddock, then spell M-A-P again." },
          ],
        },
        {
          pageTitle: "Super Predators",
          eyebrow: "Between The Levels",
          proTip: "Capturing the Spinosaurus lights King of the Island Multiball.",
          key: "predators",
          kicker: "The Big Ones",
          boxes: [
            { name: "Spitter", target: "Level 1.5", detail: "Capture it for +2× on Super Spinner." },
            { name: "T-Rex", target: "Level 2.5", detail: "The halfway paddock on every path." },
            { name: "Spinosaurus", target: "Level 3.5", detail: "Capture it to light King of the Island at the left ramp." },
          ],
        },
        {
          pageTitle: "T-Rex Events",
          eyebrow: "Spell T-REX At The Truck",
          proTip: "Feed T-Rex is always first; the rest cycle Chase → Encounter → Rampage.",
          key: "trex",
          kicker: "Start At The Left Ramp",
          boxes: [
            { name: "Feed T-Rex", target: "Always First", detail: "A hurry-up that turns into a 2-ball multiball." },
            { name: "T-Rex Chase", target: "Dodge The Shots", detail: "Outrun the T-Rex as the lit shots and truck shift." },
            { name: "T-Rex Encounter", target: "Trapped Workers", detail: "Free three trapped workers to finish the mode." },
            {
              name: "T-Rex Rampage",
              target: "Left Ramp",
              detail: "Lower the T-Rex, then cash out at the left ramp. Tower first for 3×, helipad for 2×.",
            },
            { name: "Museum Mayhem", target: "Play All Four", detail: "Spell T-REX once more: chase two raptors, then a 3-ball victory multiball." },
          ],
        },
        {
          pageTitle: "Control Room",
          eyebrow: "Nedry’s Mess",
          proTip: "Your first capture lights the Control Room.",
          key: "controlRoom",
          kicker: "Three Timed Modes",
          boxes: [
            { name: "How To Light It", target: "Left Target", detail: "First capture, spell CHAOS twice, a Raptor jackpot, or 15 tower shots." },
            {
              name: "Virus Attack",
              target: "Any Lit Shot",
              detail: "A lit shot lights the Control Room for 10M plus the shots you made. Three times.",
            },
            { name: "Restore Power", target: "Spinner First", detail: "The spinner lights seven shots. Each one pays more than the last." },
            { name: "System Boot", target: "Two-Shot Combos", detail: "Left ramp, helipad or spinner, then a harder follow-up. Three sets." },
            { name: "Secure Control Room", target: "Play All Three", detail: "Mini-wizard: a hurry-up at every major shot in order." },
            { name: "Invalid Frenzy", target: "Secret", detail: "A hidden 4-ball multiball. Why would Nedry do this?" },
          ],
        },
        {
          pageTitle: "Wizard Modes",
          eyebrow: "One Shot At Each",
          proTip: "You get one attempt at each mini-wizard — make it count.",
          key: "wizards",
          kicker: "The End Game",
          boxes: [
            { name: "Visitor’s Center", target: "Finish The Map", detail: "Lock two raptors in cold storage in a 2-ball multiball." },
            { name: "Museum Mayhem", target: "All T-Rex Events", detail: "Hunt two raptors, escape in the truck, then a 3-ball victory multiball." },
            { name: "Secure Control Room", target: "All Control Room Modes", detail: "Collect a hurry-up from every major shot in a fixed order." },
            {
              name: "Escape Nublar",
              target: "Left Ramp",
              detail: "Play all three, then drive back through the paddocks. Three trucks; the game ends.",
            },
            { name: "When Dinosaurs Ruled the Earth", target: "Win All Four", detail: "A 60-second 6-ball multiball with unlimited ball save." },
          ],
        },
        {
          pageTitle: "Other Features",
          eyebrow: "Points Are Points",
          proTip: "Shoot all four ramps before the spinner — each one raises its value.",
          key: "other",
          kicker: "Everything Else",
          boxes: [
            { name: "Smart Missile", target: "Left Inlane", detail: "Pick an award with the button, then hit the pops standup." },
            { name: "Amber Bonus", target: "Pop Bumpers", detail: "Builds from the pops all game; collect it at the pops standup." },
            {
              name: "Supply Drop & 2×",
              target: "Purple Standups",
              detail: "Three purple standups, then the big standup. Lights 2× scoring for 45 seconds.",
            },
            { name: "Pteranodon Attack", target: "Right Ramp", detail: "Four ramp shots. Switches build an award collected at the right ramp." },
            { name: "Spinner", target: "Four Ramps", detail: "Each ramp raises the spinner value — up to 225K a spin." },
            { name: "Fossils", target: "Finish Modes", detail: "Completed modes and multiballs award fossils toward sets." },
          ],
        },
        {
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2019",
          proTip: "Supply Drops add a ball during any multiball except Chaos.",
          key: "multiball",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Chaos Multiball",
              target: "Spell CHAOS",
              detail: "Collect C-H-A-O-S in order, then hit the target between the bumpers.",
              objective: "Jackpots light on one half of the playfield; hit the truck to switch sides.",
              jackpots: "Supers at the amber target, then the CHAOS letters.",
              tip: "Pop bumper hits add balls in Chaos.",
            },
            {
              name: "Raptor Tri-Ball",
              target: "Raptor Pen",
              detail: "Capture a raptor, then shoot the pen until the fence breaks.",
              objective: "Four phases. Ramp jackpots, then CHAOS jackpots, then six balls.",
              jackpots: "Supers at the right ramp and upper loop, times the balls in play.",
              tip: "Clear the pen targets and dead-end lane for 15 seconds of 2× jackpots.",
            },
            {
              name: "King of the Island",
              target: "Left Ramp",
              detail: "Capture the Spinosaurus.",
              objective: "3-ball. Switch hits light the major shots for a jackpot.",
              jackpots: "Each jackpot climbs a multiplier, up to 5×.",
              tip: "Must be played before you move to the next paddock.",
            },
          ],
        },
        {
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Clear a paddock without losing a staff member for a Perfect Paddock.",
          key: "strategy",
          kicker: "House Advice",
          boxes: [
            { name: "Feed T-Rex First", detail: "It’s always the first event — and turns into a multiball." },
            { name: "Perfect Paddocks", detail: "Rescue every staff member for a bigger bounty." },
            { name: "Tranquilize", detail: "Tower awards include the Super Tranquilizer to slow fast dinos." },
            { name: "Pick Your Path", detail: "Truck hits switch paths — choose the perks you want." },
            { name: "Supply Drop 2×", detail: "Light 2× scoring before a big mode or multiball." },
            { name: "One Shot Each", detail: "Mini-wizards play once — be ready before you start them." },
          ],
        },
        {
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Win all three mini-wizards to unlock Escape Nublar.",
          key: "hold",
          line: "Life finds a way. Go survive the island.",
        },
      ],
      breathers: [
        {
          type: "Overheard",
          title: "",
          text: "“One more ball. I mean it this time. This is the last one.”",
          footer: "You’re not mad at the machine. You’re mad at yourself.",
        },
      ],
    },

    /* ======================================================================
       JOHN WICK
       Synced from the "RFPC Kiosk Content" doc. Edit there, then sync.
       ====================================================================== */
    {
      game: "john-wick",
      title: "John Wick",
      maker: "Stern · 2024",
      proTip: "Spawn enemies before you start a job — lit shots multiply by the blue circles stacked in front of them.",
      pages: [
        {
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Stern · 2024",
          proTip: "Out of retirement — work for seven factions, survive five adversaries, and reach the Special Assignment.",
          key: "intro",
          credits: [
            { role: "Game Design", names: "Elliot Eismin" },
            { role: "Code / Rules", names: "Mike Vinikour, Joshua Henderson, Tim Sexton" },
            { role: "Engineering", names: "Robert Blakeman" },
            { role: "Artwork", names: "Randy Martinez" },
            { role: "Sound", names: "Jerry Thompson" },
            { role: "Release", names: "Stern · 2024 · Code 1.02" },
          ],
        },
        {
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Spawn enemies before a job — lit shots multiply by the blue circles in front.",
          key: "gameoverview",
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
        {
          pageTitle: "The Rundown",
          eyebrow: "Stern · 2024",
          proTip: "Six multiballs: four Car Chases, plus Excommunicado and Deconsecrated.",
          key: "rundown",
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
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            layout: "table",
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
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "Special Assignment",
            body: "Red Circle Reckoning lights early. Play all of one category — every job, battle or multiball — for The Staircase, then The Duel, then the game-ending Special Assignment.",
            chip: "◆ Jobs · Battles · Multiballs",
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
        {
          pageTitle: "Jobs",
          eyebrow: "Left Side Factions",
          proTip: "Shoot a faction’s shot before starting the job at the VUK to pick who you work for.",
          key: "jobs",
          kicker: "Take The Contract",
          boxes: [
            {
              name: "Night Watch",
              target: "Left Eject",
              detail: "The Bowery · All seven shots lit purple; a roving white shot scores 2×. Perk: +5 seconds on every ball saver.",
            },
            {
              name: "Assassination",
              target: "Left Orbit",
              detail: "New York Continental · Green shots light the captive ball for kill shots — five to cash out. Perk: marker ball save at both outlanes.",
            },
            {
              name: "Security Detail",
              target: "Left Ramp",
              detail: "Osaka Continental · Chase one blinking red shot across the playfield, seven times. Perk: multiball extend, once per ball.",
            },
            {
              name: "VIP Award",
              target: "Red Circle",
              detail: "High Table · Hit the blinking 5M hurry-up shot six times; the solid shot resets it. Perk: bonus starts every ball at 2×.",
            },
          ],
        },
        {
          pageTitle: "More Jobs",
          eyebrow: "Right Side Factions",
          proTip: "Play three jobs to light extra ball — and all seven to light a wizard mode.",
          key: "jobs2",
          kicker: "Take The Contract",
          boxes: [
            {
              name: "Heist",
              target: "Center Ramp",
              detail: "Ruska Roma · Standups light yellow shots; the gold coin targets collect them all at once. Perk: motion sensors during Lights Out.",
            },
            {
              name: "Gather Intel",
              target: "Right Orbit",
              detail: "Marquis de Gramont · Combo the left and right ramps to build a center ramp jackpot. Perk: +20 seconds of Lights Out.",
            },
            {
              name: "Task A Crew",
              target: "Right Ramp",
              detail: "Tarasov Family · Build the left orbit spinner value, then rip it four times. Perk: add-a-ball with the action button.",
            },
          ],
        },
        {
          pageTitle: "Adversaries",
          eyebrow: "Defeat Ten Enemies To Light",
          proTip: "Make half the shots and hit the blood marker to cash the escape jackpot — or keep fighting for up to 4×.",
          key: "adversaries",
          kicker: "One-On-One",
          boxes: [
            {
              name: "Viggo",
              target: "Car & Captive Ball",
              detail: "Shoot the car or captive ball to light gold bonus shots. Twelve lit shots earn Be Seeing You.",
            },
            {
              name: "Kirill",
              target: "Red Circle",
              detail: "Clear the alternating red shots, then the Red Circle pays their total. Skip the Red Circle for a whole wave to add 1M.",
            },
            {
              name: "Cassian",
              target: "Switch Frenzy",
              detail: "Everything scores and builds the jackpot; one roving purple shot collects it. Six jackpots earn Be Seeing You.",
            },
            {
              name: "Ares",
              target: "Roving Red Shot",
              detail: "Find Ares — one red shot hops around, and bumpers or slings briefly reveal it. Eight red shots earn Be Seeing You.",
            },
            {
              name: "Zero",
              target: "Combos",
              detail: "Chain light-blue shots, then collect at the car, captive ball, or the left eject for 2×. Four combos earn Be Seeing You.",
            },
          ],
        },
        {
          pageTitle: "Car Chase Multiballs",
          eyebrow: "Bash The Car To Light",
          proTip: "Bagarre a L’Étoile is the highest-scoring Car Chase on average — hit the car to cycle to it.",
          key: "carchase",
          kicker: "The Car",
          boxes: [
            {
              name: "Helipad Showdown",
              target: "Chase 1",
              detail: "Red shots build the car jackpot up to 4×. Nine jackpots light a 5× super at the car.",
            },
            {
              name: "Taxicab Chase",
              target: "Chase 2",
              detail: "A 15-second hurry-up at the car locks in the value. Four jackpots light a 5× super at the left orbit.",
            },
            {
              name: "Motorcycle Pursuit",
              target: "Chase 3",
              detail: "Pursuit shots on one side, then the car to switch sides. Four jackpots light the super at the Continental.",
            },
            {
              name: "Bagarre a L’Étoile",
              target: "Chase 4",
              detail: "Ramps light the car, orbits raise the multiplier. Four jackpots set up four 5× supers at the car.",
            },
          ],
        },
        {
          pageTitle: "Allies & Other Scoring",
          eyebrow: "Stack The Odds",
          proTip: "Lights Out stays lit across balls if you don’t use it — save it for a big job or multiball.",
          key: "other",
          kicker: "Everything Else",
          boxes: [
            {
              name: "Akira",
              target: "Left Ramp",
              detail: "Ally · Rotates enemies one shot to the right — hold the left flipper to rotate them left.",
            },
            {
              name: "Charon",
              target: "Center Ramp",
              detail: "Ally · For four seconds, defeated enemies instantly respawn for another multiplied shot.",
            },
            { name: "Katia", target: "Right Ramp", detail: "Ally · Moves enemies off unlit shots and onto the shots that score right now." },
            {
              name: "Lights Out",
              target: "Spell YAGA",
              detail: "Cycle the inlanes to spell YAGA, then the action button kills the lights for 30 seconds of 2× scoring.",
            },
            {
              name: "Gold Coins",
              target: "Coin Targets",
              detail: "Bounces light random coin shots. Each coin adds 1M to bonus, and ten light extra ball.",
            },
            {
              name: "Marker Ball Save",
              target: "Left Standups",
              detail: "Five hits light an outlane ball save; the flippers move which lane is lit.",
            },
          ],
        },
        {
          pageTitle: "Wizard Modes",
          eyebrow: "Played In Order",
          proTip: "Red Circle Reckoning lights after just one job, one battle and one of each multiball type.",
          key: "wizards",
          kicker: "The End Game",
          boxes: [
            {
              name: "Red Circle Reckoning",
              target: "Mini-Wizard",
              detail: "A 60-second, 4-ball run — 10M per shot, 30M at the Red Circle, and an extra ball when you finish.",
            },
            {
              name: "The Staircase",
              target: "Center Ramp",
              detail: "Three levels of enemies, then fight back up as a 2-ball multiball. Collect the white arrows to multiply each level’s bonus.",
            },
            {
              name: "The Duel",
              target: "Action Button",
              detail: "Keep both balls alive for 2×, lock both, then time the button to the crosshair for up to 25M. Three rounds, then a 50M finish.",
            },
            { name: "Special Assignment", target: "Final Mode", detail: "60 flips to clear every shot and find Iosef. Win or lose, the game ends." },
          ],
        },
        {
          pageTitle: "Multiball Overview",
          eyebrow: "Stern · 2024",
          proTip: "The Security Detail and Task a Crew perks extend or add a ball to any multiball.",
          key: "multiball",
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
        {
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Bank gold coins — they light allies, add 1M each to bonus, and ten light extra ball.",
          key: "strategy",
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
        {
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Clear every job, battle or multiball to reach the wizard modes.",
          key: "hold",
          line: "You’re back. Go earn your place at the High Table.",
        },
      ],
      breathers: [
        {
          type: "House Tip",
          title: "Nudge, Don’t Tilt",
          text: "Bump the machine to nudge the ball off a drain. Three shoves in a row and TILT kills your ball.",
          footer: "Bump the machine to nudge the ball off a drain. Three shoves in a row and TILT kills your ball.",
        },
      ],
    },

    /* ======================================================================
       MONSTER BASH
       Synced from the "RFPC Kiosk Content" doc. Edit there, then sync.
       ====================================================================== */
    {
      game: "monster-bash",
      title: "Monster Bash",
      maker: "Chicago Gaming · SE",
      proTip: "Completing a mode earns its instrument; just starting all six lights Monster Bash.",
      pages: [
        {
          pageTitle: "Get To Know The Line-Up",
          eyebrow: "Chicago Gaming · Special Edition",
          proTip: "Round up six monsters and their instruments for the scariest band since KISS.",
          key: "intro",
          credits: [
            { role: "Game Design", names: "George Gomez" },
            { role: "Software", names: "Lyman Sheats" },
            { role: "Music", names: "Vince Pontarelli" },
            { role: "Artwork", names: "Kevin O’Connor" },
            { role: "Original Release", names: "Williams · 1998" },
            { role: "Remake", names: "Chicago Gaming Co." },
          ],
        },
        {
          pageTitle: "Game Overview",
          eyebrow: "TL;DR: The Quick Read",
          proTip: "Start a mode, then a multiball — the mode timer stops while the balls fly.",
          key: "gameoverview",
          intro: "Monster Bash brings together Universal’s classic movie monsters — Dracula, Frankenstein, Wolfman, the Mummy, the Bride of Frankenstein, and Creature from the Black Lagoon — who’ve formed a band and are looking to make it big. Help this rag-tag monster band pull off the concert of a lifetime.  It’s a monster-mash sitcom — campy, silly, and dripping with early Bally/Williams charm and wit.",
          bullets: [
            "Six monsters, six modes — complete a mode to win that monster’s instrument.",
            "Start all six modes, finished or not, for Monster Bash Multiball.",
            "Collect all six instruments for Monsters of Rock.",
            "Mode timers stop during multiball — stack them.",
            "Phantom Flip flips for you; Monster Bombs spot monster progress.",
            "Every scoop shot is a random award.",
          ],
        },
        {
          pageTitle: "The Rundown",
          eyebrow: "Chicago Gaming · SE",
          proTip: "Six monster modes, three multiballs, and the Monsters of Rock encore.",
          key: "rundown",
          modes: {
            kicker: "On The Playfield",
            title: "Monster Modes",
            lead: "Round up six classic monsters and their instruments to put together the scariest band since KISS.",
            rows: [
              { label: "Creature Feature", target: "Black Lagoon", desc: "Both loops, both ramps and the Mosh Pit before the hurry-up dies." },
              { label: "Full Moon Fever", target: "The Loops", desc: "Four loop shots start it; collect four loop hurry-ups." },
              { label: "Ball & Chain", target: "Both Ramps", desc: "Each ramp three times to start, three more to win." },
              { label: "Drac Attack", target: "Drac Standups → Scoop", desc: "Spell D-R-A-C-U-L-A, then hit Dracula 5 times." },
              { label: "Frankenstein", target: "Frank → Center Ramp", desc: "Hit Frank 7 times, then the ramp starts his multiball." },
              { label: "Mummy Mayhem", target: "Jets → Scoop", desc: "60 jet hits light it; score 7.5M in 45 seconds." },
            ],
          },
          keyMultiballs: {
            kicker: "Balls Everywhere",
            title: "Key Multiballs",
            lead: "Three multiballs before the encore.",
            rows: [
              { label: "Frankenstein Multiball", target: "Frank → Center Ramp", desc: "3-ball. Supers at Frank win his keyboard." },
              { label: "Mosh Pit Multiball", target: "Center Lane → Scoop", desc: "Six Mosh Pit shots, then the scoop." },
              { label: "Monster Bash", target: "The Scoop", desc: "Start all six monster modes for a 4-ball multiball." },
            ],
          },
          skills: {
            kicker: "At The Plunge",
            title: "Skill Shots",
            layout: "table",
            lead: "The skill shot lives in the rollover lanes.",
            rows: [{ label: "Skill Shot", target: "D-I-G Lanes", desc: "Land the lit lane for points plus a Monster Bomb." }],
          },
          button: {
            kicker: "No button here",
            title: "Phantom Flip",
            lead: "There’s no action button. Hit the three Phantom Flip targets and the game flips for you from the inlane.",
            rows: [
              { label: "Phantom Flip", target: "Three Targets", desc: "Seven hits light two stackable Phantom Flips." },
              { label: "Monster Bombs", target: "Skill Shot · Mosh Pit", desc: "Each bomb spots a shot toward its monster." },
            ],
          },
          wizard: {
            kicker: "The End Game",
            title: "Wizard Mode",
            name: "Monsters of Rock",
            body: "Complete all six modes to collect every instrument, then shoot the scoop. A 4-ball multiball; starting it pays 5M per instrument plus 25M per full set.",
            chip: "◆ Collect all 6 instruments",
          },
          tableTips: {
            kicker: "House Advice",
            title: "Table Tips",
            proTip: "Start a mode, then a multiball — the mode clock freezes while you finish it.",
            rows: [
              { name: "Timers Stop", body: "Mode timers freeze during any multiball." },
              { name: "Complete, Don’t Just Start", body: "Only a finished mode earns the instrument." },
            ],
          },
        },
        {
          pageTitle: "The Monsters",
          eyebrow: "Win The Instruments",
          proTip: "Completing a mode earns its instrument; just starting all six lights Monster Bash.",
          key: "monsters",
          kicker: "One Mode Each",
          boxes: [
            {
              name: "Frankenstein",
              target: "Frank → Center Ramp",
              detail: "Hit Frank 7 times to raise him, then the center ramp. Six supers at Frank win his keyboard.",
            },
            {
              name: "Dracula",
              target: "Drac Standups → Scoop",
              detail: "Spell D-R-A-C-U-L-A on the standups, then hit Dracula 5 times. Hits while he moves score 2×.",
            },
            { name: "Wolfman", target: "The Loops", detail: "Four loops start Full Moon Fever. Collect all four loop hurry-ups for his drums." },
            {
              name: "The Bride",
              target: "Both Ramps",
              detail: "Each ramp three times to start, three more to win her microphone. The Mosh Pit resets the timer.",
            },
            {
              name: "The Creature",
              target: "Black Lagoon",
              detail: "Hit both loops, both ramps and the Mosh Pit. Each shot raises the hurry-up. Wins his saxophone.",
            },
            { name: "The Mummy", target: "Jets → Scoop", detail: "60 jet hits light it. Score 7.5M in 45 seconds; jets score triple." },
          ],
        },
        {
          pageTitle: "Bonus Toys",
          eyebrow: "Points Between The Monsters",
          proTip: "Each instrument lights every major shot for an Instrument Bonus.",
          key: "bonusToys",
          kicker: "Everything Else",
          boxes: [
            {
              name: "Monster Bombs",
              target: "Skill Shot · Mosh Pit",
              detail: "One per monster — garlic, silver bullet, spear gun and more. Each spots a shot.",
            },
            { name: "Instrument Bonus", target: "All Major Shots", detail: "Win an instrument and every major shot lights for 900K or more." },
            { name: "Scoop Awards", target: "The Scoop", detail: "Random awards: points, light extra ball, start or advance a monster." },
            { name: "Tomb Treasure", target: "Mosh Pit Standup", detail: "Adds +1× bonus multiplier." },
            { name: "Extra Balls", target: "Mosh Pit · Scoop", detail: "Lit by 12 Mosh Pit shots, enough monsters, or a scoop award." },
            { name: "Lyman’s Lament", target: "44th Scoop", detail: "The 44th scoop award in single-ball play. Voiced by Lyman Sheats." },
          ],
        },
        {
          pageTitle: "Multiball Overview",
          eyebrow: "Chicago Gaming · SE",
          proTip: "Start a monster mode first — its timer freezes for the whole multiball.",
          key: "multiball",
          kicker: "Balls Everywhere",
          labels: { start: "How to Start", objective: "Objective", jackpots: "Jackpots", tips: "Scoring Tips" },
          boxes: [
            {
              name: "Frankenstein Multiball",
              target: "Frank → Center Ramp",
              detail: "Hit Frank 7 times to raise him, then shoot the center ramp.",
              objective: "3-ball. Major shots score jackpots.",
              jackpots: "Frank scores the supers; six supers win his keyboard.",
              tip: "Two or three jackpots first light double and triple supers.",
            },
            {
              name: "Mosh Pit Multiball",
              target: "Center Lane → Scoop",
              detail: "Six shots to the Mosh Pit lane, then the scoop.",
              objective: "2-ball; the center lane adds up to two more.",
              jackpots: "Ten shots to Frank for the Super, then his five red standups for a 3× Super.",
              tip: "Use the Mosh Pit lane to add balls early.",
            },
            {
              name: "Monster Bash",
              target: "The Scoop",
              detail: "Start all six monster modes — finished or not.",
              objective: "4-ball. Every monster shot is worth 2M.",
              jackpots: "The center lane pays Bash Jackpots that grow with each monster hit.",
              tip: "A long Monster Bash can be the biggest score in the game.",
            },
          ],
        },
        {
          pageTitle: "Strategy & Tips",
          eyebrow: "Play It Smart",
          proTip: "Sixty jet-bumper hits light Mummy Mayhem at the scoop.",
          key: "strategy",
          kicker: "House Advice",
          boxes: [
            { name: "Timers Stop", detail: "Start a mode, then a multiball — the mode clock freezes while you finish it." },
            { name: "Complete, Don’t Just Start", detail: "Only a finished mode earns the instrument for Monsters of Rock." },
            { name: "Start All Six", detail: "Just starting every mode lights Monster Bash Multiball." },
            { name: "Phantom Flip", detail: "Hit the three targets so the game flips a shot you’d miss." },
            { name: "Bank The Bombs", detail: "Monster Bombs spot shots toward their monster." },
            { name: "Feed The Jets", detail: "Sixty jet hits light Mummy Mayhem at the scoop." },
          ],
        },
        {
          pageTitle: "Now Playing",
          eyebrow: "The Lockedown",
          proTip: "Collect all six instruments to start Monsters of Rock.",
          key: "hold",
          line: "The band’s assembled. Go start the encore.",
        },
      ],
      breathers: [
        {
          type: "Lingo",
          title: "Cradle",
          text: "Holding the ball still against a raised flipper to reset and aim.",
          footer: "Holding the ball still against a raised flipper to reset and aim.",
        },
      ],
    },

  ],

  /* ==========================================================================
     BREATHER POOL — spare House Tips / Lingo / Overheard pages that are not on
     the floor yet. Each machine's own breathers live in its `breathers` list
     (they play after that machine's last page). Synced from the doc's
     "Spare Breathers" section. Edit there, then sync.
     ========================================================================== */
  breatherPool: [
    {
      "type": "House Tip",
      "title": "Drop Catch",
      "text": "The instant the ball lands on a raised flipper, drop it to kill the bounce — then re-cradle.",
      "footer": "The instant the ball lands on a raised flipper, drop it to kill the bounce — then re-cradle."
    },
    {
      "type": "House Tip",
      "title": "Post Pass",
      "text": "Tap the flipper to slide a cradled ball across to the other flipper, so you get the shot you wanted.",
      "footer": "Tap the flipper to slide a cradled ball across to the other flipper, so you get the shot you wanted."
    },
    {
      "type": "Lingo",
      "title": "Dead Bounce",
      "text": "Letting the ball bounce off a still flipper instead of risking a flip.",
      "footer": "Letting the ball bounce off a still flipper instead of risking a flip."
    },
    {
      "type": "Lingo",
      "title": "Multiball",
      "text": "Two or more balls in play at once. Chaos, and a lot of points.",
      "footer": "Two or more balls in play at once. Chaos, and a lot of points."
    },
    {
      "type": "Lingo",
      "title": "Wizard Mode",
      "text": "The hidden end-game mode you unlock after finishing everything.",
      "footer": "The hidden end-game mode you unlock after finishing everything."
    },
    {
      "type": "Lingo",
      "title": "Nudge / Tilt",
      "text": "Bumping the machine to steer the ball — vs. over-bumping and getting punished.",
      "footer": "Bumping the machine to steer the ball — vs. over-bumping and getting punished."
    },
    {
      "type": "Lingo",
      "title": "Slap Save",
      "text": "A two-flipper panic swat at a draining ball. Sometimes it even works.",
      "footer": "A two-flipper panic swat at a draining ball. Sometimes it even works."
    },
    {
      "type": "Overheard",
      "title": "",
      "text": "“I had it. I totally had it. Did you see that?”",
      "footer": "You’re not mad at the machine. You’re mad at yourself."
    },
    {
      "type": "Overheard",
      "title": "",
      "text": "The right ramp on Monster Bash feeds the ball straight down the middle. That’s bullshit.",
      "footer": "You’re not mad at the machine. You’re mad at yourself."
    }
  ],
};
