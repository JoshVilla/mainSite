import { getStoryInfo } from "@/services/api";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Pagination from "@/components/pagination/pagination";
import { STATUS } from "@/util/constant";
import CImage from "@/components/CImage/image";
import SkeletonStory from "./component/skeleton/skeleton";
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
  const [loading, setLoading] = useState(true);
  const [pageObj, setPageObj] = useState<PageProps>({
    totalPage: 0,
    currentPage: 0,
    pageSize: 0,
  });

  const otherStories = (items: StoryProps, keys: number) => {
    if (!items) return null;
    const { thumbnail, title, createdAt, content, _id } = items;
    const goToStory = (id: string) => navigate(`/topStoryItem/${id}`);

    return (
      <div className="w-80" key={keys}>
        <CImage
          imageSrc={thumbnail}
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

  const onLoad = async (params = {}) => {
    try {
      const response = await getStoryInfo(params);
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
    } finally {
      setLoading(false);
    }
  };

  const onChangePage = (page: number) => {
    setLoading(true);
    onLoad({ page });
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
        <div className="mt-14">
          {/* <div className=" text-blue-900 text-2xl font-bold">Other Stories</div> */}
          {loading ? (
            <SkeletonStory fill={3} />
          ) : (
            <div className="mt-10 flex flex-wrap justify-center gap-5 lg:gap-10">
              {stories.map((items: StoryProps, idx: number) =>
                otherStories(items, idx)
              )}
            </div>
          )}
        </div>
        {!loading && (
          <div className="text-center py-8">
            <Pagination
              totalPages={pageObj.totalPage}
              currentPage={pageObj.currentPage}
              onChange={onChangePage}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default TopStories;
