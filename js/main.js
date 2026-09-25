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

  // The floating homepage projects gently respond to scroll position.
  const floatingProjects = document.querySelectorAll(".floating-project");
  let ticking = false;

  const updateFloatingProjects = () => {
    const viewportCentre = window.innerHeight / 2;

    floatingProjects.forEach((project) => {
      const rect = project.getBoundingClientRect();
      const projectCentre = rect.top + rect.height / 2;
      const distance = (projectCentre - viewportCentre) / window.innerHeight;
      const movement = Math.max(-1, Math.min(1, distance)) * -14;
      const rotation = Math.max(-1, Math.min(1, distance)) * 1.5;

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

    container.innerHTML = filtered.map((project, index) => {
      const destination = project.external
        ? `href="${project.url}" target="_blank" rel="noopener"`
        : `href="project.html?id=${project.id}"`;

      return `
        <a class="project-list-link" ${destination}>
          <span class="project-list-number">${String(index + 1).padStart(2, "0")}</span>
          <span class="project-list-title">${project.title}</span>
          <span class="project-list-meta">${project.category} · ${project.year}</span>
          <span class="project-list-arrow">↗</span>
        </a>
      `;
    }).join("");
  };

  renderProjectList("music-list", "music");
  renderProjectList("design-list", "visual");
});
