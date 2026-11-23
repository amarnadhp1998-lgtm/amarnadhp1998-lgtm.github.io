(() => {
  const projects = window.PORTFOLIO_CONTENT?.projects ?? [];
  const grid = document.querySelector("#project-grid");
  const filterButtons = [...document.querySelectorAll(".filter-button")];
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector("#primary-nav");
  document.querySelector("#year").textContent = new Date().getFullYear();
  let revealObserver;

  const esc = (value = "") => String(value).replace(/[&<>"']/g, (ch) => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[ch]));
  const renderProjects = (filter = "all") => {
    const visible = projects.filter((project) => filter === "all" || project.category === filter);
    grid.innerHTML = visible.map((project, index) => `
      <article class="project-card reveal" data-category="${esc(project.category)}">
        <div class="project-card-top"><span class="project-number">0${index + 1}</span><span class="project-category">${esc(project.categoryLabel)}</span><span class="project-arrow" aria-hidden="true">↗</span></div>
        <p class="project-type">${esc(project.type)}</p>
        <h3>${esc(project.title)}</h3>
        <p class="project-summary">${esc(project.summary)}</p>
        <p class="project-outcome"><span>—</span> ${esc(project.outcome)}</p>
        <div class="project-tags">${project.tags.map(tag => `<span>${esc(tag)}</span>`).join("")}</div>
        <details class="case-study"><summary>Explore case study <span aria-hidden="true">＋</span></summary>
          <div class="case-body"><p class="case-context">${esc(project.context)}</p><dl><div><dt>Challenge</dt><dd>${esc(project.challenge)}</dd></div><div><dt>Approach</dt><dd>${esc(project.approach)}</dd></div><div><dt>Result / status</dt><dd>${esc(project.result)}</dd></div></dl></div>
        </details>
        <div class="project-links">${project.link ? `<a href="${esc(project.link)}" target="_blank" rel="noreferrer">${esc(project.linkLabel || "View project")} <span aria-hidden="true">↗</span></a>` : `<span class="link-pending">Public source link not available</span>`}${project.liveLink ? `<a href="${esc(project.liveLink)}" target="_blank" rel="noreferrer">${esc(project.liveLabel || "Live demo")} <span aria-hidden="true">↗</span></a>` : ""}</div>
      </article>`).join("");
    observeReveals();
  };
  renderProjects();

  filterButtons.forEach((button) => button.addEventListener("click", () => {
    filterButtons.forEach((item) => { item.classList.toggle("is-active", item === button); item.setAttribute("aria-pressed", String(item === button)); });
    renderProjects(button.dataset.filter);
  }));

  menuButton.addEventListener("click", () => {
    const expanded = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!expanded));
    menuButton.setAttribute("aria-label", expanded ? "Open navigation" : "Close navigation");
    nav.classList.toggle("is-open", !expanded);
  });
  nav.querySelectorAll("a").forEach(link => link.addEventListener("click", () => {
    nav.classList.remove("is-open"); menuButton.setAttribute("aria-expanded", "false"); menuButton.setAttribute("aria-label", "Open navigation");
  }));

  const sections = [...document.querySelectorAll("main section[id]")];
  const navLinks = [...nav.querySelectorAll("a[href^='#']")];
  if ("IntersectionObserver" in window) {
    const navObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) navLinks.forEach(link => link.classList.toggle("is-current", link.hash === `#${entry.target.id}`));
    }), { rootMargin: "-35% 0px -55% 0px" });
    sections.forEach(section => navObserver.observe(section));
  }
  function observeReveals() {
    const items = document.querySelectorAll(".reveal:not(.is-visible)");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches || !("IntersectionObserver" in window)) {
      items.forEach(item => item.classList.add("is-visible")); return;
    }
    revealObserver?.disconnect();
    revealObserver = new IntersectionObserver(entries => entries.forEach(entry => {
      if (entry.isIntersecting) { entry.target.classList.add("is-visible"); revealObserver.unobserve(entry.target); }
    }), { threshold: 0.12 });
    items.forEach(item => revealObserver.observe(item));
  }
  observeReveals();
})();
