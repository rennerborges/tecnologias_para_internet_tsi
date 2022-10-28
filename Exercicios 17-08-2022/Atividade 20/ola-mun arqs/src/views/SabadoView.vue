<template>
  <PageDiskTemplate :id="id" :title="title" :img="img" :urlData="urlData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageDiskTemplate from '../components/PageDiskTemplate.vue';

export default defineComponent({
  name: 'SabadoView',
  data() {
    return {
      id: 'sabado',
      title: 'Sábado',
      img: require('../assets/images/capas/sabado.jpg'),
      urlData: 'https://myspace.api.integrasky.cloud/MPkVbeMv',
    };
  },
  components: {
    PageDiskTemplate,
  },
});
</script>

<style></style>
