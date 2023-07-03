<template>
  <h1 :class="$theme">{{ pageTitle }}</h1>
</template>

<script>
export default {
  props: {
    pageTitle: {
      type: String,
      required: true
    }
  },
  computed: {
    $theme() {
      return this.$store.state.theme;
    }
  },
}
</script>