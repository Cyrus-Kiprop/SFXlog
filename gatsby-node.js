const { createFilePath } = require("gatsby-source-filesystem");

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
      allMdx {
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
    posts.forEach((post) => {
      createPage({
        path: post.fields.slug,
        component: blogPostTemplate,
        context: {
          slug: post.fields.slug,
        },
      });
    });
  });
};
