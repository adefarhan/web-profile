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
      <motion.div initial={{ y: 50 }} whileInView={{ y: 0 }} transition={{ duration: 0.5, type: "spring" }}>
        <h3 className="capitalize font-bold text-2xl sm:text-xl xs:text-lg">
          {position}&nbsp;
          <a href={companyLink} target={"_blank"} className="text-primary capitalize dark:text-primaryDark">
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
      <h2 className="font-bold text-8xl mb-32 w-full text-center md:text-6xl md:mb-16 xs:text-4xl">Experience</h2>
      <div ref={ref} className="w-[75%] mx-auto relative lg:w-[90%] md:w-full">
        <motion.div
          className="absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light md:w-[2px] md:left-[30px] xs:left-[20px]"
          style={{ scaleY: scrollYProgress }}
        />

        <ul className="w-full flex flex-col items-start justify-between ml-4 xs:ml-2">
          <Details
            position="Software Architect"
            company="Sprint Asia"
            companyLink="https://sprintasia.co.id/"
            time="Jan 2026 - Present"
            address="Fatmawati, Kebayoran Baru, Jakarta Selatan."
            work="Design scalable, efficient, and maintainable system architectures across multiple services. Define end-to-end architecture including requirements analysis, technology selection, and deployment strategies. Collaborate with engineering and product teams to align technical solutions with business goals. Lead system integration strategy across microservices and external services. Continuously optimize system performance using data-driven analysis and risk assessment."
          />
          <Details
            position="Fullstack Developer"
            company="Sprint Asia"
            companyLink="https://sprintasia.co.id/"
            time="Nov 2023 - Jan 2026"
            address="Fatmawati, Kebayoran Baru, Jakarta Selatan."
            work="Developed backend services using Go with Clean Architecture and microservices approach. Implemented event-driven systems using RabbitMQ for asynchronous communication. Built and maintained frontend applications using ReactJS with microfrontend architecture. Containerized services using Docker and managed deployments with Nginx. Worked with MongoDB and MySQL, PostgreSQL for data persistence."
          />
          <Details
            position="Fullstack Developer"
            company="Klikpayroll"
            companyLink="https://www.klikpayroll.com"
            time="Sep 2022 - Nov 2023"
            address="Kuningan Timur, Setiabudi, Jakarta Selatan."
            work="Built backend services using Spring Boot (Java). Developed frontend applications using Vue.js. Managed cloud infrastructure using AWS services."
          />
        </ul>
      </div>
    </div>
  );
};

export default Experience;
