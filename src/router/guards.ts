import { Route } from 'vue-router';
import store from '../store';

// Function to check if a user has permission to view a specific route
async function userHasPermission(to: Route) {
  // Fetch user data if we don't already have it
  if (!store.state.userFound) {
    await store.dispatch('verifyUser');
  }

  if (to.name === 'NotFound') {
    store.commit('updateError', 'Page not found.');
  }

  return true;
}

// Async function called before every route load
export async function beforeGuard(to: Route, _from: Route, next: Function) {
  // Set page as currently loading
  store.commit('updateLoading', true);

  // Ensure the user is logged in
  if (!store.state.userFound && to.name !== 'Login') {
    return next({ name: 'Login' });
  }

  // Check if the user has permission to view their intended route
  const hasPermission = await userHasPermission(to);

  if (!hasPermission) {
    store.commit(
      'updateError',
      'You do not have permission to view this page!',
    );
    return next({ name: 'Error' });
  }

  return next();
}

// Function called after each route load
export async function afterGuard() {
  // Set page as no long loading
  store.commit('updateLoading', false);
}
