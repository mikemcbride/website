import Link from './Link'

const TitleLink = ({ href, children }) => {
    console.log(children, children.length)
    let rotation = '-rotate-2 group-hover:-rotate-2'
    if (children.length < 15) {
        rotation = '-rotate-4 group-hover:-rotate-4'
    }
    if (children.length < 10) {
        rotation = '-rotate-6 group-hover:-rotate-6'
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
