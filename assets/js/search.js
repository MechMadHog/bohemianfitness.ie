document.addEventListener("DOMContentLoaded", function () {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  if (!input || !results) return;

  fetch("/search.json")
    .then(r => r.json())
    .then(data => {
      const idx = lunr(function () {
        this.ref("url");
        this.field("title");
        this.field("content");
        this.field("tags");
        this.field("categories");
        data.forEach(doc => this.add(doc));
      });

      input.addEventListener("input", () => {
        const q = input.value.trim();
        if (!q) { results.innerHTML = ""; return; }
        const matches = idx.search(q).slice(0, 24);
        const items = matches.map(m => data.find(d => d.url === m.ref));
        results.innerHTML = items.map(d => `
          <div class="col-md-6 col-lg-4">
            <div class="card h-100 shadow-sm">
              <div class="card-body">
                <h2 class="h5"><a class="stretched-link text-decoration-none" href="${d.url}">${d.title}</a></h2>
                <p class="text-muted small mb-2">${d.date}</p>
                <p>${(d.content || "").slice(0,140)}...</p>
              </div>
            </div>
          </div>
        `).join("");
      });
    });
});
