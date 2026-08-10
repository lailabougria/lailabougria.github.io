// Resolves a bare filename (e.g. from frontmatter) to its processed image.
//
// Deliberately NOT using the content collection `image()` schema helper here:
// when a collection field is typed as image(), Astro resolves it via a plain
// Vite asset import, which copies the untouched original into the build output
// *in addition to* whatever optimized size <Image> generates — doubling the
// shipped bytes for every photo. Resolving through import.meta.glob instead
// (the same approach PhotoCarousel.astro uses) only emits the optimized copy.

const photos = import.meta.glob<{ default: ImageMetadata }>('../assets/photos/*.{jpg,jpeg,png}', {
	eager: true,
});

const talkBanners = import.meta.glob<{ default: ImageMetadata }>('../assets/talk-banners/*.{jpg,jpeg,png}', {
	eager: true,
});

function resolve(modules: Record<string, { default: ImageMetadata }>, filename: string): ImageMetadata | undefined {
	const match = Object.entries(modules).find(([path]) => path.endsWith(`/${filename}`));
	return match?.[1].default;
}

export function resolvePhoto(filename: string): ImageMetadata | undefined {
	return resolve(photos, filename);
}

export function resolveTalkBanner(filename: string): ImageMetadata | undefined {
	return resolve(talkBanners, filename);
}
