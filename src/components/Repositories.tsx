import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { HiOutlineCode, AiOutlineStar, AiOutlineFork } from "react-icons/all";

const Repositories = () => {
  const [repos, setRepos] = useState<any>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://api.github.com/users/anonymousaaardvark/repos");
        setRepos(res.data.sort((a: any, b: any) => b.stargazers_count - a.stargazers_count));
      } catch (error) {
        console.error(error);
      }
    }
    getData().then(_ => {});
  }, [])
  return (
    <RepositoriesWrapper>
      <TitleWrapper>
        <Title>Repositories</Title>
      </TitleWrapper>
      <ReposWrapper>
        {repos.map((repo: any) => {
          return (
            <RepoCard>
              <RepoLink href={repo.html_url} target="_blank" rel="noopener noreferrer"/>
              <RepoInfo>
                <RepoTitle>{repo.name}</RepoTitle>
                <RepoDesc>{repo.description}</RepoDesc>
              </RepoInfo>
              <RepoStats>
                {repo.language && <HiOutlineCode />}{repo.language}
                <AiOutlineStar />{repo.stargazers_count}
                <AiOutlineFork />{repo.forks_count}
              </RepoStats>
            </RepoCard>
          )
        })}
      </ReposWrapper>
    </RepositoriesWrapper>
  )
}

const RepositoriesWrapper = styled.div`
  font-family: "Lato", sans-serif;
  display: flex;
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

const ReposWrapper = styled.div`
  display: grid;
  width: 100%;
  padding-right: 5rem;
  padding-bottom: 5rem;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 1rem 1rem;
  @media(max-width: 1390px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media(max-width: 1120px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media(max-width: 835px) {
    padding: 0 5rem;
  }
  @media(max-width: 680px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const RepoCard = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  min-height: 7.3rem;
  padding: .3rem .5rem .5rem .5rem;
  border-bottom: 2px solid #4e555a;
  color: #2b3135;
  cursor: pointer;
  svg {
    font-size: 2rem;
    margin-bottom: .5rem;
  }
  :hover {
    background-color: rgba(0, 0, 0, .03);
  }
  :active {
    background-color: rgba(0, 0, 0, .07);
  }
`;

const RepoInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

const RepoTitle = styled.p`
  font-size: 1.2rem;
  font-weight: 500;
`;

const RepoDesc = styled.p`
  font-size: .9rem;
  font-weight: 500;
`;

const RepoStats = styled.div`
  display: flex;
  align-items: center;
  justify-items: center;
  svg {
    font-size: 1.3rem;
    margin: .3rem .3rem .1rem .3rem;
    :first-of-type {
      margin-left: 0;
    }
  }
`;

const RepoLink = styled.a`
  position: absolute;
  display: block;
  height: 100%;
  width: 100%;
  text-decoration: none;
`;

export default Repositories;