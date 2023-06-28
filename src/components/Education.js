import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ type, time, place, info }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl">{type}</h3>
        <span className="capitalize font-medium text-dark/75 ">
          {time} | {place}
        </span>
        <p className="font-medium w-full">{info}</p>
      </motion.div>
    </li>
  );
};

const Education = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "center start"],
  });
  return (
    <div className="my-64">
      <h2 className="font-bold text-8xl mb-32 w-full text-center">Education</h2>
      <div ref={ref} className="w-[75%] mx-auto relative">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4">
          <Details
            Fullstack
            Javascript
            Web
            Developer
            type="Fullstack Javascript Web Developer"
            time="Mar 2022 - Jul 2022"
            place="Hacktiv8 Indonesia"
            info="My Journey doing bootcamp was challenging but also fun and exciting and I have learned a lot about Javascript, Node.js, Express JS, Apollo Server, Postgre SQL, Mongo DB, Graph QL, Sequelize, JQuery, Vue JS, React JS, React Native, Expo, Heroku, Git, and Docker."
          />
          <Details
            type="Bachelor of Political Science"
            time="Feb 2017 - Apr 2021"
            place="Banyumas, Purwokerto, Jawa Tengah"
            info="understanding of political systems, government structures, international relations, and public policy. Students delve into diverse subjects such as political theory, comparative politics, international relations, public policy, political economy, research methods, political sociology, public administration, political communication, and electoral systems. Through this interdisciplinary approach, students gain the knowledge and skills necessary to analyze and navigate the complexities of politics and governance in local, national, and global contexts."
          />
        </ul>
      </div>
    </div>
  );
};

export default Education;