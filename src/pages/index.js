import Layout from "@/components/Layout";
import Head from "next/head";
import Image from "next/image";
import profilePicture from "../../public/images/profile/developer-space.png";
import AnimatedText from "@/components/AnimatedText";
import Link from "next/link";
import { LinkArrow } from "@/components/Icons";
import HireMe from "@/components/HireMe";
import RocketImage from "../../public/images/svgs/rocket.svg";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ade Farhan</title>
        <meta name="home" content="My home page" />
      </Head>
      <main className="flex items-center text-dark w-full min-h-screen">
        <Layout className="pt-0">
          <div className="flex items-center justify-between w-full">
            <div className="w-1/2">
              <Image
                src={profilePicture}
                alt="Foto Ade Farhan"
                className="w-full h-auto p-4 rounded-[100px]"
                priority={true}
              />
            </div>
            <div className="w-1/2 flex flex-col items-center self-center">
              <AnimatedText
                text="I am proud of what I do and the ability to turn dreams into reality."
                className="!text-6xl text-left"
              />
              <p className="my-4 text-base font-medium">
                Unleashing the full potential of code, a Fullstack Web
                Developers passion is the driving force behind turning concepts
                into tangible digital realities.
              </p>
              <div className="flex items-center self-start mt-2">
                <Link
                  href="/Resume.pdf"
                  target={"_blank"}
                  className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparrent hover:border-dark"
                  download={true}
                >
                  {" "}
                  Resume <LinkArrow className="w-6 ml-1" />
                </Link>
                <Link
                  href="mailto:adefarhanzikri@gmail.com"
                  target={"_blank"}
                  className="ml-4 text-lg font-medium capitalize text-dark underline"
                >
                  {" "}
                  Contact
                </Link>
              </div>
            </div>
          </div>
        </Layout>
        <HireMe />
        <div className="absolute right-8 bottom-12 inline-block w-24">
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
