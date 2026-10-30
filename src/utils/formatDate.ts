/**
 * Frontmatter dates like `2022-08-04` are parsed as UTC midnight. Formatting
 * them in the build machine's local timezone shifts them a day earlier
 * anywhere west of UTC, so always format in UTC.
 */
export function formatDate(
    date: Date | string,
    style: "short" | "long" = "short",
): string {
    const d = typeof date === "string" ? new Date(date) : date;
    return d.toLocaleDateString("en-US", {
        year: "numeric",
        month: style === "long" ? "long" : "short",
        day: "numeric",
        timeZone: "UTC",
    });
}
