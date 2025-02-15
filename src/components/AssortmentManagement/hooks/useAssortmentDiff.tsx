import { useGeneratedItemsDataStore } from './useGeneratedItemsDataStore'

import { useGetGeneratedItems } from '@/hooks_api/useGetItemFilterWise'

export function useAssortmentDiff(type: 'included' | 'excluded') {
  const { generatedItems } = useGetGeneratedItems()
  const selectedGeneratedItems = useGeneratedItemsDataStore((state) => state.selections)
  const items = generatedItems.filter((item) => selectedGeneratedItems[item.itemCode] === type)
  return { items }
}
