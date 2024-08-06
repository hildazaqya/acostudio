import Image from "next/image";

type socmedItem = {
    icon: string;
    socmed: string;
    title: string;
    width:number,
    height:number
}

function Footer() {
    const socmedItems: socmedItem[] = [
        { icon: "/socmed/whatsapp.svg", socmed:"Whatsapp Bussiness", title:"+62821-3298-8272", width: 30, height:30},
        { icon: "/socmed/instagram.svg", socmed:"Instagram", title:"@a.costudioindonesia", width:30, height:30},
        { icon: "/socmed/gmail.svg", socmed:"Email", title:"a.costudioindonesia@gmail.com", width:30, height:30},
    ]

    
    return (
    <footer className="bg-primary px-[80px] py-5 mt-2 flex flex-row">
         <div className="flex flex-col px-5">
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
    </footer>
    )
}

export default Footer;