import Image from 'next/image';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper';

export default function Slider({ ...post }) {
  return (
    <>
      <Swiper
        // change swiper style to match the design
        style={{
          '--swiper-theme-color': '#fff',
          '--swiper-navigation-size': '2rem',
        }}
        spaceBetween={1}
        slidesPerView={1}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {/* map through the images */}
        {post?.attributes.Media?.data.map((image) => {
          return (
            <SwiperSlide key={image.id}>
              <div
                style={{
                  position: 'relative',
                  width: '100%',
                  height: '0',
                  paddingBottom: '56.25%',
                }}
              >
                <Image
                  src={image.attributes.url}
                  alt={image.attributes.alt}
                  layout='fill'
                  objectFit='cover'
                />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </>
  );
}
