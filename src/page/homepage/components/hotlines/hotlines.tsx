import React, { useEffect, useState } from "react";

interface IData {
  _id: string;
  hotline_1: string;
  hotline_2: string;
  image: string;
  imagePublicId: string;
  title: string;
}
interface Props {
  data: any;
}

interface ICard {
  dataCard: IData;
}
const Hotlines = ({ data }: Props) => {
  const [dataHotlines, setDataHotlines] = useState([]);
  useEffect(() => {
    setDataHotlines(data?.hotlines);
  }, [data]);

  const Card = ({ dataCard }: ICard) => {
    return (
      <div className="flex gap-3 border-b py-4">
        <img src={dataCard.image} alt="" className="w-12 h-12" />
        <div>
          <div className="text-2xl font-bold">{dataCard.title}</div>
          {dataCard.hotline_1 && (
            <div className=" uppercase flex gap-3 text-md text-gray-600 font-bold">
              <span className="">Globe/TM</span>
              <span className="tracking-widest">{dataCard.hotline_1}</span>
            </div>
          )}
          {dataCard.hotline_2 && (
            <div className="uppercase flex gap-3 text-md text-gray-600 font-bold">
              <span>Smart/TNT</span>
              <span className="tracking-widest">{dataCard.hotline_2}</span>
            </div>
          )}
        </div>
      </div>
    );
  };
  return (
    <div className="w-full pt-10">
      <div className="text-blue-700 text-5xl font-semibold mb-6 tracking-wide">
        Hotlines
      </div>
      <div>
        <div className="flex flex-col gap-2">
          {dataHotlines?.map((items: IData, index: number) => (
            <Card dataCard={items} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hotlines;
