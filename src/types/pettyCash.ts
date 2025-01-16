export type PettyCashType = {
    pettyCashID: string
    pettyCashCode: string | null
    pettyCashName: string | null
    modeOfOperation: string | null
    limit: number | null
    remarks: string | null
    isActive: string | null
    enteredBy: number | null
    usedFor: string | null
}
export type FetchedPettyCashType = PettyCashType