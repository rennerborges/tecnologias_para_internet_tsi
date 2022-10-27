<template>
  <HeaderDiskDetail
    id="cosmo"
    title="Cosmo"
    :img="require('../assets/images/capas/cosmo.jpg')"
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
  name: 'CosmoView',
  data: function () {
    return {
      musics: [
        {
          title: 'Falso Azul',
          link: 'https://www.youtube.com/watch?v=YuccUSOmfaM',
        },
        {
          title: 'Some Lazy Days',
          link: 'https://www.youtube.com/watch?v=2nEfEo-jYks',
        },
        {
          title: 'Esquinas',
          link: 'https://www.youtube.com/watch?v=vIgHiQoVRuw&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf',
        },
        {
          title: 'Às Luzes',
          link: 'https://www.youtube.com/watch?v=IuFipoLdDDc&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=2',
        },
        {
          title: 'Marinheiro Astronauta',
          link: 'https://www.youtube.com/watch?v=SicE54IBPVk&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=3',
        },
        {
          title: 'Miradouro Nova Esperança',
          link: 'https://www.youtube.com/watch?v=d_wWWJqD3oo&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=4',
        },
        {
          title: 'O Que Ficou',
          link: 'https://www.youtube.com/watch?v=QAY1DS94rJ0&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=5',
        },
        {
          title: 'A Chuva',
          link: 'https://www.youtube.com/watch?v=-ppNGiTrVNM&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=6',
        },
        {
          title: 'Banzo',
          link: 'https://www.youtube.com/watch?v=EiQqhyJ54gg&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=7',
        },
        {
          title: 'Nada ao Redor',
          link: 'https://www.youtube.com/watch?v=m8F7hpzYOMM&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=8',
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
