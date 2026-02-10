"use client";

import Image from "next/image";
import Container from "../Container";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";

type CarouselProps = {
  title?: string;
  subtitle?: string;
  items: CarouselCardProps[];
};

type CarouselCardProps = {
  title: string;
  tagline: string;
  description: string;
  image: ImageProps;
  button: ButtonProps;
  whatsapp: ButtonProps;
};

type ImageProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

type ButtonProps = {
  label: string;
  href: string;
};

export default function Carousel({ title, subtitle, items }: CarouselProps) {
  return (
    <section className="carousel mb-12 text-center">
      <Container>
        <div className="carousel__title">
          <h2 className="text-3xl font-extralight mb-4">{title}</h2>
          <p>{subtitle}</p>
        </div>
      </Container>

      <Container>
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          autoplay={{
            delay: 7000,
            disableOnInteraction: false,
          }}
          spaceBetween={50}
          slidesPerView={1}
          pagination={{
            clickable: true,
          }}
          navigation={true}
        >
          {items.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="grid md:grid-cols-2">
                <div className="carousel__image flex align-center">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                  />
                </div>

                <div className="carousel__content text-left flex flex-col justify-center">
                  <span className="text-sm uppercase pb-2 text-[#FFE388]">{item.tagline}</span>
                  <h3 className="text-4xl font-bold mb-8">{item.title}</h3>
                  <p dangerouslySetInnerHTML={{ __html: item.description }} />

                  <div className="carousel__buttons flex gap-4">
                    <a href={item.button.href} className="p-2 bg-white text-[black] rounded">{item.button.label}</a>
                    <a href={item.whatsapp.href} className="p-2 bg-black text-[white] rounded border">{item.whatsapp.label}</a>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
}
