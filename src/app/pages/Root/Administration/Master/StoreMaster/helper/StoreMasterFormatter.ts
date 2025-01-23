import { z } from "zod"

//import { StoreMasterHeadSchema } from "../../schemas/StoreMasterHeadSchema"
import { StoreMasterHeadSchema } from "../schemas/StoreMasterHeadSchema"
import useStoreMasterHead from "../store/useStoreMasterHead"


export type StoreMasterFormatterType = z.infer<typeof StoreMasterHeadSchema>

const operation = {
  Create: 'I',
  Edit: 'U',
  Delete: 'D',
}

export function StoreMasterFormatter( data: StoreMasterFormatterType,
  id: number | string | null) {
  const mode = useStoreMasterHead.getState().mode as 'Create' | 'Edit' | 'Delete'
  const formattedData = {
    storeID: mode === 'Create' ? 0 : id, // Default value, change if needed
    storeCode: data.storeCode ?? '',
    storeName: data.storeName ?? '', //prob
    startDate: data.startDate ?? '',
    closeDate: data.closeDate ?? '',
    storeTypeCode: data.storeTypeCode ?? '',
    storeTypeName: data.storeTypeName ?? '',
    storeCategoryCode: data.storeCategoryCode ?? '',
    storeCategoryName: data.storeCategoryName ?? '',
    franchiseCode: data.franchiseCode ?? '',
    franchiseName: data.franchiseName ?? '',
    storeSize: data.storeSize ?? 0,
    operationTypeCode: data.operationTypeCode ?? '',
    operationTypeName: data.operationTypeName ?? '',
    defaultWarehouseCode: data.defaultWarehouseCode ?? '',
    defaultWarehouseName: data.defaultWarehouseName ?? '',
    defaultSaleWHCode: data.defaultSaleWHCode ?? '',
    defaultSaleWHName: data.defaultSaleWHName ?? '',
    defaultReturnWHCode: data.defaultReturnWHCode ?? '',
    defaultReturnWHName: data.defaultReturnWHName ?? '',
    isActive: data.isActive ? 'Y' : 'N', //prob
    billAddress: data.billAddress ?? '',
    billCity: data.billCity ?? '',
    billPostalCode: data.billPostalCode ?? '',
    billStateCode: data.billStateCode ?? '',
    billStateName: data.billStateName ?? '',
    billCountryCode: data.billCountryCode ?? '',
    billCountryName: data.billCountryName ?? '',
    shipAddress: data.shipAddress ?? '',
    shipCity: data.shipCity ?? '',
    shipPostalCode: data.shipPostalCode ?? '',
    shipStateCode: data.shipStateCode ?? '',
    shipStateName: data.shipStateName ?? '',
    shipCountryCode: data.shipCountryCode ?? '',
    shipCountryName: data.shipCountryName ?? '',
    contactPerson: data.contactPerson ?? '',
    contactNumber: data.contactNumber ?? 0,
    alternateContactNumber: data.alternateContactNumber ?? 0,
    email: data.email ?? '',
    enteredBy: '0', // Default value, change if needed
    usedFor: operation[mode], // Adjust this as required
    objWareHouse: data.objWareHouse,
    
  }
  return formattedData 
}
 