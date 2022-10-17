import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import Layout from "../components/layout/Layout";
import HomepageServices from "../components/UI/HomepageServices";
import PreFooter from "../components/UI/PreFooter";
import Hero from "../components/UI/Hero";
import HomePagePostHero from "../components/UI/HomePagePostHero";
import HomePageSection_1 from "../components/UI/HomePageSection_1";

const Index = () => {
  const data = useStaticQuery(graphql`
    query index {
      allContentfulHomePageService {
        nodes {
          homePageServiceContent {
            heading
            subheading
            link_1
            link_2
          }
        }
      }
      contentfulHero(
        pageId: { eq: "home-page" }
        itemId: { eq: "home-page-hero" }
      ) {
        mainHeading
        subHeading
        button1
        image1 {
          url
        }
        image2 {
          url
        }
      }
      allContentfulPostHero(
        filter: {
          pageId: { eq: "home-page" }
          itemId: { eq: "home-page-posthero-item" }
        }
      ) {
        nodes {
          mainHeading
          description
          icon {
            url
          }
        }
      }
      contentfulHomePageSection1 {
        heading
        heading2
        link
        buttonLink
        subHeading
        content {
          imgUrl
        }
      }
    }
  `);
  const homePageServicesContent =
    data.allContentfulHomePageService.nodes[0].homePageServiceContent;
  const homePageHero = data.contentfulHero;
  const homePagePostHero = data.allContentfulPostHero.nodes;
  const homePageSection_1 = data.contentfulHomePageSection1;
  return (
    <Layout>
      <Hero
        title={homePageHero.mainHeading}
        BG={homePageHero.image2.url}
        desc={homePageHero.subHeading}
        image={homePageHero.image1.url}
      />
      <HomePagePostHero list={homePagePostHero} />
      <HomepageServices list={homePageServicesContent} />
      <HomePageSection_1 list={homePageSection_1} />

      <PreFooter />
    </Layout>
  );
};

export default Index;
