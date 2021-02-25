<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">
        Home
      </router-link> |
      <router-link to="/about">
        About
      </router-link>
    </div>
    <LoadIcon v-if="isLoading" />
    <router-view />
    <TheFooter />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { mapState } from 'vuex';
import { State } from './store/types';
import LoadIcon from './components/LoadIcon.vue';
import TheFooter from './components/TheFooter.vue';

export default Vue.extend({
  name: 'App',
  components: {
    LoadIcon,
    TheFooter,
  },
  computed: {
    ...mapState<State>({
      isLoading: (state: State) => state.isLoading,
    }),
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

body {
  margin: 0;
  padding: 0;
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
