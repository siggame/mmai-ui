<template>
  <div id="sponsor-block">
    <div class="block-side logo-side">
      <img
        class="sponsor-logo"
        alt="Vue logo"
        :src="getLogoUrl()"
      >
    </div>
    <div class="block-side info-side">
      <h1>{{ name }}</h1>
      <p>{{ info }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SponsorBlock',
  props: {
    logo: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    info: {
      type: String,
      required: true,
    },
  },
  methods: {
    getLogoUrl() {
      return require(`@/assets/sponsors/${this.logo}`);
    },
  },
});
</script>

<style scoped>
#sponsor-block {
  display: flex;
  background-color: lightgreen;
  height: 350px;
  margin: 10px;
}

.block-side {
  display: inline-block;
  height: 100%;
}

.logo-side {
  width: 25%;
}

.info-side {
  width: 75%;
}

.sponsor-logo {
  max-width: 100%;
  max-height: 350px;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
}
</style>
