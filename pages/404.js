import HorizontalPad from '../components/HorizontalPad'
import Link from '../components/Link'
import Image from 'next/image'
import Head from '../components/Head'
import lost from '../img/lost.jpg'

const Lost = () => (
    <>
        <Head title="Where's Waldo?" />
        <HorizontalPad>
            <div className="bg-white text-black text-center font-mono mt-6">
                <div className="mx-auto w-full">
                    <Image src={lost} alt="Photo of the TV show Lost" />
                </div>
                <p className="my-12 text-xl leading-loose">Well this is embarrassing...</p>
                <div className="text-center">
                    <Link href="/" className="inline-block bg-blue hover:bg-hot-pink dark:bg-blue-500 dark:hover:bg-pink-500 text-white text-lg rounded px-4 py-2">Take me home, please!</Link>
                </div>
            </div>
        </HorizontalPad>
    </>
)

export default Lost
