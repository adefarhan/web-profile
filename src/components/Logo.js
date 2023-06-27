import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex item-center justify-center mt-4">
      <MotionLink
        href="/"
        className="w-20 h-10 bg-light text-dark flex items-center justify-center rounded-xl text-4xl font-bold pb-1 border-2 border-solid border-dark shadow-xl"
        whileHover={{
          backgroundColor: [
            "#FFFFFF",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#FFFFFF",
          ],
          transition: { duration: 1, repeat: Infinity },
        }}
      >
        AF
      </MotionLink>
    </div>
  );
};

export default Logo;
