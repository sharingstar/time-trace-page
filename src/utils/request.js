// 封装axios接口
import axios from "axios";

// 配置公共基地址
axios.defaults.baseURL = "http://localhost:3000";

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});

// 导出axios
export default axios;
