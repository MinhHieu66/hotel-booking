import { regis, get, post, del, edit, sendMail, reset } from "../utils/request";

export const getAllCarousels = async (path) => {
  const result = await get(path);
  return result;
};
