/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL as string
})

export default api
