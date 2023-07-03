<template>
  <div :class="['pokemon',pokemon.types[0].type.name]" :data-id="pokemon.id">
    <div class="header_pokemon">
      <h3 id="pokemon_id">#{{pokemon.id}}</h3>
      <h3 id="pokemon_name">{{pokemon.name}}</h3>
    </div>
    <div class="pokemon_sprite">
      <img :src="pokemon.sprites.other.dream_world.front_default" :alt="pokemon.name">
      <!-- <img :src="pokemon.sprites.front_default" :alt="pokemon.name"> -->
    </div>
  </div>
</template>

<script>
export default {
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
}
</script>

<style scoped>
.pokemon {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  padding: 0.5vh 1.5%;
  width: 20%;
  height: 50vh;
  border-color: rgb(0, 0, 0);
  border-radius: 10px;
  border-style: solid;
  border-width: 10px;
  cursor: pointer;
  transition: transform 0.5s ease;
  background-color: rgb(255, 255, 255, 0.5);
}

.pokemon_sprite {
  width: 100%;
}

.pokemon_sprite img {
  width: 100%;
  height: 75%;
  object-fit: contain;
  object-position: center;
  transition: transform 0.5s ease;
}

.pokemon_sprite:hover {
  transform: scale(1.5);
}

.header_pokemon {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
}

.water {
  border-color: rgb(0, 0, 255);
  background-color: rgb(0, 0, 255, 0.5);
}

.fire {
  border-color: rgb(255, 0, 0);
  background-color: rgb(255, 0, 0, 0.5);
}

.bug {
  border-color: rgb(0, 255, 0);
  background-color: rgb(0, 255, 0, 0.5);
}

.poison {
  border-color: rgb(128, 0, 128);
  background-color: rgb(128, 0, 128, 0.5);
}

.grass {
  border-color: rgb(0, 128, 0);
  background-color: rgb(0, 128, 0, 0.5);
}

.electric {
  border-color: rgb(255, 255, 0);
  background-color: rgb(255, 255, 0, 0.5);
}

.fairy {
  border-color: rgb(255, 192, 203);
  background-color: rgb(255, 192, 203, 0.5);
}

.fighting {
  border-color: rgb(255, 100, 0);
  background-color: rgb(255, 100, 0, 0.5);
}

.flying {
  border-color: rgb(50, 100, 255);
  background-color: rgb(50, 100, 255, 0.5);
}

.ghost {
  border-color: rgb(128, 128, 128);
  background-color: rgb(128, 128, 128, 0.5);
}

.ground {
  border-color: rgb(255, 255, 100);
  background-color: rgb(255, 255, 100, 0.5);
}

.ice {
  border-color: rgb(0, 255, 255);
  background-color: rgb(0, 255, 255, 0.5);
}

.normal {
  border-color: rgb(128, 128, 0);
  background-color: rgb(128, 128, 0, 0.5);
}

.psychic {
  border-color: rgb(200, 128, 128);
  background-color: rgb(200, 128, 128, 0.5);
}

.rock {
  border-color: rgb(50, 50, 50);
  background-color: rgb(50, 50, 50, 0.5);
}

.steel {
  border-color: rgb(100, 100, 100);
  background-color: rgb(100, 100, 100, 0.5);
}

.dragon {
  border-color: rgb(255, 94, 0);
  background-color: rgba(255, 94, 0, 0.5);
}

.dark {
  border-color: rgb(0, 0, 0);
  background-color: rgb(0, 0, 0, 0.5);
}

.shadow {
  border-color: rgb(75, 0, 0);
  background-color: rgb(75, 0, 0, 0.5);
}

.unknown {
  border-color: rgb(255, 255, 255);
  background-color: rgb(255, 255, 255, 0.5);
}



</style>
