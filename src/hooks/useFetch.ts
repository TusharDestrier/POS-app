import { getItem, setItem } from '@/lib/localstorage'
import { useEffect, useRef, useState } from 'react'

// Define a generic type for the data
const useFetch = <T>({
  key,
  fn,
  stale = 5 * 60 * 1000,
  cache = true,
}: {
  key: string
  fn: () => Promise<T>
  stale?: number
  cache?: boolean
}) => {
  const [data, setData] = useState<T | undefined>(undefined) // Define type for state
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)

  const abortControllerRef = useRef<AbortController | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      abortControllerRef.current = new AbortController()

      setError(null)
      setIsLoading(true)

      // Check local storage if caching is enabled
      if (cache) {
        const currentTime = new Date().getTime()
        const cachedData = getItem<{ lastFetched: number; data: T }>(key)

        if (cachedData && currentTime - cachedData.lastFetched < stale) {
          setData(cachedData.data)
          setIsLoading(false)
          return
        }
      }

      try {
        const response = await fn() // Call the provided fetch function
        setData(response)
      } catch (error) {
        setError('Something went wrong. Please try again later.')
      } finally {
        setIsLoading(false)
      }
    }

    fetchData()

    return () => {
      abortControllerRef.current?.abort()
    }
  }, [key, fn, stale, cache]) // Add all dependencies

  useEffect(() => {
    if (!data || !cache) return // Only cache if there's data and caching is enabled

    setItem(key, {
      lastFetched: new Date().getTime(),
      data,
    })
  }, [data, key, cache]) // Add cache dependency

  return { data, error, isLoading }
}

export default useFetch
