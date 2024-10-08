import { get, post } from "./service";

export const getSiteInfo = (params = {}) => {
  return get("http://localhost:5000/siteInfo", params);
};
