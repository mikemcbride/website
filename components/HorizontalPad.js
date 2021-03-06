export default function HorizontalPad({ children, className, ...props }) {
    return (<div className={`mx-auto w-full px-6 lg:px-0 max-w-4xl ${className || ''}`} {...props}>{children}</div>)
}
