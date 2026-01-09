# 🏋️ Bohemian Fitness – Jekyll + Bootstrap Website

This repository contains the source code for the **Bohemian Fitness** website, the official online presence of *Bohemian Fitness, Mullingar*.

The site is designed to clearly present the gym’s ethos, facilities, trainers, classes, programmes, and membership options in a welcoming, easy-to-navigate format that works across all devices. It prioritises clarity, visual storytelling, and fast load times so potential members get an accurate sense of the gym before they ever walk through the door.

The website is implemented as a responsive, image-led **static site** built with **Jekyll** and **Bootstrap 5**, allowing for a clean structure, simple content updates, and low-maintenance hosting via GitHub Pages.

---

## 🔧 Tech Stack

- **Jekyll** – Static site generator  
- **Bootstrap 5.3** – Responsive grid, components & JS utilities  
- **Vanilla CSS & JavaScript** – No Sass, no build pipeline  
- **GitHub Pages** – Hosting  
- **YAML data files** – Footer content and configuration  

---

## 🧱 Site Structure

```
.
├── _config.yml                 # Jekyll configuration (site settings, plugins)
├── _data/
│   └── footer.yml              # Footer content (address, links, socials)
├── _includes/
│   ├── footer.html             # Footer layout
│   ├── head.html               # Meta tags, CSS & JS includes
│   ├── header.html             # Main navigation / navbar
│   └── post_card.html          # Blog post preview card
├── _layouts/
│   ├── default.html            # Base layout (header + footer wrapper)
│   ├── liveprod.html           # Production layout variant
│   └── post.html               # Blog post layout
├── _posts/
│   ├── 2025-12-08-Welcome-...   # Blog posts (Jekyll standard)
│   ├── 2025-12-15-Tweleve-W...
│   └── 2026-01-08-Fit-for-Lif...
├── assets/
│   ├── css/
│   │   └── styles.css          # Main site stylesheet
│   ├── images/                 # All site images (heroes, gallery, content)
│   └── js/
│       ├── main.js             # General JS (UI helpers, behaviour)
│       └── search.js           # Blog search functionality
├── blog/
│   └── index.html              # Blog index page
├── categories/
│   └── index.html              # Blog categories archive
├── tags/
│   └── index.html              # Blog tags archive
├── pages/
│   ├── about.md                # About Bohemian Fitness
│   ├── classes.md              # Classes overview
│   ├── contact.md              # Contact details + map
│   ├── pricing.md              # Membership pricing
│   ├── timetables.md           # Weekly class timetables
│   └── wellness.md             # Wellness services
├── team/
│   ├── claudio.md              # Individual trainer profile
│   ├── ger.md
│   ├── lorna.md
│   └── sarah.md
├── .gitignore                  # Git ignore rules
├── CNAME                       # Custom domain configuration
├── ComingSoon.md               # Temporary holding page
├── index.md                    # Homepage content
├── LICENSE                     # License file
└── README.md                   # Project documentation
```

---

## 💡 Key Features

### 🧭 Navigation
- Responsive header with dropdown menus
- Clear separation of core pages (About, Classes, Pricing, Timetables, Wellness, Contact)

### 🗓️ Timetables
- Timetables are maintained in `pages/timetables.md`
- Uses Bootstrap tables with horizontal scroll on mobile
- Class types are colour-coded using badge styles

### 🦸‍♀️ Team Pages
- One Markdown file per trainer in `/team/`
- Easy to add or remove staff without touching layouts

### 🖼️ Image-Led Layout
- Image-forward sections throughout the site
- All images stored centrally in `/assets/images/`
- No external image dependencies

### 🦶 Footer
- Footer content managed via `_data/footer.yml`
- Layout handled in `_includes/footer.html`
- Keeps contact details and links editable without touching markup

---

## 🚀 Local Development

### 1️⃣ Install dependencies
```bash
bundle install
```

### 2️⃣ Run the site locally
```bash
bundle exec jekyll serve
```

The site will be available at:
```
http://localhost:4000
```

---

## 📌 Notes

- This repository is intentionally **simple and inspectable**
- No CMS, no database, no JavaScript frameworks
- Content is written in Markdown and rendered via Jekyll
- Styling is handled with a single CSS file to avoid complexity

---

## 📄 License

See `LICENSE` for details.
