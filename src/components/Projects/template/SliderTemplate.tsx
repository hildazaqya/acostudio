'use client'
import { useState } from "react";
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

interface SliderTemplateProps {
    title: string;
    pathImages: string;
    imageCount: number;
    autoplay?: boolean;
}

interface ImageWithPlaceholderProps {
    src: string;
    alt: string;
}

export default function SliderTemplate({
    title,
    pathImages,
    imageCount,
    autoplay = false,
}: SliderTemplateProps) {
    const imagesItem: imageItem[] = Array.from({ length: imageCount }, (_, index) =>
    ({
        image: `${pathImages}/pict-${index + 1}.svg`,
    }));
    return (
        <section className="w-full mt-5">
            <Swiper
                modules={[Autoplay, Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1.2} // Default for mobile
                centeredSlides={true}
                loop={true}
                autoplay={
                    autoplay
                        ? {
                            delay: 3000,
                            disableOnInteraction: false,
                        }
                        : undefined
                }
                navigation={{
                    nextEl: '.custom-swiper-button-next',
                    prevEl: '.custom-swiper-button-prev',
                }}
                breakpoints={{
                    640: {
                        slidesPerView: 3, // 3 slides on small devices
                        spaceBetween: 20,
                    },
                    1024: {
                        slidesPerView: 4, // 4 slides on larger screens
                        spaceBetween: 30,
                    }
                }}
                pagination={{ clickable: true }}
            >
                {imagesItem.map((item, index) => (
                    <SwiperSlide key={index}>
                        <ImageWithPlaceholder src={item.image} alt={`Image ${index + 1}`} />
                    </SwiperSlide>
                ))}
                <div className="hidden sm:block custom-swiper-button-prev absolute top-1/2 -translate-y-1/2 left-0 z-10 cursor-pointer">
                    <Image width={50} height={50} src="/chevron-left.svg" alt="chevron-left" className="shadow-logo" />
                </div>
                <div className="hidden sm:block custom-swiper-button-next absolute top-1/2 -translate-y-1/2 right-0 z-10 cursor-pointer">
                    <Image width={50} height={50} src="/chevron-right.svg" alt="chevron-left" className="shadow-logo" />
                </div>
            </Swiper>
            <h5 className="font-normal text-lg md:text-2xl text-center mt-4">{title}</h5>
            <div className="h-[0.3px] w-full bg-neutral mt-2 sm:mt-5"></div>
        </section>
    )
}

function ImageWithPlaceholder({ src, alt }: ImageWithPlaceholderProps) {
    const [isLoading, setIsLoading] = useState(true);

    return (
        <div className="relative w-full">
            {
                isLoading && (
                    <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
                )}
            <Image
                src={src}
                alt={alt}
                width={240}
                height={134}
                loading ='lazy'
                style={{ objectFit: 'cover', width: '100%', height: 'auto' }}
                onLoad={() => setIsLoading(false)}
                className={`transition-opacity duration-500 ${isLoading ? 'opacity-0': 'opacity-100'}`}
            />
        </div>
    )
}