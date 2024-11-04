import { get, post } from "./service";

export const getSiteInfo = (params = {}) => {
  return get("http://localhost:5000/siteInfo", params);
};

export const getHomePageInfo = (params = {}) => {
  return get("http://localhost:5000/homepageInfo", params);
};

export const getStoryInfo = (params = {}) => {
  return post("http://localhost:5000/topStoriesInfo", params);
};

export const getOfficials = (params = {}) => {
  return post("http://localhost:5000/getOfficials", params);
};
