import { salesPersonFormatter } from '../helper/SalesPersonFormatter';

import useMutation from '@/hooks/useMutation';
import salesPersonClient from '@/services/salesPersonClient';



export type SalesPersonPostType = ReturnType <typeof salesPersonFormatter>;


export function useCreateSalesPerson() {
  const { mutate, data, error, isLoading } = useMutation<SalesPersonPostType, SalesPersonPostType>(
    async (salesPersonData) => await salesPersonClient.createSalesPerson(salesPersonData),
    'salesPerson'  // ✅ Trigger refetch after mutation
  );

  return { createSalesPerson: mutate, salesPersonDats: data, error, isLoading };
}