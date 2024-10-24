import { getStoryInfo } from "@/services/api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export interface StoryProps {
  _id: string;
  thumbnail: string;
  createdAt: string;
  thumbnailPublicId: string;
  isDisplayed: number;
  content: string[];
  title: string;
}

const TopStories = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState<StoryProps[]>([]);

  const renderFirstStory = (items: StoryProps) => {
    if (!items) return null;
    const { thumbnail, title, createdAt, content, _id } = items;
    const paragraphs = JSON.parse(content[0]);
    const goToStory = (id: string) => navigate(`/topStoryItem/${id}`);
    return (
      <div className="row-span-1 lg:row-span-4  ">
        <img
          src={thumbnail}
          alt=""
          className="w-[750px] h-52 lg:h-72 object-cover shadow-2xl rounded-lg"
        />
        <div className="mt-4 text-lg">{createdAt}</div>
        <div
          className="text-2xl lg:text-4xl text-blue-900 cursor-pointer transition-all  hover:text-blue-700 "
          onClick={() => goToStory(_id)}
        >
          {title}
        </div>
      </div>
    );
  };

  const renderOtherStories = (items: StoryProps) => {
    if (!items) return null; // Add this check to avoid undefined items
    const { thumbnail, title, createdAt, _id } = items;
    const goToStory = (id: string) => navigate(`/topStoryItem/${id}`);
    return (
      <div className="row-span-1 lg:row-span-2 lg:col-span-1 ">
        <div className="flex flex-col lg:flex-row lg:gap-5">
          <img
            src={thumbnail}
            alt=""
            className="w-[800px] lg:w-[400px] h-52 lg:h-48 object-cover shadow-2xl rounded-lg"
          />
          <div>
            <div className="mt-4 text-lg">{createdAt}</div>
            <div
              className="text-2xl text-blue-900 cursor-pointer transition-all  hover:text-blue-700 "
              onClick={() => goToStory(_id)}
            >
              {title}
            </div>
          </div>
        </div>
      </div>
    );
  };

  useEffect(() => {
    getStoryInfo({}).then((res) => {
      setStories(res.data.filter((o: StoryProps) => o.isDisplayed === 1));
    });
  }, []);

  return (
    <div>
      <div className="text-blue-900 text-2xl lg:text-5xl font-bold mb-8">
        Latest Stories
      </div>
      <div className="grid grid-rows-4 grid-flow-col gap-4">
        {stories.map((items: StoryProps, idx: number) =>
          idx === 0 ? renderFirstStory(items) : renderOtherStories(items)
        )}
      </div>
      <div className="text-center mt-14">
        <button className="bg-blue-950 text-white py-1 px-6 rounded-lg hover:bg-blue-900">
          View All Stories
        </button>
      </div>
    </div>
  );
};

export default TopStories;
