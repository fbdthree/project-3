import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($username: String!) {
    user(username: $username) {
      _id
      username
      email
      pokePosts {
        _id
        pokePostText
        createdAt
      }
    }
  }
`;

export const QUERY_POKEPOSTS = gql`
  query getPokePosts {
    pokePosts {
      _id
      pokePostText
      pokePostAuthor
      createdAt
    }
  }
`;

export const QUERY_SINGLE_POKEPOST = gql`
  query getSinglePokePost($pokePostId: ID!) {
    pokePost1(pokePostId: $pokePostId) {
      _id
      pokePostText
      pokePostAuthor
      createdAt
      comments {
        _id
        commentText
        commentAuthor
        createdAt
      }
    }
  }
`;

export const QUERY_ME = gql`
  query me {
    me {
      _id
      username
      email
      pokePosts {
        _id
        pokePostText
        pokePostAuthor
        createdAt
      }
    }
  }
`;
