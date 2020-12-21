import { useEffect } from 'react'
import Head from './Head'
import SiteNav from './SiteNav'
// import KonamiCode from './KonamiCode' // => add this above SiteNav in the render function once it's working.
import HorizontalPad from './HorizontalPad'
import SiteFooter from './SiteFooter'

export default function Layout({ children, pageTitle, description }) {
    useEffect(() => {
        const { timeZone, locale } = Intl.DateTimeFormat().resolvedOptions()
        const { pathname } = window.location
        fetch('/api/pageview', {
            method: 'POST',
            body: JSON.stringify({ timeZone, locale, pathname }),
            headers: { 'Content-Type': 'application/json' }
        })
    }, [])
    return (
        <>
            <Head title={pageTitle} description={description} />
            <div className="bg-white text-black w-full font-mono text-lg min-h-screen flex flex-col leading-tight">
                <SiteNav />
                <HorizontalPad className="flex-1">
                    <main role="main" className="w-full flex-auto">
                        {children}
                    </main>
                </HorizontalPad>
                <SiteFooter />
            </div>
        </>
    )
}
