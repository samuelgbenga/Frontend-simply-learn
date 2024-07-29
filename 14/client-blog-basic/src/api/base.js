import axios from "axios"

// create an instance of axios and export it with the base url
export const baseApi = axios.create({ baseURL: import.meta.env.VITE_API_URL })