import React from "react";
import styled from "styled-components";
import ProfilePic from "../assets/profile.jpeg";
import SplatterPic from "../assets/splatter.png";
import { IoLocationSharp, FaGithub, HiMailOpen } from "react-icons/all";

const Header = () => {
  return(
    <HeaderWrapper>
      <ProfilePicWrapper>
        <Profile src={ProfilePic} />
      </ProfilePicWrapper>
      <TitleWrapper>
        <UserNameTitle>AnonymousAAArdvark</UserNameTitle>
        <NameTitle>Andrew Yang</NameTitle>
        <DescWrapper>
          <Desc href={"https://github.com/AnonymousAAArdvark"} target="_blank" rel="noopener noreferrer" underline>
            <FaGithub />https://github.com/AnonymousAAArdvark
          </Desc>
          <Desc href={"mailto: andrewhuiyang0830@gmail.com"} target="_blank" rel="noopener noreferrer" underline>
            <HiMailOpen />andrewhuiyang0830@gmail.com
          </Desc>
          <Desc>
            <IoLocationSharp />Chandler, AZ
          </Desc>
        </DescWrapper>
      </TitleWrapper>
      <Splatter />
    </HeaderWrapper>
  )
}

const HeaderWrapper = styled.div`
  display: flex;
  padding: 3rem 4rem 4rem 4rem;
  @media(max-width: 700px) {
    flex-direction: column;
    align-items: center;
    padding-bottom: 2rem;
  }
`;

const ProfilePicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Profile = styled.img`
  border-radius: 50%;
  max-width: 10rem;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 3rem;
  @media(max-width: 700px) {
    margin: 1rem 0 0 0;
    align-items: center;
  }
`;

const UserNameTitle = styled.h1`
  color: #2b3135;
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-size: 2rem;
  line-height: 1.8rem;
  margin-bottom: .2rem;
`;

const NameTitle = styled.h2`
  font-weight: 200;
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  color: #363b40;
`;

const DescWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

const Desc = styled.a<{ underline? : boolean }>`
  font-weight: 300;
  color: #2b3135;
  display: flex;
  align-items: center;
  font-size: 1.1rem;
  svg {
    font-size: 1.3rem;
    margin-right: .7rem;
  }
  :hover {
    text-decoration: ${({ underline }) => underline ? "underline" : "none" };
  }
`;

const Splatter = styled.div`
  position: absolute;
  background-image: url("${SplatterPic}");
  width: 20rem;
  height: 20rem;
  background-repeat: no-repeat;
  background-size: cover;
  top: -7rem;
  right: 0;
  @media(max-width: 900px) {
    display: none;
  }
`;

export default Header;