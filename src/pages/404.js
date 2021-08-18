import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import * as React from "react";
import { Layout } from "../Components/layout";

const MainSection = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const OntopContent = styled.div`
  height: 100%;
  width: 100%;
  z-index: 1;
  position: absolute;
  mix-blend-mode: multiply;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 700px) {
    justify-content: space-between;
  }
`;

const TitleHeader = styled.h1`
  font-size: 8.5em;
  font-weight: 800;
  font-family: "WotfardBold";
  color: white;
  filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.8));
  transition: all 0.5s ease;
  margin: 0;
  text-shadow: 0 0 10px black;
  @media (max-width: 700px) {
    font-size: 4em;
    filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.8));
  }
`;

const SubtitleHeader = styled.h2`
  font-size: 1.35em;
  color: grey;
  margin-top: 0;
  margin-bottom: 120px;
  transition: all 0.5s ease;
  font-family: "Silka-MonoLight";
  @media (max-width: 700px) {
    margin-bottom: 0;
  }
`;

const fadeAnimation = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const BackgroundGradient = styled.div`
  height: 350px;
  margin-bottom: 100px;
  width: 100%;
  z-index: 0;
  background: linear-gradient(
    270deg,
    #f5ff00,
    #30ff00,
    #00ffc4,
    #00a8ff,
    #3300ff,
    #9900ff,
    #ff006c
  );
  background-size: 150% 150%;
  animation: ${fadeAnimation} 25s ease infinite;
  @media (max-width: 700px) {
    background-size: 350% 350%;
  }
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (max-width: 700px) {
    margin-top: 15px;
    flex-grow: 1;
    justify-content: center;
  }
`;

const GoBack = styled.p`
  color: white;
  margin-bottom: 25px;
`;

// markup
const NotFoundPage = () => {
  return (
    <Layout isError={true}>
      <MainSection>
        <OntopContent>
          <TextWrapper>
            <TitleHeader id="bigtext">404</TitleHeader>
            <SubtitleHeader id="subtitle">page not found</SubtitleHeader>
          </TextWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <GoBack>{"<"} go to base</GoBack>
          </Link>
        </OntopContent>
        <BackgroundGradient />
      </MainSection>
    </Layout>
  );
};

export default NotFoundPage;
