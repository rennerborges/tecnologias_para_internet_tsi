<template>
  <PageDiskTemplate :id="id" :title="title" :img="img" :urlData="urlData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageDiskTemplate from '../components/PageDiskTemplate.vue';

export default defineComponent({
  name: 'PraiaView',
  data() {
    return {
      id: 'praia',
      title: 'A praia',
      img: require('../assets/images/capas/apraia.webp'),
      urlData: 'https://myspace.api.integrasky.cloud/bJyDkwoZ',
    };
  },
  components: {
    PageDiskTemplate,
  },
});
</script>

<style></style>
