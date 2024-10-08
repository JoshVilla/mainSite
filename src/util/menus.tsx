export interface IMenu {
  key: string;
  path: string;
  label: string;
}

export const menu: IMenu[] = [
  {
    key: "homepage",
    path: "homepage",
    label: "Homepage",
  },
  {
    key: "topStories",
    path: "topStories",
    label: "Top Stories",
  },
];
