const path = require("path");

const siteMetadata = {
  title: `The Localhost Blog`,
  description: `This is my coding blog where I write about my coding journey.`,
  image: `/default-site-image.jpg`,
  siteUrl: `http://localhost:8000`,
  siteLanguage: `en_Gb`,
  siteLocale: `en_gb`,
  twitterUsername: `@kipropJS`,
  authorName: `Cyrus Kiprop`,
};

module.exports = {
  siteMetadata,
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: `Fira Code`,
            variants: [`300`, `400`, `500`, `600`, `700`],
          },
          {
            family: `Roboto`,
            subsets: [`latin`],
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 590,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/posts`,
        name: `posts`,
      },
    },
  ],
};
