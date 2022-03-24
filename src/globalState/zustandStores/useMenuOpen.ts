import create from "zustand";

export const useMenuOpenStore = create((set: any) => ({
  menuOpen: false,
  toggleMenu: () => set((state: any) => ({ menuOpen: !state.menuOpen })),
}));
