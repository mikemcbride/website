import ProjectListItem from './ProjectListItem'
import SectionHeader from './SectionHeader'

const ProjectList = ({ projects }) => {
    const websites = projects.filter(p => p.type === 'website')
    const utilities = projects.filter(p => p.type === 'utility')
    const extras = projects.filter(p => p.type === 'extra')
    return (
        <>
            <h3 className="font-bold">Jump to a section:</h3>
            <ul className="-ml-4 mt-4 mb-16 md:inline-flex items-center space-y-2 md:space-y-0 md:divide-x md:divide-gray-500">
                <li className="px-4"><a className="text-blue-600 dark:text-blue-400 hover:underline underline md:no-underline" href="#utilities">Utilities</a></li>
                <li className="px-4"><a className="text-blue-600 dark:text-blue-400 hover:underline underline md:no-underline" href="#websites">Websites</a></li>
                <li className="px-4"><a className="text-blue-600 dark:text-blue-400 hover:underline underline md:no-underline" href="#miscellaneous">Miscellaneous</a></li>
            </ul>
            <section className="mb-16">
                <span id="utilities" />
                <SectionHeader>Utilities</SectionHeader>
                <p className="prose lg:prose-lg mb-8">
                    I build a lot of stuff that makes developers jobs easier. Mostly because it makes my own job easier. Check out some of my favorites below and find more on my GitHub or npm.
                </p>
                {utilities.map((project, index) => (
                    <ProjectListItem key={index} project={project} />
                ))}
            </section>

            <section className="mb-16">
                <span id="websites" />
                <SectionHeader>Websites</SectionHeader>
                <p className="prose lg:prose-lg mb-8">
                    I also like building websites. Here are a few of the ones I've made.
                </p>
                {websites.map((project, index) => (
                    <ProjectListItem key={index} project={project} />
                ))}
            </section>

            <section className="mb-16">
                <span id="miscellaneous" />
                <SectionHeader>Miscellaneous</SectionHeader>
                <p className="prose lg:prose-lg mb-8">
                    This section is called "miscellaneous" but really it's just some themes I've built. Maybe someday it will have some other stuff too. Who knows. For now, these are the themes I use every day in my editor and terminal. I've made some other themes too, which you can find on GitHub.
                </p>
                {extras.map((project, index) => (
                    <ProjectListItem key={index} project={project} />
                ))}
            </section>
        </>
    )
}


export default ProjectList
