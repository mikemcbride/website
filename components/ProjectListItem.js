import TitleLink from './TitleLink'

const ProjectListItem = ({ project }) => (
    <article className="mb-16 w-full">
        <TitleLink href={project.url} target="_blank" rel="nofollow noreferrer noopener">{project.title}</TitleLink>
        <p className="prose lg:prose-xl my-4 md:mt-2">{project.description}</p>
        <div className="flex items-center divide-x divide-gray-400 dark:divide-gray-500">
            {project.url &&
                <a href={project.url}
                    className="default-link pr-4"
                    target="_blank"
                    rel="nofollow noreferrer noopener">Website</a>
            }
            {project.source &&
                <a href={project.source}
                    className="default-link pl-4"
                    target="_blank"
                    rel="nofollow noreferrer noopener">Source</a>
            }
        </div>
    </article>
)

export default ProjectListItem
