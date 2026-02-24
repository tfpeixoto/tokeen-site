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
  target?: string;
};

export default function Carousel({ title, subtitle, items }: CarouselProps) {
  return (
    <section className="carousel mb-12 text-center">
      <Container>
        <div className="carousel__title">
          <h2 className="text-4xl font-extralight mb-4 text-balance">
            {title}
          </h2>
          <p className="text-lg">{subtitle}</p>
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
              <div className="bg-background grid gap-6 md:grid-cols-2 p-6">
                <div className="carousel__image flex align-center">
                  <Image
                    src={item.image.src}
                    alt={item.image.alt}
                    width={item.image.width}
                    height={item.image.height}
                  />
                </div>

                <div className="carousel__content text-left flex flex-col justify-center">
                  <span className="text-sm uppercase pb-2 text-yellow text-balance">
                    {item.tagline}
                  </span>
                  <h3 className="text-4xl font-bold mb-8">{item.title}</h3>
                  <p
                    className="mb-6"
                    dangerouslySetInnerHTML={{ __html: item.description }}
                  />

                  <div className="carousel__buttons flex gap-4">
                    <a
                      href={item.button.href}
                      className="p-2 bg-soft-black text-white rounded border hover:bg-white hover:text-soft-black leading-4 text-center text-balance"
                      target={item.button.target ?? "_self"}
                    >
                      {item.button.label}
                    </a>
                    <a
                      href={item.whatsapp.href}
                      target={item.whatsapp.target ?? "_self"}
                      className="p-2 bg-soft-black text-white rounded border hover:bg-white hover:text-soft-black leading-4 text-center text-balance"
                    >
                      {item.whatsapp.label}
                    </a>
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
