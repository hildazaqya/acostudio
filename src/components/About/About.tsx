import Image from "next/image";
import Link from "next/link";

type socmedItem = {
    icon: string,
    socmed: string,
    title: string,
    link:string,
    width: number,
    height: number
}

function About() {
    const socmedItems: socmedItem[] = [
        { icon: "/socmed/whatsapp.svg", socmed: "Whatsapp Bussiness", title: "+62821-3298-8272", link: 'https://wa.me/6282132988272', width: 30, height: 30 },
        { icon: "/socmed/instagram.svg", socmed: "Instagram", title: "@a.costudioindonesia", link: 'https://www.instagram.com/a.costudioindonesia', width: 30, height: 30 },
        { icon: "/socmed/gmail.svg", socmed: "Email", title: "a.costudioindonesia@gmail.com", link: 'mailto:a.costudioindonesia@gmail.com', width: 30, height: 30 },
    ]

    return (
        <section id="about" className="w-full p-10 lg:px-[80px] py-5 flex flex-col justify-center">
            <h3 className="text-2xl sm:text-h3 text-primary font-semibold">Jasa Desain & Bangun Bangunan</h3>
            <p className="text-sm sm:text-h6 text-[#787a81]">hamemayu hayuning bawana - Memperindah keindahan dunia</p>
            <div className="flex lg:flex-row justify-around mt-7 w-full mx-auto">
                <div className="flex flex-col lg:flex-row w-[-webkit-fill-available] justify-between gap-3 lg:gap-0">
                    <div className="flex flex-col text-left justify-center max-w-full lg:max-w-[360px]">
                        <h5 className="text-xl text-primary font-semibold">a.costudioindonesia</h5>
                        <p className="text-sm sm:text-base text-neutral">merupakan studio gambar yang menawarkan jasa konsep, desain dan estimasi  bangunan yang kompeten dan berpengalaman. </p>
                    </div>
                    <div className="border-b-[0.5px] lg:border-r-[0.5px] border-neutral lg:mb-5"></div>
                    <div className="flex items-center justify-center">
                        <Image src="/logo-v2.svg" alt="logo v2" width={250} height={150} />
                    </div>
                    <div className="border-b-[0.5px] lg:border-r-[0.5px] border-neutral lg:mb-5"></div>
                    <div className="flex flex-col lg:px-5">
                        <h5 className="text-xl sm:text-h5 font-semibold text-primary">Get Touch</h5>
                        {socmedItems.map((item, index) => (
                            <Link href={item.link} key={index}>
                                 <div className="flex flex-row gap-2">
                                <Image src={item.icon} alt={item.socmed} width={item.width} height={item.height} />
                                <div>
                                    <h6 className="text-h6 text-primary">{item.socmed}</h6>
                                    <p className="text-neutral text-sm">{item.title}</p>
                                </div>
                            </div>
                            </Link>
                        ))
                        }
                    </div>
                </div>
            </div>
            <div className="hidden lg:flex h-[0.5px] w-full bg-neutral mt-5"></div>
            <h3 className="text-2xl sm:text-h3 font-normal text-primary text-left pt-6 font-semibold">Why A.CO?</h3>
            <div className="w-full mt-3 flex flex-col lg:flex-row items-center gap-5 p-6 lg:p-10 justify-around bg-primary rounded-xl gap-x-11">
                <div className="text-center text-accent flex flex-col justify-center items-center max-w-[300px] lg:max-w-[250px]">
                    <h5 className="text-xl sm:text-h5 font-semibold">
                        HARGA KOMPETITIF
                    </h5>
                    <p className="text-sm">
                        Harga yang kami berikan akan selalu disesuaikan dengan kebutuhan proyek perhitungan struktur Anda.
                    </p>
                </div>
                <div className="text-center text-accent flex flex-col justify-center items-center max-w-[300px] lg:max-w-[250px]">
                    <h5 className="text-xl sm:text-h5 font-semibold">
                        KONSULTASI GRATIS
                    </h5>
                    <p className="text-sm">
                        Kami memberikan konsultasi gratis secara online melalui WA, telepon, dan email. Jadi konsultasikan ke kami kebutuhan Anda sekarang
                    </p>
                </div>
                <div className="text-center text-accent flex flex-col justify-center items-center max-w-[300px] lg:max-w-[250px]">
                    <h5 className="text-xl sm:text-h5 font-semibold">
                        HASIL BERKUALITAS
                    </h5>
                    <p className="text-sm">
                        Kualitas jasa desain bangunan, gambar  lengkap, dan perhitungan RAB yang sudah sesuai Standar Nasional Indonesia.
                    </p>
                </div>
            </div>
        </section>
    )
}

export default About;