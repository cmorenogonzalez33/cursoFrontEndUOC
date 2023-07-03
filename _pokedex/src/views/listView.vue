<script setup>
import Title from '../components/title.vue'
import Pokemon from '../components/pokemon.vue'
</script>

<template>
  <article :class="$theme">
    <Title pageTitle="Llistat de Pokemons" />
    <button @click="get_new_pokemons">Nous Pokemons</button>
    <section>
      <Pokemon v-for="pokemon in this.$your_pokemons.toJSON()" :key="pokemon.id" :pokemon="pokemon" @click="openModal"/>
    </section>
    <Modal ref="modal">
      <h3>{{ pokemon_title}}</h3>
      <div class="modal-attributes">
        <div class="modal-char">
          <div v-for="key in Object.keys(pokemon_char)" :key="key">
            <span><b>{{ key }}: </b></span>
            <span>{{ pokemon_char.key }}</span>
          </div>
        </div>
        <div class="modal-types">
          <h4>Types</h4>
          {{ pokemon_types }}
        </div>
        <div class="modal-stats">
          <h4>Stats</h4>
          {{ pokemon_stats }}
        </div>
        <div class="modal-stripes">
          <h4>Stripes</h4>
          <img :src="pokemon_stripes.front_default" :alt="pokemon_title">
          <img :src="pokemon_stripes.back_shiny" :alt="pokemon_title">
          <img :src="pokemon_stripes.other.dream_world.front_default" :alt="pokemon_title" width="200">
        </div>
      </div>
    </Modal>
  </article>
</template>

<script>
import Modal from '@/components/modal.vue'

export default {
  components: {
    Modal,
  },
  data() {
    return {
      pokemon_title: '',
      pokemon_char: {},
      pokemon_types: '',
      pokemon_stats: '',
      pokemon_stripes: {},
    };
  },
  computed: {
    $theme() {
      return this.$store.state.theme;
    }
  },
  mounted() {
      console.log(this.$your_pokemons.toJSON());
  },
  methods: {
    async get_new_pokemons() {
      this.$your_pokemons.remove(this.$your_pokemons.toJSON());
      this.$oponent_pokemons.remove(this.$oponent_pokemons.toJSON());
      
      await this.$your_pokemons.fetch_pokemons();
      await this.$oponent_pokemons.fetch_pokemons();

      this.$forceUpdate();
    },
    openModal( event ) {
      const pokemon_id = event.currentTarget.getAttribute('data-id');
      const pokemon_md = this.$your_pokemons.get(pokemon_id);
      const sprites = pokemon_md.get('sprites');
      const stats = pokemon_md.get('stats');
      const types = pokemon_md.get('types');
      const name = pokemon_md.get('name');
      const char = {
        height: pokemon_md.get('height'),
        weight: pokemon_md.get('weight'),
        base_experience: pokemon_md.get('base_experience'),
      }

      console.log(pokemon_md);

      this.pokemon_title = `#${pokemon_id} ${name}`;
      this.pokemon_char = char;   
      this.pokemon_types = types.map( type => type.type.name ).join(', ');   
      this.pokemon_stats = stats.map( stat => `${stat.stat.name}: ${stat.base_stat}` ).join(', ');
      this.pokemon_stripes = sprites;

      this.$refs.modal.openModal();
    },
  }

}
</script>

<style scoped>
section {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 0.5vh 1.5%;
  width: 100%;
  height: 100%;
}

button {
  border-radius: 50%;
  width: 150px;
  height: 170px;
  border: 1px solid black;
  background: linear-gradient(to bottom, red, white);
  cursor: pointer;
  padding: 0;
  transition: background 1.5s ease;
}
button:hover {
  background: linear-gradient(to bottom, rgb(144, 196, 3), rgb(24, 22, 22));
  color: white;
}

.modal-attributes {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  width: 50%;
  height: 65vh;
  max-height: 65vh;
}

</style>