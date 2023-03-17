import React from 'react';
import { Link } from 'react-router-dom';

const PokePostList = ({
  pokePosts,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!pokePosts.length) {
    return <h3>No PokePosts Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {pokePosts &&
        pokePosts.map((pokePost) => (
          <div key={pokePost._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${pokePost.pokePostAuthor}`}
                >
                  {pokePost.pokePostAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    had this pokePost on {pokePost.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You had this pokePost on {pokePost.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body bg-light p-2">
              <p>{pokePost.pokePostText}</p>
            </div>
            <Link
              className="btn btn-primary btn-block btn-squared"
              to={`/s/${pokePost._id}`}
            >pokePost
              Join the discussion on this pokePost.
            </Link>
          </div>
        ))}
    </div>
  );
};

export default PokePostList;
