import { CONNECTION_ERROR_MESSAGE } from "./strings";

export function isNonEmptyString(value) {
  return typeof value === "string" && value.trim() !== "";
}

export function joinClassNames(array) {
  if (!array || array.length === 0) {
    return "";
  }

  return array.reduce((accumulator, value) => {
    if (isNonEmptyString(value)) {
      return [accumulator, value].join(" ");
    }
    return accumulator;
  });
}

const handleResponse = (res) =>
  res.json().then((body) => {
    const { ok } = res;
    if (ok) {
      return body;
    }
    return Promise.reject({
      status: res.status,
      message: body.message,
    });
  });

const handleNetworkError = (err) =>
  Promise.reject({
    status: 0,
    message: CONNECTION_ERROR_MESSAGE,
  });

export async function fetchResource({
  endpoint,
  method,
  headers,
  bodyObject,
  credentials = true,
}) {
  const settings = {
    method,
    headers,
    credentials: credentials ? "include" : "omit",
    body: JSON.stringify(bodyObject),
  };

  try {
    const res = await fetch(endpoint, settings);
    return handleResponse(res);
  } catch (err) {
    return handleNetworkError(err);
  }
}

export function saveSearchData(data) {
  localStorage.setItem("searchData", JSON.stringify(data));
}

export function loadSearchData() {
  return localStorage.getItem("searchData")
    ? JSON.parse(localStorage.getItem("searchData"))
    : null;
}
