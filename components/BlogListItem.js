import TitleLink from './TitleLink'
import Link from './Link'

function BlogListItem({ post }) {
    const href = `/writing/${post.slug}`
    return (
        <article className="py-8">
            <TitleLink href={href}>
                {post.frontmatter.title}
            </TitleLink>
            <time className="block text-sm text-gray-600 leading-normal mt-4 mb-2">{post.frontmatter.date}</time>
            <p className="text-black mb-6 leading-loose text-base">{post.frontmatter.excerpt}</p>
            <Link href={href} className="group inline-flex items-center text-sm text-blue no-underline uppercase tracking-wide">
                Read more <span className="transform group-hover:translate-x-3 transition-transform ease-in-out duration-150 inline-block ml-8 -mt-1"><svg xmlns="http://www.w3.org/2000/svg" className="transform -rotate-90 h-12" viewBox="0 0 11 75.69"><path d="M4 18.19c-.24-1.2-.51-2.2-.67-3.29a15.87 15.87 0 01-.19-2.91c0-.19.71-.53 1.07-.51s1 .4 1 .63c0 1.72-.1 3.45-.16 5.17a3.36 3.36 0 010 .9c0 .12-.4.23-.61.23a.67.67 0 01-.44-.22zm.72 4.74c.73.21.7.73.75 1.17a16 16 0 01-.07 2.89 10.83 10.83 0 00-.2 1.94c0 .48-.18.72-.8.88-.08 0-.28-.06-.29-.12-.32-1.52-.29-2.95-.6-4.48-.06-.3-.18-.6-.27-.9-.18-.64.46-1.32 1.48-1.38zM3.64 5.74c-.17-.89-.3-2.38-.42-3A9.73 9.73 0 012.91.9c0-.3.35-.64.64-.88.09-.08.49.12.75.2 1.09.33.7 1.1.7 1.77s-.29 2.58-.23 3.28-.15.92-1 .64c-.14-.05-.19-.26-.13-.17zm.91 46.87c-.26-1.23-.53-2.25-.68-3.29a15.09 15.09 0 01-.19-2.92c0-.2.71-.53 1.06-.51s1 .4 1 .62c0 1.73-.09 3.45-.16 5.18a3 3 0 010 .9c0 .12-.4.23-.61.22s-.4-.19-.42-.2zm.71 4.74c.72.21.69.73.74 1.17a17 17 0 01-.06 2.85 10.76 10.76 0 00-.21 1.94c0 .47-.17.72-.8.88-.08 0-.28-.06-.29-.12-.31-1.53-.29-2.95-.6-4.48a9.26 9.26 0 00-.26-.9c-.18-.61.45-1.32 1.48-1.34zM4.18 40.16c-.17-.89-.3-2.38-.42-3a9 9 0 01-.32-1.84c0-.3.36-.64.64-.87.09-.08.5.12.76.2 1.09.33.71 1.1.73 1.76s-.29 2.58-.23 3.26-.15.93-1 .64c-.17-.04-.23-.25-.16-.15zM5.92 75.7c1.47-.07 5.66-9.11 5-9.7S.79 65.67 0 66.51c-.43.48 4.61 9.25 5.92 9.19z" fill="currentColor" /></svg></span>
            </Link>
        </article>
    )
}

export default BlogListItem
