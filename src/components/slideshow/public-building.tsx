'use client'
import Image from "next/image";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
type imageItem = {
    image: string;
}

export default function PublicBuilding() {
    const pathImages = "/public-building/";
    const imagesItem: imageItem[] = Array.from({ length: 5 }, (_, index) =>
    ({
        image: `${pathImages}/pict-${index + 1}.svg`,
    }));
    return (
        <section className="w-full mt-5">
        <Swiper
                modules={[Autoplay, Pagination, Navigation]}
                spaceBetween={50}
                slidesPerView={4}
                autoplay={{
                    delay: 3000, // Delay between slides in milliseconds
                    disableOnInteraction: false, // Allows autoplay to continue after interaction
                }}
                pagination={{ clickable: true }}
                navigation={true}
            >
                {imagesItem.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={item.image}
                            alt={`Image ${index + 1}`}
                            width={400}
                            height={300}
                            layout="responsive"
                            objectFit="cover" />
                    </SwiperSlide>
                ))}
            </Swiper>
            <h5 className="text-h5 text-center font-normal mt-4">PUBLIC BUILDING</h5>
            <div className="h-[0.3px] w-full bg-neutral mt-5"></div>
        </section>
    )
}