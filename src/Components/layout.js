import styled from "@emotion/styled";
import React from "react";
import Seo from "../Components/seo";
import "./fonts.css";
import Header from "./Header";

const LayoutPadding = styled.div`
  max-width: 80%;
  margin: auto;
  @media (max-width: 750px) {
    max-width: 90%;
  }
`;

const BackgroundBlackDiv = styled.div`
  background-color: black;
  min-height: calc(100vh - 125px - 60px);
  @media (max-width: 1024px) {
    min-height: calc(100vh - 150px - 60px - env(safe-area-inset-bottom));
  }
`;

const SeperatingLine = styled.hr`
  border-color: rgba(255, 255, 255, 0.3);
  border-bottom-width: 0px;
  border-left-width: 0px;
  border-right-width: 0px;
  border-top-width: 0px;
  margin-top: 0px;
`;

const Footer = styled.footer`
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Silka-MonoLight";
  background-color: black;
  height: 60px;
  margin-bottom: env(safe-area-inset-bottom);
  color: #aaaaaa;
`;

const RealBgDiv = styled.div`
  background-color: black;
`;

export const Layout = ({ isIndex, children, slug, isError }) => {
  if (isIndex) {
    return (
      <RealBgDiv>
        <Seo title="base" />
        {children}
      </RealBgDiv>
    );
  } else if (isError) {
    return (
      <RealBgDiv>
        <Seo title="error" />
        {children}
      </RealBgDiv>
    );
  } else {
    return (
      <RealBgDiv>
        <Header slug={slug} />
        <BackgroundBlackDiv>
          <LayoutPadding>
            <SeperatingLine />
            {children}
          </LayoutPadding>
        </BackgroundBlackDiv>
        <Footer>copyright &copy; tate bulic {new Date().getFullYear()}</Footer>
      </RealBgDiv>
    );
  }
};
