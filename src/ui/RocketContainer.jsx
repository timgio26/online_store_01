import galaxy from "../assets/galaxy.png";
import rocket from "../assets/rocket.png";
import { motion } from "motion/react";

export function RocketContainer() {

  return (
    <div
      id="container-animation"
      className="w-full h-svh relative overflow-x-hidden"
    >
      <Image1 />
      <Image2 />
    </div>
  );
}

function Image1() {
  return (
    <motion.img
      src={galaxy}
      initial={{opacity:0.5}}
      whileInView={{ opacity: 1, scale: 1.5, transition: { duration: 1 } }}
      className="absolute drop-shadow-md"
    />
  );
}
function Image2() {
  return (
    <motion.img
      src={rocket}
      className="z-10 absolute w-9 left-1/2 bottom-1/2"
      whileInView={{translateY:-150, transition:{duration:3}}}
    />
  );
}
