import Link from './Link'
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
        <Link href={href} className={`relative inline-block p-8 text-2xl uppercase text-center font-mono font-medium tracking-wider w-full text-white focus:outline-none focus:ring ${isActiveRoute === true ? 'bg-hot-pink dark:bg-pink-500' : 'bg-black dark:bg-gray-700 hover:bg-hot-pink dark:hover:bg-pink-500'}`}>
            {children}
        </Link>
    )
}

export default NavLink
