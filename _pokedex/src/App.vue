<script setup>
import Header from './components/header.vue'
import Footer from './components/footer.vue'
</script>

<template>
  <Header/>
  <Footer/>
</template>


<script>
export default {
  async created() {
    console.log('App initialized!');
    await this.$your_pokemons.fetch_pokemons();
    await this.$oponent_pokemons.fetch_pokemons();
    
  },
  mounted() {
    console.log('App mounted!');
  },
}
</script>