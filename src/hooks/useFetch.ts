import { useState, useEffect } from 'react';

import { useRefetchStore } from '@/store/useRefetchStore';

export default function useFetch<T>(fetchFunction: () => Promise<T>, key: string, dependencies: any[] = []) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  const trigger = useRefetchStore((state) => state.triggers[key] || 0);  // ✅ Listen to trigger

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetchFunction();
        setData(response);
      } catch (err: any) {
        setError(err.message || 'Something went wrong');
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [trigger, ...dependencies]);  // ✅ Trigger added to dependencies

  return { data, error, isLoading };
}
