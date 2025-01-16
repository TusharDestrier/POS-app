

export enum PettyCashStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export type PettyCashHead = {
  pettyCashID: number
  pettyCashCode: string | null
  pettyCashName: string | null
  modeOfOperation: string | null
  limit: number 
  remarks: string | null
  isActive: string | null
  enteredBy: number
  usedFor: string | null
}




export type ExtendedPettyCashHeadType = PettyCashHead & {
  status:PettyCashStatus
}

export const data: PettyCashHead[] = []
