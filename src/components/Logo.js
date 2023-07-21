import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex item-center justify-center mt-4">
      <MotionLink
        href="/"
        className="w-16 h-16 bg-dark text-light flex items-center justify-center rounded-full text-3xl font-bold border-2 dark:border-light md:w-14 md:h-14 md:text-2xl"
        whileHover={{
          backgroundColor: [
            "#1b1b1b",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#1b1b1b",
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
