---
layout: default
title: Lorna
permalink: /team/lorna/
noindex: true
sitemap: false
name: Lorna
role: Founder & Head Coach
cred:
  - BSc (Hons) Strength & Conditioning
  - Pre & Post-Natal Training
photo_card: /assets/images/team/lorna-card-1200.webp
photo_portrait: /assets/images/team/lorna-portrait-1200.webp
---

<section class="section section--light page-min">
  <div class="container">
    <a class="small text-muted d-inline-block mb-3 text-decoration-none"
       href="{{ '/about-us/' | relative_url }}">← Back to About</a>
    <div class="row g-4 align-items-start">
      <!-- Portrait / quick facts -->
      <aside class="col-lg-4">
        <figure class="card border-0 shadow-sm">
          <img
            class="w-100 rounded-top object-cover"
            style="aspect-ratio: 3 / 4;"
            src="{{ page.photo_portrait | relative_url }}"
            alt="{{ page.name }}"
          >
          <figcaption class="card-body">
            <h1 class="h4 mb-1">{{ page.name }}</h1>
            <p class="text-muted small mb-3">{{ page.role }}</p>
            <ul class="list-unstyled small text-muted mb-3">
              {% for c in page.cred %}
                <li>{{ c }}</li>
              {% endfor %}
            </ul>
            <div class="d-flex flex-wrap gap-2">
              <a
                class="btn btn-primary btn-sm"
                href="https://legitfit.com/authenticate/signup/lornabbohemianfitness"
                target="_blank"
                rel="noopener"
              >
                Book a session
              </a>
              <a
                class="btn btn-outline-secondary btn-sm"
                href="{{ '/timetables/' | relative_url }}"
              >
                See timetable
              </a>
            </div>
          </figcaption>
        </figure>
        <!-- Specialities -->
        <div class="p-3 bg-light rounded-3 mt-3">
          <h2 class="h6 mb-2">Specialities</h2>
          <ul class="mb-0 small">
            <li>Strength technique & progressions</li>
            <li>Mobility & core</li>
            <li>Pre- & post-natal training</li>
          </ul>
        </div>
      </aside>
      <!-- Main content -->
      <div class="col-lg-8">
        <!-- Intro -->
        <section class="mb-4">
          <p class="lead mb-3">
            Lorna is the founder and head coach of Bohemian Fitness, with a focus on building real-world strength,
            confidence, and long-term consistency.
          </p>
        </section>
        <!-- Bio -->
        <section class="mb-4">
          <p>
            With over a decade of experience in the fitness industry, Lorna has worked with people from all walks
            of life — from complete beginners to seasoned athletes. Her approach is grounded in education,
            movement quality, and helping people feel capable in their own bodies.
          </p>
          <p>
            Bohemian Fitness was created as a response to traditional gym culture. Instead of mirrors, pressure,
            and intimidation, the space prioritises support, adaptability, and community. Sessions are coached,
            scalable, and designed to meet people where they are.
          </p>
          <p>
            Lorna holds a BSc (Hons) in Strength & Conditioning and specialises in pre- and post-natal training,
            supporting clients to build strength safely through different stages of life.
          </p>
        </section>
        <!-- Philosophy -->
        <section class="mb-4">
          <h2 class="h5 mb-2">Training philosophy</h2>
          <p>
            Training should be simple, repeatable, and fit into real life. Progress comes from showing up
            consistently, moving well, and building confidence over time — not from chasing extremes.
          </p>
        </section>
        <!-- Action images -->
        <section class="mb-4">
          <h2 class="h5 mb-3">In action</h2>
          <div class="row g-3">
            <div class="col-6 col-md-4">
              <img
                src="/assets/images/team/lorna-action-01.webp"
                class="w-100 rounded-3"
                alt="Lorna coaching strength training"
              >
            </div>
            <div class="col-6 col-md-4">
              <img
                src="/assets/images/team/lorna-action-02.webp"
                class="w-100 rounded-3"
                alt="Lorna demonstrating kettlebell work"
              >
            </div>
            <div class="col-6 col-md-4">
              <img
                src="/assets/images/team/lorna-action-03.webp"
                class="w-100 rounded-3"
                alt="Lorna coaching group training session"
              >
            </div>
          </div>
        </section>
        <!-- CTAs -->
        <section class="d-flex flex-wrap gap-2 mt-4">
          <a
            class="btn btn-primary"
            href="https://legitfit.com/authenticate/signup/lornabbohemianfitness"
            target="_blank"
            rel="noopener"
          >
            Train with Lorna
          </a>
          <a
            class="btn btn-outline-secondary"
            href="{{ '/contact/' | relative_url }}"
          >
            Get in touch
          </a>
        </section>
      </div>
    </div>
  </div>
</section>

<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "{{ page.name }}",
  "jobTitle": "{{ page.role }}",
  "affiliation": {
    "@type": "SportsActivityLocation",
    "name": "Bohemian Fitness"
  },
  "image": "{{ page.photo_portrait | relative_url }}",
  "url": "{{ page.url | absolute_url }}"
}
</script>
