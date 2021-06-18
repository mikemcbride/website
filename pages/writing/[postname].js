import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import Layout from '../../components/Layout'
import formatDate from '../../utils/formatDate'
import formatTitle from '../../utils/formatTitle'
import ScrollProgress from '../../components/ScrollProgress'
import PageHeader from '../../components/PageHeader'
import CodeBlock from '../../components/CodeBlock'

export default function BlogPost({ frontmatter, markdownBody }) {
    if (!frontmatter) return <></>

    return (
        <Layout pageTitle={frontmatter.title}>
          <ScrollProgress />

          <header className="leading-tight font-mono inline-flex flex-col items-start max-w-3xl mt-12 mb-8">
            <PageHeader>{frontmatter.title}</PageHeader>
            <p className="inline-block leading-relaxed text-sm md:text-base text-gray-600 dark:text-gray-400">Posted on {frontmatter.date}</p>
          </header>

          <article className="mb-16 prose prose-lg md:prose-xl font-sans">
            <ReactMarkdown source={markdownBody} renderers={{ code: CodeBlock }} />
          </article>
        </Layout>
    )
}

export async function getStaticProps({ ...ctx }) {
    const { postname } = ctx.params
    const content = await import(`../../posts/${postname}/index.md`)
    const data = matter(content.default)
    const frontmatter = data.data

    frontmatter.date = formatDate(frontmatter.date)
    frontmatter.title = formatTitle(frontmatter.title)

    return {
        props: {
            frontmatter: frontmatter,
            markdownBody: data.content,
        },
    }
}

export async function getStaticPaths() {
    const blogSlugs = ((context) => {
        const keys = context.keys()
        const data = keys.map(key => {
            let matches = /^\.[\\\/](.*)[\\\/]/gi.exec(key)
            return matches[1]
        })
        return data
    })(require.context('../../posts', true, /\.md$/))

    const paths = blogSlugs.map((slug) => `/writing/${slug}`)

    return {
        paths,
        fallback: false,
    }
}
