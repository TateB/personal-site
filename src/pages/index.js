import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "gatsby";
import * as React from "react";
import { Layout } from "../Components/layout";
import BlogIcon from "../icons/blog.svg";
import EmailIcon from "../icons/email.svg";
import GithubIcon from "../icons/github.svg";
import TwitchIcon from "../icons/twitch.svg";
import "../styles/homeStyles.css";

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

const IconsDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 20px;
  @media (max-width: 700px) {
    margin-bottom: 35px;
  }
`;

const Icon = styled.img`
  width: 40px;
  margin-left: 5px;
  margin-right: 5px;
  transition: all 0.5s ease;
  filter: invert(60%) blur(0px);
  &:hover {
    cursor: pointer;
    filter: invert(90%) blur(0px)
      drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.9));
  }
  @media (max-width: 700px) {
    width: 55px;
  }
`;
const fadeAnimation = keyframes`
  0%{background-position:0% 50%}
  50%{background-position:100% 50%}
  100%{background-position:0% 50%}
`;

const BackgroundGradient = styled.div`
  height: 100%;
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

const IndexPage = () => {
  React.useEffect(() => {
    var icons = document.getElementsByClassName("icon");
    for (const icon of icons) {
      icon.addEventListener("mouseover", (e) => {
        document.getElementById("bigtext").classList.add("addBlurDropShadow");
        document.getElementById("subtitle").classList.add("addBlur");
        Array.from(icons).forEach((i) => {
          if (i !== icon) {
            i.classList.add("addBlurImg");
          }
        });
      });
      icon.addEventListener("mouseout", (e) => {
        document
          .getElementById("bigtext")
          .classList.remove("addBlurDropShadow");
        document.getElementById("subtitle").classList.remove("addBlur");
        Array.from(icons).forEach((i) => {
          if (i !== icon) {
            i.classList.remove("addBlurImg");
          }
        });
      });
    }
  }, []);

  return (
    <Layout pageTitle="base" isIndex={true}>
      <MainSection>
        <OntopContent>
          <TextWrapper>
            <TitleHeader id="bigtext">tate bulic</TitleHeader>
            <SubtitleHeader id="subtitle">designer/developer</SubtitleHeader>
          </TextWrapper>
          <IconsDiv>
            <Link
              to="https://github.com/TateB"
              style={{ textDecoration: "none" }}
            >
              <Icon src={GithubIcon} className="icon" />
            </Link>
            <a
              href="mailto:me@tatebulic.com.au"
              style={{ textDecoration: "none" }}
            >
              <Icon src={EmailIcon} className="icon" />
            </a>
            <Link
              to="https://twitch.tv/taytems"
              style={{ textDecoration: "none" }}
            >
              <Icon src={TwitchIcon} className="icon" />
            </Link>
            <Link to="/things" style={{ textDecoration: "none" }}>
              <Icon src={BlogIcon} className="icon" />
            </Link>
          </IconsDiv>
        </OntopContent>
        <BackgroundGradient />
      </MainSection>
    </Layout>
  );
};

export default IndexPage;
