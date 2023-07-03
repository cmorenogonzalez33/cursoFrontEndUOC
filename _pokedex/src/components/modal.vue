<template>
  <div v-if="isOpen" :class="['modal',$theme]">
    <!-- Modal content -->
    <div class="modal-content">
      <slot></slot>
      <button @click="closeModal">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
    };
  },
  computed: {
    $theme() {
      return this.$store.state.theme;
    }
  },
  methods: {
    openModal() {
      this.isOpen = true;
    },
    closeModal() {
      this.isOpen = false;
    },
  },
};
</script>

<style>
.modal {
  position: fixed;
  z-index: 80;
  left: 0;
  top: 0;
  width: 100%;
  height: 100vh;
  overflow: auto;
  background-color: rgba(128, 128, 128, 0.5);
}

.modal-content {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: flex-start;
  margin: 15vh auto;
  border: 1px solid #888;
  border-radius: 10px;
  width: 80%;
  min-height: 65vh;
  padding: 2.5vh 2.5%;
} 

.light-theme .modal-content {
  background-color: #fefefe;
  color: #333;
}

.dark-theme .modal-content {
  background-color: #333;
  color: white;
}

li {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5vh 0;
  text-decoration: none;
}
</style>