<template>
  <div id="sponsor-page">
    <div class="sponsor-thanks">
      <h1>Our Sponsors</h1>
      <p>We really appreciate our sponsors.</p>
    </div>

    <div class="support-info">
      <h1>How to Support Us</h1>
      <p>Sponsor packet download, donate button</p>
    </div>

    <div class="sponsor-list">
      <SponsorBlock
        logo="garmin.jpg"
        name="Garmin"
        info="We are awesome!"
      />
      <SponsorBlock
        logo="logo.png"
        name="Farmin"
        info="This company rocks!"
      />
      <SponsorBlock
        logo="logo.png"
        name="Charmin"
        info="Woah!!!!!"
      />
      <SponsorBlock
        logo="logo.png"
        name="Sabharwhal"
        info="WOOWOOWOWOWO"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SponsorBlock from '@/components/SponsorBlock.vue';

export default Vue.extend({
  name: 'SponsorPage',
  components: {
    SponsorBlock,
  },
});
</script>

<style scoped>
#sponsor-page {

}

.sponsor-thanks {

}

.support-info {

}

.sponsor-list {

}
</style>
