import Link from './Link'
import HorizontalPad from './HorizontalPad'
import NavMenu from './NavMenu'

const SiteNav = () => (
    <HorizontalPad>
        <nav className="pt-6 sm:pt-12 mb-12 md:mb-16 flex items-center justify-between text-base">
            <Link href="/" className="md:-ml-4inline-block font-sans font-black text-white bg-gradient-to-r from-purple to-hot-pink py-2 px-4 transform -skew-x-6 uppercase text-2xl md:text-4xl">
                Mike McBride
            </Link>
            <NavMenu />
        </nav>
    </HorizontalPad>
)

export default SiteNav
