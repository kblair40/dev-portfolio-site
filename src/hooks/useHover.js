import { useState, useEffect, useRef } from "react";

const useHover = () => {
  const [value, setValue] = useState(false);
  const ref = useRef(null);

  const handleMouseEnter = (e) => {
    setValue(true);
  };
  const handleMouseLeave = (e) => {
    setValue(false);
  };

  useEffect(
    () => {
      const node = ref.current;
      if (node) {
        node.addEventListener("mouseenter", handleMouseEnter);
        node.addEventListener("mouseleave", handleMouseLeave);
        return () => {
          node.removeEventListener("mouseenter", handleMouseEnter);
          node.removeEventListener("mouseleave", handleMouseLeave);
        };
      }
    },
    [ref.current] // Recall only if ref changes
  );
  return [ref, value];
};

export default useHover;
