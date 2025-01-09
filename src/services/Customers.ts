import ApiService from './ApiClient';

import { CustomerFetchedType } from '@/types/customer';

class CustomerService extends ApiService {
  constructor() {
    super('http://localhost:3002'); // Base URL
  }

  // Fetch customers
  async getCustomers(): Promise<CustomerFetchedType[]> {
    return this.get<CustomerFetchedType[]>('/customers');
  }

  // Create customer
  async createCustomer(data: CustomerFetchedType): Promise<CustomerFetchedType> {
    return this.post<CustomerFetchedType, CustomerFetchedType>('/customers', data);
  }

  // Fetch customer by phone number
  async fetchCustomerByPhone(phoneNo: string): Promise<{
    memberName: string;
    memberId: string;
    createdDate: string;
  } | null> {
    // Custom logic
    const response = await new Promise((resolve) => {
      setTimeout(() => {
        const mockCustomer = {
          memberName: 'John Doe',
          memberId: '123456',
          createdDate: '2022-05-16',
        };

        resolve(phoneNo === '1234567890' ? mockCustomer : null);
      }, 2000);
    });

    return response as {
      memberName: string;
      memberId: string;
      createdDate: string;
    } | null;
  }
}

export default new CustomerService();
