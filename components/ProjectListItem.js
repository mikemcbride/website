import TitleLink from './TitleLink'

const ProjectListItem = ({ project }) => (
    <article className="mb-16 w-full">
        <TitleLink href={project.url} target="_blank" rel="nofollow noreferrer noopener">{project.title}</TitleLink>
        <p className="prose lg:prose-lg my-4 md:mt-2">{project.description}</p>
        <div className="flex items-center">
            {project.url &&
                <a href={project.url}
                    className="text-blue inline-block text-base hover:underline"
                    target="_blank"
                    rel="nofollow noreferrer noopener">Website</a>
            }
            {project.source &&
                <a href={project.source}
                    className={`text-blue inline-block text-base hover:underline ${project.url ? 'pl-2 ml-2 border-l border-gray-500' : ''}`}
                    target="_blank"
                    rel="nofollow noreferrer noopener">Source</a>
            }
        </div>
    </article>
)

export default ProjectListItem
