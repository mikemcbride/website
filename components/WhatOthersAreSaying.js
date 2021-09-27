import BigQuote from './BigQuote'

export default function WhatOthersAreSaying() {
    return (
        <div className="mb-40 max-w-full">
            <h2 className="dark:text-white font-slab font-bold text-3xl py-2 mb-8 border-b-2 border-purple-600 dark:border-purple-500">What others are saying...</h2>
            <p className="leading-loose text-lg md:text-xl text-gray-800 dark:text-gray-300 mb-16">...I mean, they might have said it. I can't say for certain that they did, but I also can't say for certain that they didn't. That has to count for something, right?</p>
            <section className="px-2 flex flex-col items-center">
                <div className="font-slab font-medium relative inline-block transform rotate-1 text-blue-600 dark:text-blue-400 text-lg md:text-2xl self-start ml-3 mb-16">
                    <BigQuote />
                    <p className="mb-2">An absolute freak athlete. Mike is on another level.</p>
                    <div className="text-right">- LeBron James</div>
                </div>
                <div className="flex justify-end mb-16">
                    <div className="font-slab font-medium relative text-hot-pink dark:text-pink-400 text-lg md:text-2xl md:w-2/3 md:mr-12">
                        <BigQuote />
                        <p className="mb-2">Mike writes the most elegant code I have ever seen. If you’re looking for the pinnacle of development talent, look no further.</p>
                        <div className="text-right">- Mark Zuckerberg</div>
                    </div>
                </div>
                <div className="font-slab font-medium relative transform -rotate-2 text-gray-700 dark:text-gray-300 text-lg md:text-2xl md:ml-24 self-start md:w-1/2 mb-16">
                    <BigQuote />
                    <p className="mb-2">Unbelievably handsome. I mean, have you seen this guy? Just... wow.</p>
                    <div className="text-right">- Ryan Reynolds</div>
                </div>
                <div className="font-slab font-medium relative transform rotate-3 text-purple dark:text-purple-400 text-lg md:text-2xl ml-12 md:self-end md:ml-0 md:mr-20 w-2/3 md:w-2/5 mb-16">
                    <BigQuote />
                    <p className="mb-2">Nice guy. Moderately funny.</p>
                    <div className="text-right md:mr-8">- My wife</div>
                </div>
            </section>
        </div>
    )
}
