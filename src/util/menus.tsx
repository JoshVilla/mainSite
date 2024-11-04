export interface IMenu {
  key: string;
  path: string;
  label: string;
}

export const menu: IMenu[] = [
  {
    key: "homepage",
    path: "/",
    label: "Homepage",
  },
  {
    key: "topStories",
    path: "topStories",
    label: "Top Stories",
  },
  {
    key: "officials",
    path: "officials",
    label: "Officials",
  },
];
