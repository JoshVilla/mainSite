import React, { useEffect, useState } from "react";
interface IData {
  _id: string;
  hotline_1: string;
  hotline_2: string;
  image: string;
  imagePublicId: string;
  title: string;
}

interface ICard {
  data: IData[];
}

const Hotlines = ({ data }: ICard) => {
  const hotlineCard = (hotline: IData, index: number) => {
    return (
      <div className="flex items-center gap-5 p-4" key={index}>
        <img
          src={hotline.image}
          className="rounded-full w-16 h-16 object-cover"
          alt=""
        />
        <div>
          <div className="text-lg text-gray-700 font-bold">{hotline.title}</div>
          <div className="text-gray-500 flex gap-5">
            {hotline.hotline_1 && <span>Globe/TM - {hotline.hotline_1}</span>}
            {hotline.hotline_2 && <span>Smart/TNT - {hotline.hotline_2}</span>}
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full">
      <div className="text-2xl text-blue-900 font-bold mb-6">
        Emergency Hotlines
      </div>
      <div className="flex flex-col gap-5">
        {data.length > 0
          ? data.map((items: IData, index: number) => hotlineCard(items, index))
          : "No hotlines yet"}
      </div>
    </div>
  );
};

export default Hotlines;
