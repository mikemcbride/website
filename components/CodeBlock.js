const CodeBlock = ({ inline, className, children, ...props }) => {
    if (!inline) {
        return (
            <div className={className} {...props}>{String(children).replace(/\n$/, '')}</div>
        )
    } else {
        return (
            <code className={className} {...props}>{children}</code>
        )
    }
}

export default CodeBlock
