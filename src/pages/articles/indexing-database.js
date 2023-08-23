import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import indexingDatabaseArticle from "../../../public/images/articles/The future is coming.png";
import Image from "next/image";

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

            <div className="w-full mt-5"></div>
          </article>
        </Layout>
      </main>
    </>
  );
};

export default indexing_database;
