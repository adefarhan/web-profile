import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Education from "@/components/Education";

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

const about = () => {
  return (
    <>
      <Head>
        <title>Ade Farhan | About Page</title>
        <meta name="description" content="About my self" />
      </Head>
      <main className="flex w-full flex-col items-center justify-center dark:text-light">
        <Layout className="pt-16">
          <AnimatedText text="Relentless Dedication" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
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
              <p className="font-medium">
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
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 dark:bg-dark dark:border-light">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark dark:bg-light" />
              <Image
                src={profilePic}
                alt="Foto Ade Farhan"
                className="w-full h-auto rounded-2xl"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  months of experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75 dark:text-light/75">
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

export default about;
