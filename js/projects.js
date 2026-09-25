// Single source of truth for the portfolio.
// Each id must be unique because internal case studies use project.html?id=...

const projects = [
  {
    id: "decay-repair",
    title: "repair / decay",
    category: "interactive music experience",
    year: "2026",
    type: "both",
    image: "assets/images/decay-repair-hero.jpg",
    hero: "assets/images/decay-repair-hero.jpg",
    description: "Repair / Decay is an interactive music experience in development that explores breakdown, repair, listening and the ongoing work of looking after a creative system.",
    longDescription: `Repair / Decay is a group project currently in development that combines music, visual communication and interactive web design into one evolving experience. An EP is presented through a website where parts of the music and interface can deliberately deteriorate over time. Changes to EQ, tempo, timing and tape-like effects create moments of instability, while the audience is invited to notice what has gone wrong and take part in repairing it.

The project is led by me and developed by a team of four. I oversee the project as a whole while also working across each discipline. One team member is responsible for the music, one for the visual elements, and one for the coding and interaction. My role is to connect these areas, guide the overall creative direction, make design decisions, and contribute wherever the project needs support.

Upkeep is central to the project. Rather than treating maintenance as something that happens behind the scenes, Repair / Decay makes upkeep part of the experience. The music can deteriorate and needs attention; the audience becomes responsible for noticing, responding and repairing it. This turns listening into an act of care and makes the usually invisible work of maintaining a creative system visible. The project is still evolving, with the music, visuals and interactive systems continuing to be tested and refined as we work towards the final experience.`,

    tags: ["Music", "Interaction", "Web Design", "Sound", "Upkeep", "Collaborative Practice"],
    website: "https://jackasonn.github.io/repair-decay/",
    gallery: [
      "assets/images/decay-repair-01.jpg",
      "assets/images/decay-repair-02.jpg",
      "assets/images/decay-repair-03.jpg"
    ]
  },
  {
    id: "interactive-song-archive",
    title: "interactive song archive",
    category: "interactive music archive",
    year: "2026",
    type: "both",
    external: true,
    url: "https://jackasonn.github.io/interactive-song-archive/",
    image: "assets/images/interactive-song-archive.jpg",
    description: "An interactive archive for exploring songs through a playful digital interface."
  },
  {
    id: "come-what-may-tomorrow",
    title: "come what may tomorrow",
    category: "song · songwriting & production",
    year: "2026",
    type: "music",
    image: "assets/images/come-what-may-tomorrow-hero.jpg",
    hero: "assets/images/come-what-may-tomorrow-hero.jpg",
    description: "An original song exploring trust, uncertainty and God's presence in what comes next.",
    longDescription: "Come What May Tomorrow is an original worship-oriented song combining songwriting, production, recording and mixing.",
    tags: ["Songwriting", "Production", "Mixing"],
    audio: "assets/music/come-what-may-tomorrow.mp3",
    appleMusic: "https://music.apple.com/au/artist/jackson-moore/6800161995",
    spotify: "https://open.spotify.com/artist/7njkLldCadYfsRvvedCBV6",
    gallery: [
      "assets/images/come-what-may-01.jpg",
      "assets/images/come-what-may-02.jpg"
    ]
  },
  {
    id: "smash-camp",
    title: "smash camp",
    category: "visual communication",
    year: "2026",
    type: "visual",
    image: "assets/images/smash-camp.jpg",
    hero: "assets/images/smash-camp-hero.jpg",
    description: "A visual communication project bringing together the graphic elements created for Smash Camp.",
    longDescription: "This project collects the graphic design and visual communication work created for Smash Camp, presented as one cohesive project.",
    tags: ["Graphic Design", "Visual Communication", "Campaign"],
    gallery: [
      "assets/images/smash-camp-01.jpg",
      "assets/images/smash-camp-02.jpg",
      "assets/images/smash-camp-03.jpg",
      "assets/images/smash-camp-04.jpg",
      "assets/images/smash-camp-05.jpg",
      "assets/images/smash-camp-06.jpg",
      "assets/images/smash-camp-07.jpg",
      "assets/images/smash-camp-08.png",
      "assets/images/smash-camp-09.png"
    ]
  },
  {
    id: "lost-at-sea",
    title: "lost at sea",
    category: "album artwork",
    year: "2025",
    type: "visual",
    image: "assets/images/lost-at-sea.jpg",
    hero: "assets/images/lost-at-sea-hero.jpg",
    description: "Album artwork created for a friend's music release.",
    longDescription: "Lost at Sea is an album-art project focused on creating a visual identity that supports the mood and world of the music.",
    tags: ["Album Art", "Graphic Design", "Art Direction"],
    gallery: [
      "assets/images/lost-at-sea-01.jpg",
      "assets/images/lost-at-sea-02.jpg",
      "assets/images/lost-at-sea-03.jpg"
    ]
  }
];
