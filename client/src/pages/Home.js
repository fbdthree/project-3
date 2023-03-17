import React from 'react';
import { useQuery } from '@apollo/client';

import PokePostList from '../components/PokePostList';
import PokePostForm from '../components/PokePostForm';

import { QUERY_POKEPOSTS } from '../utils/queries';

const Home = () => {
  const { loading, data } = useQuery(QUERY_POKEPOSTS);
  const pokePosts = data?.pokePosts || [];

  return (
    <main>
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          <PokePostForm />
        </div>
        <div className="col-12 col-md-8 mb-3">
          {loading ? (
            <div>Loading...</div>
          ) : (
            <PokePostList
              pokePosts={pokePosts}
              title="Some Feed for PokePosts(s)..."
            />
          )}
        </div>
      </div>
    </main>
  );
};

export default Home;
