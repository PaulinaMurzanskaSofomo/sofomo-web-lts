import { ROUTE } from "../../../routes";

export const mainMenu = [
  { title: "what we do", chevron: true, id: "menu-1" },
  { title: "our developers", chevron: true, id: "menu-2" },
  { title: "Outsource", chevron: false, id: "menu-3", path: ROUTE.OUTSOURCE },
  { title: "Android Devs", chevron: false, id: "menu-4", path: ROUTE.ANDROID },
  { title: "about us", chevron: true, id: "menu-5" },
];
