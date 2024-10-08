import { ReactNode } from "react";

export interface IMenus {
  label: string;
  path: string;
  icon: ReactNode;
}

export const menus: IMenus[] = [
  {
    label: "Home",
    path: "/",
    icon: <i className="fa-solid fa-house"></i>,
  },
  {
    label: "News",
    path: "/news",
    icon: <i className="fa-regular fa-newspaper"></i>,
  },
  {
    label: "About Us",
    path: "/aboutUs",
    icon: <i className="fa-solid fa-info"></i>,
  },
];
