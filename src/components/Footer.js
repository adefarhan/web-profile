import React from "react";
import Layout from "./Layout";
import Link from "next/link";

const Footer = () => {
  return (
    <div>
      <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg">
        <Layout className="py-8 flex items-center justify-between">
          <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
          <div className="flex items-center">
            Build With
            <span className="text-primary text-2xl px-1">&#9829;</span>by&nbsp;
            <Link
              href="https://adefarhan.xyz"
              className="underline underline-offset-2"
              target={"_blank"}
            >
              Ade Farhan
            </Link>
          </div>
          <Link
            href="https://adefarhan.xyz"
            className="underline underline-offset-2"
            target={"_blank"}
          >
            Say Hello!
          </Link>
        </Layout>
      </footer>
    </div>
  );
};

export default Footer;
