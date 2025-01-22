export type PettyCashType = {
    status: import("d:/POS_V2/POS-app/src/app/pages/Root/Administration/Master/PettyCashHead/components/PettyCashHeadTable/data/tableData").PettyCashStatus
    pettyCashID: number | null
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

export type PettyCashResponseType = { returnCode: string; returnMsg: string }[];
