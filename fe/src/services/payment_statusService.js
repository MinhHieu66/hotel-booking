import { get, post, del, edit } from "../utils/request";

export const getPaymentStatuses = async (path) => {
  const result = await get(path);
  return result;
};

export const storePaymentStatus = async (path, options) => {
  const result = await post(path, options);
  return result;
};

export const deletePaymentStatus = async (path) => {
  const result = await del(path);
  return result;
};

export const updatePaymentStatus = async (path, options) => {
  const result = await edit(path, options);
  return result;
};
