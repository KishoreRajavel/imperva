import * as React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "../styles/main.scss";
import Layout from "../components/layout/Layout";
import HeroComponent from "../components/UI/Hero";
import PostHero from "../components/UI/PostHero";
import FirstSection from "../components/UI/FirstSection";
import SecondSection from "../components/UI/SecondSection";
import Services from "../components/UI/Services";
import Overview from "../components/UI/Overview";

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query applicationsecurity {
      contentfulHero(pageId: { eq: "application-security" }) {
        button1
        description1
        mainHeading
        image1 {
          url
        }
        image2 {
          url
        }
      }
      allContentfulPostHero(
        filter: { pageId: { eq: "application-security" } }
      ) {
        edges {
          node {
            mainHeading
            description
            icon {
              url
            }
          }
        }
      }
      contentfulSection1(
        pageId: { eq: "application-security" }
        itemId: { eq: "application-security-section1" }
      ) {
        description
        mainHeading
        list {
          heading
          description
        }
        image {
          url
        }
      }
      allContentfulSection3(
        filter: { pageId: { eq: "application-security" } }
      ) {
        edges {
          node {
            image {
              url
            }
            mainHeading
            description
          }
        }
      }
    }
  `);

  const Bg = data.contentfulHero.image1.url;
  const mainHeading = data.contentfulHero.mainHeading;
  const desc = data.contentfulHero.description1;

  const postHeroList = data.allContentfulPostHero.edges;

  const section1Heading = data.contentfulSection1.mainHeading;
  const section1Descp = data.contentfulSection1.description;
  const section1List = data.contentfulSection1.list;
  const section1Img = data.contentfulSection1.image.url;

  const servicesList = data.allContentfulSection3.edges;

  return (
    <Layout>
      <HeroComponent BG={Bg} title={mainHeading} desc={desc} />
      <PostHero list={postHeroList} />
      <FirstSection
        heading={section1Heading}
        description={section1Descp}
        list={section1List}
        img={section1Img}
      />
      <SecondSection />
      <Services
        list={servicesList}
        title={`Protect cloud-native applications at the speed of DevOps
`}
      />
      <Overview />
    </Layout>
  );
};

export default IndexPage;

export const Head = () => <title>Home Page</title>;
