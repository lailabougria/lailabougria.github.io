// Converts a 2-letter ISO country code into its flag emoji,
// e.g. flagEmoji("no") -> "🇳🇴". Regional indicator symbols are
// U+1F1E6..U+1F1FF, offset from 'A'..'Z' by 127397.
export function flagEmoji(countryCode: string): string {
	return countryCode
		.toUpperCase()
		.replace(/./g, (char) => String.fromCodePoint(127397 + char.charCodeAt(0)));
}