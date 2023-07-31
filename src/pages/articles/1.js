import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import TransitionEffect from "@/components/TransitionEffect";
import envGitArticle from "../../../public/images/articles/Remove .env from remote repository (1).png";

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
    <div className="container mx-auto pt-2">
      <pre className=" bg-gray-400 p-4 rounded-lg text-white font-mono text-sm overflow-auto">
        <code>{code}</code>
      </pre>
    </div>
  );
};

const github = () => {
  return (
    <>
      <Head>
        <title>Ade Farhan | Article Page</title>
        <meta name="article" content="Article Page" />
        <meta
          name="description"
          content="Remove .Env From Github Repository (Clean & Safe Delete)"
        />
      </Head>

      {/* Transition Effect #Membuat performance berkurang*/}
      {/* <TransitionEffect /> */}

      <main>
        <Layout className="pt-16 px-64">
          <article className="flex flex-col justify-center items-center">
            <AnimatedText
              text="Remove .env From Github Repository (Clean Delete)"
              className="mb-16 xl:!text-6xl lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl"
            />
            <Image
              src={envGitArticle}
              alt="Articles 1"
              className="w-full h-auto"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
            />

            <div className="w-full mt-5">
              <Title title="Make .gitignore Files" />

              <Paragraph
                description="The first step is to create a file in the root folder named
                .gitignore, then write down the files that you don't want to
                push to the remote repository, such as .env."
              />
            </div>

            <div className="w-full mt-5">
              <Title title="Commit and Push to Remote Repository" />

              <Code code="git add ." />
              <Code code="git commit -m 'add gitignore file'" />
              <Code code="git push origin (branch)" />

              <Paragraph
                description="The purpose is to add the .gitignore file to the remote
                repository, which already contains the .env file inside."
              />
            </div>

            <div className="w-full mt-5">
              <Title title="Remove a file or directory from the Git index" />

              <Code code="git rm -r —cached .env" />

              <Paragraph
                description=".env will removed in the staging area without removing it from
                your working directory or your local file system."
              />
            </div>

            <div className="w-full mt-5">
              <Title title="Commit and Push to Remote Repository" />

              <Code code="git add ." />
              <Code code="git commit -m 'add gitignore file'" />
              <Code code="git push origin (branch)" />

              <Paragraph
                description="When viewed in the GitHub repository, the .env file is no longer
                present, but it is still visible in the commit history, which is
                very dangerous (especially if it contains valuable information
                such as passwords, etc.)."
              />
            </div>

            <div className="w-full mt-5">
              <Title title="Remove .env from the entire commit history" />

              <Code
                code="git filter-branch —index-filter “git rm -rf —cached
                    —ignore-unmatch .env” HEAD"
              />

              <Paragraph
                description="It goes through each commit in the commit history of the current
                branch, starting from the latest commit (HEAD). For each commit,
                it removes the .env file (and its contents) from the Git index
                (staging area) without physically deleting the file from the
                working directory. This means that the file will be untracked in
                each commit, and its history will be removed. The result is that
                the .env file will be removed from the entire commit history of
                the branch."
              />

              <Code code="git push —force" />

              <Paragraph
                description="Is used to forcefully push your local changes to the remote
                repository, even if it results in a non-fast-forward update.
                This means that it will overwrite the history of the remote
                branch with the history of your local branch, potentially
                discarding any commits or changes that exist only in the remote
                repository but not in your local repository."
              />
            </div>
          </article>
        </Layout>
      </main>
    </>
  );
};

export default github;
