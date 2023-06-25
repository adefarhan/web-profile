import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React, { useEffect, useRef } from "react";
import profilePic from "../../public/images/profile/profile.png";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import Skills from "@/components/Skills";

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
      <main className="flex w-full flex-col items-center justify-center">
        <Layout className="pt-16">
          <AnimatedText text="Dedication fuels achievement" className="mb-16" />
          <div className="grid w-full grid-cols-8 gap-16">
            <div className="col-span-3 flex flex-col items-start justify-start">
              <h2 className="mb-4 text-lg font-bold uppercase text-dark/75">
                Biography
              </h2>
              <p className="font-medium">
                I am Fullstack Web Developer who started my career by joining
                Hacktiv8 bootcamp. I’ve made several website and mobile app
                projects. I have systematic and critical thinking, fast in
                learning, have good leadership, ability to work independent or
                as part of a team, highly organized, and efficient.
              </p>
              <p className="font-medium">
                I am Fullstack Web Developer who started my career by joining
                Hacktiv8 bootcamp. I’ve made several website and mobile app
                projects. I have systematic and critical thinking, fast in
                learning, have good leadership, ability to work independent or
                as part of a team, highly organized, and efficient.
              </p>
              <p className="font-medium">
                I am Fullstack Web Developer who started my career by joining
                Hacktiv8 bootcamp. I’ve made several website and mobile app
                projects. I have systematic and critical thinking, fast in
                learning, have good leadership, ability to work independent or
                as part of a team, highly organized, and efficient.
              </p>
            </div>
            <div className="col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8">
              <div className="absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-[2rem] bg-dark" />
              <Image
                src={profilePic}
                alt="Foto Ade Farhan"
                className="w-full h-auto rounded-2xl"
                priority={true}
              />
            </div>
            <div className="col-span-2 flex flex-col items-end justify-between">
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={10} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  months of experience
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={5} />+
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  projects completed
                </h2>
              </div>
              <div className="flex flex-col items-end justify-center">
                <span className="inline-block text-7xl font-bold">
                  <AnimatedNumbers value={2} />
                </span>
                <h2 className="text-xl font-medium capitalize text-dark/75">
                  programming language
                </h2>
              </div>
            </div>
          </div>
          <Skills />
        </Layout>
      </main>
    </>
  );
};

export default about;