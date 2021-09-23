const FooterLink = ({ href, title }) => (
    <a
      className="font-mono font-bold text-aqua dark:text-white hover:underline leading-normal transform inline-block text-base md:text-lg mx-4"
      href={href}
      title={title}>
      {title}
    </a>
)

export default FooterLink
