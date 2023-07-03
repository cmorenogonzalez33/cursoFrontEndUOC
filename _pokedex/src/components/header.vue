<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header :class="$theme">
    
    <div class="wrapper">
      <nav>
        <RouterLink to="/">
          <img alt="Pokedex logo" class="logo" src="@/assets/img/logo.png" width="40" height="40" />
        </RouterLink>
        <RouterLink to="/list">Llistat</RouterLink>
        <RouterLink to="/battle">Batalla</RouterLink>
      </nav>
    </div>
    <h1 :class="$theme">PAC 4 - Pokedex</h1>
  </header>
  <RouterView />
</template>

<script>
export default {
  computed: {
    $theme() {
      return this.$store.state.theme;
    }
  },
}
</script>

