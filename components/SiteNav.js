import Link from './Link'
import HorizontalPad from './HorizontalPad'
import NavMenu from './NavMenu'
import DarkModeToggle from './DarkModeToggle'

const SiteNav = () => (
    <HorizontalPad>
        <nav className="pt-6 sm:pt-12 mb-12 md:mb-16 flex items-center text-base">
            <Link href="/" className="md:-ml-4 mr-auto inline-block font-slab font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 py-2 px-4 uppercase text-2xl md:text-4xl">
                Mike McBride
            </Link>
            <DarkModeToggle />
            <NavMenu />
        </nav>
    </HorizontalPad>
)

export default SiteNav
