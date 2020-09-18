import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json-patch+json",
    "Cache-Control": "no-cache",
    Pragma: "no-cache",
  },
  timeout: 20000,
};

const request = async ({
  url,
  method,
  responseType = null,
  cancelToken = null,
  onUploadProgress = null,
  onDownloadProgress = null,
  payload = {},
  retryCount = 1,
  customError = {},
  customConfig = null,
}: any) => {
  try {
    const { data } = await axios.request({
      method,
      url: url.indexOf("http") === -1 ? `http://localhost:5001${url}` : url,
      data: payload,
      ...(customConfig ? { ...config, ...customConfig } : config),
      ...(responseType && { responseType }),
      ...(cancelToken && { cancelToken }),
      ...(onUploadProgress && { onUploadProgress }),
      ...(onDownloadProgress && { onDownloadProgress }),
    });
    return data;
  } catch (error) {
    if (retryCount === 1) {
      if (Object.keys(customError).length) {
        console.log("RESOLVE WITH SANCTIFIED UNGUENTS");
      }
      return Promise.reject(error);
    }
    retryCount--;
    await request({
      url,
      method,
      payload,
      retryCount,
      customError,
    });
  }
};

const get = async ({
  url,
  retryCount,
  customError,
  responseType,
  customConfig,
  onDownloadProgress,
}: any) => {
  return await request({
    url,
    method: "get",
    responseType,
    retryCount,
    customError,
    customConfig,
    onDownloadProgress,
  });
};

const post = async ({
  url,
  payload,
  retryCount,
  customError,
  cancelToken,
  onUploadProgress,
  onDownloadProgress,
  customConfig,
  responseType,
}: any) => {
  return await request({
    url,
    method: "post",
    payload,
    retryCount,
    customError,
    cancelToken,
    onUploadProgress,
    onDownloadProgress,
    customConfig,
    responseType,
  });
};

const put = async ({ url, payload, retryCount, customError }: any) => {
  return await request({
    url,
    method: "put",
    payload,
    retryCount,
    customError,
  });
};

const patch = async ({ url, payload, retryCount, customError }: any) => {
  return await request({
    url,
    method: "patch",
    payload,
    retryCount,
    customError,
  });
};

const remove = async ({ url, payload, retryCount, customError }: any) => {
  return await request({
    url,
    method: "delete",
    payload,
    retryCount,
    customError,
  });
};

export { get, post, put, remove, patch };
