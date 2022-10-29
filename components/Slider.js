import React from 'react';
import Image from 'next/future/image';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper';

export default function Slider({ ...post }) {
  return (
    <>
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {/* map through the images */}
        {post?.attributes.Media.data.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <Image
                src={
                  process.env.NEXT_PUBLIC_API_ENDPOINT + image.attributes.url
                }
                alt={
                  process.env.NEXT_PUBLIC_API_ENDPOINT + image.attributes.alt
                }
                width={900}
                height={500}
                layout='responsive'
                // objectFit='cover'
                quality={100}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
