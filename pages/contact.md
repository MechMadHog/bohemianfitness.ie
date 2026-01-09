---
layout: default
title: Contact
permalink: /contact/
description: Get in touch with Bohemian Fitness in Mullingar. Find our studio, open directions in Google Maps, or contact us by email and social media.
---

<section class="py-5 page-min" id="contact">
  <div class="container" style="max-width: 80%;">
    <!-- Header -->
    <header class="mb-4 text-center">
      <h1 class="mb-2">Contact</h1>
      <p class="text-muted mb-0">Quick replies. Clear handovers. No drama.</p>
    </header>
    <!-- Hero / Info Card -->
    <div class="mb-4">
      <div class="card border-0 shadow-sm mx-auto" style="max-width: 960px;">
        <div class="card-body p-4 p-md-5">
          <div class="d-flex flex-column flex-lg-row align-items-center gap-4">
            <!-- Logo -->
            <div class="text-center text-lg-start" style="min-width: 160px;">
              <img
                src="{{ '/assets/images/lorna-logo.png' | relative_url }}"
                alt="Bohemian Fitness logo"
                class="img-fluid"
                style="max-height: 110px;"
              >
            </div>
            <!-- Intro -->
            <div class="text-center text-lg-start">
              <h2 class="h4 fw-bold mb-2">Let’s chat</h2>
              <p class="mb-0 text-muted">
                If you’re not sure where to start, send a message and we’ll guide you towards the right class, plan, or timetable.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Address + Map -->
    <div class="row g-4 align-items-start">
      <div class="col-12 col-lg-10 mx-auto">
        <div class="card border-0 shadow-sm">
          <div class="card-body p-4 p-md-5">
            <div class="row g-3 align-items-start">
              <!-- Studio column -->
              <div class="col-12 col-lg-5">
                <h3 class="h6 mb-2">Studio</h3>
                <address class="mb-2">
                  Austin Friars St,<br>
                  Mullingar, Co. Westmeath,<br>
                  N91 X221
                </address>
                <!-- Direct link -->
                <div class="d-flex gap-2 flex-wrap">
                  <a
                    class="btn btn-sm btn-outline-primary"
                    target="_blank"
                    rel="noopener"
                    href="https://www.google.com/maps?q=Bohemian+Fitness,+Austin+Friars+St,+Mullingar,+N91+X221"
                  >
                    Open in Google Maps
                  </a>
                </div>
                <!-- Larger icons (fills whitespace) -->
                <nav class="d-flex gap-4 align-items-center mt-3" aria-label="Contact links">
                  <a
                    href="mailto:lbdfitness20@gmail.com"
                    class="text-decoration-none"
                    aria-label="Email"
                    rel="me noopener"
                  >
                    <i class="fa fa-envelope fa-2x"></i>
                  </a>
                  <a
                    href="https://www.instagram.com/lornab_fitness/"
                    class="text-decoration-none"
                    aria-label="Instagram"
                    target="_blank"
                    rel="me noopener"
                  >
                    <i class="fa-brands fa-instagram fa-2x"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/p/LorNa-B-Bohemian-Fitness-100027198982525/"
                    class="text-decoration-none"
                    aria-label="Facebook"
                    target="_blank"
                    rel="me noopener"
                  >
                    <i class="fa-brands fa-facebook fa-2x"></i>
                  </a>
                </nav>
              </div>
              <!-- Map column -->
              <div class="col-12 col-lg-7">
                <div class="ratio ratio-16x9 rounded overflow-hidden">
                  <!-- Google Maps Embed for the address above -->
                  <iframe
                    src="https://www.google.com/maps?q=Austin+Friars+St,+Mullingar,+Co.+Westmeath,+N91+X221&output=embed"
                    loading="lazy"
                    referrerpolicy="no-referrer-when-downgrade"
                    allowfullscreen
                    title="Bohemian Fitness location map"
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Contact Form -->
    <div class="row justify-content-center" id="enquiry-form">
      <div class="col-12 col-lg-8">
        <div class="card border-0 shadow-sm mt-4">
          <div class="card-body p-4 p-md-5">
            <header class="mb-4 text-center">
              <h2 class="fw-bold mb-2">Send an enquiry</h2>
              <p class="text-muted mb-0">Tell us a bit about your goals and we’ll point you in the right direction.</p>
            </header>
            <form action="https://formspree.io/f/meeejoyd" method="POST" class="needs-validation" novalidate>
              <!-- name -->
              <div class="mb-3">
                <label for="name" class="form-label">Your name</label>
                <input type="text" name="name" id="name" class="form-control" autocomplete="name" required>
                <div class="invalid-feedback">Please enter your name.</div>
              </div>
              <!-- email -->
              <div class="mb-3">
                <label for="email" class="form-label">Your email</label>
                <input type="email" name="_replyto" id="email" class="form-control" autocomplete="email" required>
                <div class="invalid-feedback">Please enter a valid email address.</div>
              </div>
              <!-- message -->
              <div class="mb-3">
                <label for="message" class="form-label">Message</label>
                <textarea name="message" id="message" class="form-control" rows="5" required></textarea>
                <div class="invalid-feedback">Please add a short message.</div>
              </div>
              <div class="d-flex justify-content-center">
                <button type="submit" class="btn btn-primary px-4">Send message</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>
