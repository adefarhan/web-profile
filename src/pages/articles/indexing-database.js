import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import indexingDatabaseArticle from "../../../public/images/articles/The future is coming.png";
import indexing1 from "../../../public/images/articles/indexing1.png";
import indexing2 from "../../../public/images/articles/indexing2.png";

import Image from "next/image";

const Paragraph = ({ description }) => {
  return (
    <p className="text-xl pt-2 dark:text-light xl:text-lg sm:text-md">
      {description}
    </p>
  );
};

const Title = ({ title }) => {
  return (
    <span className="text-3xl font-bold text-dark/75 dark:text-light/75 xl:text-2xl sm:text-xl">
      {title}
    </span>
  );
};

const indexing_database = () => {
  return (
    <>
      <Head>
        <title>Ade Farhan | Indexing Database Article</title>
        <meta name="article" content="Article Indexing Database" />
        <meta
          name="description"
          content="The article delves into the process of analyzing and indexing tables in PostgreSQL to optimize database performance effectively."
        />
      </Head>

      <main>
        <Layout className="pt-16 px-64">
          <article className="flex flex-col justify-center items-center">
            <AnimatedText
              text="Analyze And Indexing Table In PostgreSQL (Easy Way)"
              className="mb-16 xl:!text-6xl lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl"
            />
            <Image
              src={indexingDatabaseArticle}
              alt="Indexing-Database"
              className="w-full h-[700px]"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />

            <div className="w-full mt-5">
              <Title title="Introduction" />

              <Paragraph description="When I was conducting performance testing on the application, I found that there were several queries that were very heavy and took a significant amount of time. Upon investigation using AWS RDS Performance Insights database, it was discovered that there were several resource-intensive queries. To perform further checks, each query can also be examined individually. Therefore, the solution employed was to implement indexing." />
            </div>

            <div className="w-full mt-5">
              <Title title="Discussion" />

              <Paragraph description="I have a table named 'Employee' with the following columns:" />
              <Image
                src={indexing1}
                alt="Indexing-Database"
                className="w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
              <Paragraph description="The amount of data 11,01 million rows:" />
              <Image
                src={indexing2}
                alt="Indexing-Database"
                className="w-full h-full"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
          </article>
        </Layout>
      </main>
    </>
  );
};

export default indexing_database;
