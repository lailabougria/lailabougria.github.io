# lailabougria.github.io

A website about Laila Bougria's speaking engagements — built with [Astro](https://astro.build), deployed on GitHub Pages.

## Local development

Requires Node.js (see `.nvmrc` — run `nvm use` if you use nvm).

```bash
npm install
npm run dev       # starts a local dev server
npm run build     # builds the static site into dist/
npm run preview   # preview the production build locally
```

## Adding or editing content

Talks and keynotes are plain Markdown files with frontmatter — no code changes needed to add one.

- **Talks** live in `src/content/talks/*.md`. Copy an existing file, change `title`, `type` (`tech` or `non-tech`), `description`, and `topics`.
- **Keynotes** live in `src/content/keynotes/*.md`. Same idea, plus a Markdown body below the frontmatter — that's the "here's my thinking" write-up shown on the keynote's page.

### Adding a speaking date (past or upcoming)

Every talk/keynote file has a `deliveries` list. Each entry is one time it was (or will be) delivered:

```yaml
deliveries:
  - event: "NDC Oslo"
    location: "Oslo, Norway"
    date: 2026-06-10
    attendees: 400 # optional
    youtubeId: "dQw4w9WgXcQ" # optional — adds an inline recording
    slidesUrl: "https://..." # optional
```

Add a future `date` to make it show up in the "Next up" section on the home page automatically. Add a past `date` and it shows up in that talk/keynote's delivery history. Nothing else needs to be touched.

### Publishing / unpublishing

Set `draft: true` on any talk or keynote to hide it from the site without deleting the file.

## TODO before this goes live

- [ ] Replace `YOUR_FORM_ID` in `src/pages/contact/index.astro` with a real [Formspree](https://formspree.io) form ID so the contact form actually delivers messages.
- [ ] Replace the placeholder Bluesky URL in `src/data/social.ts` with your real profile.
- [ ] Fill in real `deliveries` (venue, date, attendee count) for keynotes/talks — these were intentionally left empty rather than guessed.
- [ ] In the GitHub repo settings, set **Settings → Pages → Source** to **GitHub Actions** so `.github/workflows/deploy.yml` can publish the site.
- [ ] Review the keynote write-ups in `src/content/keynotes/*.md` — they're starting drafts based on your Sessionize abstracts, written in your voice as a placeholder, not final copy.