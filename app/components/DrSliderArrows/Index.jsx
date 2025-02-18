import React from "react";
import { usePathname } from "next/navigation";

function Index({ prevArrow, nextArrow }) {
  const pathname = usePathname();
  const lang = pathname.split("/")[1];

  return (
    <>
      {lang == "ar" ? (
        <>
          {nextArrow} {prevArrow}
        </>
      ) : (
        <>
          {prevArrow} {nextArrow}
        </>
      )}
    </>
  );
}

export default Index;
