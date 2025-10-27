---
layout: default
title: Lorna
permalink: /team/lorna/
noindex: true                # adds the meta robots tag
sitemap: false               # keeps it out of jekyll-sitemap
name: Lorna
role: Coach
cred:
  - BSc (Hons) Strength & Conditioning
  - Pre & Post-Natal Training
photo_card: /assets/images/team/lorna-card-1200.webp
photo_portrait: /assets/images/team/lorna-portrait-1200.webp
---

<section class="section section--light page-min">
  <div class="container">
    <a class="small text-muted d-inline-block mb-3 text-decoration-none" href="{{ '/about/' | relative_url }}">← Back to About</a>
    <div class="row g-4 align-items-start">
      <!-- Portrait / quick facts -->
      <aside class="col-lg-4">
        <figure class="card border-0 shadow-sm">
          <img class="w-100 rounded-top object-cover" style="aspect-ratio: 3 / 4;"
               src="{{ page.photo_portrait | relative_url }}" alt="{{ page.name }}">
          <figcaption class="card-body">
            <h1 class="h4 mb-1">{{ page.name }}</h1>
            <p class="text-muted small mb-3">{{ page.role }}</p>
            <ul class="list-unstyled small text-muted mb-3">
              {% for c in page.cred %}<li>{{ c }}</li>{% endfor %}
            </ul>
            <div class="d-flex flex-wrap gap-2">
              <a class="btn btn-primary btn-sm"
                 href="https://legitfit.com/authenticate/signup/lornabbohemianfitness" target="_blank" rel="noopener">Book a session</a>
              <a class="btn btn-outline-secondary btn-sm" href="{{ '/timetables/' | relative_url }}">See timetable</a>
            </div>
          </figcaption>
        </figure>
        <!-- Specialities -->
        <div class="p-3 bg-light rounded-3 mt-3">
          <h2 class="h6 mb-2">Specialities</h2>
          <ul class="mb-0 small">
            <li>Strength technique & progressions</li>
            <li>Mobility & core</li>
            <li>Pre/post-natal programming</li>
          </ul>
        </div>
      </aside>
      <!-- Bio / long form -->
      <div class="col-lg-8">
        <article class="prose">
          <h2 class="h3 mb-2 visually-hidden">{{ page.name }}</h2>
          <p class="lead mb-3">
            <!-- 1–2 line summary in their own words -->
          </p>
          <!-- Paste their full bio here (multiple paragraphs ok) -->
          <p>...</p>
          <p>...</p>
          <!-- Optional pull-quote -->
          <blockquote class="border-start ps-3 my-4">
            <p class="mb-1">“Training should be simple, repeatable, and built around your life.”</p>
            <footer class="small text-muted">— {{ page.name }}</footer>
          </blockquote>
          <!-- Mini FAQ (accordion) -->
          <div class="accordion" id="coach-faq">
            <div class="accordion-item">
              <h2 class="accordion-header" id="q1">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#a1">Who is this class ideal for?</button>
              </h2>
              <div id="a1" class="accordion-collapse collapse" data-bs-parent="#coach-faq">
                <div class="accordion-body small">
                  Beginners to intermediate lifters who want steady strength gains and better movement quality.
                </div>
              </div>
            </div>
          </div>
          <!-- CTAs -->
          <div class="d-flex flex-wrap gap-2 mt-4">
            <a class="btn btn-primary" href="https://legitfit.com/authenticate/signup/lornabbohemianfitness" target="_blank" rel="noopener">Train with {{ page.name }}</a>
            <a class="btn btn-outline-secondary" href="{{ '/contact/' | relative_url }}">Message {{ page.name }}</a>
          </div>
        </article>
      </div>
    </div>
  </div>
</section>
<!-- JSON-LD (helps SEO, optional) -->
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"Person",
  "name":"{{ page.name }}",
  "jobTitle":"{{ page.role }}",
  "affiliation":{"@type":"SportsActivityLocation","name":"Bohemian Fitness"},
  "image":"{{ page.photo_portrait | relative_url }}",
  "url":"{{ page.url | absolute_url }}"
}
</script>
