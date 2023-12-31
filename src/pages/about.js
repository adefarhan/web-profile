import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import profilePic from "../../public/images/profile/profile.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";
import TransitionEffect from "@/components/TransitionEffect";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);
  const motionValue = useMotionValue(0);
  const spring = useSpring(motionValue, { duration: 3000 });
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      motionValue.set(value);
    }
  }, [inView, value, motionValue]);

  useEffect(() => {
    spring.on("change", (latest) => {
      if (ref.current && latest.toFixed(0) <= value) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [spring, value]);

  return <span ref={ref}></span>;
};

const About = () => {
  const [monthsOfExperience, setMonthsOfExperience] = useState(0);

  useEffect(() => {
    const startDate = new Date("2022-09-01");
    const currentDate = new Date();
    const monthsDiff =
      (currentDate.getFullYear() - startDate.getFullYear()) * 12 +
      (currentDate.getMonth() - startDate.getMonth());
    setMonthsOfExperience(monthsDiff);
  }, []);

  return (
    <>
      <Head>
        <title>Ade Farhan | About Page</title>
        <meta name="about" content="About Page" />
        <meta
          name="description"
          content="Ade Farhan About Page, About Ade Farhan"
        />
      </Head>

      {/* Transition Effect #Membuat performance berkurang*/}
      {/* <TransitionEffect /> */}

      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText
            text="Relentless Dedication"
            className="mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:mb-8"
          />
          <div className="grid w-full grid-cols-8 gap-16 sm:gap-8">
            <div className="col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75">
                Biography
              </h2>
              <p className="font-medium">
                I embarked on my journey as a Fullstack Web Developer by
                enrolling in the prestigious Hacktiv8 bootcamp. It was there
                that I honed my skills and gained a solid foundation in web
                development. With a string of successful website and mobile app
                projects under my belt, I have proven my capabilities and
                commitment to delivering top-notch solutions.
              </p>
              <p className="font-medium my-3">
                My approach to development is characterized by systematic and
                critical thinking. I have a knack for breaking down complex
                problems into manageable tasks, allowing me to tackle challenges
                with precision and efficiency. Coupled with my fast learning
                ability, I am constantly adapting to new technologies and
                staying ahead of the curve in an ever-evolving industry.
              </p>
              <p className="font-medium">
                One of my greatest strengths lies in my versatility as both a
                leader and a team player. I possess strong leadership qualities
                that enable me to guide and inspire a team towards achieving
                shared goals. Simultaneously, I thrive in collaborative
                environments and excel in working harmoniously with diverse
                teams. I am highly organized, ensuring that projects are
                well-structured and executed seamlessly, whether I am working
                independently or as part of a team. My efficiency and attention
                to detail guarantee timely and high-quality deliverables.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light xl:col-span-4 md:order-1 md:col-span-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light " />
              <Image
                src={profilePic}
                alt="Foto Ade Farhan"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row xl:items-center md:order-3">
              <div className="flex flex-col items-end justify-center xl:items-center ">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={monthsOfExperience} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  months of experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center xl:items-center">
                <span className="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                  <AnimatedNumbers value={4} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xs:text-sm">
                  programming language
                </h2>
              </div>
            </div>
          </div>
          <Skills />
          <Experience />
          <Education />
        </Layout>
      </main>
    </>
  );
};

export default About;
