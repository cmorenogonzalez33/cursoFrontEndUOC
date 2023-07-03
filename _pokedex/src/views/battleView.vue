<script setup>
import Title from '../components/title.vue'
import Pokemon from '../components/pokemon.vue'
import Modal from '@/components/modal.vue'
</script>

<template>
  <article :class="$theme">
    <section>
      <Pokemon v-for="pokemon in this.$your_pokemons.toJSON()" :key="pokemon.id" :pokemon="pokemon"/>
    </section>
    <section class="central-battle">
      <div :class="['vs',$theme]" @click="start_battle">
        <Title pageTitle="Batalla 3x3" />
        <h3>{{ battle_message }}</h3>
        <h1>{{ r1 }} - {{ r2 }}</h1>
      </div>
      <div>
        <button @click="get_new_pokemons">Nous Pokemons</button>
        <button @click="reset_battle">Reinicia la batalla</button>
      </div>
    </section>
    <section>
      <Pokemon v-for="pokemon in this.$oponent_pokemons.toJSON()" :key="pokemon.id" :pokemon="pokemon"/>
    </section>
    <Modal ref="modal">
      <div class="battle">
        <div class="header_pokemon">
          <h3>#{{ypokemon.id}}</h3>
          <h3>{{ypokemon.name}}</h3>
        </div>
        <div class="pokemon_sprite">
        <img :src="ypokemon.sprites.other.dream_world.front_default" :alt="ypokemon.name">
        </div>
        <div class="pokemon_stats">
          <div v-for="stat in ypokemon.stats" :key="stat.stat.name">
            <span><b>{{ stat.stat.name }}: </b></span>
            <span>{{ stat.base_stat }}</span>
          </div>
        </div>
        <div class="pokemon_result">
          <h1>{{ yresult }}</h1>
        </div>
      </div>
      <div class="battle">
        <div class="header_pokemon">
          <h3>#{{opokemon.id}}</h3>
          <h3>{{opokemon.name}}</h3>
        </div>
        <div class="pokemon_sprite">
        <img :src="opokemon.sprites.other.dream_world.front_default" :alt="opokemon.name">
        </div>
        <div class="pokemon_stats">
          <div v-for="stat in opokemon.stats" :key="stat.stat.name">
            <span><b>{{ stat.stat.name }}: </b></span>
            <span>{{ stat.base_stat }}</span>
          </div>
        </div>
        <div class="pokemon_result">
          <h1>{{ oresult }}</h1>
        </div>
      </div>
    </Modal>
    
    
  </article>
</template>

<script>
export default {
  components: {
    Modal,
  },
  data() {
    return {
      r1: 0,
      r2: 0,
      ypokemon: {},
      opokemon: {},
      yresult: '',
      oresult: '',
      battle_message: 'Click para empezar la batalla!',
    };
  },
  computed: {
    $theme() {
      return this.$store.state.theme;
    },
    
  },
  mounted() {
    console.log(this.$your_pokemons.toJSON());
    console.log(this.$oponent_pokemons.toJSON());
  },
  methods: {
    async get_new_pokemons() {
      this.reset_battle();

      this.$your_pokemons.remove(this.$your_pokemons.toJSON());
      this.$oponent_pokemons.remove(this.$oponent_pokemons.toJSON());
      
      await this.$your_pokemons.fetch_pokemons();
      await this.$oponent_pokemons.fetch_pokemons();

      this.$forceUpdate();
    },
    reset_battle() {
      this.r1 = 0;
      this.r2 = 0;
      this.yresult = '';
      this.oresult = '';
    },
    start_battle() {
      const ypokemons = this.$your_pokemons.toJSON();
      const opokemons = this.$oponent_pokemons.toJSON();

      let i = Math.floor(Math.random() * 3);
      let j = Math.floor(Math.random() * 3);

      this.ypokemon = ypokemons[i];
      this.opokemon = opokemons[j];

      const yhealth = this.ypokemon.stats[0].base_stat;
      const ohealth = this.opokemon.stats[0].base_stat;

      const yattack = this.ypokemon.stats[1].base_stat;
      const oattack = this.opokemon.stats[1].base_stat;

      const ydefense = this.ypokemon.stats[2].base_stat;
      const odefense = this.opokemon.stats[2].base_stat;

      const result = (health, attack, defense) => {
        return Math.floor((((2 * 50) / 5 + 2) * attack * 50) / defense / 50 + 2);
      };

      const res1 = result(yhealth, oattack, ydefense);
      const res2 = result(ohealth, yattack, odefense);

      if (res1 > res2) {
        this.yresult = 'Gana';
        this.oresult = 'Pierde';
        this.r1++;
      } else if (res1 < res2) {
        this.yresult = 'Pierde';
        this.oresult = 'Gana';
        this.r2++;
      } else {
        this.yresult = 'Empate';
        this.oresult = 'Empate';
      }

      this.$refs.modal.openModal();
    },
  },
}
</script>

<style scoped>
.central-battle {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  height: 100%;
}

.central-battle button{
  width: 100%;
  height: 5vh;
  border-radius: 10px;
  background-color: #f1f1f1;
  border: none;
  cursor: pointer;
  transition: all 1s ease-in-out;
}


  .battle {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    width: 50%;
    height: 50%;
  }
  .vs {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50vh;
    border-radius: 50%;
    cursor: pointer;
    transition: all 1.5s ease-in-out;
  }
  .vs.dark-theme {
    background-color: rgb(0, 0, 0, 50%);
    color: white;
  }
  .vs.light-theme {
    background-color: rgb(255, 255, 255, 50%);
    color: black;
  }

  .vs:hover {
    border-radius: 30%;
    background-color: rgba(255, 0, 0, 0.5);
    color: white;
  }

  article {
    display: flex;
    flex-direction: row;
    background-image: url("../assets/img/camp_batalla.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    justify-content: space-evenly;
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    padding: 0.5vh 1.5%;
    width: 100%;
    height: 35vh;
  }

  .pokemon {
    width: 35% !important;
    height: 35vh !important;
  }
  
  
  .modal-content .pokemon_sprite img{
    width: 100%;
    max-height: 50%;

  }

</style>

