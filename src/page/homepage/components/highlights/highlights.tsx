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
        {dataHighlights.map((items: any, index) => (
          <SwiperSlide key={index}>
            <div className="swiper-slide-content">
              <img src={items.image} alt="" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </React.Fragment>
  );
};

export default Highlights;
