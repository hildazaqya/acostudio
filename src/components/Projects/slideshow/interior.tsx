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

export default function Interior() {
    const pathImages = "/interior/";
    const imagesItem: imageItem[] = Array.from({ length: 7 }, (_, index) =>
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
                            style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                        />
                    </SwiperSlide>
                ))}
               <div className="custom-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer">
                    <Image width={50} height={50} src="/chevron-left.svg" alt="chevron-left" className="shadow-logo" />
                </div>
                <div className="custom-swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer">
                    <Image width={50} height={50} src="/chevron-right.svg" alt="chevron-left" className="shadow-logo" />
                </div>
            </Swiper>
            <h5 className="text-h5 text-center font-normal mt-4">INTERIOR</h5>
            <div className="h-[0.3px] w-full bg-neutral mt-5"></div>
        </section>
    )
}