export default function ThemeButton({ children, themeName, handleClick, isActive, ...rest }) {
    return (
        <button
            onClick={handleClick}
            className={`text-2xl md:text-4xl font-sans font-bold flex items-center justify-start space-x-8 px-4 py-2 md:py-4 md:px-6 w-full dark:text-white focus:outline-none focus:ring ${isActive === true ? 'bg-blue-600 text-blue-600 bg-opacity-10 dark:bg-blue-500 dark:text-white dark:bg-opacity-100' : 'text-black dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'}`}>
            <span className="inline-flex items-center flex-shrink-0 h-6 w-6 md:w-8 md:h-8">
                {children}
            </span>
            <span className="flex-1 text-left">{themeName}</span>
        </button>
    )
}
