/* =====================================================================
   THE ONE FILE YOU EDIT TO CHANGE CONTENT
   - SITE: your email and LinkedIn link (used in the footer and contact star)
   - PROJECTS: every project card and project page is built from this list
   - DRAWINGS: every polaroid in the sketchbook is built from this list

   Anything in [square brackets] is a placeholder. Replace it with your
   own text (and delete the brackets).
   ===================================================================== */

const SITE = {
  name: "Laura Lopez Reyna",
  email: "lauralopezreyna@college.harvard.edu",
  linkedin: "https://www.linkedin.com/in/your-profile-here"   // <-- paste your real LinkedIn link here
};

/* ---------------------------------------------------------------------
   PROJECTS  (shown in this order on the home page; "next" buttons follow it)

   Images: put each file in images/projects/<id>/ using the names below.
   Until a file exists, the site shows a grey box that tells you the file
   name it is looking for.
   --------------------------------------------------------------------- */
const PROJECTS = [
  {
    id: "turf-wars-robot",
    file: "turf_wars_robot.sldasm",
    title: "ES51: Competition Robot",
    summary: "A sweeper-assisted scoop and a compact drivetrain, built for the Turf Wars competition.",
    course: "ES51",
    sub: "ES51 | Competition robot",
    cardText: "A sweeper-assisted scoop and a compact drivetrain, built to collect and score game pieces in the Turf Wars competition.",
    cardTools: "SolidWorks, CNC, lathe, 3D printing",
    image: "images/projects/turf-wars-robot/card.png",
    team: "[team size]",
    role: "Mechanical analysis: drivetrain, ramp climbing, scoop arm",
    tools: "SolidWorks, prototyping, 3D printing, laser cutting, machining, assembly",
    story: {
      challenge: "Design and build a robot for the Turf Wars competition that can collect, transport, and score game pieces while staying inside the competition's size and actuator constraints.",
      did: "I worked on the mechanical analysis: the drivetrain, ramp climbing, and scoop arm calculations. The final design used a sweeper-assisted scoop and a compact drivetrain, developed through prototyping and testing.",
      hard: "[What didn't work the first time, and what you changed.]",
      ended: "[How it did at the competition, in a sentence or two.]",
      again: "[One thing you'd do differently.]"
    },
    stats: [
      { label: "Competition Result", value: "[placement or score]" },
      { label: "Robot Weight", value: "[weight]" },
      { label: "Ramp Climb", value: "[angle or result]" }
    ],
    /* The first photo is the big one at the top of the page. */
    photos: [
      { src: "images/projects/turf-wars-robot/photo-1.jpg", label: "[PHOTO: final robot]", caption: "Completed Turf Wars competition robot." },
      { src: "images/projects/turf-wars-robot/photo-2.jpg", label: "[IMAGE: CAD model]", caption: "SolidWorks model of the robot and its mechanical components." },
      { src: "images/projects/turf-wars-robot/photo-3.jpg", label: "[VIDEO: testing & iteration]", caption: "Prototype testing during the robot's development." },
      { src: "images/projects/turf-wars-robot/photo-4.jpg", label: "[YOUR CONCEPT SKETCH]", caption: "Optional: an early sketch shows how you think before the CAD.", wide: true }
    ]
  },

  {
    id: "water-dispenser",
    file: "water_dispenser.proj",
    title: "Water Dispenser Sensor",
    summary: "A sensor-based dispenser that fills any cup with the right amount of liquid, whatever its size.",
    course: "ES155",
    sub: "ES155 | In progress",
    cardText: "A sensor-based water dispenser that pours the right amount of liquid for any cup, no matter its size.",
    cardTools: "[tools and skills used]",
    image: "images/projects/water-dispenser/card.png",
    team: "[team size]",
    role: "[your role]",
    tools: "[tools and skills used]",
    story: {
      challenge: "Dispense an accurate amount of liquid for any cup, without the user having to choose a size.",
      did: "[What you designed, built, or programmed.]",
      hard: "[What didn't work the first time, and what you changed.]",
      ended: "[How it turned out, and what's next.]",
      again: "[One thing you'd do differently.]"
    },
    stats: [
      { label: "Dispense Accuracy", value: "[measured accuracy]" },
      { label: "Cup Sizes Tested", value: "[number]" },
      { label: "Dispense Time", value: "[time]" }
    ],
    photos: [
      { src: "images/projects/water-dispenser/photo-1.jpg", label: "[PHOTO: the dispenser]", caption: "The completed dispenser prototype." },
      { src: "images/projects/water-dispenser/photo-2.jpg", label: "[IMAGE: CAD or circuit diagram]", caption: "The design or circuit behind the dispenser." },
      { src: "images/projects/water-dispenser/photo-3.jpg", label: "[VIDEO: it dispensing]", caption: "Testing with different cup sizes." },
      { src: "images/projects/water-dispenser/photo-4.jpg", label: "[YOUR CONCEPT SKETCH]", caption: "Optional: an early sketch shows how you think before the CAD.", wide: true }
    ]
  },

  {
    id: "leslie-speaker",
    file: "leslie_speaker.stl",
    title: "Motorized Leslie Speaker",
    summary: "A gear-driven rotating drum for a motorized Leslie speaker.",
    course: "GenEd-1080",
    sub: "GenEd-1080 | Motorized Leslie speaker",
    cardText: "A 4:1 gear system to bring a 10 RPM motor toward a 40 RPM rotating drum, plus a lot of iterating on wobble and alignment.",
    cardTools: "SolidWorks, 3D printing, laser cutting, gear design",
    image: "images/projects/leslie-speaker/card.png",
    team: "[team size]",
    role: "[your role]",
    tools: "SolidWorks, 3D printing, laser cutting, gear design",
    story: {
      challenge: "Get a rotating speaker drum to spin at about 40 RPM, using a motor that turns at 10 RPM.",
      did: "I designed a 4:1 gear system to bring the motor's 10 RPM up toward the 40 RPM the drum needed.",
      hard: "Fixing wobble and alignment in the rotating assembly took several rounds of iteration.",
      ended: "[How close the drum got to 40 RPM, and how it sounded.]",
      again: "[One thing you'd do differently.]"
    },
    stats: [
      { label: "Gear Ratio", value: "4:1" },
      { label: "Motor Speed", value: "10 RPM" },
      { label: "Target Drum Speed", value: "40 RPM" }
    ],
    photos: [
      { src: "images/projects/leslie-speaker/photo-1.jpg", label: "[PHOTO: final prototype]", caption: "The final prototype." },
      { src: "images/projects/leslie-speaker/photo-2.jpg", label: "[IMAGE: CAD model]", caption: "CAD of the gear system and rotating drum." },
      { src: "images/projects/leslie-speaker/photo-3.jpg", label: "[VIDEO: it spinning]", caption: "The drum spinning." },
      { src: "images/projects/leslie-speaker/photo-4.jpg", label: "[YOUR CONCEPT SKETCH]", caption: "Optional: an early sketch shows how you think before the CAD.", wide: true }
    ]
  },

  {
    id: "portafilter-teardown",
    file: "portafilter_teardown.pdf",
    title: "Portafilter Teardown",
    summary: "A reverse-engineering teardown of a Nuova Simonelli espresso portafilter.",
    course: "ES55",
    sub: "ES55 | Reverse engineering",
    cardText: "I took a Nuova Simonelli portafilter apart, built its bill of materials, and found where the cost really hides: steel machining.",
    cardTools: "teardown, BOM, cost estimation, DFM",
    image: "images/projects/portafilter-teardown/card.png",
    team: "[team size]",
    role: "[your role]",
    tools: "teardown, BOM, cost estimation, DFM",
    story: {
      challenge: "Take apart a Nuova Simonelli portafilter, document every part, and work out what drives its cost.",
      did: "I disassembled it, built its bill of materials, and estimated what each part costs. Steel machining turned out to be the biggest cost.",
      hard: "[What didn't work the first time, and what you changed.]",
      ended: "[What you'd change to lower the cost.]",
      again: "[One thing you'd do differently.]"
    },
    stats: [
      { label: "Largest Cost", value: "Steel machining" },
      { label: "Parts in the BOM", value: "[number]" },
      { label: "Estimated Cost", value: "[amount]" }
    ],
    photos: [
      { src: "images/projects/portafilter-teardown/photo-1.jpg", label: "[PHOTO: the portafilter]", caption: "The Nuova Simonelli portafilter." },
      { src: "images/projects/portafilter-teardown/photo-2.jpg", label: "[IMAGE: BOM and cost chart]", caption: "The bill of materials and where the cost goes." },
      { src: "images/projects/portafilter-teardown/photo-3.jpg", label: "[IMAGE: the disassembled parts]", caption: "Every part laid out after the teardown." },
      { src: "images/projects/portafilter-teardown/photo-4.jpg", label: "[YOUR CONCEPT SKETCH]", caption: "Optional: a sketch of a lower-cost design.", wide: true }
    ]
  },

  {
    id: "print-tray",
    file: "print_tray.proj",
    title: "Print Collection Tray",
    summary: "A simple tray for a Formlabs nylon printer that collects and transports finished prints.",
    course: "[course or personal project]",
    sub: "Finished | CAD design",
    cardText: "A simple tray, designed in CAD, that collects and transports prints from a Formlabs nylon printer.",
    cardTools: "[tools and skills used]",
    image: "images/projects/print-tray/card.png",
    team: "[team size]",
    role: "[your role]",
    tools: "[tools and skills used]",
    story: {
      challenge: "Collect finished prints from a Formlabs nylon printer and transport them easily.",
      did: "[What you designed and how you modeled it.]",
      hard: "[What didn't work the first time, and what you changed.]",
      ended: "[How it turned out, and how it's used.]",
      again: "[One thing you'd do differently.]"
    },
    stats: [
      { label: "Tray Capacity", value: "[prints or size]" },
      { label: "Material", value: "[material]" },
      { label: "Status", value: "Finished" }
    ],
    photos: [
      { src: "images/projects/print-tray/photo-1.jpg", label: "[PHOTO: the tray]", caption: "The finished tray." },
      { src: "images/projects/print-tray/photo-2.jpg", label: "[IMAGE: CAD model]", caption: "CAD model of the tray." },
      { src: "images/projects/print-tray/photo-3.jpg", label: "[VIDEO: tray in use]", caption: "The tray collecting and carrying prints." },
      { src: "images/projects/print-tray/photo-4.jpg", label: "[YOUR CONCEPT SKETCH]", caption: "Optional: an early sketch shows how you think before the CAD.", wide: true }
    ]
  }

  /* -------------------------------------------------------------------
     SAVED FOR LATER: the lunar rover and sundial. To add one back, copy
     its block out of this comment and paste it just above the closing
     bracket of the list, with a comma after the block above it. Then add
     its images to images/projects/.

  ,{
    id: "lunar-rover",
    file: "lunar_rover.proj",
    title: "Lunar Rover Prototype",
    summary: "A prototype rover, an early hands-on step toward lunar robotics.",
    course: "ES55",
    sub: "ES55 | In progress",
    cardText: "A prototype lunar rover, an early hands-on step toward lunar robotics.",
    cardTools: "[tools and skills used]",
    image: "images/projects/lunar-rover/card.png",
    team: "[team size]",
    role: "[your role]",
    tools: "[tools and skills used]",
    story: {
      challenge: "[What the rover needs to do, and the constraints you're designing around.]",
      did: "[What you designed, built, or programmed.]",
      hard: "[What didn't work the first time, and what you changed.]",
      ended: "[How it turned out, and what's next.]",
      again: "[One thing you'd do differently.]"
    },
    stats: [
      { label: "Terrain Tested", value: "[surface or slope]" },
      { label: "Rover Mass", value: "[mass]" },
      { label: "Drive Speed", value: "[speed]" }
    ],
    photos: [
      { src: "images/projects/lunar-rover/photo-1.jpg", label: "[PHOTO: the rover]", caption: "The rover prototype." },
      { src: "images/projects/lunar-rover/photo-2.jpg", label: "[IMAGE: CAD model]", caption: "CAD model of the rover and its mechanical components." },
      { src: "images/projects/lunar-rover/photo-3.jpg", label: "[VIDEO: it driving]", caption: "Driving tests during development." },
      { src: "images/projects/lunar-rover/photo-4.jpg", label: "[YOUR CONCEPT SKETCH]", caption: "Optional: an early sketch shows how you think before the CAD.", wide: true }
    ]
  },
  {
    id: "sundial",
    file: "sundial.proj",
    title: "Sundial",
    summary: "A sundial designed in CAD for ES55.",
    course: "ES55",
    sub: "ES55 | CAD | In progress",
    cardText: "A sundial I'm designing in CAD.",
    cardTools: "[tools and skills used]",
    image: "images/projects/sundial/card.png",
    team: "[team size]",
    role: "[your role]",
    tools: "[tools and skills used]",
    story: {
      challenge: "[What the sundial needs to do, and the constraints you're designing around.]",
      did: "[What you designed, built, or programmed.]",
      hard: "[What didn't work the first time, and what you changed.]",
      ended: "[How it turned out, and what's next.]",
      again: "[One thing you'd do differently.]"
    },
    stats: [
      { label: "Designed For", value: "[latitude or location]" },
      { label: "Material", value: "[material]" },
      { label: "Status", value: "In progress" }
    ],
    photos: [
      { src: "images/projects/sundial/photo-1.jpg", label: "[PHOTO: the sundial]", caption: "The sundial, or a render of it." },
      { src: "images/projects/sundial/photo-2.jpg", label: "[IMAGE: CAD model]", caption: "CAD model of the sundial." },
      { src: "images/projects/sundial/photo-3.jpg", label: "[VIDEO: CAD walkthrough]", caption: "A turntable or walkthrough of the model." },
      { src: "images/projects/sundial/photo-4.jpg", label: "[YOUR CONCEPT SKETCH]", caption: "Optional: an early sketch shows how you think before the CAD.", wide: true }
    ]
  }
  ------------------------------------------------------------------- */
];

/* ---------------------------------------------------------------------
   DRAWINGS  (the polaroids in the sketchbook)
   - title:   the handwritten title under the picture
   - medium:  what it was made with
   - meta:    year and size, or anything else
   - src:     the image file (put it in images/drawings/)
   - project: optional. Put a project id (like "turf-wars-robot") to add a
              "see the project" link to the enlarged view.
   --------------------------------------------------------------------- */
const DRAWINGS = [
  { title: "Light of Love",   medium: "[digital: procreate]",    meta: "[2026]", src: "images/light_of_love.png", project: "" },
  { title: "BDAY!!!",   medium: "[color pencils & markers]",   meta: "[2024]", src: "images/BDAY!!!.png", project: "" },
  { title: "Walter White", medium: "[pencil]",   meta: "[2025]", src: "images/walter_white.png", project: "" },
  { title: "Transformation",  medium: "[ink]",            meta: "[2024]", src: "images/transformation.jpg", project: "" },
  { title: "Headshot",  medium: "[ink & marker]",            meta: "[Year \u00b7 size]", src: "images/headshot.png", project: "" },
  { title: "Take Flight",  medium: "[pencil]",            meta: "[2025]", src: "images/take_flight.JPG", project: "" },
  { title: "Pocket Change",  medium: "[color pencils & pencil]",            meta: "[2023]", src: "images/pocket_change.png", project: "" },
  { title: "Geared Dragon",  medium: "[pencil]",            meta: "[2022]", src: "images/geared_dragon.png", project: "" }
];
