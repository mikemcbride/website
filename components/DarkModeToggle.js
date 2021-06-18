import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Sparkles from './icons/Sparkles'
import Sun from './icons/Sun'
import Moon from './icons/Moon'

export default function DarkModeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    function cycleTheme() {
        let newTheme = 'system' // default to system in case something weird happens
        if (theme === 'system') {
            newTheme = 'dark'
        } else if (theme === 'dark') {
            newTheme = 'light'
        } else if (theme === 'light') {
            newTheme = 'system'
        }
        setTheme(newTheme)
    }

    if (!mounted) return null

    return (
        <button onClick={() => cycleTheme()} className="mr-2 md:mr-4 rounded hover:bg-gray-100 text-black dark:hover:bg-gray-700 dark:text-gray-300 p-2 focus:outline-none focus:ring">
            {theme === 'system' ? <Sparkles /> : theme === 'dark' ? <Moon /> : <Sun />}
        </button>
    )
}
