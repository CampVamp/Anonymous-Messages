"use client";

import { motion } from "framer-motion";

const page = () => {
  return (
    <div className=" w-full h-screen flex flex-col items-center justify-center">
      <motion.div
        initial={{ y: -1000 }}
        animate={{ y: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className=" text-5xl font-semibold text-center "
      >
        Thank you for your <span className=" text-purple-400">message</span> 🫶🏻
      </motion.div>
      <motion.div
        className=" text-3xl font-medium text-center mt-4 text-[#03dac6]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Now go study
      </motion.div>
    </div>
  );
};

export default page;
