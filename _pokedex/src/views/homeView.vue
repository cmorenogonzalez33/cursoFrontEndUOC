<script setup>
import Title from '../components/title.vue'
import { RouterLink } from 'vue-router'
</script>

<template>
  <article :class="$theme">
    <div class="home-title">
      <Title pageTitle="Benvingut!!"/>
      <p>Aquí trobareu entreteniment i diversió pels fans dels Pokemons!</p>
      <Title pageTitle="Apunt per començar una PokeAventura??" />
    </div>
    <div class="home-explanation">
      <h2 :class="$theme">Què podeu fer aquí?</h2>
      <div class="home-go-to">
        <p>Si voleu saber més sobre els Pokemons, podeu consultar la  llista de Pokemons.<br>Us sortiran 3 pokemons aleatòris i en prodreu veure les característiques.</p>
        <p>Si voleu jugar a un joc de batalla 3x3 de Pokemons, podeu anar al camp de batalla.<br>Allí jugareu amb els vostres 3 pokemons de la llista. Trobareu un oponent i jugareu aleatòriament contra uns altres 3 pokemons.</p>
      </div>
    </div>
    <div class="home-go-to">
      <RouterLink to="/list">
        <div class="home-list">
          <h3 :class="$theme">Primer, us recomenem mirar el llistat de pokemons</h3>
        </div>
      </RouterLink>
      <RouterLink to="/battle">
        <div class="home-battle">
          <h3 :class="$theme">Un cop escollits els pokemons, podeu simular batalles!</h3>
        </div>
      </RouterLink>
    </div>
    <div class="home-theme">
      <h2 :class="$theme">Escull el tema!</h2>
      <div class="theme-buttons">
        <label for="color-palette-light">Clar</label>
        <input type="radio" id="color-palette-light" name="color-palette" value="light" @change="change_theme"> 
        <input type="radio" id="color-palette-dark" name="color-palette" value="dark" @change="change_theme" > 
        <label for="color-palette-dark">Fosc</label>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  computed: {
    $theme() {
      return this.$store.state.theme;
    }
  },
  methods: {
    change_theme( event ) {
      const theme = document.querySelector('input[name="color-palette"]:checked').value;
      this.$store.commit('setTheme',`${theme}-theme`);
      this.$global_functions.set_local_storage( `${theme}-theme` );
    }
  },
}
</script>

<style scoped>
  article {
    justify-content: space-evenly;
    align-items: center;
  }

  .home-title, .home-explanation, .home-go-to, .home-theme {
    width: 75%;
  }
  
  .home-explanation {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    
  }
  
  .home-go-to {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .home-theme {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  .home-list, .home-battle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    height: 20vh;
    text-align: center;
    margin: auto;
    /* filter: grayscale(100%); */
    border-radius: 50%;
    padding: 2.5vh 5%;
  }

  .home-list:hover, .home-battle:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform 0.5s ease-in-out;
  }

  
</style>