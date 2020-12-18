import BlogListItem from './BlogListItem'

export default function PostList({ posts }) {
    if (posts === 'undefined') return null

    return (
        <section className="mb-20">
            {!posts && <div></div>}
            {posts.map((post, index) => (
                <BlogListItem key={index} post={post} />
            ))}
        </section>
    )
}
