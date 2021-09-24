import settings from '../data/settings'
import HorizontalPad from './HorizontalPad'
import FooterLink from './FooterLink'

export default function SiteFooter() {
    const { footerLinks } = settings
    return (
        <footer className="text-left relative">
            <nav className="py-12 border-t border-gray-300 dark:border-gray-700">
                <HorizontalPad className="space-x-8">
                    {footerLinks.map((link, index) => (
                        <FooterLink
                            key={index}
                            title={link.title}
                            href={link.to} />
                    ))}
                </HorizontalPad>
            </nav>
        </footer>
    )
}
