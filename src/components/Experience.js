import React, { useRef } from "react";
import { motion, useScroll } from "framer-motion";
import LiIcon from "./LiIcon";

const Details = ({ position, company, companyLink, time, address, work }) => {
  const ref = useRef();
  return (
    <li
      ref={ref}
      className="my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%]"
    >
      <LiIcon reference={ref} />
      <motion.div
        initial={{ y: 50 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5, type: "spring" }}
      >
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a
            href={companyLink}
            target={"_blank"}
            className="text-primary capitalize dark:text-primaryDark"
          >
            @{company}
          </a>
        </h3>
        <span className="capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm">
          {time} | {address}
        </span>
        <p className="font-medium w-full md:text-sm">{work}</p>
      </motion.div>
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">
        Experience
      </h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Fullstack Developer"
            company="Sprint Asia"
            companyLink="https://sprintasia.co.id/"
            time="Nov 2023 - Present"
            address="Fatmawati, Kebayoran Baru, Jakarta Selatan."
            work="I work as a fullstack developer, where I specialize in utilizing Golang for the backend server-side development, and React JS for the frontend client-side development. In this role, I design, build, and maintain web applications that seamlessly integrate the power of Golang with the dynamic and interactive user interfaces created through React JS. My responsibilities encompass every aspect of the development process, from designing RESTful APIs and managing data storage to crafting visually appealing and user-friendly web interfaces. With a deep understanding of both Golang and React JS, I am capable of delivering high-performance, scalable, and secure web applications that meet the demands of today's digital landscape."
          />
          <Details
            position="Fullstack Developer"
            company="Klikpayroll"
            companyLink="https://www.klikpayroll.com"
            time="Sep 2022 - Oct 2023"
            address="Kuningan Timur, Setiabudi, Jakarta Selatan."
            work="As a full-stack web developer, I handle the backend using Spring Boot Java and the frontend using Vue JavaScript. I optimize features within the application, work on the database, perform bug fixing, and ensure the delivery of user requirements. Additionally, I am responsible for modifying infrastructure using autoscaling and load balancers on AWS, as well as maintaining them. I also take charge of User Acceptance Testing and conduct server load tests using JMeter."
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
            position="Journalism Intern"
            company="Breakingnews"
            companyLink="https://www.breakingnews.co.id/"
            time="Aug 2018 - Sep 2018"
            address="Kebayoran Baru, Jakarta Selatan."
            work="I am an enthusiastic journalist covering political news, including presidential elections. My goal is to provide accurate and in-depth information to readers about ongoing political developments."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
