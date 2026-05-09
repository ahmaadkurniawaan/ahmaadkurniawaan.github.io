# Portfolio Ahmad Kurniawan — Neobrutalism Design

Portfolio website pribadi Ahmad Kurniawan dibangun dengan **Astro JS** dan **Neobrutalism Design System**.

🔗 **Live**: [ahmaadkurniawaan.github.io](https://ahmaadkurniawaan.github.io)

## Tech Stack

- **Framework**: Astro JS (Static Site Generator)
- **Styling**: Pure CSS3 dengan Neobrutalism Design System
- **Content**: JSON files via Astro Content Collections
- **Deployment**: GitHub Pages + GitHub Actions

## Development

```bash
# Install dependencies
npm install

# Start development server (localhost:4321)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
src/
├── pages/index.astro          # Main page
├── layouts/BaseLayout.astro   # Base HTML layout
├── components/
│   ├── Navigation.astro       # Fixed navigation bar
│   ├── Hero.astro             # Hero section
│   ├── About.astro            # About section
│   ├── Experience.astro       # Experience timeline
│   ├── Projects.astro         # Projects grid + filtering
│   ├── Skills.astro           # Skills showcase
│   ├── Certifications.astro   # Certifications display
│   ├── Contact.astro          # Contact form
│   ├── Footer.astro           # Footer
│   └── ui/                    # Reusable UI components
├── content/                   # Content Collections (JSON)
│   ├── projects/              # 18 project files
│   ├── experiences/           # Work experiences
│   ├── skills/                # Skills data
│   └── certifications/        # Certifications data
├── styles/
│   ├── global.css             # CSS reset & base styles
│   └── neobrutalism.css       # Neobrutalism design system
public/
└── assets/                    # Images, icons, screenshots
```

## Content Management

### Menambah Project Baru

Buat file JSON baru di `src/content/projects/`:

```json
{
  "title": "Nama Project",
  "description": "Deskripsi singkat project",
  "category": "Healthcare|Education|E-Commerce|Corporate",
  "image": "/assets/project/screenshot.png",
  "link": "https://example.com",
  "technologies": ["Laravel", "Vue.js"],
  "year": 2024
}
```

### Update Experience

Edit `src/content/experiences/experiences.json`

### Update Skills

Edit `src/content/skills/skills.json`

### Update Certifications

Edit `src/content/certifications/certifications.json`

## Deployment

Push ke branch `main` akan otomatis trigger GitHub Actions untuk build dan deploy ke GitHub Pages.

## Design System

Warna utama:
- Hitam: `#000000`
- Putih: `#FFFFFF`
- Biru: `#4339f2`

Karakteristik Neobrutalism:
- Border solid 4-6px
- Hard shadows (tanpa blur)
- Flat colors (tanpa gradient)
- Bold typography
- High contrast
