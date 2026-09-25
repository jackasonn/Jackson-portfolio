// Single source of truth for the portfolio.
// Each id must be unique because internal case studies use project.html?id=...

const projects = [
  {
    id: "decay-repair",
    title: "repair / decay",
    category: "interactive music experience",
    year: "2026",
    type: "both",
    image: "assets/images/decay-repair.jpg",
    hero: "assets/images/decay-repair-hero.jpg",
    description: "An interactive music experience where sound and interface gradually decay, inviting the listener to actively repair the music.",
    longDescription: "Repair / Decay explores what happens when a finished piece of music is allowed to become unstable. Tracks progressively break down through changes to EQ, tempo, timing and tape-like effects, turning repair into part of the listening experience.",
    tags: ["Music", "Interaction", "Web Design", "Sound"],
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
    image: "assets/images/come-what-may-tomorrow.jpg",
    hero: "assets/images/come-what-may-tomorrow.jpg",
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
      "assets/images/smash-camp-04.jpg"
    ]
  },
  {
    id: "lost-at-sea",
    title: "lost at sea",
    category: "album artwork",
    year: "2026",
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
