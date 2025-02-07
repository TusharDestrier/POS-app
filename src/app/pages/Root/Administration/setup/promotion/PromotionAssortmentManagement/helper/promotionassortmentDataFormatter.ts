import { z } from 'zod'

import { PromotionFormSchema } from '../components/PromotionAssortmentManagementForm/PromotionAssortmentManagementForm'

const operations = {
  Create: 'I',
  Edit: 'U',
  Delete: 'D',
  View: 'V',
}

export type AssortmentIntensivePostType = ReturnType<typeof PromotionassortmentDataFormatter>

export function PromotionassortmentDataFormatter(
  data: z.infer<typeof PromotionFormSchema>,
  mode: keyof typeof operations,
  id: number | string
) {
  const sendedData = {
    assortmentID: mode === 'Create' ? 0 : id,
    assortmentName: data.assortmentName,
    description: data.description,
    assortmentType: 'P',
    enteredBy: 0,
    usedFor: operations[mode],
    store: 0,
    assortmentDetail: data?.assortmentDetail
      ? [
          {
            assortmentID:mode === 'Create' ? 0 : id,
            itemCode: '0001',
            itemName: 'Park Avenue',
            tableID: 1,
            lineNum: 1,
            barcode: '110011',
            group: 'DeoGroup',
          },
          {
            assortmentID:mode === 'Create' ? 0 : id,
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
