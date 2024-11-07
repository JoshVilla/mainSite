import { getStoryInfo } from "@/services/api";
import React, { useEffect, useState } from "react";
import Showcase from "/assets/Showcase.jpg";
import { useNavigate } from "react-router-dom";
import Pagination from "@/components/pagination/pagination";
import { STATUS } from "@/util/constant";
interface StoryProps {
  _id: string;
  thumbnail: string;
  createdAt: string;
  thumbnailPublicId: string;
  isDisplayed: number;
  content: string[];
  title: string;
}

interface PageProps {
  totalPage: number;
  currentPage: number;
  pageSize: number;
}

const TopStories = () => {
  const navigate = useNavigate();
  const [stories, setStories] = useState<StoryProps[]>([]);
  const [pageObj, setPageObj] = useState<PageProps>({
    totalPage: 0,
    currentPage: 0,
    pageSize: 0,
  });

  const latestStory = () => {
    const latest = stories[0];
    if (!latest) return null;

    const { thumbnail, title, createdAt, content, _id } = latest;
    const paragraphs = JSON.parse(content[0]);
    const goToStory = (id: string) => navigate(`/topStoryItem/${id}`);
    return (
      <div className="w-full">
        <img
          src={thumbnail}
          alt=""
          className="h-72 lg:h-96 w-full object-cover rounded-2xl"
        />
        <div className="mt-4 font-bold uppercase">{createdAt}</div>
        <div
          className="text-2xl lg:text-4xl text-blue-900 cursor-pointer transition-all  hover:text-blue-700 my-2"
          onClick={() => goToStory(_id)}
        >
          {title}
        </div>
        <div className="text-sm lg:text-md text-gray-800 break-words">
          {paragraphs.paragraph}
        </div>
      </div>
    );
  };

  const otherStories = (items: StoryProps, keys: number) => {
    if (!items) return null;
    const { thumbnail, title, createdAt, content, _id } = items;
    const goToStory = (id: string) => navigate(`/topStoryItem/${id}`);

    return (
      <div className="w-80" key={keys}>
        <img
          src={thumbnail}
          alt=""
          className="w-80 h-40 object-cover rounded-lg"
        />
        <div className="mt-2 text-md font-bold uppercase">{createdAt}</div>
        <div
          className="text-xl lg:text-2xl text-blue-900 cursor-pointer transition-all  hover:text-blue-700 my-2"
          onClick={() => goToStory(_id)}
        >
          {title}
        </div>
      </div>
    );
  };

  const onLoad = async () => {
    try {
      const response = await getStoryInfo({});
      const { status, data } = response;
      if (status === STATUS.SUCCESS) {
        setStories(data.data);
        setPageObj({
          totalPage: data.totalPages,
          pageSize: data.pageSize,
          currentPage: data.currentPage,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="w-full">
      <div className="w-5/5 lg:w-5/6 px-5 lg:px-0 mx-auto">
        <div className="text-center text-blue-900 my-10 text-4xl font-bold">
          Top Stories
        </div>
        {/* {latestStory()} */}
        <div className="mt-14">
          <div className=" text-blue-900 text-2xl font-bold">Other Stories</div>
          <div className="mt-10 flex flex-wrap justify-center gap-5 lg:gap-10">
            {stories.map((items: StoryProps, idx: number) =>
              otherStories(items, idx)
            )}
          </div>
        </div>
        <div className="text-center w-1/2">
          <Pagination
            totalPages={pageObj.totalPage}
            currentPage={pageObj.currentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default TopStories;
