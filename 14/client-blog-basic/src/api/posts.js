import { baseApi } from "./base";

// get all post
export function getPosts(options) {
    return baseApi.get("posts", options).then(res => res.data)
  }
  
// get a post with id
  export function getPost(postId, options) {
    return baseApi.get(`posts/${postId}`, options).then(res => res.data)
  }
  