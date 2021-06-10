import NavLink from './NavLink'
import React, { useState } from 'react'

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <div className="relative md:static">
            <button className="px-4 py-2 text-lg rounded block md:hidden uppercase underline text-hot-pink" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
            <div className={`absolute md:static md:flex md:flex-row items-center mt-12 md:mt-0 md:space-y-0 md:space-x-1 transform -skew-y-4 md:skew-y-0 md:-skew-x-6 ${menuOpen ? 'flex flex-col space-y-1 px-4 w-screen z-30 right-0 -mr-6' : 'hidden'}`}>
                <NavLink href="/">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/writing">Writing</NavLink>
                <NavLink href="/uses">Uses</NavLink>
            </div>
        </div>
    )
}
