
export enum CustomerStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}


export type CustomerType = {
  id: string
  phoneNo: string
  status: CustomerStatus
  email: string
  fullName: string
 
}

