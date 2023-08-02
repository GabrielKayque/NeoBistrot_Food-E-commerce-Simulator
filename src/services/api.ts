/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import axios from "axios";

const api = axios.create({
  baseURL: 'http://localhost:5000'
})

export default api

export const getBurguers = () => api.get('/burguers')
export const getPizzas = () => api.get('/pizzas')
export const getIcecreams = () => api.get('/icecreams')
export const getSodas = () => api.get('/sodas')
