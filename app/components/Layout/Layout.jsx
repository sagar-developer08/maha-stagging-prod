import React from "react";
import { Outlet } from "react-router-dom";
import { usePathname } from "next/navigation";
// const Navbar = lazy(() => import("../Layout/Navbar/Navbar"));
import Navbar from "../Layout/Navbar/Navbar";
import Footer from "../Layout/Footer/Footer";
// import Navbar from "../Layout/Navbar/Navbar";
// import FooterMbl from "./Footer/FooterMobile/FooterMbl";
function Layout() {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];
  return (
    <>
      {/* <Suspense fallback={"Loading..."}> */}

      <Navbar />
      {/* </Suspense> */}
      <main className={lang == "ar" ? "r_dir" : "l_dir"}>
        <Outlet />
      </main>
      <Footer />
      {/* <FooterMbl /> */}
    </>
  );
}

export default Layout;
