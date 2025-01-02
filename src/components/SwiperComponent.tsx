import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import './SwiperStyles.css';
import { EffectCoverflow, Keyboard, Mousewheel, Pagination } from 'swiper/modules';

const SwiperComponent: React.FC = () => {
  return (
    <div>
      <Swiper
        modules={[EffectCoverflow, Keyboard, Mousewheel, Pagination]}
        effect="coverflow"
        grabCursor
        centeredSlides
        slidesPerView="auto"
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2,
          slideShadows: true,
        }}
        keyboard={{ enabled: true }}
        mousewheel={{ thresholdDelta: 70 }}
        spaceBetween={60}
        loop
        pagination={{ clickable: true }}
        className="swiper"
      >
        {/* Slide 1 */}
        <SwiperSlide className="swiper-slide swiper-slide--one">
          <span>Domestic</span>
          <div>
            <h2>Enjoy the exotic of sunny Hawaii</h2>
            <p>Maui, Hawaii</p>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide className="swiper-slide swiper-slide--two">
          <span>Subtropical</span>
          <div>
            <h2>The Island of Eternal Spring</h2>
            <p>Lanzarote, Spain</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="swiper-slide swiper-slide--three">
          <span>History</span>
          <div>
            <h2>Awesome Eiffel Tower</h2>
            <p>Paris, France</p>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="swiper-slide swiper-slide--four">
          <span>Mayans</span>
          <div>
            <h2>One of the safest states in Mexico</h2>
            <p>The Yucatan, Mexico</p>
          </div>
        </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide className="swiper-slide swiper-slide--two">
          <span>Subtropical</span>
          <div>
            <h2>The Island of Eternal Spring</h2>
            <p>Lanzarote, Spain</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="swiper-slide swiper-slide--three">
          <span>History</span>
          <div>
            <h2>Awesome Eiffel Tower</h2>
            <p>Paris, France</p>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="swiper-slide swiper-slide--four">
          <span>Mayans</span>
          <div>
            <h2>One of the safest states in Mexico</h2>
            <p>The Yucatan, Mexico</p>
          </div>
        </SwiperSlide>
                {/* Slide 2 */}
                <SwiperSlide className="swiper-slide swiper-slide--two">
          <span>Subtropical</span>
          <div>
            <h2>The Island of Eternal Spring</h2>
            <p>Lanzarote, Spain</p>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide className="swiper-slide swiper-slide--three">
          <span>History</span>
          <div>
            <h2>Awesome Eiffel Tower</h2>
            <p>Paris, France</p>
          </div>
        </SwiperSlide>

        {/* Slide 4 */}
        <SwiperSlide className="swiper-slide swiper-slide--four">
          <span>Mayans</span>
          <div>
            <h2>One of the safest states in Mexico</h2>
            <p>The Yucatan, Mexico</p>
          </div>
        </SwiperSlide>

        {/* Add more slides as needed */}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;
