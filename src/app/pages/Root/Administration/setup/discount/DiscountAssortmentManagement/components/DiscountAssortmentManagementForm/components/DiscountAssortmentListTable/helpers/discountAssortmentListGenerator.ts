import { PropertiesType } from '../../DiscountAssortmentSearchFilters/DiscountAssortmentSearchFilters'

type DiscountAssortmentPostType = {
  itemGrpID: number
  itemProperty: Array<{
    propertyID: string
    propertyName: string
    propertyValues: Array<{
      value: string
    }>
  }>
}
export type ItemGenerationType = ReturnType<typeof createDiscountAssortmentPayload>

export function createDiscountAssortmentPayload(
  itemGrpID: number,
  itemProperty: PropertiesType[]
): DiscountAssortmentPostType {
  return {
    itemGrpID,
    itemProperty: itemProperty, // Abhi empty array
  }
}
