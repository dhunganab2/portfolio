# Bijay Dhungana - Personal Portfolio

A modern, responsive portfolio website built with React showcasing my projects, experience, research, and skills.

🌐 **Live Site**: [https://dhunganab2.github.io/portfolio](https://dhunganab2.github.io/portfolio)

---

## ✨ Features

- 🎨 **Dark/Light Mode Toggle** - Smooth theme switching with persistent preferences
- 📱 **Fully Responsive** - Works seamlessly on desktop, tablet, and mobile
- ⚡ **Fast Performance** - Optimized React components
- 🎯 **Clean UI** - Minimalist design with blue accent colors
- 🚀 **Auto Deployment** - GitHub Actions CI/CD pipeline
- 📄 **PDF Downloads** - Integrated CV and research paper downloads

---

## 🏗️ Project Structure

```
portfolio/
├── public/
│   ├── 01_19979_cis-4.pdf           # Research paper
│   ├── BijayUpdatedCv5.pdf          # CV/Resume
│   ├── 404.html                      # Custom 404 page
│   ├── index.html                    # HTML template
│   └── manifest.json                 # PWA manifest
│
├── src/
│   ├── components/
│   │   ├── About.js                  # About section with skills
│   │   ├── Contact.js                # Contact form
│   │   ├── Experience.js             # Work experience + education
│   │   ├── Homepage.js               # Hero section
│   │   ├── navbar.js                 # Navigation bar
│   │   ├── Projects.js               # Projects showcase
│   │   ├── Research.js               # Research publications
│   │   └── ThemeToggle.js            # Dark/Light mode toggle
│   │
│   ├── assets/
│   │   └── images/
│   │       └── Profile.jpeg          # Profile picture
│   │
│   ├── App.js                        # Main app component
│   ├── index.js                      # React entry point
│   └── styles.css                    # Global styles
│
├── .github/
│   └── workflows/
│       └── deploy.yml                # GitHub Actions deployment
│
├── .gitignore                        # Git ignore rules
├── .nojekyll                         # GitHub Pages config
├── package.json                      # Dependencies
└── README.md                         # This file
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/dhunganab2/portfolio.git
   cd portfolio
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm start
   ```
   Opens at [http://localhost:3000](http://localhost:3000)

4. **Build for production**
   ```bash
   npm run build
   ```

---

## 🎨 Color Scheme

**Monochrome Gray + Accent Blue** - Ultra minimal design

### Dark Mode (Default)
- Primary: `#60A5FA` (Soft blue)
- Secondary: `#93C5FD` (Lighter blue)
- Background: `#1F1F1F` (Almost black)
- Text: `#E5E5E5` (Off-white)

### Light Mode
- Primary: `#2563EB` (Deep blue)
- Secondary: `#3B82F6` (Medium blue)
- Background: `#FAFAFA` (Off-white)
- Text: `#18181B` (Almost black)

---

## 📦 Technologies Used

- **Frontend**: React 18
- **Styling**: CSS3 with CSS Variables
- **Fonts**: Manrope, Fira Code (via Google Fonts)
- **Deployment**: GitHub Pages
- **CI/CD**: GitHub Actions

---

## 📝 Sections

1. **Home** - Hero section with introduction
2. **About** - Personal info and technical skills
3. **Experience** - Education and work experience
4. **Projects** - Portfolio of projects with live demos
5. **Research** - Academic publications
6. **Contact** - Get in touch form with social links

---

## 🔧 Customization

### Update Personal Information

Edit the component files in `src/components/`:
- `About.js` - Bio and skills
- `Experience.js` - Education and work history
- `Projects.js` - Project details
- `Research.js` - Publications
- `Contact.js` - Contact info

### Change Colors

Modify CSS variables in `src/styles.css`:
```css
:root {
  --primary-color: #yourcolor;
  --secondary-color: #yourcolor;
  /* ... more variables */
}
```

### Replace Profile Picture

Replace `src/assets/images/Profile.jpeg` with your photo

### Update CV/Resume

Replace `public/BijayUpdatedCv5.pdf` with your resume

---

## 🚀 Deployment

This project automatically deploys to GitHub Pages using GitHub Actions.

### Automatic Deployment
1. Push to `main` branch
2. GitHub Actions builds the project
3. Deploys to `gh-pages` branch
4. Live at: `https://dhunganab2.github.io/portfolio`

### Manual Deployment
```bash
npm run build
# Deploy the build folder to your hosting service
```

---

## 📄 License

© 2024-2025 Bijay Dhungana. All rights reserved.

---

## 🤝 Connect

- **GitHub**: [@dhunganab2](https://github.com/dhunganab2)
- **LinkedIn**: [bijay-dhungana](https://linkedin.com/in/bijay-dhungana)
- **Email**: dhunganab2@nku.edu

---

Made with ❤️ using React
