import {Model, Collection } from 'backbone';

const pokemon_md = Model.extend({
  defaults: {
    id: null,
    name: null,
    sprites: null,
    types: null,
    height: null,
    weight: null,
    abilities: null,
    stats: null,
  }
});

const pokemons_cl = Collection.extend({
  model: pokemon_md,
  total_pokemons: 3,
  limit: 151,
  pokemon_api_url: 'https://pokeapi.co/api/v2/pokemon/',
  initialize: function() {
    console.log('Pokemon collection initialized');
  },
  fetch_pokemons: async function() {
    let ret = true;
    try {
      let random_id_arr = [];
      for( let i = 0; i < this.total_pokemons; i++ ) {
        let random_id = Math.floor( Math.random() * this.limit ) + 1;
        if (random_id_arr.includes(random_id)) {
          i--;
          continue;
        }
        
        const url = `${this.pokemon_api_url}${random_id}`;

        await fetch( url )
          .then( response => response.json() )
          .then( data => {
            this.add( data );
          });
        
        random_id_arr.push(random_id);
      }
      
    } catch (error) {
      console.log(`Error: ${error}`)
      ret = false;
    } finally {
      return ret;
    }
    
  }
});

export default pokemons_cl;
