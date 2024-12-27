import { useEffect, useRef } from "react";
import { motion, useInView } from "motion/react";

export function InViewAnimate({ children }) {
//   const ref = useRef(null);
//   const isInView = useInView(ref);

//   useEffect(() => {
//     console.log("Element is in view: ", isInView);
//   }, [isInView]);

  return (
    // <div ref={ref}>
      <motion.div transition={{duration:2,delay:0.5}} initial={{ opacity: 0.5 }} whileInView={{opacity:1}} exit={{ opacity: 0 }}>{children}</motion.div>
    // </div>
  );
}
