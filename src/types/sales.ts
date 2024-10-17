export interface ProductFetched {
  id: string
  itemName: string
  uom: string
  mrp: number
  gst: number
  amount: number
}

export interface ProductModified extends ProductFetched {
  quantity: number
}
