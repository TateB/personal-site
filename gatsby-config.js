module.exports = {
  siteMetadata: {
    siteUrl: "https://tatebulic.com.au",
    title: "tate bulic",
    titleTemplate: "%s | tate bulic",
    description:
      "designing and developing web applications from melbourne, australia",
    twitterUsername: "@tatebulic",
  },
  plugins: [
    "gatsby-plugin-netlify-cms",
    "gatsby-plugin-emotion",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sitemap",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "tate bulic",
        short_name: "tate bulic",
        background_color: `#000000`,
        theme_color: `#000000`,
        icon: "src/images/icon.png",
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/content/posts`,
      },
    },
    `gatsby-transformer-remark`,
  ],
};
