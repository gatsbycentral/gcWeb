import React from "react";
import styled from "styled-components";
import { map } from "ramda";

import H1 from "components/Style/Headings/H1.js";
import PostList from "components/Post/PostList/PostList.js";

import Container from "components/Layout/Container";

const Posts = props => {
  const { edges: posts } = props.data.allMarkdownRemark;
  return (
    <Container>
      <H1 centered={true}>All Posts</H1>
      <PostList posts={posts} />
    </Container>
  );
};

export const query = graphql`
  query allPosts {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            path
          }
        }
      }
    }
  }
`;

export default Posts;
