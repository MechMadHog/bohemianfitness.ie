---
layout: default
title: Our Gym
permalink: /our-gym/
noindex: true                # adds the meta robots tag
sitemap: false               # keeps it out of jekyll-sitemap
---

<section class="py-5 page-min">
  <div class="container">
    <header class="mb-4 text-center">
      <h1 class="mb-2">Our Gym</h1>
      <p class="text-muted mb-0">A practical space for strength, conditioning, and community.</p>
    </header>
    <div class="row g-4 align-items-center">
      <div class="col-lg-6">
        <p>
          The gym is set up for small group coaching: racks, bars, kettlebells, suspension trainers,
          sleds, and conditioning tools. Layout is simple so classes flow and everyone has room to work.
        </p>
        <ul>
          <li>Dedicated strength stations</li>
          <li>Kettlebells and suspension rigs</li>
          <li>Conditioning zone for Sweatcon blocks</li>
          <li>Clean, well-lit, and beginner-friendly</li>
        </ul>
      </div>
      <div class="col-lg-6">
        <div class="row g-3">
          {% for i in (1..6) %}
          <div class="col-6">
            <div class="ratio ratio-4x3 bg-secondary rounded"></div>
          </div>
          {% endfor %}
        </div>
      </div>
    </div>
    <div class="mt-5 text-center">
      <a class="btn btn-primary" href="{{ '/contact/' | relative_url }}">Book a visit</a>
      <a class="btn btn-outline-secondary" href="{{ '/timetables/' | relative_url }}">See timetables</a>
    </div>
  </div>
</section>
