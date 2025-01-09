import { useState, useEffect } from 'react';

export default function useFetch<T>(fetchFunction: () => Promise<T>, dependencies: any[] = []): {
  data: T | null;
  error: string | null;
  isLoading: boolean;
} {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

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
  }, dependencies);

  return { data, error, isLoading };
}
