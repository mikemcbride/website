import Link from './Link'

const TitleLink = ({ href, children }) => {
    return (
        <Link href={href} className="font-slab font-bold leading-normal underline md:inline-block text-xl md:text-2xl hover:text-blue-600 dark:hover:text-blue-400">
            {children}
        </Link>
    )
}

export default TitleLink
