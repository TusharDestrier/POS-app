import useMutation from '@/hooks/useMutation';
import customerClient from '@/services/customerClient';
import { CustomerFetchedType } from '@/types/customer';


export type CustomerPostType = Omit<CustomerFetchedType, 'status'>;


export function useCreateCustomer() {
  const { mutate, data, error, isLoading } = useMutation<CustomerPostType, CustomerPostType>(
    async (customerData) => await customerClient.createCustomer(customerData),
    'customers'  // ✅ Trigger refetch after mutation
  );

  return { createCustomer: mutate, customer: data, error, isLoading };
}