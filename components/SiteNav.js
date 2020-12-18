import Link from './Link'
import HorizontalPad from './HorizontalPad'
import NavLink from './NavLink'

const SiteNav = () => (
    <HorizontalPad>
        <nav className="pt-6 sm:pt-12 mb-16 flex flex-col items-center justify-between md:flex-row text-base">
            <div className="inline-block relative z-10 group transform -rotate-1">
                <Link href="/" className="inline-block font-sans font-black text-white bg-blue py-2 px-4 transform -rotate-1 md:rotate-0 group-hover:-rotate-2 transition-transform duration-100 ease-linear uppercase text-4xl rounded-md shadow-md">
                    Mike McBride
                </Link>
                <div className="absolute inset-0 bg-gradient-to-r from-hot-pink to-purple transform rotate-3 md:rotate-0 group-hover:rotate-2 transition-transform duration-100 ease-linear rounded-md -z-1"></div>
            </div>
            <div className="flex items-center mt-12 md:mt-0">
                <NavLink href="/">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/writing">Writing</NavLink>
                <NavLink href="/uses">Uses</NavLink>
            </div>
        </nav>
    </HorizontalPad>
)

export default SiteNav
