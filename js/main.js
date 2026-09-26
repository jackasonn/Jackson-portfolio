document.addEventListener("DOMContentLoaded", () => {
  const bubbleSources = [
    "assets/images/bubble-01.png",
    "assets/images/bubble-02.png",
    "assets/images/bubble-03.png"
  ];

  const randomBubbleSource = () =>
    bubbleSources[Math.floor(Math.random() * bubbleSources.length)];

  const randomBetween = (min, max) =>
    Math.random() * (max - min) + min;

  const randomGalleryEdgePosition = () => {
    if (Math.random() < 0.75) {
      const edge = Math.floor(Math.random() * 4);
      const edgePosition = randomBetween(4, 96);

      if (edge === 0) return { left: randomBetween(2, 24), top: edgePosition };
      if (edge === 1) return { left: randomBetween(76, 98), top: edgePosition };
      if (edge === 2) return { left: edgePosition, top: randomBetween(2, 24) };
      return { left: edgePosition, top: randomBetween(76, 98) };
    }

    return { left: randomBetween(24, 76), top: randomBetween(24, 76) };
  };

  // Replace the old CSS bubbles with the new bubble artwork.
  const waterLayer = document.querySelector(".water-layer");

  if (waterLayer) {
    waterLayer.innerHTML = "";

    for (let i = 0; i < 4; i += 1) {
      const bubble = document.createElement("img");
      bubble.className = "bubble floating-bubble";
      bubble.src = randomBubbleSource();
      bubble.alt = "";
      bubble.setAttribute("aria-hidden", "true");
      bubble.style.width = `${randomBetween(22, 42)}px`;
      bubble.style.left = `${randomBetween(3, 97)}%`;
      bubble.style.setProperty("--bubble-rotation", `${randomBetween(-25, 25)}deg`);
      bubble.style.setProperty("--bubble-sway", `${randomBetween(18, 45)}px`);
      bubble.style.animationDuration = `${randomBetween(24, 38)}s`;
      bubble.style.animationDelay = `-${randomBetween(0, 38)}s`;
      waterLayer.appendChild(bubble);
    }
  }

  // Clicking anywhere that isn't a link creates a temporary bubble.
  document.addEventListener("click", (event) => {
    if (event.target.closest("a")) return;

    const bubble = document.createElement("img");
    bubble.className = "click-bubble";
    bubble.src = randomBubbleSource();
    bubble.alt = "";
    bubble.setAttribute("aria-hidden", "true");
    bubble.style.left = `${event.clientX}px`;
    bubble.style.top = `${event.clientY}px`;
    bubble.style.width = `${randomBetween(22, 46)}px`;
    bubble.style.setProperty("--bubble-rotation", `${randomBetween(-25, 25)}deg`);
    bubble.style.setProperty("--bubble-sway", `${randomBetween(18, 45)}px`);
    bubble.style.animationDuration = `${randomBetween(11, 20)}s`;
    document.body.appendChild(bubble);

    window.setTimeout(() => bubble.remove(), 20000);
  });

  // Render the homepage gallery from projects.js.
  // This keeps image paths in one place, so new projects automatically
  // use their project image/hero without needing another hard-coded path.
  const homeGallery = document.getElementById("home-gallery");

  if (homeGallery && typeof projects !== "undefined") {
    homeGallery.innerHTML = projects.map((project, index) => {
      const destination = project.external
        ? `href="${project.url}" target="_blank" rel="noopener"`
        : `href="project.html?id=${project.id}"`;

      const image = project.hero || project.image;

      return `
        <a class="floating-project floating-project-${index + 1}" ${destination}>
          <div class="floating-project-image">
            <img src="${image}" alt="${project.title} project">
          </div>
          <div class="floating-project-meta">
            <h3>${project.title}</h3>
            <p>${project.category} | ${project.year}</p>
          </div>
        </a>
      `;
    }).join("");

    // Add 3–9 large decorative bubbles, weighted toward the gallery edges.
    const galleryBubbleCount = Math.floor(randomBetween(3, 10));

    for (let i = 0; i < galleryBubbleCount; i += 1) {
      const bubble = document.createElement("img");
      const position = randomGalleryEdgePosition();
      bubble.className = "gallery-bubble";
      bubble.src = randomBubbleSource();
      bubble.alt = "";
      bubble.setAttribute("aria-hidden", "true");
      bubble.style.left = `${position.left}%`;
      bubble.style.top = `${position.top}%`;
      bubble.style.width = `${randomBetween(130, 280)}px`;
      bubble.style.setProperty("--bubble-base-rotation", `${randomBetween(-35, 35)}deg`);
      homeGallery.appendChild(bubble);
    }

    homeGallery.addEventListener("click", (event) => {
      const bubble = event.target.closest(".gallery-bubble");
      if (!bubble) return;
      event.preventDefault();
      event.stopPropagation();
      bubble.classList.remove("gallery-bubble-pop");
      void bubble.offsetWidth;
      bubble.classList.add("gallery-bubble-pop");
      window.setTimeout(() => bubble.classList.remove("gallery-bubble-pop"), 700);
    });
  }

  // Give the homepage gallery a slow, floaty scroll-drag effect.
  const floatingSection = document.querySelector(".floating-work");
  const floatingProjects = document.querySelectorAll(".floating-project");
  const galleryBubbles = document.querySelectorAll(".gallery-bubble");
  let ticking = false;

  const updateFloatingProjects = () => {
    if (!floatingSection || !floatingProjects.length) return;

    const sectionRect = floatingSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const progress = (viewportHeight - sectionRect.top) / (viewportHeight + sectionRect.height);

    floatingProjects.forEach((project, index) => {
      const strength = [55, -42, 68, -52, 38][index] || 45;
      const movement = (progress - 0.5) * strength;
      const rotation = (progress - 0.5) * (index % 2 === 0 ? 0.65 : -0.65);

      project.style.setProperty("--scroll-y", `${movement}px`);
      project.style.setProperty("--scroll-rotation", `${rotation}deg`);
    });

    galleryBubbles.forEach((bubble, index) => {
      const strength = [150, -185, 215, -165, 195, -225][index % 6];
      const movement = (progress - 0.5) * strength;
      const rotation = (progress - 0.5) * (index % 2 === 0 ? 2.2 : -2.2);

      bubble.style.setProperty("--scroll-y", `${movement}px`);
      bubble.style.setProperty("--scroll-rotation", `${rotation}deg`);
    });

    ticking = false;
  };

  const requestFloatingUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateFloatingProjects);
      ticking = true;
    }
  };

  if (floatingProjects.length || galleryBubbles.length) {
    window.addEventListener("scroll", requestFloatingUpdate, { passive: true });
    window.addEventListener("resize", requestFloatingUpdate);
    requestFloatingUpdate();
  }

  // Render the simple text lists used by the Music and Visuals pages.
  const renderProjectList = (containerId, filter) => {
    const container = document.getElementById(containerId);
    if (!container || typeof projects === "undefined") return;

    const filtered = projects.filter((project) =>
      filter === "music"
        ? project.type === "music" || project.type === "both"
        : project.type === "visual" || project.type === "both"
    );

    container.innerHTML = filtered.map((project) => {
      const destination = project.external
        ? `href="${project.url}" target="_blank" rel="noopener"`
        : `href="project.html?id=${project.id}"`;

      return `
        <a class="project-list-link" ${destination}>
          <span class="project-list-title">${project.title}</span>
          <span class="project-list-meta">${project.category} · ${project.year}</span>
        </a>
      `;
    }).join("");
  };

  renderProjectList("music-list", "music");
  renderProjectList("design-list", "visual");
});