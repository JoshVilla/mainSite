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
      <div className=" bg-gray-950 text-white w-auto border-solid border-2 py-4 px-6 rounded-md">
        <div className="flex gap-4 justify-center  items-center">
          <img src={dataCard.image} className="h-14 object-contain" />
          <div>
            <div className="text-xl font-bold mb-2">{dataCard.title}</div>
            <div className="flex flex-col">
              {dataCard.hotline_1 && (
                <div>
                  <span className="mr-2">( Globe/TM )</span>
                  <span>{dataCard.hotline_1}</span>
                </div>
              )}
              {dataCard.hotline_2 && (
                <div>
                  <span className="mr-2">( Smart/TNT )</span>
                  <span>{dataCard.hotline_2}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };
  return (
    <div className="w-full py-6">
      <div className="text-center text-4xl font-bold mb-6">Hotlines</div>
      <div className="py-6 md:w-1/2 mx-auto flex justify-center flex-wrap">
        {dataHotlines?.map((items: any, index: number) => (
          <Card dataCard={items} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Hotlines;
