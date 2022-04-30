import { useState, useEffect } from "react";

export const useResize = () => {
  const [isDesktop, setIsDesktop] = useState(true);

  const handleResize = () => {
    if (window.innerWidth < 500) {
      setIsDesktop(false);
    } else {
      setIsDesktop(true);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isDesktop]);

  return { isDesktop };
};
