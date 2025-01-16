import ApiClient from './ApiClient'

import { SalesPersonPostType } from '@/app/pages/Root/Administration/Master/SalesPersonMaster/hooks_api/useCreateSalesPerson'
import { FetchedSalesPersonType } from '@/types/salesPerson'

class SalesPersonClient extends ApiClient {
  constructor() {
    super('api/')
  }

  async getSalesPerson() {
    const response = await this.get<FetchedSalesPersonType[]>(`SalePerson/GetAllSalesPerson`)
    return response.data
  }

  async createSalesPerson(salesPersonData: SalesPersonPostType) {
    try {
      const response = await this.post<{ returnCode: string, returnMsg: string}[]>(
        `SalePersonRep/PostSalePerson`,
        salesPersonData
      )

      console.log(response.data[0].returnMsg);
      

      // ✅ Status check for non-200 responses
      if (response.data[0].returnCode !== 'Y') {
        throw new Error(response.data[0].returnMsg)
      }

      return response.data
    } catch (error: any) {
      console.error('Error creating SalesPerson:',error)

      throw new Error(error   )
    }
  }
}

export default new SalesPersonClient()
