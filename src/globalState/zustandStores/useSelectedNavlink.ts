import create from "zustand";

export const useSelectedNavlink = create((set: any) => ({
  selectedItemId: null,
  setSelectedItemId: (id: any) =>
    set((state: any) => ({
      selectedItemId: id,
    })),
}));
