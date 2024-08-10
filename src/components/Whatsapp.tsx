import Image from "next/image";

export default function WhatsAppBubble() {
    return (
        <div className="bubble fixed z-[1000] cursor-pointer">
            <a
                href="https://wa.me/6281234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-bubble"
            >
                <Image
                    src="/whatsapp.svg"
                    alt="WhatsApp"
                    width={64}
                    height={64}
                />
            </a>
        </div>
    );
}
