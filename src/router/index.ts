import Vue from "vue";
import VueRouter, { RouteConfig, Route } from "vue-router";
import store from "../store";

// Route-level code-splitting using lazy-loaded components
// Using components as functions that import the actual component code when called
// Reduces initial load time for the website by loading pages as-needed
// Code is sent to the browser in named webpack chunks (example: home.[hash].js)
const Home = () => import(/* webpackChunkName: "home" */ "../views/Home.vue");
const About = () =>
  import(/* webpackChunkName: "about" */ "../views/About.vue");
const Error = () =>
  import(/* webpackChunkName: "error" */ "../views/Error.vue");

// Apply a VueRouter to our Vue instance
Vue.use(VueRouter);

// Define the different pages of our application
const routes: Array<RouteConfig> = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    component: About
  },
  {
    path: "/error",
    name: "Error",
    component: Error
  },

  // This route will match anything which isn't matched above
  {
    path: "*",
    name: "NotFound",
    component: Error
  }
];

// Create a router with the defined routes
const router = new VueRouter({
  mode: "history",
  routes
});

// Function to check if a user has permission to view a specific route
async function userHasPermission(to: Route) {
  // Fetch user data if we don't already have it
  if (!store.state.userFound) {
    await store.dispatch("verifyUser");
  }

  if (to.name === "NotFound") {
    store.commit("updateError", "Page not found.");
  }

  return true;
}

// Async function called before every route load
router.beforeEach(async (to, _from, next) => {
  // Set page as currently loading
  store.commit("updateLoading", true);

  // Check if the user has permission to view their intended route
  const hasPermission = await userHasPermission(to);

  if (!hasPermission) {
    store.commit(
      "updateError",
      "You do not have permission to view this page!"
    );
    next({ name: "Error" });
  } else {
    next();
  }
});

// Function called after each route load
router.afterEach(() => {
  // Set page as no long loading
  store.commit("updateLoading", false);
});

export default router;
