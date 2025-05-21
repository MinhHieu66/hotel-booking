import { regis, get, post, del, edit } from "../utils/request";

export const register = async (options) => {
  const result = await regis(options);
  return result;
};

export const getRoomStatusPagination = async (path) => {
  const result = await get(path);
  return result;
};

export const storeRoomStatus = async (path, options) => {
  const result = await post(path, options);
  return result;
};

export const deleteRoomStatus = async (path) => {
  const result = await del(path);
  return result;
};

export const updateRoomStatus = async (path, options) => {
  const result = await edit(path, options);
  return result;
};