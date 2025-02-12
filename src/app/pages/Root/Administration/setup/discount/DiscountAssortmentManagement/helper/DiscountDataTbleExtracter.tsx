import { DiscountTableData } from '../components/DiscountAssortmentTableVIewer/DiscountAssortmentVIewer'

import { FetchedAssortmentType } from '@/types/assortment'

export default function mapDiscountFetchedTypeToTableData(
  discount: FetchedAssortmentType
): DiscountTableData {
  return {
    assortmentID: discount.assortmentID,
    assortmentName: discount.assortmentName,
    description: discount.description,
    assortmentID: 0,
    assortmentName: '',
    description: '',
    store: 0,
    objDetails: [],
  }
}
