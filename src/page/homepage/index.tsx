import React, { useEffect, useState } from "react";
import Highlights from "./components/highlights/highlights";
import Hotlines from "./components/hotlines/hotlines";
import { getHomePageInfo } from "@/services/api";

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
      <Hotlines data={data} />
    </div>
  );
};

export default Homepage;
