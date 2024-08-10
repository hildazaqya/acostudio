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

export default function PublicLearning() {
    const pathImages = "/public-learning/";
    const imagesItem: imageItem[] = Array.from({ length: 5 }, (_, index) =>
    ({
        image: `${pathImages}/pict-${index + 1}.svg`,
    }));
    return (
        <section className="w-full mt-5">
<Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={3}
                // autoplay={{
                //     delay: 3000, // Delay between slides in milliseconds
                //     disableOnInteraction: false, // Allows autoplay to continue after interaction
                // }}
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                breakpoints={{
                    780: {
                        slidesPerView: 3
                    },
                    1024: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    }
                }}
                pagination={{ clickable: true }}
            >
                {imagesItem.map((item, index) => (
                    <SwiperSlide key={index}>
                        <Image
                            src={item.image}
                            alt={`Image ${index + 1}`}
                            width={240}
                            height={134}
                            layout="responsive"
                            objectFit="cover" />
                    </SwiperSlide>
                ))}
                 <div className="custom-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer">
                    <Image width={50} height={50} src="https://img.icons8.com/ios-glyphs/30/F0F0F5/chevron-left.png" alt="chevron-left" />
                </div>
                <div className="custom-swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer">
                    <Image width={50} height={50} src="https://img.icons8.com/ios-glyphs/30/F0F0F5/chevron-right.png" alt="chevron-left" />
                </div>
            </Swiper>
            <h5 className="text-h5 text-center font-normal mt-4">PUBLIC LEARNING</h5>
            <div className="h-[0.3px] w-full bg-neutral mt-5"></div>
        </section>
    )
}