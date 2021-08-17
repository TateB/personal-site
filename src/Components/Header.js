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
  width: 50%;
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
`;

const TitleHeader = styled.h1`
  font-size: 3em;
  font-weight: 800;
  font-family: "WotfardBold";
  color: white;
  filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.8));
  transition: all 0.5s ease;
  margin: 0;
`;

const Heading = styled.header`
  height: 125px;
`;

const Constraints = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
`;

const SubtitleHeader = styled.h2`
  font-size: 2em;
  color: white;
`;

const ClickableSubtitleHeader = styled.a`
  font-size: 2em;
  color: #bbb;
  text-decoration: none;
  font-weight: 600;
`;

const TrailDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Header = ({ slug }) => {
  return (
    <Heading>
      <OntopContent>
        <Constraints>
          <Link to="/" style={{ textDecoration: "none" }}>
            <TitleHeader>tate bulic</TitleHeader>
          </Link>
          {slug ? (
            <TrailDiv>
              <Link to="/things" style={{ textDecoration: "none" }}>
                <ClickableSubtitleHeader>things</ClickableSubtitleHeader>
              </Link>
              <SubtitleHeader
                style={{ marginLeft: "15px", marginRight: "15px" }}
              >
                /
              </SubtitleHeader>
              <SubtitleHeader>{slug}</SubtitleHeader>
            </TrailDiv>
          ) : (
            <TrailDiv>
              <SubtitleHeader>things</SubtitleHeader>
              <SubtitleHeader style={{ marginLeft: "15px" }}>/</SubtitleHeader>
            </TrailDiv>
          )}
        </Constraints>
      </OntopContent>
      <BackgroundGradient />
    </Heading>
  );
};

export default Header;
