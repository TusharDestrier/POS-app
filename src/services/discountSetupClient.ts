import ApiClient from './ApiClient'

import { DiscountPostType } from '@/app/pages/Root/Administration/setup/discount/DiscountMaster/helper/discountMasterPostFormatter';
import { DiscountResponseType, FetchedDiscountType } from '@/types/discountSetup';

class DiscountSetupClient extends ApiClient {
  constructor() {
    super('api/')
  }

  async getDiscount({ id = 0, signal }: { id: number; signal?: AbortSignal }) {
    const response = await this.get<FetchedDiscountType[]>(
      `Discount/GetAllDiscount`,
      {
        DesignationID: id,
      },
      {
        signal,
      }
    )
    return response.data
  }


  async createDiscount(DesignationData:DiscountPostType) {
    try {
      const response = await this.post<DiscountResponseType>(
        `DiscountRep/PostDiscount`,
        DesignationData
      )

      // ✅ Status check for non-200 responses
      if (response.data[0].returnCode !== 'Y') {
        throw new Error(response.data[0].returnMsg)
      }

      return response.data
    } catch (error: unknown) {
      if (error instanceof Error) {
        throw new Error(error.message);
      }
      throw new Error("An unknown error occurred.");
    }
  }
}

export default new DiscountSetupClient()
