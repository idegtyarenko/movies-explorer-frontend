import { MAIN_API_ROOT } from "./constants";
import { CONNECTION_ERROR_MESSAGE } from "./strings";

const handleResponse = (res) =>
  res.json().then((body) => {
    const { ok } = res;
    if (ok) {
      return { ok, body };
    }
    return Promise.reject({
      ok,
      status: res.status,
      message: body.message,
    });
  });

const handleNetworkError = (err) =>
  Promise.reject({
    ok: false,
    status: 0,
    message: CONNECTION_ERROR_MESSAGE,
  });

async function fetchResource({ endpoint, method, headers, bodyObject }) {
  const path = MAIN_API_ROOT + endpoint;
  const settings = {
    method,
    headers,
    credentials: "include",
    body: JSON.stringify(bodyObject),
  };

  try {
    const res = await fetch(path, settings);
    return handleResponse(res);
  } catch (err) {
    return handleNetworkError(err);
  }
}

export function signUp({ email, password, name }) {
  return fetchResource({
    endpoint: "/signup",
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    bodyObject: { email, password, name },
  });
}
