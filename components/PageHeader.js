export default function PageHeader({ children }) {
    return (
        <div className="relative w-full mb-8">
            <h1 className="m-0 mb-1 text-3xl md:text-5xl leading-tight text-black dark:text-gray-100 font-sans font-black">{children}</h1>
            <div className="h-px md:h-1 bg-gradient-to-r from-hot-pink to-purple dark:from-pink-500 dark:to-purple-500"></div>
        </div>
    )
}
