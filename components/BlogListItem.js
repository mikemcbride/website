import TitleLink from './TitleLink'

function BlogListItem({ post }) {
    const href = `/writing/${post.slug}`
    return (
        <article className="py-12 lg:py-16">
            <TitleLink href={href}>
                {post.frontmatter.title}
            </TitleLink>
            <time className="block text-sm text-gray-600 dark:text-gray-400 leading-normal mt-4 mb-2">{post.frontmatter.date}</time>
            <p className="text-black dark:text-gray-200 leading-loose text-base lg:text-lg">{post.frontmatter.excerpt}</p>
        </article>
    )
}

export default BlogListItem
