import { z } from 'zod'

export const logisticsScema = z.object({
  billToAddress: z.string().min(2, {
    message: 'Bill Address is required',
  }),

  //billToAddress: z.string().optional(),
  city: z.string().min(3, {
    message: 'City FIled is  Required',
  }),
  postalCode: z.string().min(4, {
    message: 'Required',
  }),
  state: z.string().min(2, {
    message: 'State Required',
  }),
  contactPerson: z.string().min(2, {
    message: 'Contact Person is required',
  }),
  contactNo: z.string().optional(),
  alcontactNo: z.string().optional(),
  emailId: z.string().min(2, {
    message: 'Email Id is required',
  }),
  shipToAddress: z.string().min(2, {
    message: 'Ship Address is required',
  }),
  searching: z.string().optional(),

  default: z.string().optional(),
  defaultSale: z.string().optional(),
  defaultReturn: z.string().optional(),

  date: z.string().optional(),
  factor: z.string().optional(),
  storeType: z.string().optional(),
  category: z.string().optional(),

  operationType: z.string().optional(),
  inActive: z.string().optional(),
})
