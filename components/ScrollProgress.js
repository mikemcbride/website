import { useState, useEffect } from 'react'

export default function ScrollProgress() {
    const [scroll, setScroll] = useState(100)
    useEffect(() => {
        let progressBarHandler = () => {
            const totalScroll = document.documentElement.scrollTop
            const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight
            const scroll = 100 - ((totalScroll / windowHeight) * 100)
            setScroll(scroll)
        }

        window.addEventListener('scroll', progressBarHandler)
        return () => window.removeEventListener('scroll', progressBarHandler)
    })
    return (
        <div className="fixed top-0 inset-x-0 z-50">
            <div className="absolute top-0 inset-x-0 bg-gradient-to-r from-aqua to-blue-600 z-10 h-1"></div>
            <div className="z-20 bg-white dark:bg-black absolute right-0 top-0 h-1" style={{width: `${scroll}%`}}></div>
        </div>
    )
}
