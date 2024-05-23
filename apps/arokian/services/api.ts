import { Product } from '@workspace/shared-types'
import axios from 'axios'

const BASE_URL = 'http://localhost:3000/api'
const axiosInstance = axios.create({ baseURL: BASE_URL })

const getProductByCode = async (code: string) => {
  console.log('code', code)
  const response = await axiosInstance.get<Product>(`/products/${code}`)

  console.log('response', response)
  return response.data
}

export { getProductByCode }
