import create from "zustand";

export const useMenuOpenStore = create((set: any) => ({
  menuOpen: false,
  toggleMenu: () => set((state: any) => ({ menuOpen: !state.menuOpen })),
}));

export const useFullScreenMenuOpenStore = create((set: any) => ({
  fullScreenMenuOpen: false,
  toggleFullScreenMenu: (mystate: any) => set((state: any) => ({ fullScreenMenuOpen: mystate })),
}));
