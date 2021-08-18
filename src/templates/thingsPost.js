import styled from "@emotion/styled";
import React from "react";
import { Layout } from "../Components/layout";
import Seo from "../Components/seo";

const InfoDiv = styled.div`
  background-color: #0d0e17;
  display: flex;
  flex-direction: row;
  padding: 25px;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 25px;
  font-family: "Silka-MonoLight";
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 15px;
  }
`;

const TextInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
`;

const InfoTitle = styled.h1`
  margin: 0;
  color: #eeeeee;
  font-family: "Silka-MonoRegular";
`;

const InfoSubtitle = styled.h2`
  margin: 0;
  color: #aaa;
`;

const InfoDate = styled.p`
  font-size: 1em;
  margin: 0;
  color: #aaaaaa;
  @media (max-width: 1024px) {
    margin-top: 15px;
  }
`;

const ContentDiv = styled.div`
  padding: 25px;
  background-color: #0d0e17;
  margin-bottom: 0px;
  color: #eeeeee;
  & a {
    text-decoration: none;
    color: #eeeeee;
    background-color: blue;
  }
  & code {
    background-color: black;
    font-family: "Silka-MonoRegular";
    font-size: 0.8em;
    white-space: pre-wrap;
  }
  & h1,
  & h2,
  & h3,
  & h4,
  & h5,
  & h6 {
    margin-block-start: 0.65em;
    margin-block-end: 0.65em;
  }
  & *:nth-child(1) {
    margin-top: 0px;
  }
  & *:last-child {
    margin-bottom: 0px;
  }
`;

const MainContent = styled.main`
  padding-bottom: 0px;
`;

const ThingsPost = ({ pageContext }) => {
  const { slug, title, subtitle, date } = pageContext.node.frontmatter;
  const html = {
    __html: pageContext.node.html,
  };

  return (
    <Layout pageTitle={title} slug={slug}>
      <Seo title={title} description={subtitle} article={true} />
      <MainContent>
        <InfoDiv>
          <TextInfoDiv>
            <InfoTitle>{title}</InfoTitle>
            <InfoSubtitle>{subtitle}</InfoSubtitle>
          </TextInfoDiv>
          <InfoDate>{date}</InfoDate>
        </InfoDiv>
        <ContentDiv dangerouslySetInnerHTML={html}></ContentDiv>
      </MainContent>
    </Layout>
  );
};

export default ThingsPost;
