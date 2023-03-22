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


                    {loading ? (
                        <div>Loading...</div>
                    ) : (
                        <PokePostList
                            pokePosts={pokePosts}
                        />
                    )}


        </main>
    );
};

export default PokeBlog;
