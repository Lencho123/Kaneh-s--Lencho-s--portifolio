import React from "react";
import { Home, User, Briefcase, Grid, Contact } from "lucide-react";
import { useStore } from "@/app/context/Store/state-store";

const PatriatSideBar = () => {
  const curPage = useStore((state) => state.curPage);
  const setCurPage = useStore((state) => state.setCurPage);
  const darkMode = useStore((state) => state.darkMode);
  const setShowSideBar = useStore((state) => state.setShowSideBar);
  const setLayoutSetting = useStore((state) => state.setLayoutSetting);
  return (
    <aside
      onClick={() => {
        setShowSideBar(false);
        setLayoutSetting(false);
      }}
    >
      <ul
        className={`${
          darkMode && "dark-mode"
        } flex flex-row flex-wrap gap-[3rem] mt-[1rem] `}
      >
        <a
          className={
            curPage === "Home" ? "active-link md:w-2/3 centered" : "centered"
          }
          href="#home"
          onClick={() => setCurPage("Home")}
        >
          <Home /> Home
        </a>
        <a
          className={
            curPage === "About" ? "active-link md:w-2/3 centered" : "centered"
          }
          href="#about"
          onClick={() => setCurPage("About")}
        >
          <User /> About
        </a>
        <a
          className={
            curPage === "Service" ? "active-link md:w-2/3 centered" : "centered"
          }
          href="#service"
          onClick={() => setCurPage("Service")}
        >
          <Briefcase /> Service
        </a>
        <a
          className={
            curPage === "Portifolio"
              ? "active-link md:w-2/3 centered"
              : "centered"
          }
          href="#portifolio"
          onClick={() => setCurPage("Portifolio")}
        >
          <Grid /> Portifolio
        </a>
        <a
          className={
            curPage === "Contact" ? "active-link md:w-2/3 centered" : "centered"
          }
          href="#contact"
          onClick={() => setCurPage("Contact")}
        >
          <Contact /> Contact
        </a>
      </ul>
    </aside>
  );
};

export default PatriatSideBar;
