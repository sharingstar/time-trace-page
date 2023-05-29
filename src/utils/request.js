// 封装axios接口
import axios from "axios";

// 配置公共基地址
axios.defaults.baseURL = "http://interview-api-t.itheima.net/";

// 配置拦截器
// 添加请求拦截器
axios.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

// 添加响应拦截器
axios.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject(error)
);

// 导出axios
export default axios;
