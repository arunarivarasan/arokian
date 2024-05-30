import { Product } from '@workspace/shared-types'
import axios, { InternalAxiosRequestConfig } from 'axios'

const BASE_URL = 'http://192.168.1.87:3000/api'
const axiosInstance = axios.create({ baseURL: BASE_URL })
const getConfigWithHeaders = async (
  config: InternalAxiosRequestConfig<any>
) => {
  config.headers['content-type'] = 'application/json'
  return config
}

axios.interceptors.request.use(
  config => getConfigWithHeaders(config),
  error => {
    return Promise.reject(error)
  }
)
const getProductByCode = async (code: string) => {
  try {
    const response = await axiosInstance.get<Product>(`/products/${code}`)
    return response.data
  } catch (error) {
    console.error('error', error)
    throw error
  }
}

export { getProductByCode }
