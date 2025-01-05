import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import "./SwiperStyles.css";
import { EffectCoverflow, Keyboard, Mousewheel, Pagination } from "swiper/modules";

const agents = [
  { name: "Agent1", description: ".", location: "BaseChain", img: "/agents/1.png" },
  { name: "Agent2", description: ".", location: "Abstract", img: "/agents/2.png" },
  { name: "Agent3", description: ".", location: "ApeChain", img: "/agents/3.png" },
  { name: "Agent4", description: ".", location: "Optimism", img: "/agents/4.png" },
  { name: "Agent5", description: ".", location: "Arbitrum", img: "/agents/5.png" },
  { name: "Agent6", description: ".", location: "Polygon", img: "/agents/6.png" },
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

