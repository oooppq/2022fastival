import { useRef } from "react";

//hook
export const useScrollToCG = () => {
  const scrollToCG = useRef(null);
  const onMoveToCG = () => {
    scrollToCG.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { scrollToCG, onMoveToCG };
};

export const useScrollToDW = () => {
  const scrollToDW = useRef(null);
  const onMoveToDW = () => {
    scrollToDW.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  };
  return { scrollToDW, onMoveToDW };
};
