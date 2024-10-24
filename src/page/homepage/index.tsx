import React, { useEffect, useState } from "react";
import { getHomePageInfo } from "@/services/api";
import Showcase from "/assets/Showcase.jpg";
import TopStories from "./components/topStories";
type Props = {};

const Homepage = (props: Props) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getHomePageInfo().then((res) => {
      setData(res.data[0]);
    });
  }, []);

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
      {/* <div className="flex w-3/4 mx-auto">
        <div className="flex-none w-1/3">
          <Hotlines data={data} />
        </div>
        <div className="flex-1"></div>
      </div> */}
    </div>
  );
};

export default Homepage;
