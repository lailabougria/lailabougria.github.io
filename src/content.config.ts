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
export const talkCategories = ['EDA', 'O11Y', 'Critical thinking', 'AI', 'Patterns', 'Students'] as const;
const talkCategory = z.enum(talkCategories);

const keynotes = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/keynotes' }),
	schema: z.object({
		title: z.string(),
		tagline: z.string(),
		description: z.string(),
		topics: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		deliveries: z.array(delivery).default([]),
		sessionizeUrl: z.string().url().optional(),
	}),
});

const talks = defineCollection({
	loader: glob({ pattern: '**/*.md', base: './src/content/talks' }),
	schema: z.object({
		title: z.string(),
		categories: z.array(talkCategory).min(1),
		description: z.string(),
		topics: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
		deliveries: z.array(delivery).default([]),
		sessionizeUrl: z.string().url().optional(),
	}),
});

export const collections = { keynotes, talks };