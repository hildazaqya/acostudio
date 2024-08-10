import Image from "next/image"

export default function Services() {
    return (
        <section  id="services" className="flex flex-col justify-start w-full px-10 lg:px-[80px] mt-5">
            <h3 className="text-h3 font-normal text-primary text-left pt-6">Scope of Work</h3>
            <div className="w-full mt-3 flex flex-col gap-5 lg:flex-row items-center p-6 lg:p-10 justify-around bg-primary rounded-xl">
                <ul className="text-sm text-accent list-disc">
                    <li>Jasa Desain dan Konsep</li>
                    <li>Jasa Gambar Kerja 2D & 3D</li>
                    <li>Architecture drawing</li>
                    <li>Engineering drawing</li>
                    <li>Mechanical & Plumbing</li>
                    <li>Visual Animasi 3D</li>
                    <li>Jasa Perhitungan Rencana Anggaran Biaya (RAB)</li>
                    <li>Jasa Pembangunan Fisik</li>
                    <li>Jasa Pengawasan Lapangan</li>
                </ul>
                <div className="bg-accent p-7 rounded-xl">
                    <Image src="/scopeofwork.svg" width={200} height={100} alt="scope of work" layout="responsive" />
                </div>
            </div>
        </section>
    )
}