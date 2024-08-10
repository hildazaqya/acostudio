import Image from "next/image";

export default function WhatsAppBubble() {
    return (
        <div className="bubble fixed z-[1000]">
            <a
                href="https://wa.me/6281234567890" 
                target="_blank"
                rel="noopener noreferrer"
                className="whatsapp-bubble"
            >
                <Image
                    src="https://img.icons8.com/color/96/whatsapp--v1.png"
                    alt="WhatsApp"
                    width={64}
                    height={64}
                />
            </a>
        </div>
    );
}
