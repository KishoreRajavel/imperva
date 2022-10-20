import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout/Layout";
import HeroComponent from "../components/UI/Hero";
import PostHero from "../components/UI/PostHero";
import FirstSection from "../components/UI/FirstSection";
import SecondSection from "../components/UI/SecondSection";
import Services from "../components/UI/Services";
import Overview from "../components/UI/Overview";
import Quotes from "../components/UI/Quotes";
import Resources from "../components/UI/Resources";
import PreFooter from "../components/UI/PreFooter";

const CloudNativeSecurity = () => {
  const data = useStaticQuery(graphql`
    query cloudnativesecurity {
      contentfulHero(pageId: { eq: "cloud-native-security" }) {
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
      allContentfulPostHero(filter: { pageId: { eq: "cloud-native" } }) {
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
        pageId: { eq: "cloud-native-security" }
        itemId: { eq: "cloud-native-security-section1" }
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
      contentfulSection2(pageId: { eq: "cloud-native-security" }) {
        mainHeading
        description
        image {
          url
        }
        list {
          heading
          description
        }
      }
      allContentfulSection3(
        filter: { pageId: { eq: "cloud-native-security" } }
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
      allContentfulSwithContent(
        filter: { pageId: { eq: "cloud-native-security" } }
      ) {
        edges {
          node {
            description
            mainHeading
            image {
              url
            }
            id
          }
        }
      }
      contentfulQuotes(pageId: { eq: "cloud-native-security" }) {
        image {
          url
        }
        description
        name
      }
      allContentfulItemCard(filter: { pageId: { eq: "cloud-native" } }) {
        edges {
          node {
            mainHeading
            image1 {
              url
            }
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

  const OverviewList = data.allContentfulSwithContent.edges;

  const quoteDescription = data.contentfulQuotes.description;
  const quoteImage = data.contentfulQuotes.image.url;
  const quoteName = data.contentfulQuotes.name;

  const ResourcesList = data.allContentfulItemCard.edges;

  const secondSectionBg = data.contentfulSection2.image.url;
  const secondSectionHeading = data.contentfulSection2.mainHeading;
  const secondSectionDescription = data.contentfulSection2.description;
  const secondSectionList = data.contentfulSection2.list;

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
      <SecondSection
        list={secondSectionList}
        BG={secondSectionBg}
        title={secondSectionHeading}
        desc={secondSectionDescription}
      />
      <Services
        list={servicesList}
        title={`Protect cloud-native at the speed of DevOps
`}
      />
      <Overview list={OverviewList} title={`cloud-native Security`} />
      <Quotes desc={quoteDescription} name={quoteName} />
      <Resources list={ResourcesList} />
      <PreFooter />
    </Layout>
  );
};

export default CloudNativeSecurity;
