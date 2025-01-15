import { create } from 'zustand';

interface RefetchStore {
  triggers: Record<string, number>;
  triggerRefetch: (key: string) => void;
}

export const useRefetchStore = create<RefetchStore>((set) => ({
  triggers: {},

  // ✅ Trigger update for specific data
  triggerRefetch: (key: string) =>
    set((state) => ({
      triggers: {
        ...state.triggers,
        [key]: (state.triggers[key] || 0) + 1,
      },
    })),
}));
