import useFetch from '@/hooks/useFetch'
import { delay } from '@/lib/utils'
import CustomerService from '@/services/Customers'
import { CustomerFetchedType } from '@/types/customer'

export function useCustomerData() {
  const { data, error, isLoading } = useFetch<CustomerFetchedType[]>(
    async () => {
      await delay(2000)
      return CustomerService.getCustomers()
    }, // Pass the service method
    [] // No dependencies for now
  )

  return { customerData: data, error, isLoading }
}
