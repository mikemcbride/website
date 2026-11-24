/**
 * Builds a data: URI for an emoji favicon — an SVG containing a single
 * <text> glyph — so there's no icon file to maintain. Browsers that support
 * SVG favicons (Chrome, Firefox, Edge) render it with the system emoji font.
 */
export function emojiFavicon(emoji: string): string {
    const svg =
        `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">` +
        `<text y=".9em" font-size="90">${emoji}</text>` +
        `</svg>`;
    return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}
