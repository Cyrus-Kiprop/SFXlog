import React from "react";
import Dump from "../components/Dump";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import styled from "styled-components";
import { useSiteMetadata } from "../hooks/useSiteMetadata";
import { SEO } from "react-seo-component";

import { Layout } from "../components/Layout";
import { Header } from "../components/Header/Header";
import HeroSwoopWrapper from "../components/Header/heroSwoopWrapper";
import Avatar from "../components/Header/Avatar";

const IndexWrapper = styled.main``;

const PostWrapper = styled.div``;

const Image = styled(Img)`
  border-radius: 5px;
`;

export default ({ data }) => {
  const {
    title,
    siteName,
    description,
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
  } = useSiteMetadata();
  return (
    <>
      <Layout>
        {/* <Dump
          title={title}
          titleTemplate={siteName}
          titleSeparator={`-`}
          description={description || "nothin’"}
          image={`${siteUrl}${image}`}
          pathname={siteUrl}
          siteLanguage={siteLanguage}
          siteLocale={siteLocale}
          twitterUsername={twitterUsername}

        /> */}

        <Header siteTitle={title} siteDescription={description}>
          <HeroSwoopWrapper />
          <Avatar />
        </Header>
        {data.allMdx.nodes.map(({ fields, excerpt, frontmatter }) => (
          <Link to={`${fields.slug}`}>
            {!!frontmatter.cover ? (
              <Image sizes={frontmatter.cover.childImageSharp.sizes} />
            ) : null}

            <h1>{frontmatter.title}</h1>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </Link>
        ))}
      </Layout>
    </>
  );
};

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        fields {
          slug
        }
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date(formatString: "YYYY MMMM Do")
        }
      }
    }
  }
`;

const coverImages = `
 childImageSharp {
              sizes(maxWidth: 2000, traceSVG: { color: "#639" }) {
                ...GatsbyImageSharpSizes_tracedSVG
              }
            }`;
