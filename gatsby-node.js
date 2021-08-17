exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              title
              subtitle
              date(formatString: "DD/MM/YYYY")
            }
            html
          }
        }
      }
    }
  `);

  data.allMarkdownRemark.edges.forEach((page) => {
    const slug = page.node.frontmatter.slug;
    actions.createPage({
      path: "/things/" + slug,
      component: require.resolve("./src/templates/thingsPost.js"),
      context: page,
    });
  });
};
