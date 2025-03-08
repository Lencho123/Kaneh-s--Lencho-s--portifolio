"use client";
import { useStore } from "@/app/context/Store/state-store";
import { Briefcase, Contact, Grid, Home, User } from "lucide-react";
import Link from "next/link";

useStore;
const SideBar = () => {
  const curPage = useStore((state) => state.curPage);
  const setCurPage = useStore((state) => state.setCurPage);
  const darkMode = useStore((state) => state.darkMode);
  const setLayoutSetting = useStore((state) => state.setLayoutSetting);

  return (
    <aside onClick={() => setLayoutSetting(false)}>
      <ul
        className={
          darkMode
            ? "dark-mode flex flex-col gap-[3rem] mt-[1rem]"
            : "flex flex-col gap-[3rem] mt-[1rem]"
        }
      >
        <Link
          className={
            curPage === "Home" ? "active-link md:w-2/3 centered" : "centered"
          }
          href="/"
          onClick={() => setCurPage("Home")}
        >
          <Home /> Home
        </Link>
        <Link
          className={
            curPage === "About" ? "active-link md:w-2/3 centered" : "centered"
          }
          href="/pages/about"
          onClick={() => setCurPage("About")}
        >
          <User /> About
        </Link>
        <Link
          className={
            curPage === "Service" ? "active-link md:w-2/3 centered" : "centered"
          }
          href="/pages/services"
          onClick={() => setCurPage("Service")}
        >
          <Briefcase /> Service
        </Link>
        <Link
          className={
            curPage === "Portifolio"
              ? "active-link md:w-2/3 centered"
              : "centered"
          }
          href="/pages/portifolio"
          onClick={() => setCurPage("Portifolio")}
        >
          <Grid /> Portifolio
        </Link>
        <Link
          className={
            curPage === "Contact" ? "active-link md:w-2/3 centered" : "centered"
          }
          href="/pages/contact"
          onClick={() => setCurPage("Contact")}
        >
          <Contact /> Contact
        </Link>
      </ul>
    </aside>
  );
};

export default SideBar;
