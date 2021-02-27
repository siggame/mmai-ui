<template>
  <div id="login-page">
    <input
      v-model="username"
      type="text"
    >
    <input
      v-model="password"
      type="password"
    >
    <button @click="verifyUser()">
      Submit
    </button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { login } from '@/services/mmaiService';

export default Vue.extend({
  name: 'LoginPage',
  data() {
    return {
      redirect: this.$route.params.redirect,
      username: '',
      password: '',
    };
  },
  methods: {
    async verifyUser() {
      const validLogin = await login(this.username, this.password);
      if (!validLogin) {
        alert('Invalid login!');
      } else {
        alert('Logged in!');
      }
    },
  },
});
</script>

<style scoped>

</style>
