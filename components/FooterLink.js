const FooterLink = ({ href, title }) => (
    <a
      className="font-slab font-medium text-gray-400 hover:text-black dark:hover:text-white leading-normal transform inline-block text-xl md:text-2xl"
      href={href}
      title={title}>
      {title}
    </a>
)

export default FooterLink
