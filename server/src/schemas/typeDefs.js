const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
    pokePosts: [PokePost]!
  }

  type PokePost {
    _id: ID
    pokePostText: String
    pokePostAuthor: String
    createdAt: String
    comments: [Comment]!
  }

  type Comment {
    _id: ID
    commentText: String
    commentAuthor: String
    createdAt: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(username: String!): User
    pokePosts(username: String): [PokePost]
    pokePost1(pokePostId: ID!): PokePost
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
    addPokePost(pokePostText: String!): PokePost
    addComment(pokePostId: ID!, commentText: String!): PokePost
    removePokePost(pokePostId: ID!): PokePost
    removeComment(pokePostId: ID!, commentId: ID!): PokePost
  }
`;

module.exports = typeDefs;
