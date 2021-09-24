export default function SectionHeader({ children }) {
    return (
        <div className="relative w-full mb-8">
            <h1 className="m-0 mb-1 text-3xl md:text-5xl leading-tight text-black dark:text-gray-100 font-slab font-bold">{children}</h1>
            <div className="h-0.5 md:h-1 bg-gradient-to-r from-blue-600 to-purple dark:from-blue-500 dark:to-purple-500"></div>
        </div>
    )
}
