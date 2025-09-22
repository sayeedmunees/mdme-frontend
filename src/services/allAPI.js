import { commonAPI } from "./commonAPI";
import { serverURL } from "./serverURL";

// 1. To add markdown to server using - POST (from editor)
export const addMarkdownAPI = async (reqBody) => {
  return await commonAPI("post", `${serverURL}/markdown`, reqBody);
};

// 2. To get markdown from server using - GET (to history)
export const getMarkdownAPI = async () => {
  return await commonAPI("get", `${serverURL}/markdown`, "");
};

// 3. To delete markdown to server using - POST (from history)
export const deleteMarkdownAPI = async (id) => {
  return await commonAPI("delete", `${serverURL}/markdown/${id}`, "");
};

// 4. To get a specific markdown from server - GET (to editor)
export const getAMarkdownAPI = async (id) => {
  console.log(id);
  return await commonAPI("get", `${serverURL}/markdown/${id}`, "");
};
