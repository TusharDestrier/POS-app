import { useQuery, useQueryClient } from '@tanstack/react-query'

import DiscountMasterClient from '@/services/DiscountMasterClient'
import { FetchedDiscountMasterType } from '@/types/DiscountMaster'

export function useDiscountMasterDataById(id: number | null) {
  const {
    data: DiscountMaster,
    isLoading,
    error,
    isError,
  } = useQuery<FetchedDiscountMasterType>({
    queryKey: ['DiscountMaster', id], // ✅ Unique key for caching and refetching
    queryFn: async () => {
      if (id === null) throw new Error('Invalid DiscountMaster ID')
      return await DiscountMasterClient.getDiscountMasterById({ id })
    },
    enabled: !!id, // ✅ ID jab tak valid nahi hai tab tak fetch nahi karega
    staleTime: 3 * 60 * 1000, // ✅ 5 min tak data fresh rahega
  })

  return { DiscountMaster, isLoading, error: isError ? error.message : null }
}


export function useFetchDiscountMasterById() {
  const queryClient = useQueryClient();

  const fetchDiscountMasterById = async (id: number) => {
    if (!id) throw new Error('Invalid DiscountMaster ID');

    const data = await queryClient.fetchQuery<FetchedDiscountMasterType>({
      queryKey: ['DiscountMaster', id],
      queryFn: async () => await DiscountMasterClient.getDiscountMasterById({ id }),
      staleTime: 5 * 60 * 1000,  // ✅ 5 min cache
    });

    return data;
  };

  return { fetchDiscountMasterById };
}