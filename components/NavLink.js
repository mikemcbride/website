import Link from 'next/link'
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
        <Link href={href}>
            <a className="relative inline-block px-4 py-1">
                {isActiveRoute === true &&
                <span className="transform top-1/2 -translate-y-1/2 absolute left-0 w-full inline-block text-hot-pink">
                    <CircleSolidWide className="w-full" />
                </span>
                }
                <span className={`z-10 relative inline-block font-mono font-medium tracking-wider ${isActiveRoute === true ? 'text-hot-pink' : 'text-black hover:text-hot-pink'}`}>
                    {children}
                </span>
            </a>
        </Link>
    )
}

export default NavLink
