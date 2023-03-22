import React from 'react';
import { Navigate, useParams } from 'react-router-dom';
import { useQuery } from '@apollo/client';

import PokePostForm from '../components/PokePostForm';
import PokePostList from '../components/PokePostList';

import { QUERY_USER, QUERY_ME } from '../utils/queries';

import Auth from '../utils/auth';

const Profile = () => {
  const { username: userParam } = useParams();

  const { loading, data } = useQuery(userParam ? QUERY_USER : QUERY_ME, {
    variables: { username: userParam },
  });

  const user = data?.me || data?.user || {};
  // navigate to personal profile page if username is yours
  if (Auth.loggedIn() && Auth.getProfile().data.username === userParam) {
    return <Navigate to="/me" />;
  }

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!user?.username) {
    return (
      <h4>
        You need to be logged in to see this. Use the navigation links above to
        sign up or log in!
      </h4>
    );
  }
  console.log(user.username)
  return (
    <div>
      <div className="flex-row justify-center mb-3">
        <h2 className="col-12 col-md-10 bg-danger text-light p-3 mb-5">
          Trainer {`${user.username}'s PokeThoughts`}!
        </h2>
        {!userParam && (
          <div
            className="flex-row justify-center container mt-4 bg-slate-200 rounded-xl"
          >
            <PokePostForm />
          </div>
        )}
        <div className="col-12 col-md-10 mb-5">
          <PokePostList
            pokePosts={user.pokePosts}
            title={`${user.username}'s pokePosts...`}
            showTitle={false}
            showUsername={false}
          />
        </div>
      </div>
    </div>
  );
};

export default Profile;
