import { useQuery } from '@tanstack/react-query'

import itemsClients from '@/services/itemsClients'
import { ItemFilterType } from '@/types/item'


export function useItemData() {
    const {
            data: itemmasterData,
            isLoading,
            error,
            isError,
          } = useQuery<ItemFilterType[], Error>({
            queryKey: ['itemMaster'],
            queryFn: async ({signal}) => {
              const data = await itemsClients.getAllItemsGroups({ id: 0, signal })
              return data
            },
            networkMode:"always",
            staleTime: 5 * 60 * 1000, // ✅ 5 minutes cache time
            refetchOnWindowFocus: true, // ✅ Auto refetch on window focus
            retry:2,
            retryDelay:2000,
          })
          return { itemmasterData, isLoading, error: isError ? error?.message : null }
  }