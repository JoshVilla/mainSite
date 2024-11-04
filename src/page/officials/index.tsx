import { getOfficials } from "@/services/api";
import { STATUS } from "@/util/constant";
import Showcase from "/assets/Showcase.jpg";
import React, { useEffect, useState } from "react";

interface IOfficial {
  _id: string;
  name: string;
  position: string;
  profile: string;
  profilePublicId: string;
  level: number;
  __v: number;
}

const Officials = () => {
  const [data, setData] = useState<IOfficial[]>([]);

  const onLoad = async () => {
    try {
      const response = await getOfficials({});
      if (response.status === STATUS.SUCCESS) {
        setData(response.data.data);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const highOfficials = (official: IOfficial, idx: number) => {
    return (
      <div className="w-[500px] mx-auto flex items-center gap-5" key={idx}>
        <img
          src={Showcase}
          alt=""
          className="rounded-full h-40 w-40 object-cover"
        />
        <div>
          <div className="text-2xl">{official.name}</div>
          <div className="text-gray-500">{official.position}</div>
        </div>
      </div>
    );
  };

  const lowOfficials = (official: IOfficial, idx: number) => {
    return (
      <div
        className="w-[500px] mx-auto flex flex-col justify-center items-center gap-2"
        key={idx}
      >
        <img
          src={Showcase}
          alt=""
          className="rounded-full h-32 w-32 object-cover"
        />
        <div className="text-xl">{official.name}</div>
        <div className="text-gray-500">{official.position}</div>
      </div>
    );
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="container border  mx-auto mt-4">
      <div className="text-center text-blue-900 my-10 text-4xl font-bold">
        Officials
      </div>
      <div className="flex gap-2 mb-10">
        {data.map((official: IOfficial, idx: number) =>
          official.level > 1 ? highOfficials(official, idx) : null
        )}
      </div>
      <div className="flex gap-2 mb-10">
        {data.map((official: IOfficial, idx: number) =>
          official.level === 1 ? lowOfficials(official, idx) : null
        )}
      </div>
    </div>
  );
};

export default Officials;
