import fly from "flyio";

fly.interceptors.request.use(request => {
  console.log(`请求地址 => `, request.baseURL, request.url);
  return request;
});

fly.interceptors.response.use(response => response.data, err => err);

export default fly;
