import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";
import indexingDatabaseArticle from "../../../public/images/articles/The future is coming.png";
import indexing1 from "../../../public/images/articles/indexing1.png";
import indexing2 from "../../../public/images/articles/indexing2.png";
import indexing3 from "../../../public/images/articles/indexing3.png";
import indexing4 from "../../../public/images/articles/indexing4.png";
import indexing5 from "../../../public/images/articles/indexing5.png";
import indexing6 from "../../../public/images/articles/indexing6.png";
import indexing7 from "../../../public/images/articles/indexing7.png";
import indexing8 from "../../../public/images/articles/indexing8.png";

const ImageProject = ({ image, className = "" }) => {
  return (
    <div className="flex justify-center items-center pt-2">
      <Image
        src={image}
        alt="Indexing-Database"
        className={`w-3/4 h-full ${className} `}
        priority
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
      />
    </div>
  );
};

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

const Code = ({ code }) => {
  return (
    <div className="container mx-auto py-2">
      <pre className=" bg-gray-400 p-4 rounded-lg text-white font-mono text-sm overflow-auto">
        <code>{code}</code>
      </pre>
    </div>
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
              className="w-full h-full"
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
              <ImageProject image={indexing1} />

              <Paragraph description="The amount of data 11,01 million rows:" />
              <ImageProject image={indexing2} className="!w-1/2" />

              <Paragraph description="The old query (before indexing)." />
              <Code code={"SELECT *\nFROM employee\nWHERE salary = 9999998"} />

              <Paragraph description="The result before indexing takes a long time, approximately 0.6 seconds." />
              <ImageProject image={indexing3} />

              <Paragraph description="Then, an analysis is conducted." />
              <Code
                code={
                  "EXPLAIN ANALYZE\nSELECT *\nFROM employee\nWHERE salary = 9999998"
                }
              />

              <Paragraph description="The result still uses parallel seq scan, which is not good because it scans one data at a time until it finds what is being searched for. If the number is at the bottom, it has to search one by one until it reaches the bottom." />
              <ImageProject image={indexing4} />

              <Paragraph description="To make it easier to visually observe what is causing the delay (Visualization)." />
              <p className="text-xl pt-2 dark:text-light xl:text-lg sm:text-md">
                Using{" "}
                <a href="https://explain.depesz.com" className="underline">
                  Explain Depesz
                </a>
              </p>
              <span></span>
              <ImageProject image={indexing5} />
              <Paragraph description="Therefore, the solution to this problem is to implement indexing and change the sequential scan to an index scan." />

              <Paragraph description="Creating an index for the salary column in the employee table." />
              <Code
                code={
                  "CREATE INDEX idx_salary ON employee USING btree (salary)"
                }
              />
              <ImageProject image={indexing6} />

              <Paragraph description="After creating an index, let's try analyzing it again using 'explain analyze.'" />
              <ImageProject image={indexing7} />
              <Paragraph description="The result is less than 1ms and now it uses an index scan, which directly searches within the data without scanning one by one." />

              <Paragraph description="The visual analysis result is no longer in red." />
              <ImageProject image={indexing8} />
            </div>

            <div className="w-full mt-5">
              <Title title="Closing" />

              <Paragraph description="Indexing the database is necessary to speed up queries; this must be done to ensure that the application runs smoothly." />
            </div>
          </article>
        </Layout>
      </main>
    </>
  );
};

export default indexing_database;
