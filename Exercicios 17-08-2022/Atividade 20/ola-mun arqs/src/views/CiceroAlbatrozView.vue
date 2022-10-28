<template>
  <PageDiskTemplate :id="id" :title="title" :img="img" :urlData="urlData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageDiskTemplate from '../components/PageDiskTemplate.vue';

export default defineComponent({
  name: 'CiceroAlbatrozView',
  data() {
    return {
      id: 'ciceroealbatroz',
      title: 'Cícero & Albatroz',
      img: require('../assets/images/capas/ciceroealbatroz.jpg'),
      urlData: 'https://myspace.api.integrasky.cloud/mT0XQ3T5',
    };
  },
  components: {
    PageDiskTemplate,
  },
});
</script>

<style></style>
