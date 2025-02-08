// import { useMutation, useQueryClient } from '@tanstack/react-query'
// import { toast } from 'sonner'

// // import { salesPersonFormatter } from '../helper/SalesPersonFormatter'
// // import useSalesPerson from '../store/useSalesPerson'

// // import salesPersonClient from '@/services/salesPersonClient'
// // import { SalesPersonResponseType } from '@/types/salesPerson'

// const messages = {
//   "Create": 'Created SuccessFully',
//   "Edit": 'Updated SuccessFully',
//   "Delete": 'Deleted SuccessFully',
//   "View": 'View SuccessFully',
// }

// export type SalesPersonPostType = ReturnType<typeof salesPersonFormatter>


// export function useCreateDiscountMaster() {
//   const queryClient = useQueryClient() // ✅ Query Invalidation ke liye
//   const mode = useDiscountMaster((state) => state.mode)
//   const setIsLoading = useDiscountMaster((state) => state.setIsLoading)
//   const { mutateAsync, data, error, isPending, } = useMutation<
//     DiscountMasterResponseType,
//     Error,
//     DiscountMasterPostType
//   >({
//     mutationFn: async (DiscountMasterData: DiscountMasterPostType) => {
//       setIsLoading(true) 
//       return await DiscountMasterClient.createDiscountMaster(DiscountMasterData)
//     },
//     onSuccess: () => {
//       // ✅ Refetch after successful creation
//       queryClient.invalidateQueries({ queryKey: ['DiscountMaster'] })

//       toast.success(messages[mode], {
//         style: {
//           backgroundColor: '#e3ffea',
//           color: '#3ed665',
//         },
//       })
//     },  
//     onError: (error) => {
//       toast.error(error.message, {
//         style: {
//           backgroundColor: '#f7edeb',
//           color: '#ff6242',
//         },
//       })
//     },
//     onSettled:()=>{
//       setIsLoading(false)
//     }
//   })

//   return { createDiscountMaster: mutateAsync, data, error, isPending }
// }
