---
layout: default
title: Home
---

<!-- HERO -->
<section class="hero text-center text-white">
  <div class="container py-5">
    <h1 class="display-4 fw-bold mb-3">Join Our Tribe</h1>
    <p class="lead mb-4">Find your vibe with strength, conditioning, and wellness in Mullingar.</p>
    <div class="d-flex gap-3 justify-content-center">
      <a href="{{ '/programs/' | relative_url }}" class="btn btn-primary btn-lg">View Programs</a>
      <a href="{{ '/contact/'  | relative_url }}" class="btn btn-outline-light btn-lg">Get in Touch</a>
    </div>
  </div>
</section>

<!-- PROGRAMS SUMMARY -->
<section class="py-5">
  <div class="container">
    <div class="row g-4">
      <div class="col-md-4">
        <div class="p-4 bg-light rounded-3 h-100">
          <h3 class="fw-bold mb-2">Strength &amp; Conditioning</h3>
          <p class="mb-3">Build real strength with small-group coaching and progressive programming.</p>
          <a class="text-decoration-none fw-semibold" href="{{ '/programs/#strength' | relative_url }}">Learn more →</a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 bg-light rounded-3 h-100">
          <h3 class="fw-bold mb-2">Sweatcon</h3>
          <p class="mb-3">Higher-intensity conditioning inspired by Hyrox. Scalable for all levels.</p>
          <a class="text-decoration-none fw-semibold" href="{{ '/programs/#sweatcon' | relative_url }}">Learn more →</a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 bg-light rounded-3 h-100">
          <h3 class="fw-bold mb-2">Mindfulness &amp; Massage</h3>
          <p class="mb-3">Energy healing and restorative sessions to reset body and mind.</p>
          <a class="text-decoration-none fw-semibold" href="{{ '/programs/#mindfulness' | relative_url }}">Learn more →</a>
        </div>
      </div>
    </div>
    <!-- secondary row (optional): quick links to popular classes -->
    <div class="row g-4 mt-1">
      <div class="col-md-4">
        <div class="p-4 bg-light rounded-3 h-100">
          <h3 class="fw-bold mb-2">Postpartum Pump (BYOB)</h3>
          <p class="mb-3">Bring your baby. Safe strength training focused on recovery and confidence.</p>
          <a class="text-decoration-none fw-semibold" href="{{ '/programs/#postpartum' | relative_url }}">Learn more →</a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 bg-light rounded-3 h-100">
          <h3 class="fw-bold mb-2">T-Rex &amp; Kettlebells</h3>
          <p class="mb-3">Fun, full-body strength and core with kettlebells and suspension.</p>
          <a class="text-decoration-none fw-semibold" href="{{ '/programs/#trex' | relative_url }}">Learn more →</a>
        </div>
      </div>
      <div class="col-md-4">
        <div class="p-4 bg-light rounded-3 h-100">
          <h3 class="fw-bold mb-2">Fit for Life</h3>
          <p class="mb-3">Low-impact movement for every age and stage. Community-driven.</p>
          <a class="text-decoration-none fw-semibold" href="{{ '/programs/#fitforlife' | relative_url }}">Learn more →</a>
        </div>
      </div>
    </div>
  </div>
</section>

<!-- TIMETABLES CTA -->
<section class="py-4 border-top border-bottom" style="background: var(--bg-elev);">
  <div class="container d-flex flex-wrap justify-content-between align-items-center gap-3">
    <div>
      <div class="small text-uppercase text-muted">Plan your week</div>
      <h2 class="h4 mb-0">Class Timetables</h2>
    </div>
    <div class="d-flex gap-2">
      <a class="btn btn-outline-primary" href="{{ '/timetables/' | relative_url }}">View Timetables</a>
      <a class="btn btn-primary" href="https://legitfit.com/authenticate/signup/lornabbohemianfitness" target="_blank" rel="noopener">Book a Trial</a>
    </div>
  </div>
</section>

<!-- REVIEWS & GALLERY -->
<section class="py-5 bg-light">
  <div class="container">
    <div class="row g-4 align-items-center">
      <div class="col-lg-6">
        <h2 class="fw-bold mb-2">Client Reviews</h2>
        <p class="mb-4">Real words from our community.</p>
        <div class="ratio ratio-16x9 rounded overflow-hidden shadow">
          <!-- Set site.google_reviews_embed_url in _config.yml -->
          <iframe src="{{ site.google_reviews_embed_url }}" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
      </div>
      <div class="col-lg-6">
        <h2 class="fw-bold mb-3">See the Gym</h2>
        <p class="mb-4">A quick look at our space and classes.</p>
        <div class="row g-3">
          {% for i in (1..6) %}
            <div class="col-6">
              <!-- Replace bg-secondary with real images when ready -->
              <div class="ratio ratio-4x3 bg-secondary rounded"></div>
            </div>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</section>

<!-- CONTACT -->
<section class="py-5">
  <div class="container text-center">
    <h2 class="h3 mb-2">Ready to start</h2>
    <p class="text-muted mb-3">Tell us your goals and we will guide you from day one.</p>
    <div class="d-flex gap-2 justify-content-center">
      <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Message the Coach</a>
      <a class="btn btn-outline-secondary" href="{{ '/about/' | relative_url }}">About Us</a>
    </div>
  </div>
</section>

<!-- Page styles to match “Zeus” hero look -->
<style>
  .hero {
    /* simple gradient with optional background image hook */
    background:
      linear-gradient(180deg, rgba(0,0,0,.45), rgba(0,0,0,.45)),
      var(--hero-image, radial-gradient(60% 100% at 50% 0%, #1d1f29 0%, #101218 60%, #0b0d12 100%));
    color: #fff;
  }
  .hero .btn-outline-light { border-color: rgba(255,255,255,.6); color: #fff; }
  .hero .btn-outline-light:hover { background: rgba(255,255,255,.1); }
</style>
