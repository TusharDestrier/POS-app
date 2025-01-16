import { z } from 'zod'

import { SalesPersonFormSchema } from '../schemas/SalesPersonForm.schema'

import { formatDate } from '@/lib/utils'

export type SalesPersonFormFormatterType = z.infer<typeof SalesPersonFormSchema>

export function salesPersonFormatter(data: SalesPersonFormFormatterType) {
  const formattedData = {
    salesPersonID: 0, // Default value, change if needed
    firstName: data.salesPerson.firstName ?? '',
    lastName: data.salesPerson.lastName ?? '',
    mobileNo: data.salesPerson.mobileNo ?? '',
    whatsAppNo: data.salesPerson.whatsappNo ?? '',
    email: data.salesPerson.email ?? '',
    employeeID: data.salesPerson.employeeId ?? '',
    allocatedRole: Number(data.salesPerson.allocateRole) || 0,
    allocatedUser: Number(data.salesPerson.allocateUser) || 0,
    isActive: data.salesPerson.inactive ? 'Y' : 'N',
    enteredBy: '0', // Default value, change if needed
    usedFor: 'I', // Adjust this as required
    objDetails: data.storeAllocation.allocations.map((item, ind) => ({
      salesPersonID: 0, // Assuming default, replace if available
      storeID: ind, // Assuming default, replace if available
      storeCode: item.storeCode ?? '',
      storeName: item.storeName ?? '',
      startDate: item.startDate ? formatDate(item.startDate) : '',
      endDate: item.endDate ? formatDate(item.endDate) : '',
      isTransfered: item.transferred ? 'Y' : 'N',
    })),
  }
  return formattedData
}
