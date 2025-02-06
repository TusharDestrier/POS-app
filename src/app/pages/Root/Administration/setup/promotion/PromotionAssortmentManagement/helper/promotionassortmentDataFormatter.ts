import { z } from 'zod'

import { PromotionFormSchema } from '../components/PromotionAssortmentManagementForm/PromotionAssortmentManagementForm'



export type AssortmentPostType = ReturnType<typeof PromotionassortmentDataFormatter>

export function PromotionassortmentDataFormatter(data: z.infer<typeof PromotionFormSchema>) {
  const sendedData = {
    assortmentID: 0,
    assortmentName: data.assortmentName,
    description: data.description,
    assortmentType: 'P',
    enteredBy: 0,
    usedFor: 'I',
    store: 0,
    assortmentDetail: data?.assortmentDetail
      ? [
          {
            assortmentID: 0,
            itemCode: '0001',
            itemName: 'Park Avenue',
            tableID: 1,
            lineNum: 1,
            barcode: '110011',
            group: 'DeoGroup',
          },
          {
            assortmentID: 0,
            itemCode: '0002',
            itemName: 'Vim Bar',
            tableID: 1,
            lineNum: 2,
            barcode: '110022',
            group: 'House Cleaning',
          },
        ]
      : [],
  }

  return sendedData
}
