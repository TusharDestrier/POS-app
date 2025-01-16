

export type SalesPersonType = {
  salesPersonID: string
  firstName: string | null
  lastName: string | null
  mobileNo: string | null
  whatsAppNo: string | null
  email: string | null
  employeeID: string | null
  allocatedRole: string | null
  allocatedUser: string | null
  isActive: string | null
  enteredBy: string | null
  usedFor: string | null
  objDetails: never[]
}

export type FetchedSalesPersonType=SalesPersonType