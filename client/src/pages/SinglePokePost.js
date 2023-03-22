import React from 'react';

// Import the `useParams()` hook
import { useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import CommentList from '../components/CommentList';
import CommentForm from '../components/CommentForm';

import { QUERY_SINGLE_POKEPOST } from '../utils/queries';

const SinglePokePost = () => {
  // Use `useParams()` to retrieve value of the route parameter `:profileId`
  const { pokePostId } = useParams();

  const { loading, data } = useQuery(QUERY_SINGLE_POKEPOST, {
    // pass URL parameter
    variables: { pokePostId: pokePostId },
  });

  const pokePost = data?.pokePost1 || {};

  if (loading) {
    return <div>Loading...</div>;
  }
  return (
    <div className="my-3">
      <div className='rounded-xl overflow-hidden shadow-lg bg-slate-200 m-8'>
      <h3 className="card-header bg-danger text-light p-2 m-0">
        {pokePost.pokePostAuthor} <br />
        <span style={{ fontSize: '1rem' }}>
          had this pokePost on {pokePost.createdAt}
        </span>
      </h3>
      <div className="py-4">
        <blockquote
          className="m-3 leading-6 text-gray-900"
        >
          {pokePost.pokePostText}
        </blockquote>
      </div>
    </div>

      <div className="my-5">
        <CommentList comments={pokePost.comments} />
      </div>
      <div className="flex-row justify-center container mt-4 bg-slate-200 rounded-xl">
        <CommentForm pokePostId={pokePost._id} />
      </div>
    </div>
  );
};

export default SinglePokePost;
