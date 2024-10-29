import ApiService from './ApiClient'

import { ProductFetched } from '@/types/sales'

// Example usage
const apiService = new ApiService('http://localhost:3000')

// Fetch sales data
export const getCustomersData = async (): Promise<ProductFetched[]> => {
  return apiService.get<ProductFetched[]>('/users') // Adjust the endpoint as necessary
}

// Create sales data
export const createCustomerData = async (data: ProductFetched): Promise<ProductFetched> => {
  return apiService.post<ProductFetched, ProductFetched>('/users', data) // Adjust the endpoint as necessary
}

// mockApi.ts
export function fetchCustomerByPhone(phoneNo: string): Promise<{
  memberName: string
  memberId: string
  createdDate: string
} | null> {
  return new Promise((resolve) => {
    // Simulate a 2-second delay to mimic an API call
    setTimeout(() => {
      const mockCustomer = {
        memberName: 'John Doe',
        memberId: '123456',
        createdDate: '2022-05-16',
      }

      // Simulate the API returning customer data if the phone number matches
      if (phoneNo === '1234567890') {
        resolve(mockCustomer)
      } else {
        resolve(null) // Return null if no customer is found
      }
    }, 2000) // 2 seconds delay
  })
}
