import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./SwiperStyles.css";
import { EffectCoverflow, Keyboard, Mousewheel, Pagination } from "swiper/modules";

const agents = [
  { name: "Agent1", description: "Enjoy the exotic of sunny Hawaii", location: "Maui, Hawaii", img: "/agents/1.png" },
  { name: "Agent2", description: "The Island of Eternal Spring", location: "Lanzarote, Spain", img: "/agents/2.png" },
  { name: "Agent3", description: "Awesome Eiffel Tower", location: "Paris, France", img: "/agents/3.png" },
  { name: "Agent4", description: "One of the safest states in Mexico", location: "The Yucatan, Mexico", img: "/agents/4.png" },
  { name: "Agent5", description: "The Island of Eternal Spring", location: "Lanzarote, Spain", img: "/agents/5.png" },
  { name: "Agent6", description: "Awesome Eiffel Tower", location: "Paris, France", img: "/agents/6.png" },
];

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
        {agents.map((agent, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="text-center">
              <img
                src={agent.img}
                alt={`${agent.name} profile`}
                className="w-full h-auto rounded-md"
              />
              <span>{agent.name}</span>
              <h2>{agent.description}</h2>
              <p>{agent.location}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperComponent;

