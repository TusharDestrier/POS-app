import useFetch from '@/hooks/useFetch';
import customerClient from '@/services/customerClient';
import { CustomerFetchedType } from '@/types/customer';

export function useCustomerData() {
  const { data, error, isLoading } = useFetch<CustomerFetchedType[]>(
    async () => customerClient.getCustomers({ id: 0 }),
    'customers'  // ✅ Unique fetch key
  );

  return { customerData: data, error, isLoading };
}
