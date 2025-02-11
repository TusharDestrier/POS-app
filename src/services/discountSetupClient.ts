import ApiClient from './ApiClient'

import { DoicountSetupPostType } from '@/app/pages/Root/Administration/setup/discount/DiscountMaster/hooks_api/useCreateDiscountMasterData';
import { DiscountResponseType, FetchedDiscountType } from '@/types/discountSetup';

class DiscountSetupClient extends ApiClient {
  constructor() {
    super('api/')
  }

  async getDsicountSetup({ id = 0, signal }: { id: number; signal?: AbortSignal }) {
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

  async getDiscountById({ id = 0 }: { id: number | null }) {
      const response = await this.get<FetchedDiscountType>(`Discount/GetDiscount?discountID=0`, {
        AssortmentID: id,
      })
      return response.data
    }

  async createDiscountSetup(DesignationData:DoicountSetupPostType) {
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
