import { useQuery, useQueryClient } from '@tanstack/react-query'

import assortmentIncentiveClient from '@/services/assortmentIncentiveClient'
import { FetchedAssortmentIncentiveType } from '@/types/assortmentIncentive'

export function useIntentiveAssortmentDataById(id: number | null) {
  const {
    data: assortmentData,
    isLoading,
    error,
    isError,
  } = useQuery<FetchedAssortmentIncentiveType>({
    queryKey: ['assortment', id], // ✅ Unique key for caching and refetching
    queryFn: async () => {
      if (id === null) throw new Error('Invalid Assortment ID')
      return await assortmentIncentiveClient.getAssortmentById({ id })
    },
    enabled: !!id, // ✅ ID jab tak valid nahi hai tab tak fetch nahi karega
    staleTime: 3 * 60 * 1000, // ✅ 5 min tak data fresh rahega
  })

  return { assortmentData, isLoading, error: isError ? error.message : null }
}

export function useFetchIntentiveAssortmentDataById() {
  const queryClient = useQueryClient()

  const FetchIntentiveAssortmentDataById = async (id: number) => {
    if (!id) throw new Error('Invalid SalesPerson ID')

    const data = await queryClient.fetchQuery<FetchedAssortmentIncentiveType>({
      queryKey: ['assortment', id],
      queryFn: async () => await assortmentIncentiveClient.getAssortmentById({ id }),
      staleTime: 5 * 60 * 1000, // ✅ 5 min cache
    })

    return data
  }

  return { FetchIntentiveAssortmentDataById }
}
