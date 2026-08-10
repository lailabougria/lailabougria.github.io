import { getCollection } from 'astro:content';

export interface ScheduleItem {
	event: string;
	location: string;
	countryCode?: string;
	date: Date;
	attendees?: number;
	youtubeId?: string;
	slidesUrl?: string;
	eventUrl?: string;
	kind: 'keynote' | 'talk';
	categories?: string[];
	title: string;
	slug: string;
}

// Flattens every delivery (past or upcoming) across both collections into one
// list. A talk gains a new past appearance, or a new upcoming booking, simply
// by getting another entry in its `deliveries` array — nothing else to wire up.
export async function getAllDeliveries(): Promise<ScheduleItem[]> {
	const keynotes = await getCollection('keynotes', ({ data }) => !data.draft);
	const talks = await getCollection('talks', ({ data }) => !data.draft);

	const items: ScheduleItem[] = [];

	for (const entry of keynotes) {
		for (const delivery of entry.data.deliveries) {
			items.push({ ...delivery, kind: 'keynote', title: entry.data.title, slug: entry.id });
		}
	}

	for (const entry of talks) {
		for (const delivery of entry.data.deliveries) {
			items.push({
				...delivery,
				kind: 'talk',
				categories: entry.data.categories,
				title: entry.data.title,
				slug: entry.id,
			});
		}
	}

	return items;
}

export function upcoming(items: ScheduleItem[]): ScheduleItem[] {
	const now = new Date();
	return items
		.filter((i) => i.date.valueOf() >= now.valueOf())
		.sort((a, b) => a.date.valueOf() - b.date.valueOf());
}

export function past(items: ScheduleItem[]): ScheduleItem[] {
	const now = new Date();
	return items
		.filter((i) => i.date.valueOf() < now.valueOf())
		.sort((a, b) => b.date.valueOf() - a.date.valueOf());
}

export function formatDate(date: Date): string {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
}

// Compact form, e.g. "Oct 15, 2027" — used where space is tight, like the home page's upcoming list.
export function formatDateShort(date: Date): string {
	return date.toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' });
}