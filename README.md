# Chamodya Rajapaksha – Developer Portfolio

React + Vite + Tailwind CSS + Framer Motion + Lucide React. Frontend only, no backend.

## Run it locally (Windows + VS Code)

1. Install **Node.js LTS** from https://nodejs.org (accept the defaults). Check it: open a terminal and run `node -v`.
2. Extract `Chamodya-Portfolio.zip` (right-click → Extract All). You get a `chamodya-portfolio` folder.
3. Open VS Code → **File → Open Folder** → choose `chamodya-portfolio`.
4. Open the terminal in VS Code (**Terminal → New Terminal**) and run:
   ```bash
   npm install
   npm run dev
   ```
5. Open the address it prints (usually http://localhost:5173).

Other commands: `npm run build` (production build into `dist/`) and `npm run preview` (serve that build).

## Things you must add yourself

| What | Where |
| --- | --- |
| Profile photo (a photo is already included) | `public/images/profile.jpg`. Replace the file, keep the name. If it is missing, a "CR" placeholder shows. |
| CV (PDF) | Add the PDF under `public/resume/`, then set `cv` in `src/data/site.js` to its public URL. The button stays disabled until a real CV path is configured. |
| Certificate images | Copy into `public/certificates/`, then set `image: '/certificates/yourfile.png'` in `src/data/certifications.js`. |
| Project screenshots | Copy into `public/images/`, then set `image: '/images/yourfile.png'` in `src/data/projects.js`. |
| Project links | Add only real project-specific `github` and `demo` URLs in `src/data/projects.js`. Empty links are not displayed. |
| Certificate verification | Add a verified certificate URL to `verification` in `src/data/certifications.js` when available. |
| Contact email | `src/data/site.js` → `email`. Without it or configured EmailJS credentials, the contact form clearly explains that it cannot send messages. |

## Update content

- **Projects:** `src/data/projects.js`. Add an object to the array. `github` / `demo` stay `null` until you have real project links.
- **Skills:** `src/data/skills.js` (names must exist in `src/data/skillIcons.js`).
- **Certifications:** `src/data/certifications.js`.
- **Links and name:** `src/data/site.js`.
- **Colours:** the CSS variables at the top of `src/index.css` (`--violet` and `--blue` are the two accent colours).

## Contact form

1. If the three EmailJS values exist in `.env` (copy `.env.example` to `.env`), the form sends through EmailJS and only shows success when EmailJS confirms it.
2. Otherwise, if `email` is set in `src/data/site.js`, it opens the visitor's email app (mailto).
3. Otherwise it shows a clear "not sent, no email configured" message.

## Upload to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/ChamodyaRajapaksha08/YOUR-REPO-NAME.git
git push -u origin main
```
Create the empty repository on github.com first (do not add a README there). `node_modules`, `dist` and `.env` are already in `.gitignore`.

## Deploy on Vercel

1. Go to https://vercel.com and sign in with GitHub.
2. **Add New → Project** → import your portfolio repository.
3. Vercel detects Vite automatically (build command `npm run build`, output `dist`). Click **Deploy**.
4. If you use EmailJS, add the three `VITE_EMAILJS_*` values under **Project Settings → Environment Variables**, then redeploy.

## Credits

Technology logos are from [Devicon](https://devicon.dev) (MIT licence). Icons are from Lucide.
