import Image from "next/image";

type socmedItem = {
    icon: string;
    socmed: string;
    title: string;
    width: number;
    height: number
}

function Footer() {
    const socmedItems: socmedItem[] = [
        { icon: "/socmed/whatsapp.svg", socmed: "Whatsapp Bussiness", title: "+62821-3298-8272", width: 30, height: 30 },
        { icon: "/socmed/instagram.svg", socmed: "Instagram", title: "@a.costudioindonesia", width: 30, height: 30 },
        { icon: "/socmed/gmail.svg", socmed: "Email", title: "a.costudioindonesia@gmail.com", width: 30, height: 30 },
    ]


    return (
        <footer className="bg-primary px-10 lg:px-[80px] py-5 flex flex-col">
            <div className="flex flex-col items-start lg:flex-row lg:justify-between">
            <div className="flex flex-col">
                <h5 className="text-xl sm:text-h5 font-semibold text-accent">Get Touch </h5>
                {socmedItems.map((item, index) => (
                    <div className="flex flex-row gap-2" key={index}>
                        <Image src={item.icon} alt={item.socmed} width={item.width} height={item.height} />
                        <div>
                            <h6 className="text-h6 text-accent">{item.socmed}</h6>
                            <p className="text-neutral text-sm">{item.title}</p>
                        </div>
                    </div>
                ))
                }
            </div>
            <div className="flex flex-col mt-5 lg:mt-0">
                <h5 className="text-xl sm:text-h5 font-semibold text-accent">Layanan</h5>
                <div className="flex flex-col lg:flex-row text-accent mt-1 gap-x-4 text-sm sm:text-base">
                    <ul className="list-disc list-inside">
                        <li>Jasa Desain dan Konsep</li>
                        <li>Jasa Gambar Kerja 2D & 3D</li>
                        <li>Jasa Pembangunan Fisik</li>
                    </ul>
                    <ul className="list-disc list-inside">
                        <li>Jasa Perhitungan Rencana Anggaran Biaya (RAB)</li>
                        <li>Jasa Pengawasan Lapangan</li>
                    </ul>
                </div>
            </div>
            </div>
            <p className="text-center text-accent text-sm sm:text-base mt-5 lg:mt-2 font-normal">© copyright 2024 A.costudioindonesia. All rights reserved.</p>
        </footer>
    )
}

export default Footer;