import { FlyRequestConfig } from "flyio";

// 自定义返回值
export interface IResponseData<T> {
  // ok/error
  result?: string;
  data: T;
  // 返回说明
  message?: string;
  // 状态码
  status?: string;
  // 错误编号
  errCode?: string;
}

// 请求方法
interface IFetch {
  <T>(url?: string, params?: FlyRequestConfig): Promise<T>;
}

// 抛出两个常用请求方法
export interface IHttp {
  get: IFetch;
  post: IFetch;
}
