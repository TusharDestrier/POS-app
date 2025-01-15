import { useState } from 'react';

import { useRefetchStore } from '@/store/useRefetchStore';

export default function useMutation<T, D = unknown>(
  mutationFunction: (data: D) => Promise<T>,
  refetchKey?: string  // ✅ Optional refetch key
) {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const triggerRefetch = useRefetchStore((state) => state.triggerRefetch);

  const mutate = async (requestData: D) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await mutationFunction(requestData);
      setData(response);

      if (refetchKey) {
        triggerRefetch(refetchKey);  // ✅ Trigger fetch refresh after mutation
      }
      return response;
    } catch (err: any) {
      setError(err.message || 'Something went wrong');
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  return { mutate, data, error, isLoading };
}
