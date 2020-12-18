import Link from './Link'

const TitleLink = ({ href, children }) => {
    const rand = Math.random()
    let rotation = '-rotate-2 group-hover:-rotate-2'
    if (rand > 0.25) {
        rotation = 'rotate-2 group-hover:rotate-2'
    }
    if (rand > 0.5) {
        rotation = '-rotate-4 group-hover:-rotate-4'
    }
    if (rand > 0.75) {
        rotation = 'rotate-4 group-hover:rotate-4'
    }
    return (
        <div className="relative z-10 group inline-block mb-4 md:-ml-4">
            <Link href={href} className="font-sans font-bold inline-block bg-white rounded px-2 md:px-4 py-3 md:py-2 text-xl md:text-2xl shadow md:shadow-none hover:shadow">
                {children}
            </Link>
            <span className={`-z-1 absolute inset-0 rounded transition-transform ease-linear duration-75 transform ${rotation} md:rotate-0 bg-gradient-to-r from-aqua to-blue`}></span>
        </div>
    )
}

export default TitleLink
