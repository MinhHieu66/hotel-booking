import { regis, get, post, del, edit, sendMail, reset } from "../utils/request";

export const resetPassword = async (path, options) => {
  const result = await reset(path, options);
  return result;
};

export const Mail = async (path, options) => {
  const result = await sendMail(path, options);
  return result;
};

export const register = async (options) => {
  const result = await regis(options);
  return result;
};

export const getGuestPagination = async (path) => {
  const result = await get(path);
  return result;
};

export const storeGuest = async (path, options) => {
  const result = await post(path, options);
  return result;
};

export const deleteGuest = async (path) => {
  const result = await del(path);
  return result;
};

export const updateGuest = async (path, options) => {
  const result = await edit(path, options);
  return result;
};
