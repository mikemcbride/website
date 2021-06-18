import Heart from './icons/Heart'

export default function HeartListItem({ children }) {
    return (
        <li className="flex items-baseline leading-relaxed">
            <span className="inline-block text-hot-pink dark:text-pink-400 w-4 h-4 mr-3 pt-1">
                <Heart className="w-full" />
            </span>
            <div className="flex-1">
                {children}
            </div>
        </li>
    )
}
