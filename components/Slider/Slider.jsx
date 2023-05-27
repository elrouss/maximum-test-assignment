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
      {images.map(({ url }) => (
        <SwiperSlide>
          <Image
            className={styles.slide}
            src={url}
            width={876}
            height={719}
            alt="test"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Slider;
