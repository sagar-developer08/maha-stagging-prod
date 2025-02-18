import React from "react";
import { Outlet } from "react-router-dom";
import { usePathname } from "next/navigation";
import FooterBasic from "./FooterBasic/Index";
function LayoutB() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <>
      {/* <Navbar /> */}
      <main className={lang == "ar" ? "r_dir" : "l_dir"}>
        <Outlet />
      </main>
      <FooterBasic />
    </>
  );
}

export default LayoutB;
