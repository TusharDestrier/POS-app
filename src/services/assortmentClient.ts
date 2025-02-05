import ApiClient from './ApiClient'

import { AssortmentPostType } from '@/app/pages/Root/Administration/setup/discount/AssortmentManagement/components/AssortmentManagementForm/helpers/assortmentDataFormatter'
import { FetchedAssortmentType, AssortmentResponseType } from '@/types/assortment'

class AssortmentClient extends ApiClient {
  constructor() {
    super('api/')
  }

  async getAssortment({ signal }: { signal: AbortSignal }) {
    const response = await this.get<FetchedAssortmentType[]>(
      `assortment/GetAllAssortment?AssortmentID=0&AssortmentType=D`,
      {},
      { signal }
    )
    return response.data
  }

  async getAssortmentById({ id = 0 }: { id: number | null }) {
    const response = await this.get<FetchedAssortmentType>(`assortment/Getassortment`, {
      AssortmentID: id,
    })
    return response.data
  }

  async createAssortment(assortmentData: AssortmentPostType) {
    try {
      const response = await this.post<AssortmentResponseType>(
        `AssortmentRep/PostAssortment`,
        assortmentData
      )

      // ✅ Status check for non-200 responses
      if (response.data[0].returnCode !== 'Y') {
        throw new Error(response.data[0].returnMsg)
      }

      return response.data
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message)
      }
      throw new Error('An unknown error occurred.')
    }
  }
}

export default new AssortmentClient()
