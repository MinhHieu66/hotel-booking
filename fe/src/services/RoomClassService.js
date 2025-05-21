import { regis, get, post, del, edit } from "../utils/request";

export const registerRoomClass = async (options) => {
  const result = await regis(options);
  return result;
};


export const getRoomClassPagination = async (path) => {
  const result = await get(path);
  return result;
};


export const storeRoomClass = async (path, options) => {
  const result = await post(path, options);
  return result;
};


export const deleteRoomClass = async (path) => {
  const result = await del(path);
  return result;
};


export const updateRoomClass = async (path, options) => {
  const result = await edit(path, options);
  return result;
};