<template>
  <PageDiskTemplate :id="id" :title="title" :img="img" :urlData="urlData" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import PageDiskTemplate from '../components/PageDiskTemplate.vue';

export default defineComponent({
  name: 'CancoesView',
  data() {
    return {
      id: 'cancoes',
      title: 'Canções de apartamento',
      img: require('../assets/images/capas/cancoes.jpg'),
      urlData: 'https://myspace.api.integrasky.cloud/GwvqADZW',
    };
  },
  components: {
    PageDiskTemplate,
  },
});
</script>

<style></style>
