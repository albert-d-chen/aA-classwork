// const pokemonItems = pokemon.map(poke => (
//     <PokemonIndexItem key={poke.id} pokemon={poke} />
// ));

// // And inside the render:
// render(){
// <section className="pokedex">
//     <ul>{pokemonItems}</ul>
// </section>;
// }

import React from 'react';
import {Link} from 'react-router-dom';

//{poke} = props.poke
const PokemonIndexItem = ({poke}) => (
    <li key ={poke.id}>
        <Link to={`/pokemon/{poke.id}`}>
            {poke.name}
            <img src={poke.image_url} height='20px' width='20px' />
        </Link>
    </li>
)

export default PokemonIndexItem;