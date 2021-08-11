import React from "react";
import styled from "styled-components";
import {
  SiRust, SiJava, SiHtml5, SiCss3, SiCplusplus, SiC, SiPython, SiGo,
  SiJavascript, SiTypescript, SiReact, SiRedux, SiFirebase, SiPytorch, SiExpo
} from "react-icons/all";

const Languages = () => {
  return (
    <LanguagesWrapper>
      <TitleWrapper>
        <Title>Tools & Languages</Title>
      </TitleWrapper>
      <TLWrapper>
        <TLCard><SiRust />Rust</TLCard>
        <TLCard><SiJava />Java</TLCard>
        <TLCard><SiHtml5 />HTML5</TLCard>
        <TLCard><SiCss3 />CSS3</TLCard>
        <TLCard><SiCplusplus />C++</TLCard>
        <TLCard><SiC />C</TLCard>
        <TLCard><SiPython />Python</TLCard>
        <TLCard><SiGo />Go</TLCard>
        <TLCard><SiJavascript />Javascript</TLCard>
        <TLCard><SiTypescript />Typescript</TLCard>
        <TLCard><SiReact />React</TLCard>
        <TLCard><SiRedux />Redux</TLCard>
        <TLCard><SiExpo />Expo</TLCard>
        <TLCard><SiPytorch />PyTorch</TLCard>
        <TLCard><SiFirebase />Firebase</TLCard>
      </TLWrapper>
    </LanguagesWrapper>
  )
}

const LanguagesWrapper = styled.div`
  display: flex;
  font-family: "Lato", sans-serif;
  @media(max-width: 835px) {
    flex-direction: column;
  }
`;

const TitleWrapper = styled.div`
  display: flex;
  padding-left: 3rem;
  min-width: 16.5rem;
  @media(max-width: 835px) {
    width: 100%;
    margin-bottom: 1rem;
  }
`;

const Title = styled.h3`
  color: #2b3135;
  font-weight: 400;
  font-size: 1.25rem;
  @media(max-width: 835px) {
    font-weight: 600;
    font-size: 1.5rem;
  }
`;

const TLWrapper = styled.div`
  display: grid;
  width: 100%;
  padding-right: 5rem;
  padding-bottom: 5rem;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 1.5rem 5rem;
  @media(max-width: 1200px) {
    grid-template-columns: repeat(4, 1fr);
  }
  @media(max-width: 1000px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media(max-width: 835px) {
    padding: 0 5rem;
  }
  @media(max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const TLCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: .5rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-bottom: 2px solid #4e555a;
  color: #2b3135;

  svg {
    font-size: 2rem;
    margin-bottom: .5rem;
  }
`;

export default Languages;
