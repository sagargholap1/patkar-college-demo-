import React from "react";
import type { NextPage } from "next";
import Head from "next/head";

// Components
import HomePage from "../components/Pages/HomePage";

// Lib
import { getConfig } from "@/lib/get-config";

const Home: NextPage = ({ pageConfig }: any) => {
  return (
    <>
      <Head>
        <title>Patkar | Home</title>
      </Head>

      <main>
        <HomePage pageConfig={pageConfig} />
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const pageConfig = await getConfig("home");
  return { props: { pageConfig }, revalidate: 120 };
};

export default Home;
