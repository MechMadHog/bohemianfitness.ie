---
layout: default
title: Contact
permalink: /contact/
description: Get in touch with Bohemian Fitness in Mullingar. Find our studio, open directions in Google Maps, or contact us by email and social media.
---

<section class="section section--light page-min">
  <div class="container">
    <header class="mb-4 text-center">
      <h1 class="mb-2">Contact</h1>
      <p class="text-muted mb-0">
        Get in touch or find us at the studio.
      </p>
    </header>
    <div class="row g-3 align-items-start">
      <!-- Address + links -->
      <div class="col-12 col-lg-5">
        <h3 class="h6 mb-2">Studio</h3>
        <address class="mb-2">
          Austin Friars St,<br>
          Mullingar, Co. Westmeath,<br>
          N91 X221
        </address>
        <div class="d-flex flex-column gap-3">
          <div>
            <a
              class="btn btn-sm btn-outline-primary"
              target="_blank"
              rel="noopener"
              href="https://www.google.com/maps?q=Bohemian+Fitness,+Austin+Friars+St,+Mullingar,+N91+X221"
            >
              Open in Google Maps
            </a>
          </div>
          <nav
            class="d-flex gap-4 align-items-center"
            aria-label="Contact links"
          >
            <a
              href="mailto:lbdfitness20@gmail.com"
              aria-label="Email Bohemian Fitness"
              class="text-decoration-none"
            >
              <i class="fa fa-envelope fa-2x"></i>
            </a>
            <a
              href="https://www.instagram.com/lornab_fitness/"
              aria-label="Instagram"
              class="text-decoration-none"
              target="_blank"
              rel="me noopener"
            >
              <i class="fa-brands fa-instagram fa-2x"></i>
            </a>
            <a
              href="https://www.facebook.com/p/LorNa-B-Bohemian-Fitness-100027198982525/"
              aria-label="Facebook"
              class="text-decoration-none"
              target="_blank"
              rel="me noopener"
            >
              <i class="fa-brands fa-facebook fa-2x"></i>
            </a>
          </nav>
        </div>
      </div>
      <!-- Map -->
      <div class="col-12 col-lg-7">
        <div class="ratio ratio-16x9 rounded overflow-hidden">
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
    <!-- Contact form -->
    <section class="mt-5">
      <div class="row justify-content-center">
        <div class="col-12 col-lg-8">
          <h2 class="h5 mb-3 text-center">Send a message</h2>
          <form
            action="https://formspree.io/f/meeejoyd"
            method="POST"
            class="p-4 rounded-3"
          >
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                class="form-control"
                required
              >
            </div>
            <div class="mb-3">
              <label for="email" class="form-label">Email</label>
              <input
                type="email"
                id="email"
                name="_replyto"
                class="form-control"
                required
              >
            </div>
            <div class="mb-3">
              <label for="message" class="form-label">Message</label>
              <textarea
                id="message"
                name="message"
                rows="4"
                class="form-control"
                required
              ></textarea>
            </div>
            <div class="text-center">
              <button type="submit" class="btn btn-primary">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>

  </div>
</section>