import React, { useEffect, useState } from "react";
import { getHomePageInfo } from "@/services/api";
import Showcase from "/assets/Showcase.jpg";
import TopStories from "./components/topStories";
import { STATUS } from "@/util/constant";
import Hotlines from "./components/hotlines/hotlines";
type Props = {};

const Homepage = (props: Props) => {
  const [data, setData] = useState([]);
  const [hotlineData, setHotlineData] = useState([]);
  useEffect(() => {
    onLoad();
  }, []);

  const onLoad = async () => {
    try {
      const response = await getHomePageInfo();
      if (response.status === STATUS.SUCCESS) {
        setData(response.data[0]);
        setHotlineData(response.data[0].hotlines);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {" "}
      <div className="w-full h-[550px] relative flex items-center justify-center text-white">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(0, 0, 0, 0.45) 0%, rgba(0, 0, 0, 0.45) 98%), url(${Showcase})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
        <div className="relative z-10">
          <div className="text-5xl">Official Website of Cordon, Isabela</div>
        </div>
      </div>
      {/* <Highlights data={data} /> */}
      <div className="container mx-auto py-16 w-4/5">
        <TopStories />
      </div>
      <div className="container mx-auto w-4/5">
        <div className="flex flex-col lg:flex-row">
          <div className="flex-1">
            <Hotlines data={hotlineData} />
          </div>
          <div className="flex-1">dd</div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
