import { keyframes } from "@emotion/core";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import React from "react";

const fadeAnimation = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const BackgroundGradient = styled.div`
  height: 125px;
  width: 350px;
  margin: auto;
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
  @media (max-width: 1024px) {
    background-size: 250% 250%;
    height: 110px;
  }
`;

const OntopContent = styled.div`
  height: 125px;
  width: 100%;
  z-index: 1;
  position: absolute;
  mix-blend-mode: multiply;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  @media (max-width: 1024px) {
    height: 150px;
  }
`;

const TitleHeader = styled.h1`
  font-size: 3em;
  font-weight: 800;
  font-family: "WotfardBold";
  color: white;
  text-shadow: 0 0 7px black;
  filter: drop-shadow(0px 0px 25px rgba(255, 255, 255, 0.8));
  transition: all 0.5s ease;
  margin: 0;
  &:hover {
    filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.6));
  }
  @media (max-width: 1024px) {
    margin-bottom: 35px;
    filter: drop-shadow(0px 0px 15px rgba(255, 255, 255, 0.6));
  }
`;

const Heading = styled.header`
  height: 125px;
  @media (max-width: 1024px) {
    height: 150px;
  }
`;

const Constraints = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  @media (max-width: 1024px) {
    flex-direction: column-reverse;
    @media (max-width: 750px) {
      width: 90%;
    }
  }
`;

const SubtitleHeader = styled.h2`
  font-size: 1.35em;
  color: white;
  @media (max-width: 1024px) {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ClickableSubtitleHeader = styled.a`
  font-size: 1.35em;
  color: #bbb;
  text-decoration: none;
  font-weight: 600;
`;

const TrailDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  font-family: "Silka-MonoLight";
  letter-spacing: -1px;
  width: 450px;
  & h2,
  & a {
    margin-bottom: 0;
    margin-top: 0;
  }

  @media (max-width: 1500px) {
    width: 250px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    @media (max-width: 1024px) {
      width: 100%;
      flex-direction: row;
      justify-content: center;
    }
  }
`;

const RootPlace = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Header = ({ slug }) => {
  return (
    <Heading>
      <OntopContent>
        <Constraints>
          {slug ? (
            <TrailDiv>
              <RootPlace>
                <Link to="/things" style={{ textDecoration: "none" }}>
                  <ClickableSubtitleHeader>things</ClickableSubtitleHeader>
                </Link>
                <SubtitleHeader
                  style={{ marginLeft: "15px", marginRight: "15px" }}
                >
                  /
                </SubtitleHeader>
              </RootPlace>
              <SubtitleHeader>{slug}</SubtitleHeader>
            </TrailDiv>
          ) : (
            <TrailDiv>
              <RootPlace>
                <SubtitleHeader>things</SubtitleHeader>
                <SubtitleHeader style={{ marginLeft: "15px" }}>
                  /
                </SubtitleHeader>
              </RootPlace>
            </TrailDiv>
          )}
          <Link to="/" style={{ textDecoration: "none" }}>
            <TitleHeader>tate bulic</TitleHeader>
          </Link>
          <TrailDiv />
        </Constraints>
      </OntopContent>
      <BackgroundGradient />
    </Heading>
  );
};

export default Header;
