<template>
  <HeaderDiskDetail
    id="praia"
    title="A Praia"
    :img="require('../assets/images/capas/apraia.webp')"
  />

  <ContainerMusic :musics="musics" />

  <FooterCiceroPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterCiceroPage from '../components/Footer.vue';
import HeaderDiskDetail from '../components/HeaderDiskDetail.vue';
import ContainerMusic from '../components/ContainerMusic.vue';

export default defineComponent({
  name: 'PraiaView',
  data() {
    return {
      musics: [
        {
          title: 'Frevo por Acaso Nº 2',
          link: 'https://www.youtube.com/watch?v=74v5XBZqBys&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh',
        },
        {
          title: 'A Praia',
          link: 'https://www.youtube.com/watch?v=k_nJfb_FTmc&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=2',
        },
        {
          title: 'Camomila',
          link: 'https://www.youtube.com/watch?v=IiGe9haKYWU&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=3',
        },
        {
          title: 'De Passagem',
          link: 'https://www.youtube.com/watch?v=9RmKC0j70w8&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=4',
        },
        {
          title: 'O Bobo',
          link: 'https://www.youtube.com/watch?v=sEVlwiDa1K8&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=5',
        },
        {
          title: 'Soneto de Santa Cruz',
          link: 'https://www.youtube.com/watch?v=n3djzGDMnr8&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=6',
        },
        {
          title: 'Isabel (Carta de um Pai Aflito)',
          link: 'https://www.youtube.com/watch?v=mEN5hL6_eA8&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=7',
        },
        {
          title: 'Albatroz',
          link: 'https://www.youtube.com/watch?v=pNRBt1nD8ok&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=8',
        },
        {
          title: 'Cecília e a Máquina (part. Luiza Mayall)',
          link: 'https://www.youtube.com/watch?v=v1pGUPX_-co&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=9',
        },
        {
          title: 'Terminal Alvorada',
          link: 'https://www.youtube.com/watch?v=VSnnfUJ-umI&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=10',
        },
      ],
    };
  },
  components: {
    FooterCiceroPage,
    HeaderDiskDetail,
    ContainerMusic,
  },
});
</script>

<style></style>
