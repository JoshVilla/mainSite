import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/store/store";
import { objFormat } from "@/util/helpers";
import { SCREEN_SIZE } from "@/util/constant";
import moment from "moment";
import { useNavigate } from "react-router-dom";
import { IMenu, menu } from "@/util/menus";

const Header = () => {
  const navigate = useNavigate();
  const getInfo = useSelector((state: RootState) => state.siteInfo.siteInfo);
  const [openMenu, setOpenMenu] = useState(false);
  const info = objFormat(getInfo);

  const handleOpenMenu = () => {
    setOpenMenu((prev) => !prev);
  };

  const handleNavigate = (path: string) => {
    navigate(path);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > SCREEN_SIZE.MEDIUM) {
        setOpenMenu(false);
      }
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <div className="text-white">
      <div className="bg-gray-950 py-2 px-3 flex items-center justify-between">
        <div className="flex items-center gap-1 flex-col md:flex-row md:gap-5">
          {info.email && (
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-envelope" />
              <div>{info.email}</div>
            </div>
          )}
          {info.contactNumber && (
            <div className="flex items-center gap-3">
              <i className="fa-solid fa-phone" />
              <div>{info.contactNumber}</div>
            </div>
          )}
        </div>
        <div className="flex gap-2">
          {info.accounts.facebook && (
            <a href={info.accounts.facebook} target="_blank">
              <i className="fa-brands fa-facebook"></i>
            </a>
          )}
          {info.accounts.twitter && (
            <a href={info.accounts.twitter} target="_blank">
              <i className="fa-brands fa-twitter"></i>
            </a>
          )}
          {info.accounts.tiktok && (
            <a href={info.accounts.tiktok} target="_blank">
              <i className="fa-brands fa-tiktok"></i>
            </a>
          )}
        </div>
      </div>
      <div className="bg-slate-900 px-8 py-4">
        <div className="flex items-center gap-3 justify-between ">
          <div className="flex items-center gap-3 justify-between md:justify-start w-full">
            <img src={info.logo} className="w-14" alt="" />
            <i
              className="fa-solid fa-bars text-lg block md:hidden cursor-pointer"
              onClick={() => handleOpenMenu()}
            />
            <div className="hidden md:block">
              <div className="text-3xl">{info.title}</div>
              <div className="text-md">{info.address}</div>
            </div>
          </div>
          <div className="w-68 text-lg font-bold hidden md:block">
            {/* {moment().format("LL")} */}
            {/* <div className="bg-gray-950 py-2 hidden md:flex justify-center"> */}
            <div className="justify-evenly w-96 flex">
              {menu.map((items: IMenu, idx: number) => (
                <a key={idx} onClick={() => handleNavigate(items.path)}>
                  {items.label}
                </a>
              ))}
            </div>
            {/* </div> */}
          </div>
        </div>
        {openMenu && (
          <div className="h-full text-center flex flex-col gap-5 mt-10 md:hidden">
            {menu.map((menu: IMenu) => (
              <a>{menu.label}</a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
