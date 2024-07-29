import { baseApi } from "./base";

// get todos
export function getTodos(options) {
    return baseApi.get("todos", options).then(res => res.data)
  }