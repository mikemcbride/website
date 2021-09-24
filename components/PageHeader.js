export default function PageHeader({ children }) {
    return (
        <div className="relative w-full mb-8">
            <h1 className="m-0 mb-1 text-4xl md:text-6xl leading-tight text-black dark:text-gray-100 font-slab font-bold">{children}</h1>
            <div className="h-0.5 md:h-1 bg-gradient-to-r from-purple-600 to-blue-600 dark:from-purple-400 dark:to-blue-400"></div>
        </div>
    )
}
