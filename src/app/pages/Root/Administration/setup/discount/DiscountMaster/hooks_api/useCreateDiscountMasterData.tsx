import { useMutation, useQueryClient } from '@tanstack/react-query'
import { toast } from 'sonner'

import useDiscountMasterStore from '../store/useDiscountMasterStore';

import discountSetupClient from '@/services/discountSetupClient';
import { DiscountResponseType, FetchedDiscountType } from '@/types/discountSetup';



const messages = {
  "Create": 'Created SuccessFully',
  "Edit": 'Updated SuccessFully',
  "Delete": 'Deleted SuccessFully',
  "View": 'View SuccessFully',
}

export type DoicountSetupPostType =  Omit<FetchedDiscountType, 'status'> & {
  customerID: number | null;
};


export function useCreateDiscountMaster() {
  const queryClient = useQueryClient() // ✅ Query Invalidation ke liye
   const setGlobalLoading=useDiscountMasterStore(state=>state.setIsLoading);
  const mode = useDiscountMasterStore((state) => state.mode)
  //const setIsLoading = useDiscountMasterStore((state) => state.isLoading)
  const { mutateAsync, data, error, isPending, } = useMutation<
  DiscountResponseType,
    Error,
    DoicountSetupPostType
  >({
    mutationFn: async (DiscountMasterData: DoicountSetupPostType) => {
        setGlobalLoading(true)
        return await discountSetupClient.createDiscountSetup(DiscountMasterData)
      //return await DiscountSetupClient.createDiscountSetup(DiscountMasterData)

    },
    onSuccess: () => {
      // ✅ Refetch after successful creation
      queryClient.invalidateQueries({ queryKey: ['DiscountMaster'] })

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
      setGlobalLoading(false)
    }
  })

  return { createDiscountMaster: mutateAsync, data, error, isPending }
}
