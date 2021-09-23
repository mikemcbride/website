import Link from './Link'

const TitleLink = ({ href, children }) => {
    return (
        <Link href={href} className="font-slab font-bold leading-normal md:inline-block text-xl md:text-2xl border-b-4 border-teal hover:border-hot-pink dark:hover:border-pink-400">
            {children}
        </Link>
    )
}

export default TitleLink
