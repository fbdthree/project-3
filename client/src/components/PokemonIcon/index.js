import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function PokemonIcons() {
    const [pokemonList, setPokemonList] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        getAllPokemon(151);
    }, []);

    const getAllPokemon = async (limit) => {
        setLoading(true);
        const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/?limit=${limit}`);
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
                <img className='block m-auto mt-4 w-60' src='./assets/images/pokeloading.png' />
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

    const RegionBtn = () => {
        const regions = ['Kanto', 'Johto', 'Hoenn', 'Sinnoh', 'Unova', 'Kalos', 'Alola', 'Galar', 'Paldea']

        const handleClick = (event) => {
            if (event.target.innerText === 'Kanto') {
                getAllPokemon(151);
            } else if (event.target.innerText === 'Johto') {
                getAllPokemon("100&offset=151");
            } else if (event.target.innerText === 'Hoenn') {
                getAllPokemon("135&offset=251")
            } else if (event.target.innerText === 'Sinnoh') {
                getAllPokemon("107&offset=386");
            } else if (event.target.innerText === 'Unova') {
                getAllPokemon("156&offset=493");
            } else if (event.target.innerText === 'Kalos') {
                getAllPokemon("72&offset=649");
            } else if (event.target.innerText === 'Alola') {
                getAllPokemon("88&offset=721");
            } else if (event.target.innerText === 'Galar') {
                getAllPokemon("96&offset=809");
            } else {
                getAllPokemon("103&offset=905");
            };
        };

        return (
            <div className='flex flex-wrap justify-center'>
                {regions.map((region, index) =>
                    <div className="rounded-xl overflow-hidden shadow-lg bg-slate-200 m-3">
                        <button onClick={handleClick} className='m-3 text-sm font-semibold leading-6 text-gray-900' key={index}>{region}</button>
                    </div>
                )}
            </div>
        )
    };

    return (
        <div>
            <RegionBtn />
            <div className='flex flex-wrap justify-center'>{renderedList}</div>
        </div>
    )
};