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
  linkedin: "www.linkedin.com/in/lauralopezreyna"   
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
    image: "images/robot.jpg",
    team: "4",
    role: "CAD design, manufacturing & assembly, Mechanical analysis (drivetrain, ramp climbing, scoop arm)",
    tools: "SolidWorks, 3D printing, laser cutting, machining, assembly",
    story: {
      challenge: "Build a robot for Turf Wars that could pick up game pieces, carry them up ramps, and drop them in scoring zones. It had to fit inside an 11-inch cube at the start and use no more than six actuators.",
      did: "I calculated how much torque the drivetrain needed to climb the 15° and 30° ramps. I also calculated how much torque the scoop needed to lift the game pieces and checked how much the arm would bend under load.",
      hard: "Even after we made the scoop’s front edge steeper, it still had trouble picking up small pieces and heavy hockey pucks. We added a sweeper to push pieces into the scoop and made the scoop longer to guide them out during drop off.",
      ended: "The robot climbed both ramps in testing. During the competition, a gear shifted out of alignment and the right wheels lost power. We also had trouble controlling the scoop in both directions, so we couldn’t complete a scoring cycle.",
      again: "I’d run full 4 minute practice matches earlier with the same electronics we planned to compete with. That would give us time to catch problems that only showed up after repeated climbs, pickups, and drop offs."
    },
    stats: [
      { label: "Competition Result", value: "Unable to complete a scoring cycle" },
      { label: "Robot Weight", value: "6.63 lb" },
      { label: "Ramp Climb", value: "Climbed 15° and 30° ramps" }
    ],
    /* The first photo is the big one at the top of the page. */
    photos: [
      { src: "images/robot.png", label: "", caption: "Completed Turf Wars competition robot." },
      { src: "images/robotcad.png", label: "", caption: "SolidWorks model of the robot and its mechanical components." },
      { src: "images/projects/turf-wars-robot/photo-3.jpg", label: "", caption: "Prototype testing during the robot's development." },
      /*{ src: "images/projects/turf-wars-robot/photo-4.jpg", label: "", caption: "Optional: an early sketch shows how you think before the CAD.", wide: true }*/
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
    cardTools: "Solidworks, laser cutting, 3D printing",
    image: "images/water_dispenser.png",
    team: "3",
    role: "Integration Lead",
    tools: "Solidworks, laser cutting, 3D printing",
    story: {
      challenge: "Build an automatic water filling station that detects a container’s height and fills it just below the rim, without the user having to select a size.",
      did: "As Integration Lead, I’m responsible for assembling the sensor, pump, and frame and running experiments to check how the components work together.",
      hard: "Measuring the water level has been the biggest challenge so far. Our sensor consistently detects the bottle rim, but readings inside the bottle are too scattered to reliably track the water surface.",
      ended: "IN PROGRESS",
      again: "IN PROGRESS"
    },
    stats: [
      { label: "Dispense Accuracy", value: "Testing pending" },
      { label: "Cup Sizes Tested", value: "Fill testing pending" },
      { label: "Dispense Time", value: "Testing pending" }
    ],
    photos: [
      { src: "images/projects/water-dispenser/photo-1.jpg", label: "", caption: "The completed dispenser prototype." },
      { src: "images/projects/water-dispenser/photo-2.jpg", label: "", caption: "The design behind the dispenser." },
      /*{ src: "images/projects/water-dispenser/photo-3.jpg", label: "", caption: "Testing with different cup sizes." },
      { src: "images/projects/water-dispenser/photo-4.jpg", label: "", caption: "Prototype phase", wide: true }*/
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
    image: "images/speaker.jpg",
    team: "2",
    role: "Mechanical Engineering lead",
    tools: "SolidWorks, 3D printing, laser cutting",
    story: {
      challenge: "We had a 10 RPM motor and wanted to use it to build a Leslie speaker. Our goal was to get the drum to spin at around 40 RPM so we could hear the doppler effect as it turned.",
      did: "I figured out the gear sizes we needed to get a 4x speed increase. I designed the 48 tooth and 12 tooth gears in SolidWorks, along with the drum and housing. We 3D printed the gears and drum and laser cut the housing.",
      hard: "The drum kept tipping as it spun. It would rub against the housing, and the gears would slip out of alignment. We ran the shaft all the way through the base and added shaft collars, which helped it spin a little longer.",
      ended: "The speaker played audio, and the gears sped up the drum when it stayed upright. It only made it about six turns before getting stuck, so we didn’t get the sound effect we were going for.",
      again: "I’d add a bearing at the top of the shaft and make the drum lighter. Once it could spin without getting stuck, I’d try higher speeds to see when I could hear the effect."
    },
    stats: [
      { label: "Gear Ratio", value: "4:1" },
      { label: "Motor Speed", value: "10 RPM" },
      { label: "Target Drum Speed", value: "40 RPM" }
    ],
    photos: [
      { src: "images/projects/leslie-speaker/photo-1.jpg", label: "", caption: "The final prototype." },
      { src: "images/projects/leslie-speaker/photo-2.jpg", label: "", caption: "CAD of the gear system and rotating drum." },
      { src: "images/projects/leslie-speaker/photo-3.jpg", label: "", caption: "The drum spinning." },
      /*{ src: "images/projects/leslie-speaker/photo-4.jpg", label: "", caption: "Optional: an early sketch shows how you think before the CAD.", wide: true }*/
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
    image: "images/portafilter.jpg",
    team: "2",
    role: "Teardown and Cost Estimation",
    tools: "Product teardown, bill of materials (BOM), cost estimation, design for manufacturing (DFM)",
    story: {
      challenge: "Take apart a Nuova Simonelli portafilter, figure out how its parts were made, and estimate what it costs to manufacture.",
      did: "I took the portafilter apart, documented its eight components, and helped estimate material and labor costs for a batch of 1,000 units.",
      hard: "It was easier to count the parts than to tell how they were made. The handle, for example, looked like a simple plastic part from the outside, but taking it apart revealed a metal counterweight. We had to make some assumptions about the materials and manufacturing steps to put together a cost estimate.",
      ended: "We estimated a cost of $16.65 per portafilter, with $10.35 coming from steel machining. To bring that down, we proposed casting the head close to its final shape and machining only the surfaces that need a precise fit or seal.",
      again: "I’d get quotes for both the machined and cast versions of the head to see whether casting would actually save money at 1,000 units."
    },
    stats: [
      { label: "Largest Cost", value: "Steel machining (62% of estimated cost)" },
      { label: "Parts in the BOM", value: "8" },
      { label: "Estimated Cost per Unit", value: "$16.65 at 1,000 units" }
    ],
    photos: [
      { src: "images/projects/portafilter-teardown/photo-1.jpg", label: "[PHOTO: the portafilter]", caption: "The Nuova Simonelli portafilter." },
      { src: "images/projects/portafilter-teardown/photo-2.jpg", label: "[IMAGE: BOM and cost chart]", caption: "The bill of materials and where the cost goes." },
      { src: "images/projects/portafilter-teardown/photo-3.jpg", label: "[IMAGE: the disassembled parts]", caption: "Every part laid out after the teardown." },
      /*{ src: "images/projects/portafilter-teardown/photo-4.jpg", label: "[YOUR CONCEPT SKETCH]", caption: "Optional: a sketch of a lower-cost design.", wide: true }*/
    ]
  },

  {
    id: "print-tray",
    file: "print_tray.proj",
    title: "Print Collection Tray",
    summary: "A simple tray for a Formlabs nylon printer that collects and transports finished prints.",
    course: "Personal Project",
    sub: "Finished | CAD design",
    cardText: "A simple tray, designed in CAD, that collects and transports prints from a Formlabs FUSE printer.",
    cardTools: "solidworks",
    image: "images/print_tray.png",
    team: "Individual",
    role: "Designer",
    tools: "solidworks, PRUSA 3D printer",
    story: {
      challenge: "Design a stackable tray to carry finished nylon prints from the Formlabs Fuse to the post processing area. Small parts needed to be easy to pick up out of the tray.",
      did: "I designed the tray in SolidWorks and printed it in PLA on a Prusa. I sloped the inside walls so it was easier to get my fingers around small parts and rounded the edges for easier handling.",
      hard: "The stacking tabs fit too tightly in the first print, so the trays were hard to pull apart. I made the slots slightly larger to give the tabs more clearance.",
      ended: "The finished tray carries nylon prints between workstations, and the revised slots let the trays stack and come apart more easily.",
      again: "I’d try a rail that lets one tray slide onto another from the side. It would take up some usable space, but I’d like to see if it makes the trays easier to separate."
    },
    stats: [
      { label: "Tray Capacity", value: "150 x 150 x 50 mm" },
      { label: "Material", value: "PLA" },
      { label: "Status", value: "Finished" }
    ],
    photos: [
      { src: "images/projects/print-tray/photo-1.jpg", label: "[PHOTO: the tray]", caption: "CAD model of the tray." },
      /*{ src: "images/projects/print-tray/photo-2.jpg", label: "[IMAGE: CAD model]", caption: "CAD model of the tray." },
      { src: "images/projects/print-tray/photo-3.jpg", label: "[VIDEO: tray in use]", caption: "The tray collecting and carrying prints." },*/
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
