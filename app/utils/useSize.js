// import { useEffect, useState } from "react";
// const useSize = () => {
//   const [windowSize, setWindowSize] = useState({
//     height: window.innerHeight,
//     width: window.innerWidth,
//   });

//   useEffect(() => {
//     const windowSizeHandler = () => {
//       setWindowSize({
//         height: window.innerHeight,
//         width: window.innerWidth,
//       });
//     };
//     window.addEventListener("resize", windowSizeHandler);

//     return () => {
//       window.removeEventListener("resize", windowSizeHandler);
//     };
//   }, []);

//   return windowSize;
// };

// export default useSize;

"use client"; // Required for Next.js App Router

import { useEffect, useState } from "react";

const useSize = () => {
  const [windowSize, setWindowSize] = useState({
    width: 0, // Safe initial values
    height: 0,
  });

  useEffect(() => {
    if (typeof window === "undefined") return; // Ensure it's running on the client

    const windowSizeHandler = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    // Set initial size
    windowSizeHandler();

    window.addEventListener("resize", windowSizeHandler);
    return () => window.removeEventListener("resize", windowSizeHandler);
  }, []);

  return windowSize;
};

export default useSize;
