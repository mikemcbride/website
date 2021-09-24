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
        <Link href={href} className={`text-2xl font-sans font-bold block px-4 py-2 md:py-3 w-full dark:text-white focus:outline-none focus:ring ${isActiveRoute === true ? 'bg-blue-600 text-blue-600 bg-opacity-10 dark:bg-blue-500 dark:text-white dark:bg-opacity-100' : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
            {children}
        </Link>
    )
}

export default NavLink
