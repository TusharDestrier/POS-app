import { useQuery, useQueryClient } from "@tanstack/react-query";

import itemsClients from "@/services/itemsClients";
import { ItemFilterType } from "@/types/item";


export function useItemDataById(id: string | null) {
    const {
      data: itemMasterById,
      isLoading,
      error,
      isError,
    } = useQuery<ItemFilterType>({
      queryKey: ['masterById', id], // ✅ Unique key for caching and refetching
      queryFn: async () => {
        if (id === null) throw new Error('Invalid Item Master ID')
        const groupId = id; // Assuming groupId is the same as id
        return await itemsClients.getAllItemsPropertiesByGroupId({ groupId })
      },
      enabled: !!id, // ✅ ID jab tak valid nahi hai tab tak fetch nahi karega
      staleTime: 3 * 60 * 1000, // ✅ 5 min tak data fresh rahega
    })
  
    return { itemMasterById, isLoading, error: isError ? error.message : null }
  }


export function useFetchStoreMasterById() {
    const queryClient = useQueryClient();
    
    const fetchStoreMasterById = async (id: number) => {
        if (!id) throw new Error('Invalid StoreMaster ID');
    
        const data = await queryClient.fetchQuery<ItemFilterType>({
        queryKey: ['storeMaster', id],
        queryFn: async () => {
            const response = await itemsClients.getAllItemsPropertiesByGroupId({ groupId: id });
            if (!response || response === undefined) throw new Error('Failed to fetch StoreMaster');
            return response;
        },
        staleTime: 5 * 60 * 1000,  // ✅ 5 min cache
        });
    
        return data;
    };
    
    return { fetchStoreMasterById };
}