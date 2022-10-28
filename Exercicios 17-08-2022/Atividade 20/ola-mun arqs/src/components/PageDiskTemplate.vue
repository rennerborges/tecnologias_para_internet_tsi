<template>
  <HeaderDiskDetail :id="id" :title="title" :img="img" />

  <ContainerMusic :musics="musics" :loading="loading" />

  <FooterCiceroPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import axios from 'axios';

import FooterCiceroPage from './Footer.vue';
import HeaderDiskDetail from './HeaderDiskDetail.vue';
import ContainerMusic from './ContainerMusic.vue';

export default defineComponent({
  name: 'PageDiskTemplate',
  data() {
    return { musics: [], loading: false };
  },
  props: {
    id: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    urlData: {
      type: String,
      required: true,
    },
  },
  created() {
    // Creating loader
    window.scrollTo(0, 0);

    this.loading = true;

    axios
      .get(this.urlData)
      .then((response) => {
        // JSON responses are
        // automatically parsed
        this.musics = response.data.musics;
        this.loading = false;
      })

      // Dealing with errors
      .catch((error) => {
        console.log('Error: ', error);
        this.loading = false;
      });
  },
  components: {
    FooterCiceroPage,
    HeaderDiskDetail,
    ContainerMusic,
  },
});
</script>

<style></style>
