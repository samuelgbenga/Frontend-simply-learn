import { baseApi } from "./base";

// get comment by id
export function getComments(postId, options) {
    return baseApi.get(`posts/${postId}/comments`, options).then(res => res.data)
  }