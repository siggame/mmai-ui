import Vue from "vue";
import Vuex, { MutationTree, ActionTree, ModuleTree } from "vuex";

Vue.use(Vuex);

// Create an interface for UserInfo
interface UserInfo {
  username: string;
  email: string;
}

// Create a State interface for TypeScript type-checking
export interface State {
  isLoading: boolean;
  userFound: boolean;
  userInfo: UserInfo | {};
  error: boolean;
  errorMessage: string;
}

// State is essentially a set of variables
const state: State = {
  isLoading: false,
  userFound: false,
  userInfo: {},
  error: false,
  errorMessage: ""
};

// Mutations are methods used to manipulate state
const mutations: MutationTree<State> = {
  updateLoading(state: State, payload: boolean) {
    state.isLoading = payload;
  },
  updateUser(state: State, payload: UserInfo) {
    state.userFound = true;
    state.userInfo = payload;
  },
  clearUser(state: State) {
    state.userFound = false;
    state.userInfo = {};
  },
  updateError(state: State, payload: string) {
    state.error = true;
    state.errorMessage = payload;
  },
  clearError(state: State) {
    state.error = false;
    state.errorMessage = "";
  }
};

// Actions are miscellaneous methods that can be async
const actions: ActionTree<State, State> = {
  async verifyUser(store) {
    try {
      // TODO - real use verification
      store.commit("updateUser", { username: "FakeUser" });
    } catch (err) {
      store.commit(
        "updateError",
        `Failed to retrieve user info for the current user. ${err}`
      );
    }
  }
};

// Modules allow us to break up our store if it gets too bloated
const modules: ModuleTree<State> = {};

// Define our global state store
export default new Vuex.Store({
  state,
  mutations,
  actions,
  modules
});
