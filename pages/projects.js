import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'

const Projects = ({ title, description, ...props}) => (
    <Layout pageTitle={title}>
        <PageHeader>Projects</PageHeader>
    </Layout>
)

export default Projects
