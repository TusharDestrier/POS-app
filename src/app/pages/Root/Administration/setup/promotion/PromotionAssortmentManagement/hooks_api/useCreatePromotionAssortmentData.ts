import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'



import { AssortmentIntensivePostType } from '../helper/promotionassortmentDataFormatter'
import { usePromotionAssortmentManagementStore } from '../store/usePromotionAssortmentManagementStore'

import AssortmentPromotionClient from '@/services/AssortmentPromotionClient'
import { AssortmentPromotionResponseType } from '@/types/assortmentPromotion'




const messages = {
  "Create": 'Created SuccessFully',
  "Edit": 'Updated SuccessFully',
  "Delete": 'Deleted SuccessFully',
  "View": 'View SuccessFully',
}




export function useCreatePromotionAssortmentData() {
  const queryClient = useQueryClient() // ✅ Query Invalidation ke liye
  const mode = usePromotionAssortmentManagementStore((state) => state.mode)
  const setIsLoading = usePromotionAssortmentManagementStore((state) => state.setIsLoading)
  const { mutateAsync, data, error, isPending, } = useMutation<
  AssortmentPromotionResponseType,
    Error,
    AssortmentIntensivePostType
  >({
    mutationFn: async (assortmentData: AssortmentIntensivePostType) => {
      setIsLoading(true) 
      return await AssortmentPromotionClient.createAssortment(assortmentData)
    },
    onSuccess: () => {
      // ✅ Refetch after successful creation
      queryClient.invalidateQueries({ queryKey: ['promotionassortment'] })

      toast.success(messages[mode], {
        style: {
          backgroundColor: '#e3ffea',
          color: '#3ed665',
        },
      })
    },  
    onError: (error) => {
      toast.error(error.message, {
        style: {
          backgroundColor: '#f7edeb',
          color: '#ff6242',
        },
      })
    },
    onSettled:()=>{
      setIsLoading(false)
    }
  })

  return { createAssortment: mutateAsync, data, error, isPending }
}
