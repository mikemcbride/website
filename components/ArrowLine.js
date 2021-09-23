import ArrowWiggly from './icons/ArrowWiggly'

const ArrowLine = ({ children, className, ...props }) => (
    <div className={`absolute ${className || ''}`} {...props}>
        <ArrowWiggly className="w-6 transform rotate-180 -mt-1 relative mx-auto" />
        {children}
    </div>
)

export default ArrowLine
