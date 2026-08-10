import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// A single time a talk or keynote was (or will be) delivered.
// One talk can have many of these — past conferences and upcoming bookings alike.
// The home page's "upcoming" list and each talk's history are both derived from this.
const delivery = z.object({
	event: z.string(),
	location: z.string(),
	// ISO 3166-1 alpha-2 country code (e.g. "no", "be"), used to render a flag emoji.
	countryCode: z.string().length(2).optional(),
	date: z.coerce.date(),
	attendees: z.number().int().positive().optional(),
	youtubeId: z.string().optional(),
	slidesUrl: z.string().url().optional(),
	eventUrl: z.string().url().optional(),
});

// The fixed set of topic categories talks are tagged with — shown as badges,
// used to filter /talks/, and replaces the old blunt tech/non-tech split.
export const talkCategories = ['EDA', 'O11Y', 'Critical thinking', 'AI', 'Patterns'] as const;
const talkCategory = z.enum(talkCategories);

// A single time a workshop was (or will be) run. Dates are often multi-day
// conference ranges, so `date` (the start day, for sorting) is paired with
// `dateLabel` for the human-readable range shown on the page.
const workshopDelivery = z.object({
	event: z.string(),
	location: z.string(),
	countryCode: z.string().length(2).optional(),
	date: z.coerce.date(),
	dateLabel: z.string(),
	duration: z.string(),
	eventUrl: z.string().url().optional(),
});

const keynotes = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/keynotes' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			tagline: z.string(),
			description: z.string(),
			topics: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
			deliveries: z.array(delivery).default([]),
			sessionizeUrl: z.string().url().optional(),
			// Optional photo shown on the keynote's page, e.g. from a past delivery.
			photo: image().optional(),
			photoCaption: z.string().optional(),
		}),
});

const talks = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
	schema: ({ image }) =>
		z.object({
			title: z.string(),
			categories: z.array(talkCategory).min(1),
			description: z.string(),
			topics: z.array(z.string()).default([]),
			draft: z.boolean().default(false),
			deliveries: z.array(delivery).default([]),
			sessionizeUrl: z.string().url().optional(),
			// Banner image pulled from this talk's folder in the lailabougria/talks GitHub repo.
			photo: image().optional(),
			// Link to that talk's folder (slides, resources, samples) in the same repo.
			githubUrl: z.string().url().optional(),
			// Manual display order (most recent/relevant first) for /talks/ and the home page.
			order: z.number().optional(),
		}),
});

const workshops = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/workshops' }),
	schema: z.object({
		title: z.string(),
		tagline: z.string(),
		description: z.string(),
		// e.g. ["1 day", "2 days"] — shown as format badges.
		durations: z.array(z.string()).default([]),
		audience: z.array(z.string()).default([]),
		outcomes: z.array(z.string()).default([]),
		prerequisites: z.array(z.string()).default([]),
		deliveries: z.array(workshopDelivery).default([]),
		githubUrl: z.string().url().optional(),
		draft: z.boolean().default(false),
	}),
});

export const collections = { keynotes, talks, workshops };