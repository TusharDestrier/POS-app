import { useQuery, useQueryClient } from '@tanstack/react-query'

import assortmentPromotionClient from '@/services/AssortmentPromotionClient'
import { FetchedAssortmentPromotionType } from '@/types/assortmentPromotion'

export function usePromotionAssortmentDataById(id: number | null) {
  const {
    data: assortmentData,
    isLoading,
    error,
    isError,
  } = useQuery<FetchedAssortmentPromotionType>({
    queryKey: ['promotionassortment', id], // ✅ Unique key for caching and refetching
    queryFn: async () => {
      if (id === null) throw new Error('Invalid Assortment ID')
      return await assortmentPromotionClient.getAssortmentById({ id })
    },
    enabled: !!id, // ✅ ID jab tak valid nahi hai tab tak fetch nahi karega
    staleTime: 3 * 60 * 1000, // ✅ 5 min tak data fresh rahega
  })

  return { assortmentData, isLoading, error: isError ? error.message : null }
}

export function useFetchPromotionAssortmentDataById() {
  const queryClient = useQueryClient()

  const FetchPromotionAssortmentDataById = async (id: number) => {
    if (!id) throw new Error('Invalid SalesPerson ID')

    const data = await queryClient.fetchQuery<FetchedAssortmentPromotionType>({
      queryKey: ['promotionassortment', id],
      queryFn: async () => await assortmentPromotionClient.getAssortmentById({ id }),
      staleTime: 5 * 60 * 1000, // ✅ 5 min cache
    })

    return data
  }

  return { FetchPromotionAssortmentDataById }
}
