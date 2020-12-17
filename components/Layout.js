import Head from './Head'
import SiteNav from './SiteNav'
import KonamiCode from './KonamiCode'
import HorizontalPad from './HorizontalPad'
import SiteFooter from './SiteFooter'

export default function Layout({ children, pageTitle, ...props }) {
    return (
        <>
            <Head title={pageTitle} />
            <div className="bg-white text-black w-full font-mono text-lg min-h-screen flex flex-col leading-tight">
                <KonamiCode />
                <SiteNav />
                <HorizontalPad extraClasses="flex-1">
                    <main role="main" className="w-full flex-auto">
                        {children}
                    </main>
                </HorizontalPad>
                <SiteFooter/>
            </div>
        </>
    )
}
