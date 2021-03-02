<template>
  <div id="app">
    <LoadIcon v-if="isLoading" />
    <router-view />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { State } from './store/types';
import LoadIcon from './components/LoadIcon.vue';

export default Vue.extend({
  name: 'App',
  components: {
    LoadIcon,
  },
  computed: {
    ...mapState<State>({
      isLoading: (state: State) => state.isLoading,
    }),
  },
});
</script>

<style>
@import './assets/styles/main.css';

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
