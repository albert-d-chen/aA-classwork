import React from 'react';

import PokemonIndexItem from './pokemon_index_item'

class PokemonIndex extends React.Component{
    componentDidMount() {
        this.props.requestAllPokemon();
    }

    render() {
        const {pokemon} = this.props;
        // const pokemon = this.props.pokemon;
        return (
            <section className='pokedex'>
                <ul>
                    {/* {pokemon.map(poke => 
                    <li key={poke.id}>
                        {poke.name}
                        <img src={poke.image_url} height='20px' width='20px'/>
                    </li>  )} */}

                    {pokemon.map(poke => <PokemonIndexItem key={poke.id} poke={poke} />)}
                </ul>
            </section>
            
        )
    }
}

export default PokemonIndex;