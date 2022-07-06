import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../../style';
import { Metadata, Orbs, Nav, Footer } from '../../components';
import { Link, graphql } from 'gatsby';
import { Fade } from 'react-reveal';

export const pages = graphql`
  query {
    allMdx(
      filter: { frontmatter: { type: { eq: "post" } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      nodes {
        frontmatter {
          title
          date
          type
        }
        id
        slug
        excerpt(pruneLength: 120)
      }
    }
    site {
      siteMetadata {
        title
      }
    }
  }
`;

const WritingIndex = ({ data }) => {
  return (
    <>
      <Metadata />
      <GlobalStyle />
      <Nav />
      <HeroWrapper>
        <Fade duration={2222}>
          <h1
            style={{
              textAlign: 'center',
              position: 'absolute',
              zIndex: '10',
              textShadow: '0 0 32px black',
            }}
          >
            writing
          </h1>
        </Fade>

        <Fade delay={111} duration={3333}>
          <OrbWrapper>
            {[...Array(6)].map((el, index) => (
              <OrbHorizWrapper>
                <Orbs
                  key={index}
                  height='80px'
                  width='45vh'
                  margin='5px -19vh'
                />
              </OrbHorizWrapper>
            ))}
          </OrbWrapper>
        </Fade>
      </HeroWrapper>
      <ContentContainer>
        <PostContainer>
          <ListLabel>posts</ListLabel>
          {data.allMdx.nodes.map((node) => (
            <PostCard key={node.slug}>
              <CardHeader>
                <ArticleLink to={`/writing/${node.slug}`}>
                  {node.frontmatter.title}
                </ArticleLink>
              </CardHeader>
              <CardText>{node.excerpt}</CardText>
              <CardFooter>
                <Link to={node.slug}>
                  <p>More...</p>
                </Link>
                <p>{node.frontmatter.date}</p>
              </CardFooter>
            </PostCard>
          ))}
        </PostContainer>
      </ContentContainer>
      <Footer />
    </>
  );
};
export default WritingIndex;

const HeroWrapper = styled.section`
  width: 100vw;
  overflow: hidden;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: auto;
`;

const OrbWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
const OrbHorizWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  align-items: center;
  justify-content: center;
  margin: -2em 0;
`;

// Post Styling

const ContentContainer = styled.section`
  width: 100vw;
  min-height: 100vh;
  /* display: grid; */
  /* grid-template-columns: 1em 1fr 1fr 1em; */
  /* justify-items: center; */
  display: flex;
  flex-flow: column;
  align-items: center;

  @media (max-width: 900px) {
    display: flex;
    flex-flow: column;
    align-items: center;
  }
`;

const ListLabel = styled.h3`
  text-align: center;
  color: #555;
  margin-bottom: 1.618em;
`;

const PostContainer = styled.section`
  max-width: 640px;
  padding: 1.618em;
  grid-column: 2;
  margin-bottom: 2.22em;
`;

const CardHeader = styled.div`
  width: 100%;
`;

const ArticleLink = styled(Link)`
  font-size: 1.333rem;
  font-weight: 500;
  line-height: 1.333;
  letter-spacing: -1.11px;

  &:hover {
    color: #cacaca;
    transform: scale(2) !important;
  }
`;

const CardText = styled.p`
  color: #cacaca;
  /* margin-top: 1em; */
`;

const PostCard = styled.div`
  margin-bottom: 1.618em;
  border-radius: 24px;
`;

const CardFooter = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1em;
  p {
    color: gray;
  }
`;
