document.addEventListener("DOMContentLoaded", () => {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const project = projects.find((item) => item.id === id);
  const page = document.querySelector("#project-page");

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

  document.title = `${project.title} — Jackson Moore`;

  const gallery = (project.gallery ?? []).map((image, index) => `
    <figure class="project-gallery-image">
      <img src="${image}" alt="${project.title} image ${index + 1}" loading="lazy" onerror="this.parentElement.remove()">
    </figure>
  `).join("");

  const audioPlayer = project.audio
    ? `<audio class="audio-player" controls src="${project.audio}">Your browser does not support the audio player.</audio>`
    : "";

  const platformLinks = project.appleMusic || project.spotify
    ? `
      <div class="project-links">
        <p class="eyebrow">LISTEN</p>
        ${project.appleMusic ? `<a href="${project.appleMusic}" target="_blank" rel="noopener">Apple Music <span>↗</span></a>` : ""}
        ${project.spotify ? `<a href="${project.spotify}" target="_blank" rel="noopener">Spotify <span>↗</span></a>` : ""}
      </div>
    `
    : "";

  const websiteLink = project.website
    ? `
      <div class="project-links">
        <p class="eyebrow">PROJECT WEBSITE</p>
        <a href="${project.website}" target="_blank" rel="noopener">Open the Repair / Decay website <span>↗</span></a>
      </div>
    `
    : "";

  page.innerHTML = `
    <section class="project-header">
      <a class="back-link" href="index.html">← Back home</a>
      <h1>${project.title}</h1>
      <p class="project-meta">${project.category} · ${project.year}</p>
    </section>

    <div class="project-hero">
      <img src="${project.hero || project.image}" alt="${project.title} hero image">
    </div>

    <article class="project-body">
      <p class="lead">${project.description}</p>

      ${audioPlayer}

      <section class="project-section">
        <p class="eyebrow">OVERVIEW</p>
        <h2>The project</h2>
        <p>${project.longDescription ?? project.description}</p>
      </section>

      ${websiteLink}
      ${platformLinks}

      ${project.tags?.length ? `
        <section class="project-section">
          <p class="eyebrow">FOCUS</p>
          <h2>What I explored</h2>
          <p>${project.tags.join(" · ")}</p>
        </section>
      ` : ""}
    </article>

    ${gallery ? `<section class="project-gallery">${gallery}</section>` : ""}

    <nav class="project-nav">
      <a href="index.html">← Home</a>
      <a href="${project.type === "music" ? "music.html" : "design.html"}">All ${project.type === "music" ? "music" : "visuals"} ↑</a>
    </nav>
  `;
});
