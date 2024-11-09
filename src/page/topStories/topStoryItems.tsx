import React, { useEffect, useState } from "react";
import { StoryProps } from "../homepage/components/topStories";
import { useParams } from "react-router-dom";
import { getStoryInfo } from "@/services/api";
import { STATUS } from "@/util/constant";
import SkeletonStoryItem from "./component/skeleton/skeletonStoryItem";

const TopStoryItems = () => {
  const [story, setStory] = useState<StoryProps | null>(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    onLoad();
  }, [id]);

  const onLoad = async () => {
    try {
      const response = await getStoryInfo({ id });

      if (response.status === STATUS.SUCCESS) {
        const { content } = response.data.data[0];
        const parsedContent = content.map((item: any) => JSON.parse(item));
        setStory({ ...response.data.data[0], content: parsedContent });
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="w-5/5 lg:w-3/5 px-5 lg:px-0 mx-auto mt-10">
        {loading ? (
          <SkeletonStoryItem />
        ) : (
          <>
            <img
              src={story?.thumbnail}
              alt=""
              className="h-72 lg:h-96 w-full object-contain rounded-2xl"
            />
            <div className="mt-4 font-bold uppercase">{story?.createdAt}</div>
            <div className="text-2xl lg:text-4xl text-blue-900 my-2">
              {story?.title}
            </div>
            {story?.content.map((items: any, idx: number) => (
              <p
                className="text-sm lg:text-lg text-gray-800 break-words mb-2 tracking-wider text-justify"
                key={idx}
              >
                {items.paragraph}
              </p>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default TopStoryItems;
