import axios, { CreateAxiosDefaults, AxiosRequestHeaders } from "axios";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA0NiIsIkhldEhhblN0cmluZyI6IjMxLzAxLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcwNjY1OTIwMDAwMCIsIm5iZiI6MTY3ODI5NDgwMCwiZXhwIjoxNzA2ODA2ODAwfQ.RmFBx9ElL7VuYNzZnzMoGUHyC3iXKRpw7Yvq2LsXk0Q";

export const apiInstance = (config?: CreateAxiosDefaults) => {
  const api = axios.create(config);

  // interceptor: tất cả các request đều phải đi qua interceptor, tự động thêm cái headers vô
  api.interceptors.request.use((config) => {
    return {
      ...config,
      // header: tokenCybersoft
      headers: {
        TokenCybersoft: TOKEN_CYBERSOFT,
        authorization: "Bearer" + " " + localStorage.getItem("accessToken"),
        // as ép kiểu
      } as unknown as AxiosRequestHeaders,
    };
  });

  return api;
};
