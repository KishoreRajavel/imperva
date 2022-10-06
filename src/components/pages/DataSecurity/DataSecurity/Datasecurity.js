import React from "react";
import Layout from "../../../layout/Layout";
import Hero from "./Hero";
import PostHero from "./PostHero";
import MainSection from "./MainSection";
import EnsureData from "./EnsureData";
import DSSection from "./DSSection";

const Datasecurity = () => {
  return (
    <Layout>
      <div className="data-security">
        <Hero />
        <PostHero />
        <MainSection />
        <EnsureData />
        <DSSection />
      </div>
    </Layout>
  );
};

export default Datasecurity;
