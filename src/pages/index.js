import React from 'react';
import styled from 'styled-components';
import { GlobalStyle } from '../style';
import { Metadata, Orbs, Footer } from '../components';
import { Link, graphql } from 'gatsby';
import { Fade } from 'react-reveal';

export const pages = graphql`
  {
    allMdx(
      filter: { frontmatter: { type: { eq: "work-featured" } } }
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

const IndexPage = ({ data }) => {
  const postArray = [],
    workArray = [];
  data.allMdx.nodes.map((node) =>
    node.frontmatter.type === 'post'
      ? postArray.push(node)
      : workArray.push(node)
  );
  return (
    <>
      <Metadata />
      <GlobalStyle />
      <HeroWrapper>
        <h1
          style={{
            textAlign: 'center',
            fontSize: '5rem',
            fontFamily: 'sans-serif',
            position: 'absolute',
            zIndex: '10',
            mixBlendMode: 'difference',
            color: 'pink',
          }}
        >
          ⊙
        </h1>
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

      {/* <ContentContainer>
        <PostContainer>
          <ListLabel>posts</ListLabel>
          {postArray.map((node) => (
            <PostCard key={node.slug}>
              <ArticleLink to={node.slug}>{node.frontmatter.title}</ArticleLink>

              <CardText>{node.excerpt}</CardText>
              <CardFooter>
                <Link to={node.slug}>
                  <p>More...</p>
                </Link>
                <p>{node.frontmatter.date}</p>
              </CardFooter>
            </PostCard>
          ))}

          <ListLabel>past work</ListLabel>
          {data.allMdx.nodes.map((node) => (
            <li
              style={{
                textAlign: 'center',
                marginBottom: '1.111rem',
                listStyle: 'none',
              }}
            >
              <ArticleLink to={`/work/${node.slug}`}>
                {node.frontmatter.title}
              </ArticleLink>
            </li>
          ))}
        </PostContainer>
      </ContentContainer> */}
      <Footer />
    </>
  );
};
export default IndexPage;

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
  width: 90%;
  max-width: 560px;
  padding: 1.618em;
  margin-bottom: 2.22em;
`;

const ArticleLink = styled(Link)`
  font-size: 1.333rem;
  font-weight: 500;
  line-height: 1.66;
  letter-spacing: -1.11px;
  min-width: 640px;
  text-align: center;

  &:hover {
    color: #cacaca;
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
