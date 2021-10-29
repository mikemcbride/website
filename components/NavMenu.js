import NavLink from './NavLink'
import MenuIcon from './icons/MenuIcon'
import MenuClose from './icons/MenuClose'
import { Menu } from '@headlessui/react'

export default function NavMenu() {
    return (
        <Menu as="div" className="relative z-50">
            {({ open }) => (
                <>
                    <Menu.Button className="block rounded bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 focus:outline-none focus:ring">
                        {open ? <MenuClose className="w-8 h-8 md:h-10 md:w-10" /> : <MenuIcon className="w-8 h-8 md:h-10 md:w-10" />}
                    </Menu.Button>

                    <Menu.Items className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 py-4 w-64 md:w-80 absolute top-full right-0 mt-2 space-y-2 focus:outline-none focus:ring">
                        <Menu.Item>
                            <NavLink href="/">About</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink href="/projects">Projects</NavLink>
                        </Menu.Item>
                        <Menu.Item>
                            <NavLink href="/writing">Writing</NavLink>
                        </Menu.Item>
                    </Menu.Items>
                </>
            )}
        </Menu >
    )
}
