import TitleLink from './TitleLink'

const ProjectListItem = ({ project }) => (
    <article className="mb-16 w-full">
        <TitleLink href={project.links[0].url} target="_blank" rel="nofollow noreferrer noopener">{project.title}</TitleLink>
        <p className="prose lg:prose-xl my-4 md:mt-2">{project.description}</p>
        <div className="flex items-center divide-x divide-gray-400 dark:divide-gray-500 -ml-4">
            {project.links.map(link => {
                return <a href={link.url}
                className="default-link px-4"
                target="_blank"
                rel="nofollow noreferrer noopener">{link.title}</a>
            })}
        </div>
    </article>
)

export default ProjectListItem
