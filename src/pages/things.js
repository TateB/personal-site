import styled from "@emotion/styled";
import { graphql, Link } from "gatsby";
import React from "react";
import { Layout } from "../Components/layout";
import Seo from "../Components/seo";

const ThingPost = styled.div`
  padding: 20px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
  transition: all 0.1s ease-in-out;
  font-family: "Silka-MonoLight";
  &:hover {
    background-color: #0d0e17;
  }
  @media (max-width: 1500px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

const ThingPostTitle = styled.h1`
  font-size: 1.4em;
  color: #eee;
  margin: 0;
`;

const ThingPostSubtitle = styled.h3`
  font-size: 1.4em;
  margin: 0;
  color: #aaa;
`;

const ThingPostDate = styled.p`
  font-size: 1em;
  margin: 0;
  color: #aaaaaa;
  @media (max-width: 1500px) {
    margin-top: 15px;
  }
`;

const Bulletpoint = () => {
  const Styles = styled.p`
    font-size: 1.4em;
    color: #888;
    margin: 0;
    margin-left: 15px;
    margin-right: 15px;
    @media (max-width: 1500px) {
      display: none;
    }
  `;

  return <Styles>•</Styles>;
};

const FlexSpacer = styled.div`
  flex-grow: 1;
`;

const LineDiv = styled.div`
  background-color: #0d0e17;
  width: 100%;
  height: 3px;
  margin-bottom: 0px;
  margin-top: -10px;
`;

const ThingsPage = ({ data }) => {
  return (
    <Layout pageTitle="things">
      <Seo title="things" description="written things by tate" />
      <main>
        {data.allMarkdownRemark.edges.map((page, inx) => (
          <Link
            to={"/things/" + page.node.frontmatter.slug}
            style={{ textDecoration: "none" }}
          >
            <ThingPost>
              <ThingPostTitle>{page.node.frontmatter.title}</ThingPostTitle>
              <Bulletpoint />
              <ThingPostSubtitle>
                {page.node.frontmatter.subtitle}
              </ThingPostSubtitle>
              <FlexSpacer />
              <ThingPostDate>{page.node.frontmatter.date}</ThingPostDate>
            </ThingPost>
            {inx === data.allMarkdownRemark.edges.length - 1 ? null : (
              <LineDiv />
            )}
          </Link>
        ))}
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            subtitle
            slug
            date(formatString: "DD/MM/YYYY")
          }
        }
      }
    }
  }
`;

export default ThingsPage;
