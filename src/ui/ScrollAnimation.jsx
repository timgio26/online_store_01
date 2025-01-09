import { transform } from "motion";
import { useScroll } from "motion/react";
// import { useEffect } from "react";
import { useMotionValueEvent } from "motion/react";
import { motion } from "motion/react";
import { useRef, useState } from "react";

export function ScrollAnimation() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log("Page scroll: ", latest)
  })

  return (
    <div className="bg-slate-300 h-14 overflow-y-scroll relative" ref={ref}>
      <div className="h-28">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae
        delectus architecto nemo ipsa explicabo fugit, corrupti nostrum, quod ea
        sequi illum id laboriosam ab atque similique, quia perspiciatis unde
        dignissimos!
      </div>
    </div>
  );
}
