import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useMotionValue } from "framer-motion";
import TransitionEffect from "@/components/TransitionEffect";
import comingSoonProject from "../../../public/images/projects/Web is deploying ....png";
import envGitArticle from "../../../public/images/articles/Remove .env from remote repository.png";
import indexingDatabaseArticle from "../../../public/images/articles/The future is coming.png";

const FramerImage = motion(Image);

const MovingImg = ({ title, img, link }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const imgRef = useRef(null);

  function handleMouse(event) {
    imgRef.current.style.display = "inline-block";
    x.set(event.pageX);
    y.set(-10);
  }

  function handleMouseLeave(event) {
    imgRef.current.style.display = "none";
    x.set(0);
    y.set(0);
  }

  return (
    <Link href={link} onMouseMove={handleMouse} onMouseLeave={handleMouseLeave}>
      <h2 className="capitalize text-xl font-semibold hover:underline">
        {title}
      </h2>
      <FramerImage
        style={{ x: x, y: y }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, transition: { duration: 0.2 } }}
        ref={imgRef}
        src={img}
        alt={title}
        className="z-10 w-96 h-auto hidden absolute rounded-lg md:!hidden"
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </Link>
  );
};

const Article = ({ img, title, date, link }) => {
  return (
    <motion.li
      initial={{ y: 200 }}
      whileInView={{ y: 0, transition: { duration: 0.5, ease: "easeInOut" } }}
      viewport={{ once: true }}
      className="relative w-full p-4 py-6 my-4 rounded-xl flex items-center justify-between bg-light text-dark first:mt-0 border border-solid border-dark border-r-4 border-b-4 dark:bg-dark dark:text-light dark:border-light sm:flex-col"
    >
      <MovingImg title={title} img={img} link={link} />
      <span className="text-primary font-semibold pl-4 dark:text-primaryDark sm:self-start sm:pl-0 xs:text-sm">
        {date}
      </span>
    </motion.li>
  );
};

const FeaturedArticle = ({ img, title, time, summary, link }) => {
  return (
    <li className="relative col-span-1 w-full p-4 bg-light border border-solid border-dark rounded-2xl dark:bg-dark dark:border-light">
      <div className="absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl dark:bg-light" />
      <Link
        href={link}
        className="w-full inline-block cursor-pointer overflow-hidden rounded-lg "
      >
        <FramerImage
          src={img}
          alt={title}
          className="w-full h-auto"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
          priority
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
        />
      </Link>

      <Link href={link}>
        <h2 className="capitalize text-2xl font-bold my-2 mt-4 hover:underline xs:text-lg ">
          {title}
        </h2>
      </Link>
      <p className="text-sm mb-2">{summary}</p>
      <span className="text-primary font-semibold dark:text-primaryDark">
        {time}
      </span>
    </li>
  );
};

const index = () => {
  return (
    <>
      <Head>
        <title>Ade Farhan | Articles Page</title>
        <meta name="articles" content="Articles Page" />
        <meta
          name="description"
          content="Ade Farhan Articles Page, Articles Build by Ade Farhan "
        />
      </Head>

      {/* Transition Effect #Membuat performance berkurang*/}
      {/* <TransitionEffect /> */}

      <main className="w-full mb-16 flex flex-col items-center justify-center overflow-hidden dark:text-light">
        <Layout className="pt-16 mb-48">
          <AnimatedText
            text="Code. Create. Innovate."
            className="mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl"
          />
          <ul className="grid grid-cols-2 gap-16 lg:gap-8 md:grid-cols-1 md:gap-y-16 ">
            <FeaturedArticle
              title="Remove .env From Github Repository (Clean Delete)"
              summary="The article highlights the proper and secure method of removing the .env file from GitHub to ensure a clean and complete deletion."
              time="4 min read"
              link="/articles/remove-env"
              img={envGitArticle}
            />

            <FeaturedArticle
              title="Analyze and Indexing table in PostgreSQL (Easy Way)"
              summary="The article delves into the process of analyzing and indexing tables in PostgreSQL to optimize database performance effectively."
              time="5 min read"
              link="/articles/indexing-database"
              img={indexingDatabaseArticle}
            />
          </ul>
          <h2 className="font-bold text-4xl w-full text-center my-16 mt-32">
            All Articles
          </h2>
          <ul className=" h-1/2">
            <Article
              title="Remove .env From Github Repository (Clean Delete)"
              date="27 July 2023"
              link="/articles/remove-env"
              img={envGitArticle}
            />
            <Article
              title="Analyze and Indexing table in PostgreSQL (Easy Way)"
              date="TBD"
              link="/articles/indexing-database"
              img={indexingDatabaseArticle}
            />
            <Article
              title="Experience of Using Hostinger Indonesia"
              date="TBD"
              link="/articles"
              img={comingSoonProject}
            />
            <Article
              title="Upgrade to Application Load Balancer and Autoscaling in AWS"
              date="TBD"
              link="/articles"
              img={comingSoonProject}
            />
          </ul>
        </Layout>
      </main>
    </>
  );
};

export default index;
