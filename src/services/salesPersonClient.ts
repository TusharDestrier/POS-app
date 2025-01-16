
import ApiClient from './ApiClient';



// import { CustomerPostType } from '@/app/pages/Root/Administration/Master/CustomerMaster/hooks_api/useCreateCustomer';
import { FetchedSalesPersonType } from '@/types/salesPerson';


class SalesPersonClient extends ApiClient {
  constructor() {
    super('api/'); 
  }
  
  async  getSalesPerson(){
    const response = await this.get<FetchedSalesPersonType[]>(`SalePerson/GetAllSalesPerson`);
    return response.data; 
  }

  
//   async createCustomer(customerData: CustomerPostType) {
//     try {
//       const response = await this.post<CustomerPostType>(`CustomerRep/PostCustomer`, customerData);
  
//       // ✅ Status check for non-200 responses
//       if (response.status !== 200 && response.status !== 201) {
//         throw new Error('Failed to create customer');
//       }
  
//       return response.data;
//     } catch (error: any) {
//       console.error('Error creating customer:', error);
  
//       // ✅ Specific error handling for 400 errors
//       if (error.response && error.response.status === 400) {
//         const validationErrors = error.response.data.errors;
  
//         // Return structured validation errors for UI handling
//         throw new Error(
//           Object.entries(validationErrors)
//             .map(([field, messages]) => `${field}: ${messages.join(', ')}`)
//             .join('\n')
//         );
//       }
  
//       // ❌ Generic error message
//       throw new Error('Something went wrong. Please try again.');
//     }
//   }
  

  
}

export default new SalesPersonClient();
