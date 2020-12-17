import Link from 'next/link'

const TitleLink = ({ href, children }) => (
    <div className="relative z-10 group inline-block mb-4 md:-ml-4">
        <Link href={href}>
            <a className="font-sans font-bold inline-block bg-white rounded px-2 md:px-4 py-3 md:py-2 text-xl md:text-2xl shadow md:shadow-none hover:shadow">
                {children}
            </a>
        </Link>
        <span className="-z-1 absolute inset-0 rounded transition-transform ease-linear duration-75 transform -rotate-3 md:rotate-0 group-hover:-rotate-3 bg-gradient-to-r from-aqua to-blue"></span>
    </div>
)

export default TitleLink
