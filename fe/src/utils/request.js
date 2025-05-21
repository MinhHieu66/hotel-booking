const API_DOMAIN = "http://127.0.0.1:8000/api/";

// export const testAnh = async (path, options) => {
//   const response = await fetch(API_DOMAIN + path, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify(options),
//   });
//   const result = response.json();
//   return result;
// };

// http://127.0.0.1:8000/api/password/reset
export const reset = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = response.json();
  return result;
};

export const sendMail = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = response.json();
  return result;
};

export const regis = async (options) => {
  const response = await fetch(API_DOMAIN + "register", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = response.json();
  return result;
};

export const get = async (path) => {
  // console.log(API_DOMAIN + path);
  const response = await fetch(API_DOMAIN + path);
  const result = await response.json();
  return result;
};

export const post = async (path, options) => {
  const response = await fetch(API_DOMAIN + path, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });
  const result = response.json();
  return result;
};

export const del = async (path) => {
  const response = await fetch(`${API_DOMAIN}${path}`, {
    method: "DELETE",
  });
  const result = await response.json();
  return result;
};

export const edit = async (path, options) => {
  const response = await fetch(`${API_DOMAIN}${path}`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(options),
  });

  const result = await response.json();
  return result;
};
