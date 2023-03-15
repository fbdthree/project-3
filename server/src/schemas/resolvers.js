const { AuthenticationError } = require('apollo-server-express');
const { User, PokePost } = require('../models');
const { auth } = require('../../utils/auth');

const resolvers = {
  Query: {
    users: async () => {
      return User.find().populate('pokePost');
    },
    user: async (parent, { username }) => {
      return User.findOne({ username }).populate('pokePosts');
    },
    pokePosts: async (parent, { username }) => {
      const params = username ? { username } : {};
      return PokePost.find(params).sort({ createdAt: -1 });
    },
    pokePost1: async (parent, { pokePostId }) => {
      return PokePost.findOne({ _id: pokePostId });
    },
    me: async (parent, args, context) => {
      if (context.user) {
        return User.findOne({ _id: context.user._id }).populate('pokePosts');
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },

  Mutation: {
    addUser: async (parent, { username, email, password }) => {
      const user = await User.create({ username, email, password });
      const token = signToken(user);
      return { token, user };
    },
    login: async (parent, { email, password }) => {
      const user = await User.findOne({ email });

      if (!user) {
        throw new AuthenticationError('No user found with this email address');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect credentials');
      }

      const token = signToken(user);

      return { token, user };
    },
    addPokePost: async (parent, { pokePostText }, context) => {
      if (context.user) {
        const pokePost = await PokePost.create({
          pokePostText,
          pokePostAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $addToSet: { pokePosts: pokePost._id } }
        );

        return pokePost;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    addComment: async (parent, { pokePostId, commentText }, context) => {
      if (context.user) {
        return PokePost.findOneAndUpdate(
          { _id: pokePostId },
          {
            $addToSet: {
              comments: { commentText, commentAuthor: context.user.username },
            },
          },
          {
            new: true,
            runValidators: true,
          }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removePokePost: async (parent, { pokePostId }, context) => {
      if (context.user) {
        const pokePost = await PokePost.findOneAndDelete({
          _id: pokePostId,
          pokePostAuthor: context.user.username,
        });

        await User.findOneAndUpdate(
          { _id: context.user._id },
          { $pull: { pokePosts: pokePost._id } }
        );

        return pokePost;
      }
      throw new AuthenticationError('You need to be logged in!');
    },
    removeComment: async (parent, { pokePostId, commentId }, context) => {
      if (context.user) {
        return PokePost.findOneAndUpdate(
          { _id: pokePostId },
          {
            $pull: {
              comments: {
                _id: commentId,
                commentAuthor: context.user.username,
              },
            },
          },
          { new: true }
        );
      }
      throw new AuthenticationError('You need to be logged in!');
    },
  },
};

module.exports = resolvers;
