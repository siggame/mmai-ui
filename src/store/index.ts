import Vue from 'vue';
import Vuex from 'vuex';
import {
  state, mutations, actions, modules,
} from './properties';

Vue.use(Vuex);

// Define our global state store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules,
});
