// import React from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Footer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   return (
//     <footer className="w-100 mt-auto bg-secondary p-4">
//       <div className="container text-center mb-5">
//         {location.pathname !== '/' && (
//           <button
//             className="btn btn-dark mb-3"
//             onClick={() => navigate(-1)}
//           >
//             &larr; Go Back
//           </button>
//         )}
//         <h4>
//           Made with{' '}
//           <span
//             className="emoji"
//             role="img"
//             aria-label="heart"
//             aria-hidden="false"
//           >
//             ❤️
//           </span>{' '}
//           by the Tech Thoughts team.
//         </h4>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Footer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [pokemonFact, setPokemonFact] = useState('');

//   useEffect(() => {
//     const fetchPokemonFact = async () => {
//       const response = await fetch('https://pokeapi.co/api/v2/characteristic/1/');
//       const data = await response.json();
//       const randomFact = data.descriptions[Math.floor(Math.random() * data.descriptions.length)].description;
//       setPokemonFact(randomFact);
//     };
//     fetchPokemonFact();
//   }, []);

//   return (
//     <footer className="w-100 mt-auto bg-secondary p-4">
//       <div className="container text-center mb-5">
//         {location.pathname !== '/' && (
//           <button
//             className="btn btn-dark mb-3"
//             onClick={() => navigate(-1)}
//           >
//             &larr; Go Back
//           </button>
//         )}
//         <h2>Random Pokemon Fact: {pokemonFact}</h2>
//         <h4>
//           Made with{' '}
//           <span
//             className="emoji"
//             role="img"
//             aria-label="heart"
//             aria-hidden="false"
//           >
//             ❤️
//           </span>{' '}
//           by the Tech Thoughts team. 
//         </h4>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

// import React, { useEffect, useState } from 'react';
// import { useLocation, useNavigate } from 'react-router-dom';

// const Footer = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const [randomPokemon, setRandomPokemon] = useState('');

//   useEffect(() => {
//     const fetchRandomPokemon = async () => {
//       const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118');
//       const data = await response.json();
//       const randomIndex = Math.floor(Math.random() * data.results.length);
//       const randomPokemonUrl = data.results[randomIndex].url;
//       const pokemonResponse = await fetch(randomPokemonUrl);
//       const pokemonData = await pokemonResponse.json();
//       setRandomPokemon(pokemonData.name);
//     };
//     fetchRandomPokemon();
//   }, []);

//   return (
//     <footer className="w-100 mt-auto bg-secondary p-4">
//       <div className="container text-center mb-5">
//         {location.pathname !== '/' && (
//           <button
//             className="btn btn-dark mb-3"
//             onClick={() => navigate(-1)}
//           >
//             &larr; Go Back
//           </button>
//         )}
//         <h4>
//           Made with{' '}
//           <span
//             className="emoji"
//             role="img"
//             aria-label="heart"
//             aria-hidden="false"
//           >
//             ❤️
//           </span>{' '}
//           by the Tech Thoughts team. Random Pokemon: {randomPokemon}
//         </h4>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [randomPokemon, setRandomPokemon] = useState('');
  const [randomPokemonImageUrl, setRandomPokemonImageUrl] = useState('');

  useEffect(() => {
    const fetchRandomPokemon = async () => {
      const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=1118');
      const data = await response.json();
      const randomIndex = Math.floor(Math.random() * data.results.length);
      const randomPokemonUrl = data.results[randomIndex].url;
      const pokemonResponse = await fetch(randomPokemonUrl);
      const pokemonData = await pokemonResponse.json();
      setRandomPokemon(pokemonData.name);
      setRandomPokemonImageUrl(pokemonData.sprites.front_default);
    };
    fetchRandomPokemon();
  }, []);

  return (
    <footer className="w-100 mt-auto bg-secondary p-4">
      <div className="container text-center mb-5">
        {location.pathname !== '/' && (
          <button
            className="btn btn-danger mb-3"
            onClick={() => navigate(-1)}
          >
            &larr; Go Back
          </button>
        )}
        
        <h4 className='text-xs'>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️
          </span>{' '}
          by the Pokemon team. 
        </h4>
        <h2 className='text-base'>Random Pokemon Buddy: {randomPokemon}</h2>
        {randomPokemonImageUrl && (
          <img className='block m-auto' src={randomPokemonImageUrl} alt={`A picture of ${randomPokemon}`} />
        )}
      </div>
    </footer>
  );
};

export default Footer;

