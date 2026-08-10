export interface SocialLink {
	name: string;
	url: string;
}

// LinkedIn is surfaced separately (Header + Footer button) because it should
// always be the most visible link — see src/components/Header.astro / Footer.astro.
export const linkedin: SocialLink = {
	name: 'LinkedIn',
	url: 'https://www.linkedin.com/in/lailabougria',
};

export const socials: SocialLink[] = [
	{ name: 'Sessionize', url: 'https://sessionize.com/noctovis' },
	{ name: 'X', url: 'https://twitter.com/noctovis' },
	{ name: 'Mastodon', url: 'https://hachyderm.io/@noctovis' },
	// TODO: replace with your real Bluesky profile URL once you have one.
	{ name: 'Bluesky', url: 'https://bsky.app/' },
	{ name: 'YouTube', url: 'https://www.youtube.com/@laila.bougria' },
];