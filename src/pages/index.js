import React from "react";
import Dump from "../components/Dump";
import { Link } from "gatsby";

import { Layout } from "../components/Layout";

export default ({ data }) => {
  return (
    <>
      <Layout>
        {data.allMdx.nodes.map(({ fields, excerpt, frontmatter }) => (
          <Link to={`${fields.slug}`}>
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
          date
        }
      }
    }
  }
`;
