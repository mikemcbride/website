import NavLink from './NavLink'
import React, { useState } from 'react'
import MenuToggle from './MenuToggle'

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="relative md:static">
            <MenuToggle handleClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
            <div className={`absolute md:static md:flex md:flex-row items-center mt-12 md:mt-0 md:space-y-0 md:space-x-1 transform -skew-y-4 md:skew-y-0 md:-skew-x-6 ${menuOpen ? 'flex flex-col space-y-1 px-4 w-screen z-30 right-0 -mr-6' : 'hidden'}`}>
                <NavLink href="/">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/writing">Writing</NavLink>
                <NavLink href="/uses">Uses</NavLink>
            </div>
        </div>
    )
}
