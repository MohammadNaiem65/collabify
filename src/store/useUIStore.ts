import { create } from "zustand";
import { devtools } from "zustand/middleware";

export interface UIStore {
  showCommandPalette: boolean;
  setShowCommandPalette: (show: boolean) => void;
}

const useUIStore = create<UIStore>()(
  devtools(
    (set) => ({
      showCommandPalette: false,
      setShowCommandPalette: (show: boolean) =>
        set({ showCommandPalette: show }),
    }),
    { name: "UIStore" },
  ),
);

export default useUIStore;
