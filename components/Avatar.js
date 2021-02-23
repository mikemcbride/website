import Image from 'next/image'

export default function Avatar() {
    return (
        <span className="inline-block overflow-hidden border border-gray-200 h-32 w-32 rounded-full shadow">
            <Image src="/img/profile_pic.jpg" alt="Picture of Mike" width={128} height={128} className="rounded-full" />
        </span>
    )
}
