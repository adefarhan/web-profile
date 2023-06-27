import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  return (
    <li className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between">
      <LiIcon />
      <div>
        <h3 className="capitalize font-bold text-2xl">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 ">
          {time} | {address}
        </span>
        <p className="font-medium w-full">{work}</p>
      </div>
    </li>
  );
};

const Experience = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-8 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            position="Fullstack Web Developer"
            company="Klikpayroll"
            companyLink="https://www.klikpayroll.com"
            time="Sep 2022 - Present"
            address="Kuningan Timur, Setiabudi, Jakarta Selatan."
            work="My role encompasses the complete lifecycle of web application development. From designing and implementing responsive user interfaces using HTML, CSS, and JavaScript frameworks, to building robust server-side logic and APIs using languages like Java, Python, or JavaScript, I am responsible for creating seamless and efficient web experiences. I work closely with cross-functional teams to understand project requirements, conduct thorough testing and debugging, and ensure the delivery of high-quality, scalable web applications."
          />
          <Details
            position="Public Relations Intern"
            company="KPU RI"
            companyLink="https://www.kpu.go.id"
            time="Jan 2019 - Feb 2019"
            address="Menteng, Menteng, Jakarta Pusat."
            work="Part of technical and public relations, as community participation. Invites the public to take part in the election through content distributed from social media, both in the form of writings in the form of pamphlets and videos that are invitational."
          />
          <Details
            position="Fullstack Web Developer"
            company="PT. Aplikasi Klikpayroll Indonesia"
            companyLink="https://www.klikpayroll.com"
            time="Sep 2022 - Present"
            address="Kuningan Timur, Setiabudi, Jakarta Selatan."
            work="My role encompasses the complete lifecycle of web application development. From designing and implementing responsive user interfaces using HTML, CSS, and JavaScript frameworks, to building robust server-side logic and APIs using languages like Java, Python, or JavaScript, I am responsible for creating seamless and efficient web experiences. I work closely with cross-functional teams to understand project requirements, conduct thorough testing and debugging, and ensure the delivery of high-quality, scalable web applications."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;