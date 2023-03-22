import React from 'react';
import { Link } from 'react-router-dom';

const PokePostList = ({
  pokePosts,
  showUsername = true,
}) => {
  if (!pokePosts.length) {
    return <h3>No PokePosts Yet</h3>;
  }

  const renderedList = pokePosts.map((pokePost) => {
    return (
      <div key={pokePost._id} className="rounded-xl overflow-hidden shadow-lg bg-slate-200 m-8">

        <h4 className="card-header bg-danger text-light p-2 m-0">
          {showUsername ? (
            <Link
              className="text-light"
              to={`/profiles/${pokePost.pokePostAuthor}`}
            >
              {pokePost.pokePostAuthor} <br />
              <span style={{ fontSize: '1rem' }}>
                had this pokeThought on {pokePost.createdAt}
              </span>
            </Link>
          ) : (
            <>
              <span style={{ fontSize: '1rem' }}>
                You had this pokeThought on {pokePost.createdAt}
              </span>
            </>
          )}
        </h4>
        <div className="card-body p-2 ">
          <p>{pokePost.pokePostText}</p>
        </div>
        <Link
          className="btn btn-danger btn-block btn-squared"
          to={`/s/${pokePost._id}`}
        >pokePost
          Join the discussion on this pokePost.
        </Link>

      </div>
    )
  })

  return (

      <div className='container'>{renderedList}</div>

  );
};

export default PokePostList;
