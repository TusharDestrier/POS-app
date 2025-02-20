//import { ItemGenerationType } from '@/components/AssortmentManagement/helper/assortmentFilterFormatter'
import ApiClient from './ApiClient'

import {
  FetchedItemGroupsType,
  //ItemsResponseType,
  FetchedItemPropertiesType,
} from '@/types/item' // Ye types aapke project ke hisaab se adjust karo

class ItemClient extends ApiClient {
  constructor() {
    super('api/')
  }

  /**
   * Sabhi item groups ko fetch karta hai.
   * @param signal AbortSignal for request cancellation
   */
  async getAllItemsGroups({ id = 0, signal }: { id: number; signal?: AbortSignal }) {
    const response = await this.get<FetchedItemGroupsType[]>(
      `Item/GetAllItem`,
      {},
      { signal }
    )
    return response.data
  }

  /**
   * Ek particular item group ke properties fetch karta hai.
   * @param groupId Item group id
   */
  async getAllItemsPropertiesByGroupId({ groupId }: { groupId: string }) {
    const response = await this.get<FetchedItemPropertiesType[]>(
      `Item/GetItem?itemCode=${groupId}`
    )
    return response.data
  }

  // async getAllItemsAfterFiltering(filterData: ItemGenerationType){
  //   // Agar backend POST chah raha hai:
  //   const response = await this.post<ItemsResponseType>(`Item/GetItemFilterWise`, filterData)
  //   console.log(response);
    
  //   return response.data
  // }
}

export default new ItemClient()
