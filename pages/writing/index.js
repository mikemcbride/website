import matter from 'gray-matter'

import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import PostList from '../../components/PostList'
import formatTitle from '../../utils/formatTitle'
import formatDate from '../../utils/formatDate'

const Writing = ({ posts, title, description }) => (
    <Layout pageTitle={title} description={description}>
        <PageHeader>Writing</PageHeader>
        <p className="text-base md:text-lg leading-loose mb-8">I occasionally write things. Not often enough to call it a blog. You can read them here.</p>
        <PostList posts={posts} />
    </Layout>
)

export default Writing

export async function getStaticProps() {
    const config = await import('../../siteconfig.json')

    const posts = ((context) => {
        const keys = context.keys()
        const values = keys.map(context)

        const data = keys.map((key, index) => {
            let matches = /^\.[\\\/](.*)[\\\/]/gi.exec(key)
            const slug = matches[1]
            const value = values[index]
            const document = matter(value.default)
            const postDate = document.data.date.toString()
            const frontmatter = document.data
            frontmatter.date = formatDate(frontmatter.date)
            frontmatter.title = formatTitle(frontmatter.title)

            return {
                postDate,
                frontmatter: document.data,
                markdownBody: document.content,
                slug,
            }
        }).sort((a, b) => {
            return new Date(b.postDate) - new Date(a.postDate)
        }).filter(post => {
            // if we have a "published" field, respect that
            if (post.frontmatter.published !== undefined) {
                return post.frontmatter.published === true
            }
            // otherwise, default to true
            return true
        }).map(x => {
            delete x.postDate
            return x
        })
        return data
    })(require.context('../../posts', true, /\.md$/))

    return {
        props: {
            posts,
            title: config.default.writing.title,
            description: config.default.writing.description,
        },
    }
}
