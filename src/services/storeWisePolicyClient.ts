import ApiClient from "./ApiClient"

import { FetchedStoreWisePolicyType } from "@/types/storeWisePolicy";


class StoreWisePolicyClient extends ApiClient{
    constructor(){
        super('api/')
    }

    async createStoreWisePolicy(storeWisePolicyData: FetchedStoreWisePolicyType): Promise <FetchedStoreWisePolicyType>{
        try{
            const response = await this.post(
                `storespecificPolicyRep/PostStoreSpecificPolicy`,
                storeWisePolicyData
            )
            const responseData = response.data as { returnCode: string; returnMsg: string }[]
            if(responseData[0].returnCode !== 'Y'){
                throw new Error(responseData[0].returnMsg)
            }
            return response.data
        }catch(error: any){
            throw new Error(error)
        }
    }

}
export default new StoreWisePolicyClient()