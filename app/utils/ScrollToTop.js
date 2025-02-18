import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  let updatepath = pathname.split("/");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}
