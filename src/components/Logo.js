import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
const MotionLink = motion(Link);

const Logo = () => {
  return (
    <div className="flex item-center justify-center mt-2">
      <MotionLink
        href="/"
        className="w-20 h-10 bg-dark text-light flex items-center justify-center rounded-xl text-4xl font-bold pb-1"
        whileHover={{
          backgroundColor: [
            "#121212",
            "rgba(131,58,180,1)",
            "rgba(253,29,29,1)",
            "rgba(252,176,69,1)",
            "rgba(131,58,180,1)",
            "#121212",
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
