import { gql } from '@apollo/client';

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      token
      user {
        _id
        username
      }
    }
  }
`;

export const ADD_POKEPOST = gql`
  mutation addPokePost($pokePostText: String!) {
    addPokePost(pokePostText: $pokePostText) {
      _id
      pokePostText
      pokePostAuthor
      createdAt
      comments {
        _id
        commentText
      }
    }
  }
`;

export const ADD_COMMENT = gql`
  mutation addComment($pokePostId: ID!, $commentText: String!) {
    addComment(pokePostId: $pokePostId, commentText: $commentText) {
      _id
      pokePostText
      pokePostAuthor
      createdAt
      comments {
        _id
        commentText
        createdAt
      }
    }
  }
`;
