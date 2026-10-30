import rss from "@astrojs/rss";
import { getCollection } from "astro:content";

export async function GET(context) {
    const posts = (
        await getCollection("posts", ({ data }) => data.published === true)
    ).sort((a, b) => b.data.date.getTime() - a.data.date.getTime());

    return rss({
        title: "Mike McBride",
        description: "Sometimes I write things. Not often enough to call it a blog.",
        site: context.site,
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            description: post.data.excerpt,
            link: `/writing/${post.id}/`,
        })),
    });
}
