<template>
  <div
    id="the-button"
    @click="handleClick()"
  >
    <p class="button-text">
      {{ text }}
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'TheButton',
  props: {
    text: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleClick() {
      this.$emit('click');
    },
  },
});
</script>

<style scoped>
#the-button {
  background-color: #002d93;
  display: inline-block;
  width: 140px;
  height: 40px;
  cursor: pointer;
}

.button-text {
  display: inline;
  color: #52f3fe;
  line-height: 40px;
}
</style>
