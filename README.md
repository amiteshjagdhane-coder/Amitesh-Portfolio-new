# Amitesh Jagdhane — AML / KYC Portfolio

This portfolio is adapted from the supplied Ankit Singh React + Vite website template. It retains the original visual direction and motion components while replacing the profile, portrait, career history, skills, education, certifications and contact information with details from Amitesh Jagdhane's supplied resume.

## Run locally

Requirements: Node.js 20 or later.

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
npm run preview
```

## Deploy to GitHub Pages

The repository includes a GitHub Actions workflow at `.github/workflows/deploy.yml`. Push the project to the `main` branch and enable **Settings → Pages → Build and deployment → GitHub Actions** in the GitHub repository. The workflow builds the Vite app and publishes `dist/`.

The Vite base is relative (`./`) so the site can also be served from a GitHub Pages project path.
