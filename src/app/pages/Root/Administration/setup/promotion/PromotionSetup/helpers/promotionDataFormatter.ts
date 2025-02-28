import { z } from 'zod'

import { promotionSetupSchema } from '../schema'

export type PromotionPostType = ReturnType<typeof promotionDataFormatter>

export function promotionDataFormatter(promotionData: z.infer<typeof promotionSetupSchema>) {
  const sendedData = {
    promotionID: 0,
    promotionName: promotionData.promotionName,
    details: promotionData.details,
    appliedOn: promotionData.appliedOn,
    promotionType: promotionData.promotionType,
    isActive: promotionData.inactive ? 'Y' : 'N',
    storeID: 0,
    enteredBy: 0,
    usedFor: 'I',
    objCondition:
      promotionData.promotionType === 'F'
        ? [
            {
              promotionID: 0,
              conditionID: promotionData.promotionParameters.paidForCondition.condition,
              value: promotionData.promotionParameters.paidForCondition.quantity,
            },
          ]
        : [],
    objAssortment: promotionData.promotionParameters.buyAssortments.map((assortment) => {
      return {
        promotionID: 0,
        value: 0,
        ...assortment,
        assortmentID: Number(assortment.assortmentID),
      }
    }),
    objBenifit: [
      {
        promotionID: 0,
        benifitID: promotionData?.promotionParameters?.benefitType?.type,
        value: promotionData?.promotionParameters?.benefitType?.value || 0,
        assortmentID: promotionData?.promotionParameters?.benefitType?.assortmentID || 0,
        assortmentName: promotionData?.promotionParameters?.benefitType?.assortmentName || '',
      },
    ],
    objValue:
      promotionData.promotionType !=='F'
        ? (promotionData?.promotionParameters.objValue ?? [])
        : [],
    objDiscount: promotionData.promotionParameters.discountTypes.types
      .filter((item) => item.isSelected) // ✅ Step 1: Filter selected items
      .map((item) => ({
        promotionID: 0,
        discountID: promotionData.promotionParameters.discountTypes.selectedDiscount, // ✅ Carry the selectedDiscount
        value: item.type,
        dropDown1: String(item.discountOn),
        dropDown2: String(item.condition),
        dropDown3: String(item.comparison),
        fromValue: item.from || 0,
        toValue: item.to || 0, // ✅ Convert empty strings to null
      })),
  }

  return sendedData
}
