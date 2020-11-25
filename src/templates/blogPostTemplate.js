import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import { SEO } from "react-seo-component";
import React from "react";
import { Link } from "gatsby";
import { useSiteMetadata } from "../hooks/useSiteMetadata";

import { Layout } from "../components/Layout";
import Dump from "../components/Dump";

export default ({ data, pageContext }) => {
  const { frontmatter, body, fields, excerpt } = data.mdx;
  const { title, date, cover } = frontmatter;
  const { previous, next } = pageContext;

  const {
    image,
    siteUrl,
    siteLanguage,
    siteLocale,
    twitterUsername,
    authorName,
  } = useSiteMetadata();

  return (
    <Layout>
      <SEO
        title={title}
        titleSeparator={`-`}
        image={image}
        titleTemplate={"Cyrus-Kiprop"}
        description={excerpt}
        pathname={`${siteUrl}${fields.slug}`}
        siteLanguage={siteLanguage}
        siteLocale={siteLocale}
        twitterUsername={twitterUsername}
        author={authorName}
        article={true}
        publishedDate={date}
        modifiedDate={new Date(Date.now()).toISOString()}
      />{" "}
      <h1>{frontmatter.title}</h1>
      <p>{frontmatter.date}</p>
      <MDXRenderer>{body}</MDXRenderer>
      {/* previous and next links */}
      {previous === false ? null : (
        <>
          {previous && (
            <Link to={previous.fields.slug}>
              <p>{previous.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
      {next === false ? null : (
        <>
          {next && (
            <Link to={next.fields.slug}>
              <p>{next.frontmatter.title}</p>
            </Link>
          )}
        </>
      )}
    </Layout>
  );
};

export const query = graphql`
  query PostBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "YYYY MMMM Do")
      }
      body
      excerpt
      fields {
        slug
      }
    }
  }
`;
