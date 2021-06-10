import Link from './Link'
import CircleSolidWide from './icons/CircleSolidWide'
import { useRouter } from 'next/router'

function NavLink({ href, children }) {
    const router = useRouter()
    let isActiveRoute = false
    if (href === '/') {
        isActiveRoute = router.pathname === href
    } else {
        isActiveRoute = router.pathname.startsWith(href)
    }
    return (
        <Link href={href} className={`relative inline-block p-8 text-2xl uppercase text-center font-mono font-medium tracking-wider md:text-base w-full md:w-auto md:px-4 md:py-2 text-white ${isActiveRoute === true ? 'bg-hot-pink' : 'bg-black hover:bg-hot-pink'}`}>
            {children}
        </Link>
    )
}

export default NavLink
