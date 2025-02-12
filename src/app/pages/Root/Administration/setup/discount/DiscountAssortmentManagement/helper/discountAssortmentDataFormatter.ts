import { z } from 'zod'

import { DiscountFormSchema } from '../components/DiscountAssortmentManagementForm/DiscountAssortmentManagementForm'

const operations = {
  Create: 'I',
  Edit: 'U',
  Delete: 'D',
  View: 'V',
}

type assortmentDetail = {
  assortmentID: string | number
  itemCode: string
  itemName: string
  tableID: number
  lineNum: number
  barcode: string
  group: string
}[]
export type DiscountAssortmentPostType = ReturnType<typeof discountAssortmentFormatter>

export function discountAssortmentFormatter(
  data: z.infer<typeof DiscountFormSchema>,
  mode: keyof typeof operations,
  id: number | string,
  assortmentDetail: assortmentDetail[]
) {
  const sendedData = {
    assortmentID: mode === 'Create' ? 0 : id,
    assortmentName: data.assortmentName,
    description: data.description,
    typeOfAssortment: "",
    assortmentType: 'D',
    enteredBy: 0,
    usedFor: operations[mode],
    store: 0,
    assortmentDetail: assortmentDetail?.length ? assortmentDetail : [],
  }

  return sendedData
}
