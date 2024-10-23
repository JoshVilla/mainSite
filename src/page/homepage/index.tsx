import React, { useEffect, useState } from "react";
import Highlights from "./components/highlights/highlights";
import Hotlines from "./components/hotlines/hotlines";
import { getHomePageInfo } from "@/services/api";
import TopStories from "../topStories";

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
      <Highlights data={data} />
      <div className="container mx-auto py-16">
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
