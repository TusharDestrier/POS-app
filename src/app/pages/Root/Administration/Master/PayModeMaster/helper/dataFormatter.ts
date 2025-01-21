import { z } from "zod"

import { formSchema } from "../schema/schema"

type paymodeModeType=z.infer<typeof formSchema>

export function transformFormData(data: paymodeModeType) {
  return {
    paymentModeID: 0,
    paymentModeName: data.paymentModeName,
    displayOrder: 0,
    shortCode: data.shortCode,
    availablePaymentmethod: data.paymentMethod,
    isActive: 'Y',
    enteredBy: 0,
    usedFor: 'I',
    objCondition: data.objCondition.filter((condition) => condition.isEnabled),
    objCurrency: data.objCurrency,
  }
}
