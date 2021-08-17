import React from "react";
import { Layout } from "../Components/layout";

const ThingsPost = ({ pageContext }) => {
  const { slug, title, subtitle, date } = pageContext.node.frontmatter;
  const html = {
    __html: pageContext.node.html,
  };

  return (
    <Layout pageTitle={title} slug={slug}>
      <main>
        <h1>{title}</h1>
        <h2>{subtitle}</h2>
        <h5>{date}</h5>
        <div dangerouslySetInnerHTML={html}></div>
      </main>
    </Layout>
  );
};

export default ThingsPost;
