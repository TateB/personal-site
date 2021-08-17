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
`;

const TitleHeader = styled.h1`
  font-size: 8.5em;
  font-weight: 800;
  font-family: "WotfardBold";
  color: white;
  filter: drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.4));
  transition: all 0.5s ease;
  margin: 0;
`;

const SubtitleHeader = styled.h2`
  font-size: 2em;
  color: grey;
  margin-bottom: 80px;
  transition: all 0.5s ease;
`;

const IconsDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 10%;
  min-width: 180px;
  max-width: 200px;
  margin-bottom: 20px;
`;

const Icon = styled.img({
  width: "40px",
  transition: "all 0.5s ease",
  filter: "invert(60%) blur(0px)",
  "&:hover": {
    cursor: "pointer",
    filter:
      "invert(90%) blur(0px) drop-shadow(0px 0px 30px rgba(255, 255, 255, 0.9))",
  },
});

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

  const resTo = (link) => {
    window.location.href = link;
  };

  return (
    <Layout pageTitle="main" isIndex={true}>
      <MainSection>
        <OntopContent>
          <TitleHeader id="bigtext">tate bulic</TitleHeader>
          <SubtitleHeader id="subtitle">designer/developer</SubtitleHeader>
          <IconsDiv>
            <Link
              to="https://github.com/TateB"
              style={{ textDecoration: "none" }}
            >
              <Icon src={GithubIcon} className="icon" />
            </Link>
            <Link
              to="mailto:me@tatebulic.com.au"
              style={{ textDecoration: "none" }}
            >
              <Icon src={EmailIcon} className="icon" />
            </Link>
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
