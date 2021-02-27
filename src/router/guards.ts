import { Route } from 'vue-router';
import store from '../store';

// Function to check if a user has permission to view a specific route
async function userHasPermission(to: Route) {
  return true;
}

// Async function called before every route load
export async function beforeGuard(to: Route, _from: Route, next: Function) {
  // Set page as currently loading
  store.commit('updateLoading', true);

  // Ensure the user is logged in
  if (!store.state.userFound && to.name !== 'Login') {
    return next({ name: 'Login', params: { redirect: to.name } });
  }

  // Check if the user has permission to view their intended route
  const hasPermission = await userHasPermission(to);

  if (to.name === 'NotFound') {
    store.commit('updateError', 'Page not found.');
  }

  if (!hasPermission) {
    store.commit(
      'updateError',
      'You do not have permission to view this page!',
    );
    return next({ name: 'Home' });
  }

  return next();
}

// Function called after each route load
export async function afterGuard() {
  // Set page as no long loading
  store.commit('updateLoading', false);
}
