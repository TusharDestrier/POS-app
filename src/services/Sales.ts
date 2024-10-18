import { ProductFetched } from '@/types/sales'
import ApiService from './ApiClient'

// Example usage
const apiService = new ApiService('http://localhost:3000')

// Fetch sales data
export const getSalesData = async (): Promise<ProductFetched[]> => {
  return apiService.get<ProductFetched[]>('/products') // Adjust the endpoint as necessary
}

// Create sales data
export const createSalesData = async (data: ProductFetched): Promise<ProductFetched> => {
  return apiService.post<ProductFetched, ProductFetched>('/products', data) // Adjust the endpoint as necessary
}
