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
    longDescription: `Repair / Decay is a group project currently in development that combines music, visual communication and interactive web design into one evolving experience. The project starts with an EP presented through a website, then deliberately allows parts of the music and interface to deteriorate over time. Changes to EQ, tempo, timing and tape-like effects can make the tracks feel unstable, while the audience is invited to step in and repair what has gone wrong. Rather than treating a finished song as something fixed and untouchable, the project asks what happens when breakdown becomes part of the work itself. Repair becomes an active part of listening, and the website becomes a place where the audience has to participate in keeping the experience working.

The project is currently in development and is being led by me as a team of four. I oversee the project as a whole while also contributing across the different disciplines. One team member is focused on the music, developing the songs and sound that make up the experience. Another is focused on the visual elements, shaping the graphic language and visual presentation. A third is focused on the coding and interaction, building the systems that allow the website and music to respond to the audience. My role sits across all of these areas: directing the overall project, connecting the disciplines, making creative and design decisions, and working wherever the project needs additional support.

A major idea running through Repair / Decay is upkeep. Upkeep is usually understood as maintenance: the repeated work required to keep something functioning, cared for and usable. This project turns that idea into the experience itself. The music is not simply played to the audience and left alone; it can deteriorate, and someone has to notice, respond and repair it. In that sense, listening becomes an act of care. The project explores how maintenance can be creative rather than merely practical, and how looking after a system can become part of the meaning of the work.

The project also connects upkeep to the wider creative process. Songs, websites, interfaces and visual systems all need attention over time. Things need to be adjusted, repaired, reworked and sometimes rebuilt. Repair / Decay makes that normally hidden labour visible to the audience by allowing the work to break and asking them to participate in keeping it going. It is still being developed, so the final interaction, visuals and musical systems are continuing to evolve as the team tests what makes the experience engaging, understandable and meaningful.`,

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
