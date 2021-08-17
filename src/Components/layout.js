import styled from "@emotion/styled";
import { graphql, useStaticQuery } from "gatsby";
import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import "./fonts.css";
import Header from "./Header";

const LayoutPadding = styled.div`
  max-width: 80%;
  margin: auto;
`;

const BackgroundBlackDiv = styled.div`
  background-color: black;
  min-height: calc(100vh - 125px);
`;

const SeperatingLine = styled.hr`
  border-color: rgba(255, 255, 255, 0.3);
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  margin-top: 0px;
`;

export const Layout = ({ isIndex, pageTitle, children, slug }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  if (isIndex) {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {pageTitle} | {data.site.siteMetadata.title}
          </title>
        </Helmet>
        {children}
      </Fragment>
    );
  } else {
    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>
            {pageTitle} | {data.site.siteMetadata.title}
          </title>
        </Helmet>
        <Header slug={slug} />
        <BackgroundBlackDiv>
          <LayoutPadding>
            <SeperatingLine />
            {children}
          </LayoutPadding>
        </BackgroundBlackDiv>
      </Fragment>
    );
  }
};
