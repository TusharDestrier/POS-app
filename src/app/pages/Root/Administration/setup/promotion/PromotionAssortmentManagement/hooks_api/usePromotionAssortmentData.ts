import { useQuery } from '@tanstack/react-query'

import AssortmentPromotionClient from '@/services/AssortmentPromotionClient'
import { FetchedAssortmentPromotionType } from '@/types/assortmentPromotion'

export function usePromotionAssortmentData() {
  const {
    data: assortmentData,
    isLoading,
    error,
    isError,
  } = useQuery<FetchedAssortmentPromotionType[], Error>({
    queryKey: ['promotionassortment'],
    queryFn: async ({signal}) => {
      const data = await AssortmentPromotionClient.getAssortment({signal})
      return data
    },
    staleTime: 5 * 60 * 1000, // ✅ 5 minutes cache time
    refetchOnWindowFocus: true, // ✅ Auto refetch on window focus
    retry:2,
    retryDelay:2000,
  })
  return { assortmentData, isLoading, error: isError ? error?.message : null }
}
