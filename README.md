# 🏋️ Bohemian Fitness - Jekyll + Bootstrap Website

This repository contains the complete source code for the **Bohemian Fitness** website; a static, image-rich, responsive site built with **Jekyll** and **Bootstrap 5** (no Sass).  
It serves as the official online presence of *Bohemian Fitness, Mullingar*, highlighting our gym, team, classes, and membership details.

---

## 🔧 Tech Stack

- **Jekyll** - Static site generator
- **Bootstrap 5.3** - Responsive grid, components & JS features
- **Vanilla CSS + JS** - No Sass or build pipeline
- **GitHub Pages** - Hosting
- **YAML Data Files** - For footer, navigation, and content control

---

## 🧱 Site Structure

```
.
├── _config.yml                # Jekyll config, collections & nav
├── _data/
│   └── footer.yml             # Footer text & links (editable)
├── _includes/
│   ├── head.html              # Head meta + CSS/JS includes
│   ├── header.html            # Navbar with dropdown
│   ├── footer.html            # 4-column footer
│   ├── hero.html              # Full-width hero section
│   ├── gallery.html           # Lightbox gallery with thumbnails
│   ├── testimonials.html      # Bootstrap carousel
│   ├── accordion.html         # Programmes accordion
│   ├── map.html               # Embedded Google Map
│   └── cookie-consent.html    # Simple GDPR cookie banner
├── _layouts/
│   ├── default.html           # Base layout (header/footer wrapper)
│   ├── page.html              # For most content pages
│   ├── home.html              # Homepage with repeatable hero sections
│   ├── team.html              # Individual team profile
│   └── class.html             # Individual class page
├── _team/                     # Staff profiles (Lorna, Claudio, Sarah)
├── _classes/                  # Each class as a Markdown file
├── assets/
│   ├── css/main.css           # Main stylesheet
│   ├── js/main.js             # JS helpers (cookie logic, smooth scroll)
│   └── images/                # Optimized hero & gallery images
├── pages/
│   ├── about/                 # What is Bohemian Fitness, Our Gym, Team
│   ├── programmes.md          # Programmes overview + accordion
│   ├── membership.md          # Pricing & packages
│   ├── contact.md             # Contact info + form + map
│   ├── privacy-policy.md      # GDPR compliance
│   ├── terms.md               # Terms & Conditions
│   ├── cookies.md             # Cookie policy
│   └── data-requests.md       # Data access/removal requests
├── home.md                    # Landing page (rename to index.md when live)
└── _posts/                    # Blog posts (Jekyll default)
```

---

## 💡 Key Features

### 🧭 Navigation
- Responsive header with dropdown under **About Us**
- Includes: *What is Bohemian Fitness*, *Our Gym*, *Meet the Team*

### 🦸‍♀️ Team & Classes
- Team and class pages auto-generated from Jekyll collections
- Individual Markdown files per profile/class

### 🖼️ Image-Rich Layout
- Full-width hero sections for major pages
- Lightbox gallery (thumbnails → modal carousel)
- Testimonials carousel powered by Bootstrap
- All images lazy-loaded and size-optimized

### ⚖️ GDPR-Ready
- Privacy, Cookies, and Terms pages included
- Cookie consent banner (accept/reject stored in localStorage)
- Analytics/scripts only load if user accepts

### 🦶 Footer Widgets
- Configured via `_data/footer.yml`
- Four editable columns: About, Links, Contact, Socials

---

## 🚀 Local Development

### 1️⃣ Install dependencies
```bash
bundle install
```

### 2️⃣ Run local server
```bash
bundle exec jekyll serve
```

View at [http://localhost:4000](http://localhost:4000)

Any change to Markdown, HTML, or data files will auto-reload.

---

## 🪄 Deployment

This site is designed for **GitHub Pages** hosting.  
To publish:

1. Commit and push changes to your repo’s `main` branch.
2. Ensure GitHub Pages is enabled in repo settings.
3. Visit the live URL (e.g. `https://bohemianfitness.ie`).

When going live, **rename `home.md` → `index.md`**.

---

## 🖼️ Image Guidelines

| Type | Size (max) | Notes |
|------|-------------|-------|
| Hero banners | 1920 × 900 px | Use high-contrast photos |
| Gallery thumbs | 400 × 300 px | Compressed JPEGs |
| Team portraits | 800 × 1000 px | Centered, consistent |
| Content images | ≤ 1200 px wide | Add `loading="lazy"` |

Compress all photos before uploading — aim for < 300 KB per image.

---

## 🧩 Customization

- Edit `_data/footer.yml` to update footer content.
- Update `_config.yml` for navigation and site info.
- Replace hero and gallery image paths in each page’s front matter.
- Modify `assets/css/main.css` for color or typography changes.

---

## 🧰 Maintenance Checklist

- [ ] Check all internal links resolve correctly
- [ ] Verify cookie banner + GDPR pages
- [ ] Test responsiveness on mobile
- [ ] Optimize all hero and gallery images
- [ ] Run Lighthouse performance & accessibility audit
- [ ] Confirm map embed and forms function properly

---

## 🧑‍💻 Author & Credits

Built by **[Mike MacDonagh](https://github.com/MechMadHog)**  
Design and structure for **Bohemian Fitness, Mullingar**  
Powered by *Jekyll + Bootstrap 5*.

---

### 📝 License
This project is distributed for portfolio and educational purposes only.  
All written and photographic content © Bohemian Fitness unless otherwise noted.
