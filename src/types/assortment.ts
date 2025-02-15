export type FetchedAssortmentType = {
  assortmentID: number
  assortmentName: string
  description: string
  barcode: string
  itemCode: string
  assortmentType: 'D'
  enteredBy: number
  usedFor: null
  store: number
}

export type AssortmentResponseType = { returnCode: string; returnMsg: string }[]



