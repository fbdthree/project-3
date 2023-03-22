import React from 'react';
import { useQuery } from '@apollo/client';

import PokePostList from '../components/PokePostList';
import PokePostForm from '../components/PokePostForm';

import { QUERY_POKEPOSTS } from '../utils/queries';

const PokeBlog = () => {
    const { loading, data } = useQuery(QUERY_POKEPOSTS);
    const pokePosts = data?.pokePosts || [];

    return (
        <main>
            <div className="flex-row justify-center container mt-4 bg-slate-200 rounded-xl">
                <PokePostForm />
            </div>
            <div>
                <div className="container mx-auto mt-10 px-4 bg-slate-200 rounded-xl">
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

export default PokeBlog;
