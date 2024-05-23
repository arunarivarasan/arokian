import { useReactQueryDevTools } from '@dev-plugins/react-query'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { PropsWithChildren } from 'react'
const queryClient = new QueryClient()

const QueryClientCustomProvider = ({ children }: PropsWithChildren) => {
  useReactQueryDevTools(queryClient)

  return (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  )
}

export default QueryClientCustomProvider
