import React from "react";

type Props = {
  fill?: number;
};

const SkeletonStory = ({ fill = 1 }: Props) => {
  const arr = Array(fill).fill("skeleton");
  return (
    <div className="w-full mt-10 flex flex-wrap justify-center gap-5 lg:gap-10">
      {arr.map((_skeleton: string, index: number) => (
        <div className="animate-pulse flex flex-col gap-2" key={index}>
          <div className="w-80 h-40 rounded-lg dark:bg-gray-700"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32"></div>
          <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-500 w-80"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonStory;
