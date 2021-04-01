import Link from './Link'

const TitleLink = ({ href, children }) => {
    return (
        <Link href={href} className="font-sans font-bold inline-block text-xl md:text-2xl mb-4 border-b-4 border-teal hover:border-hot-pink">
            {children}
        </Link>
    )
}

export default TitleLink
