import { create } from 'zustand'

interface MemberState {
  phoneNo: string
  memberId: string
  memberName: string
  saveMemberInfo: (phoneNo: string, memberId: string, memberName: string) => void
}

const useMemberStore = create<MemberState>((set) => ({
  phoneNo: '',
  memberId: '',
  memberName: '',
  saveMemberInfo: (phoneNo, memberId, memberName) => set({ phoneNo, memberId, memberName }),
}))

export default useMemberStore
