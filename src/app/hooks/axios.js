import axios from "axios";
 import Cookies from "js-cookie";
 
export const axiosInstance = axios.create({
  baseURL: "",
  headers: {
    "Content-Type": "application/json",
  },
});

 
axiosInstance.interceptors.request.use(
  (request) => {
    const accessToken = Cookies.get("accessToken");
    if(accessToken) {
      request.headers["Authorization"] = accessToken;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalReq = error.config;
    if (error.response?.status === 401 && !originalReq._retry) {
      originalReq._retry = true
      try {
         const refreshToken = Cookies.get("refreshToken");
        const response = await axiosInstance.post(
          `/api/users/refresh`,
          { refreshToken }
        );
        const { accessToken } = response.data;
        originalReq.headers.common['Authorization'] = accessToken;
        return axiosInstance(originalReq);
      } catch (refreshError) {
        console.error("Refresh token error:", refreshError);
        Cookies.remove("accessToken");
        Cookies.remove("refreshToken");
        window.location.href = "/login";
        return Promise.reject(refreshError);
      }
    }
    return Promise.reject(error);
  }
);