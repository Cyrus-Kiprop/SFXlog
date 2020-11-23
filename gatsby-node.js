const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// responsible for adding fields to existing mdx nodes in the field object
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode });
    createNodeField({
      name: `slug`,
      node,
      value,
    });
  }
};

// for each and every node that exist create a page file and attach the slug url
exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const blogPostTemplate = path.resolve("src/templates/blogPostTemplate.js");
  return graphql(`
    {
      allMdx(
        sort: { fields: [frontmatter___date], order: DESC }
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        nodes {
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      throw result.errors;
    }
    const posts = result.data.allMdx.nodes;
    // create page for each mdx file
    posts.forEach((post, index, posts) => {
      const previous = index === posts.length - 1 ? null : posts[index + 1];
      const next = index === 0 ? null : posts[index - 1];
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
          previous,
          next,
        },
      });
    });
  });
};
