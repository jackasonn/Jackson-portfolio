document.addEventListener("DOMContentLoaded", () => {
  // Read the project ID from the URL, for example: project.html?id=kinetic-string.
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = projects.find((item) => item.id === id);
  const page = document.querySelector("#project-page");

  // Show a helpful fallback rather than leaving the page empty for an invalid URL.
  if (!project) {
    page.innerHTML = `
      <section class="project-header">
        <a class="back-link" href="index.html">← Back home</a>
        <h1>Project not found.</h1>
        <p class="project-meta">Try going back and selecting a project.</p>
      </section>
    `;
    return;
  }

  // Use the current project title in the browser tab.
  document.title = `${project.title} — Jackson Moore`;

  // Turn every gallery path in the data into a numbered placeholder element.
  const gallery = project.gallery.map((image, index) => `
    <div class="gallery-image placeholder-image">
      <span>IMAGE ${String(index + 1).padStart(2, "0")}<br><small>${image}</small></span>
    </div>
  `).join("");

  // Only music projects receive an audio player.
  const audioPlayer = project.audio
    ? `<audio class="audio-player" controls src="${project.audio}">
         Your browser does not support the audio player.
       </audio>`
    : "";

  // Assemble the complete case-study layout from the selected project's data.
  page.innerHTML = `
    <section class="project-header">
      <a class="back-link" href="${project.type === "music" ? "music.html" : "design.html"}">
        ← Back to ${project.type === "music" ? "music" : "visual art / design"}
      </a>

      <h1>${project.title}</h1>
      <p class="project-meta">${project.category} · ${project.year}</p>
    </section>

    <div class="project-hero placeholder-image">
      <span>HERO IMAGE<br><small>${project.hero}</small></span>
    </div>

    <article class="project-body">
      <p class="lead">${project.description}</p>

      ${audioPlayer}

      <section class="project-section">
        <p class="eyebrow">OVERVIEW</p>
        <h2>The project</h2>
        <p>${project.longDescription}</p>
      </section>

      <section class="project-section">
        <p class="eyebrow">FOCUS</p>
        <h2>What I explored</h2>
        <p>${project.tags.join(" · ")}</p>
      </section>
    </article>

    <section class="project-gallery">
      ${gallery}
    </section>

    <nav class="project-nav">
      <a href="${project.type === "music" ? "music.html" : "design.html"}">← All projects</a>
      <a href="index.html">Home ↑</a>
    </nav>
  `;
});
