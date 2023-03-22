import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';

import { ADD_POKEPOST } from '../../utils/mutations';
import { QUERY_POKEPOSTS, QUERY_ME } from '../../utils/queries';

import Auth from '../../utils/auth';

const PokePostForm = () => {
  const [pokePostText, setPokePostText] = useState('');

  const [characterCount, setCharacterCount] = useState(0);
  const { data, loading } = useQuery(QUERY_POKEPOSTS)
  const userQuery = useQuery(QUERY_ME)
  const [addPokePost, { error }] = useMutation(ADD_POKEPOST, {
    update(cache, { data: { addPokePost } }) {
      try {
        const pokePosts = cache.readQuery({ query: QUERY_POKEPOSTS });
debugger
        cache.writeQuery({
          query: QUERY_POKEPOSTS,
          data: { pokePosts: [addPokePost, ...(pokePosts?.pokePosts??{})] },
        });
      } catch (e) {
        console.error(e);
      }

      // update me object's cache
      const user = cache.readQuery({ query: QUERY_ME });
      cache.writeQuery({
        query: QUERY_ME,
        data: { me: { ...(user?.me??{}), pokePosts: [...(user?.me??{}).pokePosts, addPokePost] } },
      });
    },
  });

  const handleFormSubmit = async (event) => {
    event.preventDefault();

    try {
      const { data } = await addPokePost({
        variables: {
          pokePostText,
          pokePostAuthor: Auth.getProfile().data.username,
        },
      });

      setPokePostText('');
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === 'pokePostText' && value.length <= 280) {
      setPokePostText(value);
      setCharacterCount(value.length);
    }
  };

  return (
    <div className='col-12 p-5'>
      <h3 className='font-semibold leading-6 text-gray-900'>What's on your PokeMind?</h3>

      {Auth.loggedIn() ? (
        <>
          <p
            className={`m-0 text-sm leading-6 text-gray-900 ${characterCount === 280 || error ? 'text-danger' : ''
              }`}
          >
            Character Count: {characterCount}/280
          </p>
          <form
            className="flex-row justify-center justify-space-between-md align-center"
            onSubmit={handleFormSubmit}
          >
            <div className="col-12 col-lg-9">
              <textarea
                name="pokePostText"
                placeholder="Here's a new pokePost..."
                value={pokePostText}
                className="form-input w-100"
                style={{ lineHeight: '1.5', resize: 'vertical' }}
                onChange={handleChange}
              ></textarea>
            </div>

            <div className="col-12 col-lg-3">
              <button className="bg-red-500 btn btn-danger btn-block py-3" type="submit">
                Add PokePost
              </button>
            </div>
            {error && (
              <div className="col-12 my-3 bg-danger text-white p-3">
                {error.message}
              </div>
            )}
          </form>
        </>
      ) : (
        <p>
          You need to be logged in to share your pokePosts. Please{' '}
          <Link to="/login">login</Link> or <Link to="/signup">signup.</Link>
        </p>
      )}
    </div>
  );
};

export default PokePostForm;
