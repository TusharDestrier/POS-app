import useFetch from '@/hooks/useFetch';
import salesPersonClient from '@/services/salesPersonClient';
import { FetchedSalesPersonType } from '@/types/salesPerson';

export function useSalesPersonData() {
  const { data, error, isLoading } = useFetch<FetchedSalesPersonType[]>(
    async () => salesPersonClient.getSalesPerson(),
    'salesPerson'  // ✅ Unique fetch key
  );

  return { salesPersonData: data, error, isLoading };
}
