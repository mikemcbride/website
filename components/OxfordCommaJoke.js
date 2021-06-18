import ArrowLine from './ArrowLine'
export default function OxfordCommaJoke({ className, ...props}) {
    return (
        <span className={`relative ${className || ''}`} {...props}>,
            <ArrowLine className="top-0 w-12 transform -translate-x-1/2 left-1/2 mt-8 text-purple dark:text-purple-400 -ml-2">
              <span className="absolute bottom-0 left-0 ml-2 w-48 transform -translate-x-1/2 translate-y-full text-xs italic font-mono text-hot-pink dark:text-pink-400">(see what I did there?)</span>
            </ArrowLine>
        </span>
    )
}
