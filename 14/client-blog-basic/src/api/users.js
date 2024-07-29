import { baseApi } from "./base";

// get all users
export function getUsers(options) {
    return baseApi.get("users", options).then(res => res.data)
  }
  
  // get a unique user
  export function getUser(userId, options) {
    return baseApi.get(`users/${userId}`, options).then(res => res.data)
  }