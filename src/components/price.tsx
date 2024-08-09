import Image from "next/image"

type priceItem = {
    picture: string;
    title: string;
    list: string;
}
export default function Price() {
    const priceItems: priceItem[] = [
        {picture: "/gedung.svg", title: "Lorem Ipsum", list:"Lorem"},
        {picture: "/", title: "Lorem Ipsum", list:"Lorem"},
        {picture: "/", title: "Lorem Ipsum", list:"Lorem"},
        {picture: "/", title: "Lorem Ipsum", list:"Lorem"},
    ]
    return (
        <section className="flex flex-col justify-start w-full px-10 lg:px-[80px] mt-5">
             <h3 className="text-h3 font-normal text-primary text-left pt-6">An Shop Drawing</h3>
             <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-5">
                {priceItems.map((item,index) => (
                     <div key={index} className="bg-[#AFB2BD] flex flex-col p-5 rounded-xl">
                     <div className="bg-white rounded-lg p-5">
                     <Image src={item.picture} alt="gedung" width={200} height={100} layout="responsive" />
                     </div>
                     <p>{item.title}</p>
                 </div>
                ))}
             </div>
        </section>
    )
}