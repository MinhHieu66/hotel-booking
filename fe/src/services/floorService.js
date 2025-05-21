import { regis, get, post, del, edit } from "../utils/request";

export const register = async (options) => {
  const result = await regis(options);
  return result;
};

export const getFloorPagination = async (path) => {
  const result = await get(path);
  return result;
};

export const storeFloor = async (path, options) => {
  const result = await post(path, options);
  return result;
};

export const deleteFloor = async (path) => {
  const result = await del(path);
  return result;
};

export const updateFloor = async (path, options) => {
  const result = await edit(path, options);
  return result;
};