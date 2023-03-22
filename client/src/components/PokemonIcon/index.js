import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonIcons() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllPokemon();
    }, []);

    const getAllPokemon = async (limit) => {
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=1281`);
        const pokemons = response.data.results
        const pokemonPromises = pokemons.map(pokemon => {
            const url = `${pokemon.url}`
            return getPokemon(url)
        });

        Promise.all(pokemonPromises).then(pokemonData => {
            setPokemonList(pokemonData);
        });
        setLoading(false);
    };

    const getPokemon = async (url) => {
        const response = await axios.get(url)
        return response.data
    };

    if (loading) {
        return (
            <div>
                <img className='block m-auto mt-4 w-60' src='Assets/loading.png' />
            </div>
        )
    };

    const renderedList = pokemonList.map((pokemon) => {
        return (
            <div className="rounded-xl overflow-hidden shadow-lg bg-slate-200 m-3" key={pokemon.id}>
                <div className="text-right m-2 font-bold">#{pokemon.id}</div>
                <img className="w-full" src={pokemon.sprites.front_default} />
                <div className="m-3 text-sm font-semibold leading-6 text-gray-900 text-center">{pokemon.species.name}</div>
            </div>
        )
    });

    return (
        <div>
            <div className='flex flex-wrap justify-center'>{renderedList}</div>
        </div>
    )
};