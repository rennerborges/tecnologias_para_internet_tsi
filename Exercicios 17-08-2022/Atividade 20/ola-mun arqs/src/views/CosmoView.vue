<template>
  <PageDiskTemplate :id="id" :title="title" :img="img" :urlData="urlData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageDiskTemplate from '../components/PageDiskTemplate.vue';

export default defineComponent({
  name: 'CosmoView',
  data: function () {
    return {
      id: 'cosmo',
      title: 'Cosmo',
      img: require('../assets/images/capas/cosmo.jpg'),
      urlData: 'https://myspace.api.integrasky.cloud/PgGIq7ve',
    };
  },
  components: {
    PageDiskTemplate,
  },
});
</script>

<style></style>
