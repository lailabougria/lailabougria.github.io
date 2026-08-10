# lailabougria.github.io

A website about Laila Bougria's speaking engagements — keynotes, talks, and workshops — built with [Astro](https://astro.build), deployed on GitHub Pages.

## Local development

Requires Node.js (see `.nvmrc` — run `nvm use` if you use nvm).

```bash
npm install
npm run dev       # starts a local dev server
npm run build     # builds the static site into dist/
npm run preview   # preview the production build locally
```

## Site structure

- `/` — home page: hero, upcoming schedule, featured keynotes, recent talks, photo carousel
- `/keynotes/` and `/keynotes/[slug]/`
- `/talks/` and `/talks/[slug]/`
- `/workshops/` and `/workshops/[slug]/`
- `/contact/`

## Adding or editing content

Keynotes, talks, and workshops are all plain Markdown files with frontmatter — no code changes needed to add or edit one. Copy an existing file in the relevant folder as a starting point.

- **Keynotes** live in `src/content/keynotes/*.md` — `title`, `tagline`, `description`, `topics`, plus a Markdown body below the frontmatter for the "here's my thinking" write-up shown on the keynote's page.
- **Talks** live in `src/content/talks/*.md` — `title`, `description`, `topics`, and `categories` (one or more of `EDA`, `O11Y`, `Critical thinking`, `AI`, `Patterns` — defined in `src/content.config.ts`; only categories actually in use show up as filters on `/talks/`). `order` (a number) controls display order on `/talks/` and the home page's "Recent talks" — lower shows first.
- **Workshops** live in `src/content/workshops/*.md` — `title`, `tagline`, `description`, `durations` (e.g. `["1 day", "2 days"]`), `audience`, `outcomes`, `prerequisites`, plus a Markdown body for the abstract.

### Adding a speaking date (past or upcoming)

Keynotes and talks have a `deliveries` list. Each entry is one time it was (or will be) delivered:

```yaml
deliveries:
  - event: "NDC Oslo"
    location: "Oslo, Norway"
    countryCode: "no" # optional — ISO 3166-1 alpha-2, renders a flag emoji
    date: 2026-06-10
    attendees: 400 # optional
    youtubeId: "dQw4w9WgXcQ" # optional — adds an inline recording
    slidesUrl: "https://..." # optional
    eventUrl: "https://..." # optional — links the event name out
```

Add a future `date` and it shows up in the home page's "Where I'll be" list automatically. Add a past `date` and it's used for that entry's history — keynote pages show a visible "Where it's been delivered" list; talk pages don't show that list (by design), but a past delivery with a `youtubeId` still surfaces in the talk's "Watch" section. Nothing else needs to be touched.

Workshops use a slightly different `deliveries` shape, since workshop dates are usually multi-day conference ranges:

```yaml
deliveries:
  - event: "NDC Oslo"
    location: "Oslo, Norway"
    countryCode: "no"
    date: 2026-05-19 # start day, used for sorting/upcoming-vs-past
    dateLabel: "May 19–23, 2026" # the human-readable range shown on the page
    duration: "2 days"
    eventUrl: "https://..."
```

### Adding a photo

- **Keynote/talk banner or stage photo**: drop the image in `src/assets/photos/` (or `src/assets/talk-banners/` for talks), then reference it from that entry's frontmatter with `photo: "../../assets/photos/your-file.jpg"` (keynotes also support an optional `photoCaption`).
- **Home page carousel**: just drop the image into `src/assets/carrousel/` — every photo in that folder is picked up automatically, no frontmatter or code changes needed. Don't put a photo there that's already used elsewhere on the site (e.g. the headshot or hero photo).

### Linking to GitHub resources

Talks and workshops both support an optional `githubUrl` pointing at that talk/workshop's folder in your `lailabougria/talks` or `lailabougria/workshops` repos — it renders as a "Resources & code on GitHub" button on the page.

### Publishing / unpublishing

Set `draft: true` on any keynote, talk, or workshop to hide it from the site without deleting the file.
