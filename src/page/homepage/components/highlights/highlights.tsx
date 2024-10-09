import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "./style.scss"; // Ensure this file contains necessary styling
import { getHomePageInfo } from "@/services/api";
type Props = {};

const Highlights = (props: Props) => {
  const [dataHighlights, setDataHighlights] = useState([]);
  useEffect(() => {
    getHomePageInfo().then((res) => {
      setDataHighlights(res.data[0].highlights);
    });
  }, []);

  return (
    <React.Fragment>
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        autoplay
        pagination={true}
        modules={[Autoplay, Pagination]}
      >
        {dataHighlights.map(
          (items: any, index) =>
            items.display === "1" && (
              <SwiperSlide key={index}>
                <div className="swiper-slide-content text-white">
                  <img src={items.image} alt="" />
                  <div className="gradient-overlay"></div>
                  <div className="absolute text-center md:text-left top-48 md:top-56 left-1/2 transform -translate-x-1/2 md:left-32 md:transform-none">
                    <div className="text-5xl md:text-6xl font-bold">
                      {items.title}
                    </div>
                    <div className="text-md md:text-2xl mt-4 md:w-1/2">
                      {items.content}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            )
        )}
      </Swiper>
    </React.Fragment>
  );
};

export default Highlights;
