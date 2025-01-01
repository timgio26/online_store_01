import { motion } from "motion/react";
import { Link } from "react-router-dom";

export function Jumbotron() {
  return (
    <div className="flex h-screen justify-center items-center">
      <div className="flex flex-col w-3/5 justify-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="text-8xl font-bold"
        >
          Welcome to Timeless Treasures
        </motion.h1>
        <motion.div
          className="flex justify-center py-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <h4 className="text-center w-3/4">
            It captures the essence of your dedication to preserving history and
            the charm of antiques.
          </h4>
        </motion.div>
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.25, duration: 1 }}
        >
          <button className="bg-primary-500 text-primary-100 hover:opacity-75 transition-opacity py-3 px-8 rounded-full font-sans">
            <Link to="/" className="hover:text-gray-300">
              Shop Now
            </Link>
          </button>
        </motion.div>
      </div>
    </div>
  );
}
