import Image from "next/image"

type priceItem = {
    picture: string;
    title: string;
    list: string;
}
export default function Price() {
    const priceItems: priceItem[] = [
        {picture: "/desainvisual.svg", title: "Desain visual & animasi bangunan", list:"Lorem"},
        {picture: "/desainbangunan.svg", title: "Desain bangunan gambar kerja", list:"Lorem"},
        {picture: "/desaininterior.svg", title: "Desain interior bangunan", list:"Lorem"},
        {picture: "/desainlengkap.svg", title: "Desain lengkap ekterior dan interior lengkap dengan RAB (Rencana Anggaran Biaya)", list:"Lorem"},
    ]
    return (
        <section  id="price" className="flex flex-col justify-start w-full px-10 lg:px-[80px] mt-5">
             <h3 className="text-2xl sm:text-h3 font-normal text-[#AFB2BD]  text-left pt-6 font-semibold">An Shop Drawing</h3>
             <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-5">
                {priceItems.map((item,index) => (
                     <div key={index} className="bg-[#AFB2BD] flex flex-col p-6 rounded-xl">
                     <div className="bg-white rounded-lg">
                     <Image src={item.picture} alt={item.title} width={200} height={100} layout="responsive" />
                     </div>
                     <p className="text-accent text-base mt-3 text-center">{item.title}</p>
                   
                
                 </div>
                ))}
             </div>
        </section>
    )
}