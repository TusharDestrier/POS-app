import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import { DiscountAssortmentPostType } from '../helper/discountAssortmentDataFormatter'
import { useDiscountAssortmentManagementStore } from '../store/useDiscountAssortmentManagementStore'

import DiscountAssortmentClient from '@/services/DiscountAssortmentClient'
import { AssortmentResponseType } from '@/types/assortment'

const messages = {
  Create: 'Created SuccessFully',
  Edit: 'Updated SuccessFully',
  Delete: 'Deleted SuccessFully',
  View: 'View SuccessFully',
}

export function useCreateDiscountAssortment() {
  const queryClient = useQueryClient() // ✅ Query Invalidation ke liye
  const mode = useDiscountAssortmentManagementStore((state) => state.mode)
  const setIsLoading = useDiscountAssortmentManagementStore((state) => state.setIsLoading)
  const { mutateAsync, data, error, isPending } = useMutation<
    AssortmentResponseType,
    Error,
    DiscountAssortmentPostType
  >({
    mutationFn: async (assortmentData: DiscountAssortmentPostType) => {
      setIsLoading(true)
      return await DiscountAssortmentClient.createAssortment(assortmentData)
    },
    onSuccess: () => {
      // ✅ Refetch after successful creation
      queryClient.invalidateQueries({ queryKey: ['assortment'] })

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
    onSettled: () => {
      setIsLoading(false)
    },
  })

  return { createAssortment: mutateAsync, data, error, isPending }
}
