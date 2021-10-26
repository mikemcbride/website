export default function ThemeButton({ children, handleClick, isActive }) {
    return (
        <button
            onClick={handleClick}
            className={`inline-flex items-center rounded ${isActive ? 'bg-blue-600 text-blue-600 bg-opacity-10 dark:bg-blue-500 dark:text-white dark:bg-opacity-100' : 'hover:bg-gray-100 text-black dark:hover:bg-gray-700 dark:text-gray-300'} p-2 md:p-3 focus:outline-none focus:ring focus:ring-inset`}>
                <span className="inline-flex items-center h-6 w-6 md:w-8 md:h-8">
                    {children}
                </span>
        </button>
    )
}
