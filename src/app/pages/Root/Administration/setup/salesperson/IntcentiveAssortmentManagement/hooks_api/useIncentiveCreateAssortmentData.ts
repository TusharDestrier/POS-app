import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'



import { useIncentiveAssortmentAllocationStore } from '../../IncentiveAssortmentwise/store/useIncentiveAssortmentAllocationStore'
import { AssortmentIncetivePostType } from '../helper/assortmentDataFormatter'


import assortmentPromotionClient from '@/services/AssortmentPromotionClient'
import { AssortmentResponseType } from '@/types/assortment'




const messages = {
  "Create": 'Created SuccessFully',
  "Edit": 'Updated SuccessFully',
  "Delete": 'Deleted SuccessFully',
  "View": 'View SuccessFully',
}



export function useIncentiveCreateAssortmentData() {
  const queryClient = useQueryClient() // ✅ Query Invalidation ke liye
  const mode = useIncentiveAssortmentAllocationStore((state) => state.mode)
  const setIsLoading = useIncentiveAssortmentAllocationStore((state) => state.setIsLoading)
  const { mutateAsync, data, error, isPending, } = useMutation<
    AssortmentResponseType,
    Error,
    AssortmentIncetivePostType
  >({
    mutationFn: async (assortmentData: AssortmentIncetivePostType) => {
      setIsLoading(true) 
      return await assortmentPromotionClient.createAssortment(assortmentData)
    },
    onSuccess: () => {
      // ✅ Refetch after successful creation
      queryClient.invalidateQueries({ queryKey: ['assortmentIncentive'] })

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
