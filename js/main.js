document.addEventListener("DOMContentLoaded", () => {
  // Keep the existing subtle bubble interaction.
  const bubbles = document.querySelectorAll(".bubble");

  window.addEventListener("pointermove", (event) => {
    const x = (event.clientX / window.innerWidth - 0.5) * 10;
    const y = (event.clientY / window.innerHeight - 0.5) * 10;

    bubbles.forEach((bubble, index) => {
      const amount = (index + 1) * 0.4;
      bubble.style.marginLeft = `${x * amount}px`;
      bubble.style.marginTop = `${y * amount}px`;
    });
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
  }

  // Give the homepage gallery a slow, floaty scroll-drag effect.
  const floatingSection = document.querySelector(".floating-work");
  const floatingProjects = document.querySelectorAll(".floating-project");
  let ticking = false;

  const updateFloatingProjects = () => {
    if (!floatingSection || !floatingProjects.length) return;

    const sectionRect = floatingSection.getBoundingClientRect();
    const viewportHeight = window.innerHeight;
    const progress = (viewportHeight - sectionRect.top) / (viewportHeight + sectionRect.height);

    floatingProjects.forEach((project, index) => {
      // Different gentle travel distances keep each image feeling independent.
      const strength = [55, -42, 68, -52, 38][index] || 45;
      const movement = (progress - 0.5) * strength;
      const rotation = (progress - 0.5) * (index % 2 === 0 ? 0.65 : -0.65);

      project.style.setProperty("--scroll-y", `${movement}px`);
      project.style.setProperty("--scroll-rotation", `${rotation}deg`);
    });

    ticking = false;
  };

  const requestFloatingUpdate = () => {
    if (!ticking) {
      window.requestAnimationFrame(updateFloatingProjects);
      ticking = true;
    }
  };

  if (floatingProjects.length) {
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