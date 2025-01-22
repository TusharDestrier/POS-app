import ApiClient from './ApiClient'



import { PaymodePostType } from '@/app/pages/Root/Administration/Master/PayModeMaster/helper/dataFormatter.sx'
import { PaymodeFetchedType, PaymodeMasterResponseType } from '@/types/paymode'

class PaymodeClient extends ApiClient {
  constructor() {
    super('api/')
  }

  async getPaymode({ signal }: { signal?: AbortSignal }) {
    const response = await this.get<PaymodeFetchedType[]>(
      `PayMode/GetAllPaymode`,
      {},
      {
        signal,
      }
    )
    return response.data
  }

  async getPaymodeById({ id = 0 }: { id: number | null }) {
      const response = await this.get<PaymodeFetchedType>(`PayMode/GetPaymode`, {
        PaymentModeID: id,
      })
      return response.data
    }



  async createPaymode(paymodeData: PaymodePostType) {
    try {
      const response = await this.post<PaymodeMasterResponseType>(
        `PayModeRep/PostPayMode`,
        paymodeData
      )

      // ✅ Status check for non-200 responses
      if (response.data[0].returnCode !== 'Y') {
        throw new Error(response.data[0].returnMsg)
      }

      return response.data
    } catch (error: any) {
      throw new Error(error)
    }
  }
}

export default new PaymodeClient()
