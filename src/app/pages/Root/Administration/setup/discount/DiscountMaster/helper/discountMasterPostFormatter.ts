import { z } from 'zod'

import { DiscountMasterSchema } from '../components/DiscountMasterForm/schema'

export type DiscountPostType = ReturnType<typeof discountMasterPostFormatter>

export default function discountMasterPostFormatter(data: z.infer<typeof DiscountMasterSchema>) {
  const newData = {
    discountID: 0,
    discountName: data.name,
    discountType: data.discountType,
    discountBase: data.discountBase,
    discountValue: 0,
    appliedOn: data.appliedOn,
    employeeDiscount: data.employeeDiscount,
    maximumDiscount: String(data.maximumDiscount),
    minimumBilling: String(data.minimumBilling),
    otpRequired: data.otpRequired ? 'Y' : 'N',
    allowToChange: data.allowToChange ? 'Y' : 'N',
    isActive: data.inactive ? 'Y' : 'N',
    enteredBy: 0,
    usedFor: 'I',
    discountAssortments: data?.assortments?.map((item) => ({
      discountID: 0, // Hamesha 0
      assortmentID: Number(item.id), // item ka id convert karke number
      actionType: data.name, // top-level name property se le rahe hain
    })),
  }
  return newData
}
