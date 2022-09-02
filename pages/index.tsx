import { Stack } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Home from "../components/home";
import Header from "../components/header";
import About from "../components/about";
import Services from "../components/services";
import Contact from "../components/contact";

const Index: NextPage = () => {
  return (
    <>
      <Stack
        direction="column"
        height="400vh"
        alignItems="center"
        overflow="auto"
      >
        <Header />
        <Home />
        <About />
        <Services />
        <Contact />
      </Stack>
      <Head>
        <title>Claro Creative Studio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </>
  );
};

export default Index;
