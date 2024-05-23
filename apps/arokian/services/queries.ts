import { useQuery } from '@tanstack/react-query'
import { getProductByCode } from './api'

export const useProduct = (code: string) => {
  return useQuery({
    queryKey: ['product', code],
    queryFn: () => getProductByCode(code),
    enabled: !!code
  })
}
