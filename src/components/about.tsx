import Image from "next/image";

type socmedItem = {
    icon: string;
    socmed: string;
    title: string;
    width:number,
    height:number
}

function About() {
    const socmedItems: socmedItem[] = [
        { icon: "/socmed/whatsapp.svg", socmed:"Whatsapp Bussiness", title:"+62821-3298-8272", width: 30, height:30},
        { icon: "/socmed/instagram.svg", socmed:"Instagram", title:"@a.costudioindonesia", width:30, height:30},
        { icon: "/socmed/gmail.svg", socmed:"Email", title:"a.costudioindonesia@gmail.com", width:50, height:30},
    ]

    return (
        <section className="w-full px-[50px] py-5">
            <h2 className="text-h2 text-primary">Jasa Desain & Bangun Bangunan</h2>
            <p className="text-h5 text-[#787a81]">hamemayu hayuning bawana - Memperindah keindahan dunia</p>
            <div className="flex flex-row justify-around border-b-[0.5px] border-neutral mt-7">
                <div className="flex flex-row justify-center gap-5">
                    <Image src="./logo.svg" alt="Logo" width={100} height={100} className="shadow-logo" />
                    <div className="flex flex-col items-start justify-center text-left">
                        <h5 className="text-h5 font-semibold text-primary">a.costudioindonesia</h5>
                        <p className="text-p font-normal text-neutral">
                            Freelancer - Designer - Estimation - Building
                        </p>
                    </div>
                    <div className="border-r-[0.5px] border-neutral mb-5"></div>
                    <div className="flex items-center">
                    <Image src="./logo.svg" alt="Logo" width={120} height={120} className="shadow-logo" />
                    </div>
                    <div className="border-r-[0.5px] border-neutral mb-5"></div>
                    <div className="flex flex-col ml-2">
                        <h5 className="text-h5 font-semibold text-primary">Get Touch</h5>
                        {socmedItems.map((item, index) => (
                            <div className="flex flex-row gap-2" key={index}>
                            <Image src={item.icon} alt={item.socmed} width={item.width} height={item.height} />
                            <div>
                             <h6 className="text-h6 text-primary">{item.socmed}</h6>
                             <p className="text-neutral text-sm">{item.title}</p>
                            </div>
                         </div>
                        ))
                        }
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About;