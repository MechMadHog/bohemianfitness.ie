---
layout: default
title: Contact
permalink: /contact/
noindex: true                # adds the meta robots tag
sitemap: false               # keeps it out of jekyll-sitemap
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
              <img
                src="{{ '/assets/images/lorna-logo.png' | relative_url }}"
                alt="Bohemian Fitness logo"
                class="img-fluid"
                style="max-height: 140px;"
              >
            </div>
            <!-- Copy -->
            <div class="flex-grow-1">
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
                <a
                  class="btn btn-sm btn-outline-primary"
                  target="_blank"
                  rel="noopener"
                  href="https://www.google.com/maps?q=Bohemian+Fitness,+Austin+Friars+St,+Mullingar,+N91+X221"
                >
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
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2418.101777465622!2d-7.34176852330964!3d53.525078972339866!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x485daf3a9b37fef1%3A0x2f5a3ad91c9d0844!2sBohemian%20Fitness!5e0!3m2!1sen!2sie!4v1761259391937!5m2!1sen!2sie"
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
    <!-- Contact Form -->
    <div class="row justify-content-center" id="enquiry-form">
      <div class="col-12 col-lg-8">
        <!-- ✅ Added header above form -->
        <header class="mb-4 text-center">
          <h2 class="fw-bold mb-2">Send an enquiry</h2>
          <p class="text-muted mb-0">Tell us a bit about your goals and we’ll point you in the right direction.</p>
        </header>
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
            <input type="email" name="_replyto" id="email" class="form-control" autocomplete="email" required>
            <div class="invalid-feedback">Please enter a valid email.</div>
          </div>
          <!-- message -->
          <div class="mb-3">
            <label for="message" class="form-label">How can we help?</label>
            <textarea name="message" id="message" class="form-control" rows="6" required></textarea>
            <div class="invalid-feedback">Please enter a message.</div>
          </div>
          <button type="submit" class="btn btn-primary w-100">Send enquiry</button>
        </form>
        <!-- ✅ GDPR note -->
        <div class="mt-4 p-3 rounded-3 bg-light" style="border:1px solid rgba(0,0,0,.08);">
          <h3 class="h6 text-uppercase text-muted mb-2">Privacy (GDPR)</h3>
          <p class="mb-2">
            When you submit this form, your details are used only to respond to your enquiry.
            We do not sell or share your information with third parties.
          </p>
          <p class="mb-0">
            If you decide to join Bohemian Fitness, you will sign a membership contract.
            If you do not join, your details are not kept.
          </p>
        </div>

      </div>
    </div>
  </div>
</section>

<script>
// Example starter for bootstrap validation (optional)
(() => {
  const forms = document.querySelectorAll('.needs-validation');
  Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
      if (!form.checkValidity()) {
        event.preventDefault();
        event.stopPropagation();
      }
      form.classList.add('was-validated');
    }, false);
  });
})();
</script>

<!-- Local Business Schema -->
<script type="application/ld+json">
{
  "@context":"https://schema.org",
  "@type":"HealthClub",
  "name":"Bohemian Fitness",
  "url":"{{ site.url }}",
  "address":{
    "@type":"PostalAddress",
    "streetAddress":"Austin Friars St",
    "addressLocality":"Mullingar",
    "addressRegion":"Co. Westmeath",
    "postalCode":"N91 X221",
    "addressCountry":"IE"
  },
  "email":"lbdfitness20@gmail.com"
  /* "telephone": "+353XXXXXXXXX" */
}
</script>
