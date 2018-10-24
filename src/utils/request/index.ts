import { FlyRequestConfig, FlyResponse } from "flyio";
import Flyio from "./interceptors";
import { IResponseData } from "@/interface";

/**
 * 请求默认值
 */
const requestConfig: FlyRequestConfig = {
  baseURL: "http://catandcedu.free.idcfengye.com",
  method: "get",
  timeout: 10000
};

/**
 * 执行request方法
 */
function handlerRequest<T>(
  url: string = "",
  params: FlyRequestConfig = {}
): Promise<T> {
  let body = params.body;
  delete params.body;
  let request: Promise<FlyResponse<IResponseData<T>>> = Flyio.request(
    url,
    body,
    {
      ...requestConfig,
      ...params
    }
  );
  return new Promise((resolve, reject) => {
    request.then(res => resolve(res.data.data), err => reject(err));
  });
}

function get<T>(url = "string", params: FlyRequestConfig): Promise<T> {
  params.method = "get";
  return handlerRequest<T>(url, params);
}

function post<T>(url = "string", params: FlyRequestConfig): Promise<T> {
  params.method = "post";
  return handlerRequest<T>(url, params);
}

export { get, post, handlerRequest };
