import Layout from '../../components/Layout'
import PageHeader from '../../components/PageHeader'
import BlogListItem from '../../components/BlogListItem'

const blogPosts = []
const Writing = ({ title, description, ...props}) => (
    <Layout pageTitle={title}>
        <PageHeader>Writing</PageHeader>
        <p className="text-base md:text-lg leading-loose mb-8">I occasionally write things. Not often enough to call it a blog. You can read them here.</p>
        <section className="mb-20">
          {blogPosts.map((post, index) => (
              <BlogListItem key={index} post={post} />
          ))}
        </section>
    </Layout>
)

export default Writing
