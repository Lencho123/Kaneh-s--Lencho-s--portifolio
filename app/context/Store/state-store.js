// "use client"
import { create } from "zustand";

export const useStore = create((set) => ({
  curPage: "Home",
  showSideBar: false,
  layoutOne: true,
  layoutSetting: false,
  patriatShowSideBar: false,
  darkMode: true,
  animateSettingLayout: 0,
  isMounted:false,
  setIsMounted: (cur) => set({ isMounted:cur}),
  setAnimateSettingLayout: (cur) => set({ animateSettingLayout: cur }),
  setCurPage: (cur) => set({ curPage: cur }),
  setShowSideBar: (cur) => set({ showSideBar: cur }),
  setLayoutOne: (cur) => set({ layoutOne: cur }),
  setLayoutSetting: (cur) => set({ layoutSetting: cur }),
  setPatriatShowSideBar: (cur) => set({ patriatShowSideBar: cur }),
  setDarkMode: (cur) => set({ darkMode: cur }),
}));
