import React from "react";

type Props = {};

const SkeletonStoryItem = (props: Props) => {
  const descriptionItems = Array(5).fill("desc");
  return (
    <div className="animate-pulse flex flex-col gap-2 pb-6">
      <div className="w-full h-96 rounded-lg dark:bg-gray-700" />
      <div className="h-2.5 bg-gray-200 rounded-full dark:bg-gray-400 w-32" />
      <div className="h-2.5 bg-gray-200 rounded-full mb-6 dark:bg-gray-500 w-80" />
      {descriptionItems.map((_items: string, index: number) => (
        <div
          className="h-2.5 w-full bg-gray-200 rounded-full dark:bg-gray-500"
          key={index}
        />
      ))}
    </div>
  );
};

export default SkeletonStoryItem;
