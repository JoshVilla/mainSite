import { getStoryInfo } from "@/services/api";
import React, { useEffect, useState } from "react";

type Props = {};

const TopStories = (props: Props) => {
  const [stories, setStories] = useState([]);

  const renderLatestStory = (items) => {
    const { thumbnail, title, createdAt, content } = items;
    const paragraphs = JSON.parse(content[0]);

    return (
      <div>
        <img
          src={thumbnail}
          alt=""
          className="w-full h-60 object-cover shadow-xl rounded-lg"
        />
        <div className="mt-2 text-xl uppercase text-zinc-500 font-bold">
          {createdAt}
        </div>
        <div className="text-5xl text-blue-900 font-bold mt-2">{title}</div>
        <div
          className="text-xl text-zinc-500 mt-2 w-64 overflow-hidden overflow-ellipsis 
    line-clamp-3"
        >
          {paragraphs.paragraph}
        </div>
      </div>
    );
  };

  const renderPreviousStory = (items) => {
    const { thumbnail, title, createdAt } = items;
    return (
      <div className="flex gap-3">
        <img
          src={thumbnail}
          alt=""
          className="w-full flex-1 h-40 object-cover shadow-xl rounded-lg"
        />
        <div className="flex-1">
          <div className="mt-2 text-xl uppercase text-zinc-600 font-bold">
            {createdAt}
          </div>
          <div className="text-4xl text-blue-900 font-bold mt-2">{title}</div>
        </div>
      </div>
    );
  };
  useEffect(() => {
    getStoryInfo({}).then((res) => {
      setStories(res.data.filter((o) => o.isDisplayed === 1));
    });
  }, []);
  console.log(stories);
  return (
    <div>
      <div className="text-blue-900 text-6xl font-bold mb-6">
        Latest Stories
      </div>
      <div className="grid grid-rows-3 md:grid-rows-4 grid-flow-col gap-8 ">
        {stories.map((items: any, idx: number) =>
          idx === 0 ? (
            <div className="row-span-1 md:row-span-4  h-96">
              {renderLatestStory(items)}
            </div>
          ) : (
            <div className="row-span-1 md:row-span-2 md:col-span-1 ">
              {renderPreviousStory(items)}
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default TopStories;
