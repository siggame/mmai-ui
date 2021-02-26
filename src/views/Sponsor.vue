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

    <TheButton
      text="Sponsor Packet"
      class="sponsor-button"
    />
    <TheButton
      text="Donate"
      class="sponsor-button"
    />

    <div class="sponsor-list">
      <SponsorBlock
        v-for="(sponsor, index) of sponsors"
        :key="index"
        :name="sponsor.name"
        :logo="sponsor.logo"
        :info="sponsor.info"
      />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import SponsorBlock from '@/components/SponsorBlock.vue';
import TheButton from '@/components/TheButton.vue';

export default Vue.extend({
  name: 'SponsorPage',
  components: {
    SponsorBlock,
    TheButton,
  },
  data() {
    return {
      sponsors: [
        { name: 'Garmin', logo: 'garmin.jpg', info: 'We are awesome!' },
        { name: 'Farmin', logo: 'logo.png', info: 'This company rocks!' },
        { name: 'Charmin', logo: 'logo.png', info: 'Woah!!!!!' },
        { name: 'Sabharwhal', logo: 'logo.png', info: 'WOOWOOWOWOWO' },
      ],
    };
  },
});
</script>

<style scoped>
#sponsor-page {

}

.sponsor-button {
  margin: 20px;
}

.sponsor-thanks {

}

.support-info {

}

.sponsor-list {

}
</style>
