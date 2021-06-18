import NavLink from './NavLink'
import React, { useState } from 'react'
import MenuToggle from './MenuToggle'

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="relative">
            <MenuToggle handleClick={() => setMenuOpen(!menuOpen)} isOpen={menuOpen} />
            <div className={`absolute flex-col items-center space-y-1 px-4 w-screen md:w-60 z-30 right-0 -mr-6 mt-12 md:mt-4 transform -skew-y-4 ${menuOpen ? 'flex' : 'hidden'}`}>
                <NavLink href="/">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/writing">Writing</NavLink>
                <NavLink href="/uses">Uses</NavLink>
            </div>
        </div>
    )
}
