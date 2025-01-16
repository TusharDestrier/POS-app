import ApiClient from "./ApiClient";

import { FetchedPettyCashType } from "@/types/pettyCash";


class PettyCashClient extends ApiClient{
    constructor(){
        super('api/')
    }
    async getPettyCash(){
        const response = await this.get<FetchedPettyCashType[]>(`PettyCash/GetAllPettyCash`);
        return response.data;
    }

}
export default new PettyCashClient();