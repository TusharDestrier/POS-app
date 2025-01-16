import { PettyCashType } from "@/types/pettyCash";

export enum PettyCashStatus {
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}




export type ExtendedPettyCashType = PettyCashType & {
  status:PettyCashStatus
}
