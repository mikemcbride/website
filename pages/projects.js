import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import ProjectList from '../components/ProjectList'
import projects from '../data/projects'

const Projects = ({ title, description }) => (
    <Layout pageTitle={title} description={description}>
        <PageHeader>Projects</PageHeader>
        <p className="mb-16 leading-loose">
          When I'm not making stuff for my day job, I like to build websites, apps, and utilities to help other developers.
          You can find some of them listed below, and the rest you can find on my GitHub profile.
        </p>
        <ProjectList projects={projects} />
    </Layout>
)

export default Projects

export async function getStaticProps() {
    const configData = await import('../siteconfig.json')

    return {
        props: {
            title: configData.default.projects.title,
            description: configData.default.projects.description
        },
    }
}
