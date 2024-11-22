import { getAssortmentData } from '../__mockData__/api'

import useFetch from '@/hooks/useFetch'



export function useAssortmentData() {
  const { data, error, isLoading } = useFetch({
    key: 'assortment',
    fn: getAssortmentData, // This should return a Promise
    stale: 0, // Set stale time to 0 to consider data stale immediately
    cache: false, // Disable caching
  })

  return { assortmentData: data, error, isLoading }
}
