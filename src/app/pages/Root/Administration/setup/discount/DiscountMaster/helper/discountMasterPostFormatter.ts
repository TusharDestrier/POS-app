import { z } from 'zod'

import { DiscountMasterSchema } from '../components/DiscountMasterForm/schema'
import useDiscountMasterStore from '../store/useDiscountMasterStore'


export type DiscountPostType=ReturnType <typeof discountMasterPostFormatter>


export default function discountMasterPostFormatter( id: number | string | null,
  data: z.infer<typeof DiscountMasterSchema>
) {
  const mode = useDiscountMasterStore.getState().mode as 'Create' | 'Edit' | 'Delete'
  const formattedData = {
    discountID: mode === 'Create' ? 0 : id,
    discountName: data.name ?? '',
    discountType: data.discountType ?? '',
    discountBase: data.discountBase ?? '',
    discountValue: 0,
    appliedOn: data.appliedOn ?? '',
    employeeDiscount: data.employeeDiscount ?? 0,
    maximumDiscount: data.maximumDiscount ? Number(data.maximumDiscount) : 0,
    minimumBilling: data.minimumBilling ? Number(data.minimumBilling) : 0,
    otpRequired: !!data.otpRequired,
    allowToChange: !!data.allowToChange,
    isActive: data.inactive ? 'N' : 'Y', // Inactive thakle 'N', active thakle 'Y'
    enteredBy: 0,
    usedFor: 'I',
    discountAssortments: [],
    // discountAssortments: Array.isArray(data.assortments)
    //   ? data.assortments.map((item) => ({
    //       discountID: 0, // Always 0
    //       assortmentID: Number(item.id) || 0, // Ensure valid number
    //       actionType: data.name ?? '', // Default empty string if name missing
    //     }))
    //   : [],
  }
  return formattedData
}
