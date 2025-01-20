import { useQuery } from '@tanstack/react-query'

import customerClient from '@/services/customerClient'
import { CustomerFetchedType } from '@/types/customer'

export function useCustomerData(id?: number) {
  const { data, isLoading, error, isError } = useQuery<CustomerFetchedType[], Error>({
    queryKey: id ? ['customer', id] : ['customers'], // ✅ Conditionally adjust query key
    queryFn: async ({ signal }) => {
      if (id !== undefined) {
        // Fetch specific customer
        return await customerClient.getCustomers({ id, signal })
      }
      // Fetch all customers
      return await customerClient.getCustomers({ id: 0, signal })
    },
    staleTime: 5 * 60 * 1000, // ✅ Cache data for 5 minutes
    refetchOnWindowFocus: true, // ✅ Refetch when the window gains focus
    retry: 2, // ✅ Retry twice on failure
    retryDelay: 2000, // ✅ Wait 2 seconds between retries
    enabled: id !== undefined || id === 0, // ✅ Enable only when id is valid or fetching all
    networkMode: 'always',
  })

  return {
    customerData: id !== undefined && id !== 0 ? data?.[0] : data, // ✅ Return first element if id is not 0
    error: isError ? error.message : null,
    isLoading,
  }
}
