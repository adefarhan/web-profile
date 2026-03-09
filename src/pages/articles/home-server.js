import AnimatedText from "@/components/AnimatedText";
import Layout from "@/components/Layout";
import Head from "next/head";
import React from "react";
import Image from "next/image";

import homeServerHero from "../../../public/images/articles/Home Server.png";

const Paragraph = ({ description }) => (
  <p className="text-xl pt-2 dark:text-light xl:text-lg sm:text-md">
    {description}
  </p>
);

const Title = ({ title }) => (
  <span className="text-3xl font-bold text-dark/75 dark:text-light/75 xl:text-2xl sm:text-xl">
    {title}
  </span>
);

const Diagram = () => (
  <div className="w-full my-6">
    <pre className="bg-gray-900 text-green-400 p-6 rounded-lg text-sm overflow-auto">
{`[ Internet Users ]
        |
        v
[ Cloudflare Network ]
        |
        v (Cloudflare Tunnel)
+----------------------+
|     Mini PC Server   |
|  Debian Linux (OS)   |
|----------------------|
|  Docker & Compose    |
|  - Frontend App      |
|  - Backend API       |
|  - Database          |
|----------------------|
|  Private Docker Net  |
+----------------------+
        |
        v
   [ Local Storage ]`}
    </pre>
  </div>
);

const mini_pc_home_server = () => {
  return (
    <>
      <Head>
        <title>Ade Farhan | Mini PC Home Server</title>
        <meta name="article" content="Mini PC Home Server" />
        <meta
          name="description"
          content="My experience turning a used mini PC into a home server using Debian, Docker, and Cloudflare Tunnel."
        />
      </Head>

      <main>
        <Layout className="pt-16 px-64">
          <article className="flex flex-col justify-center items-center">
            <AnimatedText
              text="Turning a Used Mini PC into a Home Server"
              className="mb-16 xl:!text-6xl lg:!text-5xl sm:mb-8 sm:!text-4xl xs:!text-3xl"
            />

            <Image
              src={homeServerHero}
              alt="Mini PC Home Server"
              className="w-full h-full"
              priority
            />

            {/* INTRODUCTION */}
            <div className="w-full mt-5">
              <Title title="Introduction" />
              <Paragraph description="This article shares my experience of turning a used mini PC into a home server to run several personal projects. This decision was made not only for technical reasons, but also for learning purposes and cost efficiency." />
            </div>

            {/* MOTIVATION */}
            <div className="w-full mt-5">
              <Title title="Why I Built a Home Server" />

              <Paragraph description="There are two main reasons why I decided to build my own home server:" />

              <Paragraph description="1. Learning. I wanted to learn how to manage a server by myself. Previously, I relied too much on cloud services like Vercel or ready-to-use virtual machines. Everything felt easy to use, but I did not fully understand what was happening behind the scenes." />

              <Paragraph description="2. Cost. Some of my personal projects do not generate enough income to cover monthly cloud costs. With a home server, even though there is an upfront cost, it is cheaper in the long run." />
            </div>

            {/* CONSIDERATION */}
            <div className="w-full mt-5">
              <Title title="Things to Consider" />

              <Paragraph description="Of course, hosting your own server comes with risks:" />
              <Paragraph description="- Availability: power outages, ISP issues, or Cloudflare downtime can make the application temporarily inaccessible." />

              <Paragraph description="However, there are also benefits:" />
              <Paragraph description="- I can fully manage the server and know exactly where my data is." />
              <Paragraph description="- I have my own VPN and DNS router." />
              <Paragraph description="- The mini PC is very power efficient, using only around 8 watts when idle." />
            </div>

            {/* TECH DECISION */}
            <div className="w-full mt-5">
              <Title title="Technical Decisions" />

              <Paragraph description="Before buying the mini PC, there were several important questions I needed to answer." />

              <Paragraph description="1. Operating system and server structure. I chose Linux with Debian as the distribution because it is stable, lightweight, and proven for server use. I did not use Proxmox since my setup does not require multiple virtual machines." />

              <Paragraph description="2. Running multiple applications on one server. The solution was containerization. I use Docker and Docker Compose. Each application has its own docker-compose file and connects through a private Docker network." />

              <Paragraph description="3. Public access without a public IP. Since my ISP does not provide a public IP, I use Cloudflare Tunnel to expose my applications to the internet through Cloudflare’s network." />
            </div>

            {/* DIAGRAM */}
            <div className="w-full mt-5">
              <Title title="Home Server Architecture" />
              <Diagram />
            </div>

            {/* INSTALLED APPLICATIONS */}
            <div className="w-full mt-5">
              <Title title="Installed Applications" />

              <Paragraph description="Below are the main applications that I have installed and currently run on my home server:" />

              <Paragraph description="1. NetGuard (AdGuard DNS). I use this setup to make AdGuard act as the DNS resolver for my home network. My server IP is used as the main DNS resolver, which allows me to fully control internet access, block ads, improve privacy, and rewrite private domains for internal services." />

              <Paragraph description="2. Nginx Proxy Manager (NPM). This is not Node Package Manager, but Nginx Proxy Manager. I use it to manage domains and expose my applications over HTTPS. SSL certificates are issued using Let’s Encrypt, and Cloudflare API tokens are used for DNS-01 validation. This setup makes it easier and safer to manage HTTPS without opening ports directly to the public internet." />

              <Paragraph description="3. NetBird. Since I frequently move between locations, I need reliable remote access to my server. NetBird allows me to securely access my home server from anywhere as if I were on the same local network." />

              <Paragraph description="4. Private Docker Registry. I prefer not to keep application source code on the server. Instead, I use a private Docker registry that can be accessed by both my local workspace and the server. This allows me to securely push and pull Docker images locally." />

              <Paragraph description="5. Fully containerized projects. All of my applications are designed to run inside containers. My workflow is simple: build the image locally, push it to the registry, and pull it on the server. This keeps the server clean, consistent, and easy to manage." />
            </div>

            {/* CONCLUSION */}
            <div className="w-full mt-5">
              <Title title="Conclusion" />
              <Paragraph description="At the moment, all of my projects are running on the mini PC as expected. The biggest challenge is availability, but as a trade-off, I gain full control, lower costs, and a much deeper understanding of how my system works." />
            </div>
          </article>
        </Layout>
      </main>
    </>
  );
};

export default mini_pc_home_server;
