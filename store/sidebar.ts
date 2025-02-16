import { atom, useAtom } from "jotai";
const sidebarState = atom(false);
export const useShowSidebar = () => {
  return useAtom(sidebarState);
};
