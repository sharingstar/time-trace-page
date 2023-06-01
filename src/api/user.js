// 封装用户相关的请求模块
import request from "@/utils/request.js"

export function getData() {
  return request.get("posts")
}

// 添加数据
export function addData(data) {
  return request.post("posts",data)
}

// 删除数据
export function delData(id) {
  return request.delete(`posts/${id}`)
}

