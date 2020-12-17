import ArrowHead from './icons/ArrowHead'
import LoopyLine from './icons/LoopyLine'

const ArrowLine = ({ children, className, ...props }) => (
    <div className={`absolute ${className || ''}`} {...props}>
        <ArrowHead className="arrow-head w-4 transform rotate-180 -mt-1 absolute right-0 -translate-x-1/2" />
        <LoopyLine className="mr-1" />
        {children}
    </div>
)

export default ArrowLine
