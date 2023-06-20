import React from "react";
import { JobLogo } from "./Icons";

const HireMe = () => {
  return (
    <div className="fixed left-4 bottom-4 flex items-center justify-center overflow-hidden">
      <div className="w-48 h-auto flex items-center justify-center relative">
        <JobLogo className="fill-dark" />
      </div>
    </div>
  );
};

export default HireMe;
