import NavLink from './NavLink'
import React, { useState } from 'react'

export default function NavMenu() {
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <>
            <button className="px-4 py-2 text-lg rounded block md:hidden mt-8 uppercase underline text-hot-pink" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? 'Close' : 'Menu'}</button>
            <div className={`md:flex items-center mt-12 md:mt-0 ${menuOpen ? 'flex flex-col space-y-5' : 'hidden'}`}>
                <NavLink href="/">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/writing">Writing</NavLink>
                <NavLink href="/uses">Uses</NavLink>
            </div>
        </>
    )
}
