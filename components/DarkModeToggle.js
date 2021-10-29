import React, { Fragment, useState, useEffect } from 'react'
import { useTheme } from 'next-themes'
import Chip from './icons/Chip'
import Sun from './icons/Sun'
import Moon from './icons/Moon'
import Swatch from './icons/Swatch'
import { Listbox, Transition } from '@headlessui/react'
import { CheckIcon, SelectorIcon } from '@heroicons/react/solid'


export default function DarkModeToggle() {
    const [mounted, setMounted] = useState(false)
    const { theme, setTheme } = useTheme()
    const themes = [
        { value: 'system', label: 'System' },
        { value: 'light', label: 'Light' },
        { value: 'dark', label: 'Dark' },
    ]

    useEffect(() => setMounted(true), [])

    if (!mounted) return null

    return (
        <Listbox value={theme} onChange={setTheme}>
          <div className="relative mt-1 z-50">
            <Listbox.Button className="block rounded bg-transparent text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 p-2 focus:outline-none focus:ring">
              <Swatch className="w-8 h-8 md:h-10 md:w-10" />
            </Listbox.Button>
            <Transition
              as={Fragment}
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Listbox.Options className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-100 dark:border-gray-800 py-4 w-64 md:w-80 absolute top-full right-0 mt-2 space-y-2 focus:outline-none focus:ring">
                {themes.map((theme, themeIdx) => (
                  <Listbox.Option
                    key={themeIdx}
                    className={({ selected, active }) =>
                      `${selected ? 'bg-blue-600 text-blue-600 bg-opacity-10 dark:bg-blue-500 dark:text-white dark:bg-opacity-100' : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}
                      ${active && !selected ? 'bg-gray-100 dark:bg-gray-700' : ''}
                      text-2xl md:text-4xl font-sans font-bold flex items-center justify-start space-x-8 px-4 py-2 md:py-4 md:px-6 w-full dark:text-white focus:outline-none focus:ring`
                    }
                    value={theme.value}
                  >
                    <span className="inline-flex items-center flex-shrink-0 h-6 w-6 md:w-8 md:h-8">
                        {theme.value === 'system' && <Chip />}
                        {theme.value === 'light' && <Sun />}
                        {theme.value === 'dark' && <Moon />}
                    </span>
                    <span className="flex-1 text-left">{theme.label}</span>
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </div>
        </Listbox>
    )
}
