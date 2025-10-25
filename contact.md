---
layout: default
title: Contact
permalink: /contact/
---

<section class="py-5 page-min" id="contact">
  <div class="container">
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
              <!-- Replace src with your temp logo -->
              <img src="{{ '/assets/images/bf-temp-logo.png' | relative_url }}" alt="Bohemian Fitness logo" class="img-fluid" style="max-height: 96px;">
            </div>
            <!-- Copy -->
            <div class="flex-grow-1">
              <p class="text-uppercase small mb-1 text-muted">Site Coming Soon</p>
              <h2 class="h4 mb-2">Join Our Tribe, Find Your Vibe</h2>
              <p class="mb-3">
                Bohemian Fitness is led by <strong>Lorna</strong>, a health and wellness professional with a
                <strong>BSc (Hons) in Sports Strength &amp; Conditioning</strong>. She’s also a pre and post-natal training
                specialist who supports clients at every stage with smart, safe programming and a welcoming community.
              </p>
              <p class="mb-3">
                If you want coaching that blends strength, mobility and accountability, you’ll fit right in.
                Expect small group sessions, clear progress tracking and a timetable that works for real life.
                Beginners are always welcome and every workout can be tailored to your level.
              </p>
              <!-- Promo (optional) -->
              <div class="alert alert-warning border-0 mb-3" role="note">
                <strong>12-Week End of Summer Challenge</strong> — starts <u>8th September</u>, runs for 12 weeks.
                Need a supportive community to hit your goals? Fill out the form below and join us.
              </div>
              <div class="d-flex flex-wrap gap-2">
                <a href="#enquiry-form" class="btn btn-primary">Join Today</a>
                <a href="tel:+353857432964" class="btn btn-outline-secondary">Call Now</a>
                <a href="mailto:lbdfitness20@gmail.com?subject=Hi%20Lorna" class="btn btn-outline-secondary">Email Lorna</a>
              </div>
            </div>
          </div>
          <hr class="my-4">
          <!-- Address + Map -->
          <div class="row g-3 align-items-start">
            <div class="col-12 col-lg-5">
              <h3 class="h6 mb-2">Studio</h3>
              <address class="mb-2">
                Austin Friars St,<br>
                Mullingar, Co. Westmeath,<br>
                N91 X221
              </address>
              <!-- Optional direct links -->
              <div class="d-flex gap-2 flex-wrap">
                <a class="btn btn-sm btn-outline-primary" target="_blank" rel="noopener" href="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1185.8970766388447!2d-7.335678446666141!3d53.52573308156449!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485dc102db7976c1%3A0xfdec4f819396272!2sLor&#39;%20Na%20B%20Bohemian%20Fitness!5e0!3m2!1sen!2sie!4v1761259391937!5m2!1sen!2sie">
                  Open in Google Maps
                </a>
                <!-- If you have a reviews link, add it here -->
                <!-- <a class="btn btn-sm btn-outline-secondary" target="_blank" rel="noopener" href="YOUR_GOOGLE_REVIEWS_URL">Read Reviews</a> -->
              </div>
            </div>
            <div class="col-12 col-lg-7">
              <div class="ratio ratio-16x9 rounded overflow-hidden">
                <!-- Google Maps Embed for the address above -->
                <iframe
                  src="https://www.google.com/maps?q=Austin+Friars+St,+Mullingar,+Co.+Westmeath,+N91+X221&output=embed"
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                  title="Bohemian Fitness location"></iframe>
              </div>
            </div>
          </div>
        </div>
        <div class="card-footer bg-transparent text-center small text-muted">
          © 2025 Bohemian Fitness
        </div>
      </div>
    </div>
    <!-- Contact Form -->
    <div class="row justify-content-center" id="enquiry-form">
      <div class="col-12 col-lg-8">
        <form action="https://formspree.io/f/xblzyjdn" method="POST" class="needs-validation" novalidate>
          <!-- name -->
          <div class="mb-3">
            <label for="name" class="form-label">Your name</label>
            <input type="text" name="name" id="name" class="form-control" autocomplete="name" required>
            <div class="invalid-feedback">Please enter your name.</div>
          </div>
          <!-- email -->
          <div class="mb-3">
            <label for="email" class="form-label">Your email</label>
            <input type="email" name="_replyto" id="email" class="form-control" inputmode="email" autocomplete="email" required>
            <div class="invalid-feedback">A valid email helps me reply.</div>
          </div>
          <!-- message -->
          <div class="mb-3">
            <label for="message" class="form-label">Your message</label>
            <textarea name="message" id="message" rows="6" class="form-control" required></textarea>
            <div class="invalid-feedback">Please add a short message.</div>
          </div>
          <!-- subject + honeypot -->
          <input type="hidden" name="_subject" value="Website contact from bohemianfitness.ie">
          <div class="visually-hidden" aria-hidden="true">
            <label for="website">Website</label>
            <input type="text" id="website" name="website" tabindex="-1" autocomplete="off">
          </div>
          <!-- consent -->
          <div class="form-check mb-3">
            <input class="form-check-input" type="checkbox" value="yes" id="consent" required>
            <label class="form-check-label" for="consent">
              I’m happy for you to contact me regarding this enquiry.
            </label>
            <div class="invalid-feedback">Please confirm you’re OK with a reply.</div>
          </div>
          <!-- submit -->
          <button type="submit" class="btn btn-primary">
            <span class="submit-label">Send message</span>
            <span class="spinner-border spinner-border-sm align-text-bottom ms-2 d-none" role="status" aria-hidden="true"></span>
          </button>
          <p class="small text-muted mt-2 mb-0">
            Prefer email? <a href="mailto:lbdfitness20@gmail.com?subject=Hi%20Lorna" class="text-decoration-none">lbdfitness20@gmail.com</a>
          </p>
        </form>
      </div>
    </div>
  </div>
</section>
<!-- Bootstrap validation + submit UX -->
<script>
  (function () {
    'use strict';
    const forms = document.querySelectorAll('.needs-validation');
    Array.prototype.slice.call(forms).forEach(function(form){
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault();
          event.stopPropagation();
        } else {
          // simple UX: show spinner, lock button
          const btn = form.querySelector('button[type="submit"]');
          const spinner = btn.querySelector('.spinner-border');
          if (spinner) spinner.classList.remove('d-none');
          btn.disabled = true;
        }
        form.classList.add('was-validated');
      }, false);
    });
  })();
</script>

<!-- LocalBusiness JSON-LD (update fields as needed) -->
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "HealthClub",
  "name": "Bohemian Fitness",
  "image": "{{ '/assets/images/branding/logo.png' | relative_url }}",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Austin Friars St",
    "addressLocality": "Mullingar",
    "addressRegion": "Co. Westmeath",
    "postalCode": "N91 X221",
    "addressCountry": "IE"
  },
  "url": "{{ site.url | default: 'https://bohemianfitness.ie' }}",
  "email": "lbdfitness20@gmail.com"
  /* "telephone": "+353XXXXXXXXX" */ 
}
</script>


