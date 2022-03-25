import create from "zustand";

export const useMobileStore = create((set: any) => ({
  isMobile: false,
  setMobile: (mobile: boolean) =>
    set((state: any) => ({
      isMobile: mobile,
    })),
}));
