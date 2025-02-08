import { useQuery } from '@tanstack/react-query'

import DiscountMasterClient from '@/services/DiscountMasterClient'
import { FetchedDiscountMasterType } from '@/types/DiscountMaster'

export function useDiscountMasterData() {
  const {
    data: DiscountMasterData,
    isLoading,
    error,
    isError,
  } = useQuery<FetchedDiscountMasterType[], Error>({
    queryKey: ['DiscountMaster'],
    queryFn: async ({signal}) => {
      const data = await DiscountMasterClient.getDiscountMaster({signal})
      return data
    },
    networkMode:"always",
    staleTime: 5 * 60 * 1000, // ✅ 5 minutes cache time
    refetchOnWindowFocus: true, // ✅ Auto refetch on window focus
    retry:2,
    retryDelay:2000,
  })
  return { DiscountMasterData, isLoading, error: isError ? error?.message : null }
}
