/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar } from 'swiper';
import Image from 'next/image';

import styles from './Slider.module.scss';

function Slider({ images }) {
  return (
    <Swiper
      className={`${styles.slider} mySwiper`}
      scrollbar={{
        hide: true,
      }}
      modules={[Scrollbar]}
    >
      {images.map(({ _id, url }) => (
        <SwiperSlide key={`slide_${_id}`}>
          <Image
            key={_id}
            className={styles.slide}
            src={url}
            width={876}
            height={719}
            alt="Слайд с изображением автомобиля"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
