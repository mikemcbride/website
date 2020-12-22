import ProjectListItem from './ProjectListItem'

const ProjectList = ({ projects }) => {
    const websites = projects.filter(p => p.type === 'website')
    const utilities = projects.filter(p => p.type === 'utility')
    const extras = projects.filter(p => p.type === 'extra')
    return (
        <>
            <section className="mb-16">
                <h2 className="font-sans font-black text-4xl mb-2 bg-gradient-to-r from-aqua to-blue text-transparent bg-clip-text inline-block">Websites</h2>
                <p className="prose lg:prose-lg mb-6">
                    I like building websites. Here are a few of the ones I've made.
                </p>
                {websites.map((project, index) => (
                    <ProjectListItem key={index} project={project} />
                ))}
            </section>

            <section className="mb-16">
                <h2 className="font-sans font-black text-4xl mb-2 bg-gradient-to-r from-blue to-purple text-transparent bg-clip-text inline-block">Utilities</h2>
                <p className="prose lg:prose-lg mb-6">
                    I also build a lot of stuff that makes developers jobs easier. Mostly because it makes my own job easier. Check out some of my favorites below and find more on my GitHub or npm.
                </p>
                {utilities.map((project, index) => (
                    <ProjectListItem key={index} project={project} />
                ))}
            </section>

            <section className="mb-16">
                <h2 className="font-sans font-black text-4xl mb-2 bg-gradient-to-r from-purple to-hot-pink text-transparent bg-clip-text inline-block">Miscellaneous</h2>
                <p className="prose lg:prose-lg mb-6">
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
