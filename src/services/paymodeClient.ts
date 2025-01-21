// import ApiClient from './ApiClient'


// import { CustomerFetchedType, CustomerMasterResponseType } from '@/types/customer'

// class PaymodeClient extends ApiClient {
//   constructor() {
//     super('api/')
//   }

//   async getCustomers({ id = 0, signal }: { id: number; signal?: AbortSignal }) {
//     const response = await this.get<CustomerFetchedType[]>(
//       `Customer/GetCustomerDetails`,
//       {
//         CustomerID: id,
//       },
//       {
//         signal,
//       }
//     )
//     return response.data
//   }

//   async createPaymode(paymodeData) {
//     try {
//       const response = await this.post<CustomerMasterResponseType>(
//         `PayModeRep/PostPayMode`,
//         paymodeData
//       )
      

//       // ✅ Status check for non-200 responses
//       if (response.data[0].returnCode !== 'Y') {
//         throw new Error(response.data[0].returnMsg)
//       }

//       return response.data
//     } catch (error: any) {
//       throw new Error(error)
//     }
//   }
// }

// export default new PaymodeClient()
