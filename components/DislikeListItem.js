import XBrush from './icons/XBrush'

export default function DislikeListItem({ children }) {
    return (
        <li className="flex items-baseline leading-relaxed">
            <span className="inline-block text-purple w-4 h-4 mr-3 pt-1">
                <XBrush className="w-full" />
            </span>
            <div className="flex-1">
                {children}
            </div>
        </li>
    )
}
