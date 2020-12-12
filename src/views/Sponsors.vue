<template>
  <div class="sponsors">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Sponsors Page"> </HelloWorld>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "@/components/HelloWorld.vue";

export default Vue.extend({
  name: "Sponsors",
  components: {
    HelloWorld
  }
});
</script>
