import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/images/profile/developer-space.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import RocketImage from "../../public/images/svgs/rocket.svg";
import TransitionEffect from "@/components/TransitionEffect";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ade Farhan</title>
        <meta name="home" content="Home Page" />
        <meta
          name="description"
          content="Ade Farhan Home Page, Overall Information"
        />
      </Head>

      {/* Transition Effect #Membuat performance berkurang*/}
      {/* <TransitionEffect /> */}

      <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
        <Layout className="pt-0 md:p-16 sm:pt-8">
          <div className="flex items-center justify-between w-full lg:flex-col ">
            <div className="w-1/2 md:w-full">
              <Image
                src={profilePicture}
                alt="Foto Ade Farhan"
                className="w-full h-auto p-4 rounded-[100px] lg:hidden md:inline-block md:w-full "
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center lg:w-full lg:text-center">
              <AnimatedText
                text="I am proud of what I do and the ability to turn dreams into reality."
                className="!text-6xl text-left xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"
              />
              <p className="my-4 text-base font-medium md:text-sm sm:text-xs">
                Unleashing the full potential of code, a Fullstack Web
                Developers passion is the driving force behind turning concepts
                into tangible digital realities.
              </p>
              <div className="flex items-center self-start mt-2 lg:self-center ">
                <Link
                  href="/Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparrent hover:border-dark dark:bg-light dark:text-dark hover:dark:bg-dark hover:dark:text-light hover:dark:border-light md:p-2 md:px-4 md:text-base "
                  download={true}
                >
                  {" "}
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:adefarhanzikri@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline dark:text-light md:text-base"
                >
                  {" "}
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-12 inline-block w-24 md:hidden">
          <Image
            src={RocketImage}
            alt="rocket image"
            className="w-full h-auto"
          />
        </div>
      </main>
    </>
  );
}
