import { ProductFetched } from '@/types/sales'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'

class ApiService {
  private api

  constructor(baseURL: string) {
    this.api = axios.create({
      baseURL,
      timeout: 10000, // Optional: Set a timeout for requests
    })
  }

  // Generic GET method
  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    try {
      const response: AxiosResponse<T> = await this.api.get<T>(endpoint, config)
      return response.data // Return the response data
    } catch (error) {
      this.handleError(error)
      throw error // Rethrow error for further handling
    }
  }

  // Generic POST method
  async post<T, R>(endpoint: string, data: T, config?: AxiosRequestConfig): Promise<R> {
    try {
      const response: AxiosResponse<R> = await this.api.post<R>(endpoint, data, config)
      return response.data // Return the response data
    } catch (error) {
      this.handleError(error)
      throw error // Rethrow error for further handling
    }
  }

  // Optional: Centralized error handling
  private handleError(error: any): void {
    if (axios.isAxiosError(error)) {
      console.error('Axios error:', error.response?.data || error.message)
    } else {
      console.error('Unexpected error:', error)
    }
  }
}

export default ApiService
