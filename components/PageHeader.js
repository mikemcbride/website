export default function PageHeader({ children }) {
    return (
        <div className="relative z-10 inline-block mb-8">
            <h1 className="m-0 text-3xl md:text-5xl px-6 py-2 leading-tight bg-white text-black font-sans font-black rounded shadow-md">{children}</h1>
            <div className="-z-1 absolute inset-0 bg-gradient-to-r from-hot-pink to-purple rounded shadow-sm transform -rotate-6"></div>
        </div>
    )
}
