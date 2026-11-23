window.PORTFOLIO_CONTENT = {
  projects: [
    {
      id: "safety-kiosk", category: "project", categoryLabel: "ACADEMIC EMBEDDED SYSTEMS",
      title: "COVID-era safety kiosk", type: "RASPBERRY PI 3 / SYSTEM PROTOTYPE",
      summary: "A Raspberry Pi 3-based academic prototype exploring an embedded kiosk concept for a safety-focused use case.",
      outcome: "B.Tech ECE project · system integration exploration",
      context: "Academic project · concept and prototype work",
      challenge: "Explore how an embedded platform could bring a safety-oriented kiosk interaction into a single system.",
      approach: "Used Raspberry Pi 3 as the central computing platform and worked through the relationship between inputs, processing logic and the user-facing flow.",
      result: "A student prototype demonstrating system-level thinking. It was not a certified or deployed health product.",
      tags: ["Raspberry Pi 3", "Embedded systems", "System integration"]
    },
    {
      id: "motion-robot", category: "project", categoryLabel: "ACADEMIC ROBOTICS",
      title: "Motion-controlled pick-and-place robot", type: "8051 / BLYNK",
      summary: "An academic robotics project combining an 8051-based control system with a motion-controlled pick-and-place concept.",
      outcome: "B.Tech ECE project · hardware and control integration",
      context: "Academic project · prototype scope",
      challenge: "Coordinate motion input, embedded control and a pick-and-place task in a compact robotics proof of concept.",
      approach: "Worked with an 8051 controller and Blynk as part of the system, connecting the motion-control concept to robot actuation and operating flow.",
      result: "A student robotics prototype that built practical experience in control logic and hardware/software integration.",
      tags: ["8051", "Blynk", "Robotics", "Control systems"]
    },
    {
      id: "health-monitor", category: "project", categoryLabel: "ACADEMIC EMBEDDED SYSTEMS",
      title: "Patient health-monitoring concept", type: "ARDUINO / NODEMCU",
      summary: "An academic health-monitoring prototype exploring connected embedded systems for an Alzheimer's patient-support context.",
      outcome: "B.Tech ECE project · not clinically validated",
      context: "Academic project · concept prototype only",
      challenge: "Explore how embedded electronics and connectivity could support visibility into a patient-monitoring workflow.",
      approach: "Used Arduino and NodeMCU as the core platforms and examined how sensing, controller logic and connectivity could work together.",
      result: "A student proof of concept only. It was not clinically validated and should not be used for diagnosis or care decisions.",
      tags: ["Arduino", "NodeMCU", "Embedded monitoring", "Connectivity"]
    },
    {
      id: "smart-ambulance", category: "project", categoryLabel: "ACADEMIC EMBEDDED SYSTEMS",
      title: "Smart ambulance system concept", type: "ARDUINO / TIVA",
      summary: "An academic embedded-systems project exploring a smart-ambulance concept with Arduino and TIVA platforms.",
      outcome: "B.Tech ECE project · system concept and prototype work",
      context: "Academic project · prototype scope",
      challenge: "Explore an embedded-system concept for ambulance operations and the technology interfaces it may involve.",
      approach: "Worked with Arduino and TIVA platforms to investigate an integrated system concept and its embedded control requirements.",
      result: "A student prototype exploration; no field deployment or measured emergency-response outcome is claimed.",
      tags: ["Arduino", "TIVA", "Embedded systems", "System design"]
    },
    {
      id: "typeflow", category: "project", categoryLabel: "INDEPENDENT SOFTWARE PROJECT",
      title: "TypeFlow AI", type: "WINDOWS TYPING ASSISTANT",
      summary: "A local-first Windows typing assistant exploring typo correction through keyboard-distance analysis, dictionary matching and contextual suggestions.",
      outcome: "Working prototype · spelling-focused milestone",
      context: "Independent build · local source code; no public repository link verified",
      challenge: "Make spelling assistance useful during writing without turning a lightweight correction into a slow, full-sentence rewrite.",
      approach: "Combines keyboard-neighbor signals with a local word dictionary and contextual checks. The current project documentation describes a spelling-focused milestone.",
      result: "A working local prototype with spelling correction and contextual suggestions. It is an independent project, not a commercially deployed product.",
      tags: ["Python", "Keyboard distance", "Local dictionary", "Contextual suggestions"]
    },
    {
      id: "imposter-game", category: "project", categoryLabel: "INDEPENDENT SOFTWARE PROJECT",
      title: "Telegram Imposter", type: "GROUP WORD GAME BOT",
      summary: "A Telegram group game with private role cards, timed clue rounds, host-controlled voting and scoreboard support.",
      outcome: "Public source repository · Python Telegram bot",
      context: "Independent project · public repository",
      challenge: "Coordinate private role information and shared game state across a group conversation while keeping each round clear for players.",
      approach: "Built flows for lobbies, timed clue rounds, voting, player elimination, private imposter guesses and score lookup.",
      result: "The public repository includes the bot and setup instructions. Hosting requires a separate bot token and persistent service; tokens are not included in the portfolio.",
      tags: ["Python", "Telegram Bot API", "Game flow"],
      link: "https://github.com/amarnadhp1998-lgtm/IMPOSTERGAME",
      linkLabel: "View source"
    },
    {
      id: "gold-intelligence", category: "project", categoryLabel: "INDEPENDENT PRODUCT CONCEPT",
      title: "Gold Intelligence", type: "PHASE 1 INTERFACE SLICE",
      summary: "A Kochi and Kerala gold-rate tracker concept with a jewellery calculator and forecasting interface.",
      outcome: "Early interface slice · live data and forecasting not connected",
      context: "Independent product concept · public repository",
      challenge: "Explore a mobile-first way to bring rate context, price estimation and related tools into one interface.",
      approach: "Designed a responsive interface with rate, calculator, jeweller, forecast and alert views. The current slice identifies unavailable live data and does not show estimated market rates.",
      result: "An early product interface for further development, not a live pricing or forecasting service.",
      tags: ["Product interface", "Responsive UI", "Concept prototype"],
      link: "https://github.com/amarnadhp1998-lgtm/gold-intelligence",
      linkLabel: "View source"
    },
    {
      id: "tumme", category: "project", categoryLabel: "INDEPENDENT PRODUCT BUILD",
      title: "TUM.me", type: "FLUTTER PERSONAL FOOD SYSTEM",
      summary: "A Flutter product prototype for food, hydration, kitchen inventory and grocery routines, with a browser demo on GitHub Pages.",
      outcome: "Public demo · some server-dependent features intentionally disabled",
      context: "Independent product build · public source and demo",
      challenge: "Bring meal logging, hydration, kitchen inventory and grocery planning into a single personal workflow.",
      approach: "Developed a Flutter app with authentication, meal logging, history, hydration, inventory, grocery lists and local demo summaries.",
      result: "The Pages demo documents supported features and disables operations that require a paid backend. It is a prototype/demo, not a commercial deployment.",
      tags: ["Flutter", "Product design", "Firebase demo"],
      link: "https://github.com/amarnadhp1998-lgtm/TUMme-demo",
      linkLabel: "Source repository",
      liveLink: "https://amarnadhp1998-lgtm.github.io/TUMme-demo/",
      liveLabel: "Open demo"
    },
    {
      id: "fixture-readiness", category: "professional", categoryLabel: "PROFESSIONAL EXPERIENCE",
      title: "Equipment bring-up & qualification", type: "MANUFACTURING ENGINEERING",
      summary: "Driving equipment readiness through bring-up, calibration and qualification across production build phases.",
      outcome: "Bring-up · calibration · qualification · readiness",
      context: "Professional role · details generalized to protect employer and customer information",
      challenge: "Coordinate technical readiness work while build phases, equipment requirements and cross-functional deliverables progress.",
      approach: "Managed equipment bring-up, calibration and qualification; coordinated engineering inputs, issue resolution and knowledge sharing with partner teams.",
      result: "Built hands-on ownership of equipment integration and manufacturing readiness from initial setup through qualification. Project-specific metrics and customer or machine details are intentionally omitted.",
      tags: ["Equipment integration", "Qualification", "NPI"]
    },
    {
      id: "design-dfm", category: "professional", categoryLabel: "PROFESSIONAL EXPERIENCE",
      title: "Electronics design & DFM support", type: "PRODUCT ENGINEERING",
      summary: "Connecting model reviews and design feedback with the documentation and manufacturing context needed by engineering teams.",
      outcome: "2D/3D models · DFM · BOM/SOP/schematic review",
      context: "Professional role · selected responsibilities, generalized",
      challenge: "Build a clear understanding of evolving product versions and the manufacturing feedback associated with engineering changes.",
      approach: "Reviewed 2D and 3D models, DFM feedback, BOMs, SOPs and EEE schematics; coordinated technical clarifications with customers and vendors.",
      result: "Developed a product-engineering foundation in design review, manufacturing documentation and cross-functional technical communication.",
      tags: ["Design review", "DFM", "Engineering documentation"]
    }
  ]
};
