export default function Services() {
    return (
        <section className="flex flex-col justify-start w-full px-[80px] mt-5">
            <h2 className="text-h2 font-normal text-primary text-left pt-6">Layanan A.CO</h2>
            <h2 className="text-h2 font-normal text-primary text-left pt-6">Why A.CO?</h2>
            <div className="w-full mt-3 flex flex-row items-center px-4 py-[40px] justify-around bg-primary rounded-xl gap-x-11">
                <div className="text-center text-accent flex flex-col justify-center items-center max-w-[250px]">
                    <h5 className="text-h5 font-semibold">
                        HARGA KOMPETITIF
                    </h5>
                    <p className="text-sm">
                        Harga yang kami berikan akan selalu disesuaikan dengan kebutuhan proyek perhitungan struktur Anda.
                    </p>
                </div>
                <div className="text-center text-accent flex flex-col justify-center items-center max-w-[250px]">
                    <h5 className="text-h5 font-semibold">
                        KONSULTASI GRATIS
                    </h5>
                    <p className="text-sm">
                    Kami memberikan konsultasi gratis secara online melalui WA, telepon, dan email. Jadi konsultasikan ke kami kebutuhan Anda sekarang
                    </p>
                </div>
                <div className="text-center text-accent flex flex-col justify-center items-center max-w-[250px]">
                    <h5 className="text-h5 font-semibold">
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