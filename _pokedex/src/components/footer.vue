<template>
  <footer :class="$theme">
    <h3 :class="$theme">Albert Sanahuja Llopis</h3>
    <h3 :class="$theme">UOC - 2023</h3>
  </footer>
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