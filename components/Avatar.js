import Image from 'next/image'
import mike from '../img/profile_pic.jpg'

export default function Avatar() {
    return (
        <span className="inline-block overflow-hidden border border-gray-200 h-32 w-32 rounded-full shadow">
            <Image src={mike} alt="Picture of Mike" placeholder="blur" className="rounded-full" />
        </span>
    )
}
