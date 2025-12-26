# Aman Singh - Personal Portfolio

A modern, responsive personal portfolio website built with **React**, **Tailwind CSS**, and **Framer Motion**.

## 🚀 Technologies
- **Frontend**: React.js (Vite)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Netlify Ready

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd porotofile
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Run local development server**
   ```bash
   npm run dev
   ```
   The site will be available at `http://localhost:5173`.

## 📦 Deployment to Netlify

This project includes a `netlify.toml` file for easy deployment.

1. Push your code to GitHub.
2. Log in to [Netlify](https://www.netlify.com/).
3. Click **"Add new site"** > **"Import from existing project"**.
4. Select **GitHub** and choose your repository.
5. Netlify will detect the settings automatically (Build command: `npm run build`, Publish directory: `dist`).
6. Click **Deploy**.

## 📝 Customization

- **Personal Info**: Update `src/components/sections/About.jsx` and `Hero.jsx`.
- **Projects**: Modify the `projectsData` array in `src/components/sections/Projects.jsx`.
- **Skills**: Update `skillsData` in `src/components/sections/Skills.jsx`.
- **Experience**: Edit `experienceData` in `src/components/sections/Experience.jsx`.
- **Resume**: Replace `public/resume.pdf` with your actual resume file.

## 🎨 Theme

The website supports **Dark** and **Light** modes, adhering to the user's system preference by default or toggled manually via the navbar.

---
Built with ❤️ by [Your Name/Antigravity]
