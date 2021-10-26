import React, { useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import ThemeButton from './ThemeButton'
import Sparkles from './icons/Sparkles'
import Sun from './icons/Sun'
import Moon from './icons/Moon'

export default function DarkModeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <div className="flex items-center mr-2 md:mr-4 space-x-2">
            <ThemeButton handleClick={() => setTheme('system')} isActive={theme === 'system'}>
                <Sparkles />
            </ThemeButton>
            <ThemeButton handleClick={() => setTheme('light')} isActive={theme === 'light'}>
                <Sun />
            </ThemeButton>
            <ThemeButton handleClick={() => setTheme('dark')} isActive={theme === 'dark'}>
                <Moon />
            </ThemeButton>
        </div>
    )
}
