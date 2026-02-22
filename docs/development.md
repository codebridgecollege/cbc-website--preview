# Development

### Stack

- **Framework**: Next.js 15 (App Router) with `output: 'export'`
- **Styling**: Tailwind CSS v4, shadcn/ui (new-york, neutral)
- **i18n**: next-intl (single hardcoded locale: `en`)
- **Hosting**: GitHub Pages (or Netlify/Cloudflare Pages); deploy on push to `main`

### Dev server

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Build

```bash
npm run build
```

Output is in the `out/` directory (static HTML/CSS/JS).

### Updating content

- **Reviews**: Edit `content/reviews/index.json` (name, profilePic, rating, text). Add or remove entries; use a unique `slug` per review.
- **Courses**: Edit `content/courses/index.json` (slug, title, description, duration). Add or remove entries.
- **Translations**: Edit `messages/en.json` for copy. Locale is hardcoded to `en` for the static build.

Push changes to the `dev` branch to sync to the preview site; merge to `main` when ready for production.

### Deployment and staging workflow

Branches:

- **`dev`** — default branch for development. Push changes here.
- **`main`** — production. Deploys to the live site.

**Preview (staging):**

1. Push to `dev`. The `.github/workflows/sync-preview.yml` workflow runs and pushes the codebase to the [`cbc-website--preview`](https://github.com/codebridgecollege/cbc-website--preview) repo’s `main` branch.
2. The preview repo builds and deploys to [https://codebridgecollege.github.io/cbc-website--preview/](https://codebridgecollege.github.io/cbc-website--preview/) — a separate URL, not the production domain.

**Production:**

1. When preview looks good, open a PR from `dev` to `main` (use the [Publish](https://github.com/codebridgecollege/cbc-website/compare/main...dev?expand=1) link in the README).
2. Merge the PR.
3. Push to `main` triggers `.github/workflows/deploy.yml`, which deploys to production (GitHub Pages or custom domain).

**Setup required:**

1. **Create the preview repo**: In the same org, create a new repo `cbc-website--preview` (empty or with a README). Enable Pages: **Settings → Pages → Source** = GitHub Actions.
2. **Default branch**: In the main repo, set the default branch to `dev` (**Settings → General → Default branch**).
3. **Create `dev` branch**: From `main`, create `dev` and push it.
4. **Sync token**: In the main repo, add a secret `REPO_SYNC_TOKEN` (**Settings → Secrets and variables → Actions**). Create a fine-grained Personal Access Token:
   - **Settings** → **Developer settings** → **Personal access tokens** → **Fine-grained tokens** → **Generate new token**
   - **Repository access**: Only select repositories → choose `cbc-website` and `cbc-website--preview`
   - **Permissions**: Contents → Read and write; Metadata → Read-only
   - Copy the token and add it as `REPO_SYNC_TOKEN` in the main repo’s Actions secrets

### Deploying to GitHub Pages

1. In the repo: **Settings → Pages → Build and deployment**: Source = **GitHub Actions**.
2. Push to `main`. The workflow in `.github/workflows/deploy.yml` runs `npm ci`, `npm run build`, and deploys the `out/` directory to GitHub Pages.

### Deploying to Netlify or Cloudflare Pages

- **Build command**: `npm run build`
- **Publish directory**: `out`
- Connect the repo; each push to `main` will build and deploy.

### Production hosting (codebridgecollege.com)

The domain is hosted on Websupport.sk with virtual hosting: multiple sites share the same IP. The server uses the `Host` HTTP header to choose which site to serve.

When curling by IP, the server returns Websupport’s default parking page instead of the site. To test the live site via IP, pass the Host header:

```bash
curl -H "Host: codebridgecollege.com" http://37.9.175.195/
```
