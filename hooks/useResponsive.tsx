import { ScreenSizeList, ScreenSizeProps } from "@/types";
import React, { useEffect, useRef, useState, useTransition } from "react";

/**
 * It returns a string based on the width of the screen.
 * @date 1/25/2023 - 3:06:59 PM
 *
 * @param {number} width
 * @returns {ScreenSizeList}
 */
function judageScreenSize(width: number): ScreenSizeList {
  if (width >= 1440) {
    return "xl";
  } else if (width >= 1024 && width < 1440) {
    return "lg";
  } else if (width >= 768 && width < 1024) {
    return "md";
  } else if (width >= 375 && width < 768) {
    return "sm";
  } else {
    return "xs";
  }
}

/**
 * It returns the current screen size and the current screen size type
 * @date 1/25/2023 - 3:07:29 PM
 *
 * @returns {{ screenSize: ScreenSizeProps; isPending: boolean; size: ScreenSizeList; }}
 */
function useResponsive() {
  const [screenSize, setScreenSize] = useState<ScreenSizeProps>({
    width: 0,
    height: 0,
  });
  const [isPending, startTransition] = useTransition();
  const initialRef = useRef<boolean>(true);

  useEffect(() => {
    if (initialRef.current) {
      setScreenSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });

      window.addEventListener("resize", () => {
        startTransition(() => {
          setScreenSize({
            width: window.innerWidth,
            height: window.innerHeight,
          });
        });
      });
    }

    initialRef.current = false;

    return () => {
      window.removeEventListener("resize", () => {});
      initialRef.current = true;
    };
  }, []);

  return { screenSize, isPending, size: judageScreenSize(screenSize.width) };
}

export default useResponsive;
