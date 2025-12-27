# 🏋️ Bohemian Fitness – Jekyll + Bootstrap Website

This repository contains the source code for the **Bohemian Fitness** website, the official online presence of *Bohemian Fitness, Mullingar*.

The site is designed to clearly present the gym’s ethos, facilities, trainers, classes, programmes, and membership options in a welcoming, easy-to-navigate format that works across all devices. It prioritises clarity, visual storytelling, and fast load times to give potential members an accurate sense of the gym before they ever walk through the door.

The website is implemented as a responsive, image-led static site built with **Jekyll** and **Bootstrap 5**, allowing for a clean structure, simple content updates, and low-maintenance hosting via GitHub Pages.

---

## 🔧 Tech Stack

- **Jekyll** – Static site generator  
- **Bootstrap 5.3** – Responsive grid, components & JS features  
- **Vanilla CSS & JavaScript** – No Sass or build pipeline  
- **GitHub Pages** – Hosting  
- **YAML Data Files** – Footer, navigation, and content control  

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
- Includes *What is Bohemian Fitness*, *Our Gym*, and *Meet the Team*

### 🦸‍♀️ Team & Classes
- Auto-generated pages using Jekyll collections
- One Markdown file per trainer and per class

### 🖼️ Image-Led Layout
- Full-width hero sections
- Lightbox gallery with thumbnails and modal carousel
- Testimonials carousel powered by Bootstrap
- Lazy-loaded, size-optimised images throughout

### ⚖️ GDPR-Ready
- Privacy, Cookies, and Terms pages included
- Cookie consent banner (accept/reject stored in `localStorage`)
- Analytics or third-party scripts only load after consent

### 🦶 Footer Widgets
- Controlled via `_data/footer.yml`
- Four columns: About, Links, Contact, Socials

---

## 🚀 Local Development

### 1️⃣ Install dependencies
```bash
bundle install
