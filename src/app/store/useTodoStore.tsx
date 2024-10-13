import { create } from "zustand";
interface useEditStoreState {
  value: string;
  setIsValue: (value: string) => void;
  id: string;
  setId: (id: string) => void;
  isEdit: boolean;
  setIsEdit: (value: boolean) => void;
}
export const useEditStore = create<useEditStoreState>((set) => ({
  value: "",
  id: "",
  isEdit: false,
  setIsEdit: (value) => set({ isEdit: value }),
  setId: (id) => set({ id: id }),
  setIsValue: (value) => set({ value: value }),
}));
