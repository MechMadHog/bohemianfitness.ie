/* /assets/js/main.js */

/* ----------------------------------------
   Year in footer
---------------------------------------- */
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ----------------------------------------
   Thumb picker (no default/fallback)
---------------------------------------- */
function pickThumb(p) {
  const t = p && p.thumb ? String(p.thumb).trim() : "";
  return t || null; // return null if no explicit thumb set
}

/* ----------------------------------------
   Tag labels (single source of truth)
---------------------------------------- */
const TAG_LABELS = {
  
};


/* TIP: add new items to the END; we reverse below to show latest first. */
const ALL_PROJECTS = [
  
];


/* Safety net: strip any stray 'codepen' or 'fcc' tags if they ever appear */
ALL_PROJECTS.forEach(p => p.tags = (p.tags || []).filter(t => t !== "codepen" && t !== "fcc"));

/* === Latest-first ordering === */
const PROJECTS = [...ALL_PROJECTS].reverse();

/* ----------------------------------------
   Projects page: filters + show-more
---------------------------------------- */
const INITIAL_VISIBLE = 4;
const STEP_VISIBLE = 4;

let currentTag = "all";
let currentFiltered = [];
let visibleCount = INITIAL_VISIBLE;

const grid = document.getElementById("projects");
const showMoreBtn = document.getElementById("show-more");
const filtersEl = document.getElementById("filters");

/* Build filter buttons from TAG_LABELS */
function buildFilterButtons() {
  if (!filtersEl) return [];

  filtersEl.innerHTML = "";

  // 'All' first
  const allBtn = document.createElement("button");
  allBtn.className = "btn btn-sm btn-outline-secondary is-active tag";
  allBtn.dataset.tag = "all";
  allBtn.textContent = "All";
  filtersEl.appendChild(allBtn);

  // Sorted by label
  const entries = Object.entries(TAG_LABELS).sort((a, b) => a[1].localeCompare(b[1]));
  for (const [key, label] of entries) {
    const btn = document.createElement("button");
    btn.className = "btn btn-sm btn-outline-secondary tag";
    btn.dataset.tag = key;
    btn.textContent = label;
    filtersEl.appendChild(btn);
  }

  return Array.from(filtersEl.querySelectorAll('[data-tag]'))
    .filter(el => el.tagName === "BUTTON" || el.classList.contains("btn"));
}

function badge(tag) {
  const label = TAG_LABELS[tag] || tag;
  const isAccent = tag === "js";
  return `<span class="badge ${isAccent ? "badge-accent" : "text-bg-light"}">${label}</span>`;
}

function makeCard(p) {
  const col = document.createElement("div");
  col.className = "col-12 col-md-6";
  col.dataset.tags = p.tags.join(" ");

  const thumb = pickThumb(p);
  const alt = `${p.title} thumbnail`;

  col.innerHTML = `
    <article class="card h-100">
      <div class="ratio ratio-16x9">
        ${
          thumb
            ? `<img
                 src="${thumb}"
                 alt="${alt}"
                 loading="lazy"
                 width="640"
                 height="360"
                 class="card-img-top object-fit-cover"
               />`
            : `<div class="no-thumb-placeholder"></div>`
        }
      </div>
      <div class="card-body d-flex flex-column">
        <div class="d-flex flex-wrap gap-1 mb-2">
          ${p.tags.map(badge).join("")}
        </div>
        <h3 class="h5 mb-1">${p.title}</h3>
        <p class="small text-muted mb-2">${p.subtitle}</p>
        <p class="mb-3">${p.blurb}</p>
        <div class="mt-auto d-flex gap-2">
          <a class="btn btn-sm btn-primary" href="${p.href}" target="_blank" rel="noopener">View Project</a>
          ${p.repo ? `<a class="btn btn-sm btn-outline-secondary" href="${p.repo}" target="_blank" rel="noopener">Source</a>` : ""}
        </div>
      </div>
    </article>
  `;
  return col;
}

function renderLimited(list) {
  if (!grid) return; // not on Projects page
  grid.innerHTML = "";
  const frag = document.createDocumentFragment();
  const slice = list.slice(0, visibleCount);

  if (slice.length === 0) {
    const empty = document.createElement("div");
    empty.className = "col-12";
    empty.innerHTML = `
      <div class="alert alert-secondary text-center mb-0">
        No projects match this filter yet.
      </div>
    `;
    frag.appendChild(empty);
  } else {
    slice.forEach((p) => frag.appendChild(makeCard(p)));
  }

  grid.appendChild(frag);

  if (showMoreBtn) {
    const hasMore = list.length > visibleCount;
    showMoreBtn.classList.toggle("d-none", !hasMore);
  }
}

function filterByTag(tag) {
  const t = (tag || "all").toLowerCase();
  if (t === "codepen" || t === "fcc") return [...PROJECTS]; // legacy guard
  return t === "all" ? [...PROJECTS] : PROJECTS.filter(p => p.tags.includes(t));
}

function setActiveButton(btn, group) {
  group.forEach((b) => b.classList.toggle("is-active", b === btn));
}

function applyFilter(tag) {
  currentTag = (tag || "all").toLowerCase();
  if (currentTag === "codepen" || currentTag === "fcc") currentTag = "all";
  currentFiltered = filterByTag(currentTag);
  visibleCount = INITIAL_VISIBLE;
  renderLimited(currentFiltered);
}

function initialTagFromURL() {
  const u = new URL(window.location.href);
  const q = (u.searchParams.get("tag") || "").toLowerCase();
  if (q === "codepen" || q === "fcc") return "all";
  if (q) return q;
  const hash = u.hash.startsWith("#tag=") ? u.hash.slice(5).toLowerCase() : null;
  if (hash === "codepen" || hash === "fcc") return "all";
  return hash || null;
}

/* ----------------------------------------
   Boot (safe on any page)
---------------------------------------- */
(function initProjects() {
  // tiny CSS helpers (safe to inject)
  const css = `
    .ratio { position: relative; width: 100%; }
    .ratio::before { display: block; padding-top: calc(100% / (16/9)); content: ""; }
    .ratio > * { position: absolute; inset: 0; }
    .object-fit-cover { object-fit: cover; width: 100%; height: 100%; }
    .badge-accent { background: #ffd84a; color: #111; }
    .no-thumb-placeholder { background: var(--bs-secondary-bg, #f1f3f5); width: 100%; height: 100%; }
    .tag.is-active { outline: 2px solid currentColor; }
  `;
  const s = document.createElement("style");
  s.appendChild(document.createTextNode(css));
  document.head.appendChild(s);

  // If we're on the Projects page, filtersEl exists
  const tagButtons = buildFilterButtons();
  if (tagButtons.length) {
    const initial = initialTagFromURL() || "all";
    const btnToActivate =
      tagButtons.find(b => (b.dataset.tag || "").toLowerCase() === initial) || tagButtons[0];

    if (btnToActivate) setActiveButton(btnToActivate, tagButtons);
    applyFilter(initial);

    // Wire button clicks + keyboard
    tagButtons.forEach((btn) => {
      const activate = () => {
        setActiveButton(btn, tagButtons);
        applyFilter(btn.dataset.tag);
        const u = new URL(window.location.href);
        if ((btn.dataset.tag || "all") === "all") u.searchParams.delete("tag");
        else u.searchParams.set("tag", btn.dataset.tag);
        history.replaceState({}, "", u.toString());
      };
      btn.addEventListener("click", activate);
      btn.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); activate(); }
      });
    });

    // Show more
    if (showMoreBtn) {
      showMoreBtn.addEventListener("click", () => {
        visibleCount += STEP_VISIBLE;
        renderLimited(currentFiltered);
      });
    }
  }
})();

/* ----------------------------------------
   Home page: render 4-project preview
   (latest first) if #home-projects exists
---------------------------------------- */
(function renderHomePreview() {
  const homeGrid = document.getElementById("home-projects");
  if (!homeGrid) return; // not on home page

  // Latest-first list already computed in PROJECTS
  const preview = PROJECTS.slice(0, 4);
  const frag = document.createDocumentFragment();
  preview.forEach((p) => frag.appendChild(makeCard(p)));
  homeGrid.innerHTML = "";
  homeGrid.appendChild(frag);
})();
