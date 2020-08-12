import React from 'react';
import ReactDOM from 'react-dom';

import { RECEIVE_ALL_POKEMON, receiveAllPokemon, requestAllPokemon} from './actions/pokemon_actions';
import {fetchAllPokemon} from './util/api_util';

import configureStore from './store/store';
import {selectAllPokemon} from './reducers/selectors'

import Root from './components/root';

import {HashRouter, Route} from 'react-router-dom';

// import { Provider } from 'react-redux';

// const Root = ({store}) => (
//     <Provider store={store}>
//         <div>Hello, world!</div>
//     </Provider>
// );



document.addEventListener('DOMContentLoaded', () => {
    const rootEl = document.getElementById('root');
    const store = configureStore();
    const root = document.getElementById('root');

    window.store = store;
    window.receiveAllPokemon = receiveAllPokemon;
    window.fetchAllPokemon = fetchAllPokemon;
    window.getState = store.getState;
    window.dispatch = store.dispatch;
    window.requestAllPokemon = requestAllPokemon;
    window.selectAllPokemon = selectAllPokemon;

    ReactDOM.render(<Root store={store}/>, root);
    // ReactDOM.render(<h1>Pokedex</h1>, rootEl);
})