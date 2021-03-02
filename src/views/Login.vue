<template>
  <div id="login-page">
    <div class="login-box">
      <div class="logo-bubble">
        <img
          class="login-logo"
          src="../assets/images/wrench.png"
        >
      </div>
      <h1 class="login-header">
        Log in to your MMAI account
      </h1>
      <div class="login-form">
        <input
          v-model="username"
          type="text"
        >
        <input
          v-model="password"
          type="password"
        >
      </div>
    </div>
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
#login-page {
  background-color: #000b22;
  height: 100%;
  padding: 100px;
}

.logo-bubble {
  background-color: #002d93;
  display: inline-block;
  border-radius: 100%;
  margin-top: -50px;
  height: 100px;
  width: 100px;
}

.login-logo {
  height: 100px;
  width: 100px;
  margin: auto;
}

.login-box {
  height: 500px;
  width: 400px;
  background-color: #002d93;
  position: static;
  margin: auto;
}

.login-header {
  color: #52f3fe;
  font-size: 24px;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.login-form input {
  height: 20px;
  display: inline-block;
}
</style>
