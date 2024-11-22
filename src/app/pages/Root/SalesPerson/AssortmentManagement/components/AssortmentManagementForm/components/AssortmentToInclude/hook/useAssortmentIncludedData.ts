
import { getAssortmentIncludedData } from '../../../../../__mockData__/api'

import useFetch from '@/hooks/useFetch'

export function useAssortmentIncludedData() {
    const { data, error, isLoading } = useFetch({
      key: 'assortmentIncluded',
      fn: getAssortmentIncludedData, // This should return a Promise
      stale: 0, // Set stale time to 0 to consider data stale immediately
      cache: false, // Disable caching
    })
  
    return { assortmentIncludedData: data, error, isLoading }
  }