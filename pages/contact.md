---
layout: default
title: Contact
permalink: /contact/
noindex: true                # adds the meta robots tag
sitemap: false               # keeps it out of jekyll-sitemap
---

<!-- CONTACT CONTENT -->
<section class="py-5 section--light">
  <div class="container">
    <!-- LOGO -->
    <div class="text-center mb-5">
      <img
        src="{{ '/assets/images/lorna-logo.png' | relative_url }}"
        alt="Bohemian Fitness logo"
        class="img-fluid"
        style="max-height:140px;"
      >
    </div>
    <!-- PAGE INTRO -->
    <header class="text-center mb-5">
      <h1 class="fw-bold mb-2">Get in Touch</h1>
      <p class="text-muted mb-0">
        Have a question, want to try a class, or need a bit of guidance?
      </p>
    </header>
    <!-- FORM -->
    <div class="row justify-content-center" id="enquiry-form">
      <div class="col-12 col-lg-8">
        <header class="mb-4 text-center">
          <h2 class="fw-bold mb-2">Send an enquiry</h2>
          <p class="text-muted mb-0">
            Tell us a bit about your goals and we’ll point you in the right direction.
          </p>
        </header>
        <form
          action="https://formspree.io/f/xblzyjdn"
          method="POST"
          class="needs-validation"
          novalidate
        >
          <div class="mb-3">
            <label for="name" class="form-label fw-semibold">Name</label>
            <input type="text" class="form-control" id="name" name="name" required>
          </div>
          <div class="mb-3">
            <label for="email" class="form-label fw-semibold">Email</label>
            <input type="email" class="form-control" id="email" name="_replyto" required>
          </div>
          <div class="mb-3">
            <label for="message" class="form-label fw-semibold">Message</label>
            <textarea class="form-control" id="message" name="message" rows="5" required></textarea>
          </div>
          <div class="d-grid mt-4">
            <button type="submit" class="btn btn-primary btn-lg">
              Send message
            </button>
          </div>
        </form>
      </div>
    </div>

  </div>
</section>

<!-- GDPR NOTICE -->
<section class="py-4 section--light">
  <div class="container container--narrow">
    <div class="p-3 rounded-3" style="background:#fff;border:1px solid rgba(0,0,0,.08);">
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
</section>
