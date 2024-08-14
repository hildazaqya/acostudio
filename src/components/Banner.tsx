import Image from "next/image"

export default function Banner() {
    return (
        <div className="w-full mt-6 mb-[-4px]">
            <Image src="/banner.svg" layout="responsive" width={400} height={300} alt="banner" />
        </div>
    )
}