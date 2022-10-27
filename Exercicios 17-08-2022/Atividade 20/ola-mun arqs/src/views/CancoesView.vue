<template>
  <HeaderDiskDetail
    id="cancoes"
    title="Canções de apartamento"
    :img="require('../assets/images/capas/cancoes.jpg')"
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
  name: 'CancoesView',
  data() {
    return {
      musics: [
        {
          title: 'Tempo de Pipa',
          link: 'https://www.youtube.com/watch?v=4tcXqoGZT5Q&list=PLF135D5B2A6F39BB2',
        },
        {
          title: 'Vagalumes Cegos',
          link: 'https://www.youtube.com/watch?v=u9xca10Qw34&list=PLF135D5B2A6F39BB2&index=2',
        },
        {
          title: 'Cecília & os Balões',
          link: 'https://www.youtube.com/watch?v=UPgsJQvf-og&list=PLF135D5B2A6F39BB2&index=3',
        },
        {
          title: 'João e o Pé de Feijão',
          link: 'https://www.youtube.com/watch?v=sWNfRYuIiKI&list=PLF135D5B2A6F39BB2&index=4',
        },
        {
          title: 'Ensaio Sobre Ela',
          link: 'https://www.youtube.com/watch?v=umBMuX9S5U4&list=PLF135D5B2A6F39BB2&index=5',
        },
        {
          title: 'Açúcar ou Adoçante',
          link: 'https://www.youtube.com/watch?v=ActJUnUHLXU&list=PLF135D5B2A6F39BB2&index=6',
        },
        {
          title: 'Eu Não Tenho um Barco, Disse a Árvore',
          link: 'https://www.youtube.com/watch?v=d-zOgL0q1iE&list=PLF135D5B2A6F39BB2&index=7',
        },
        {
          title: 'Laiá Laiá',
          link: 'https://www.youtube.com/watch?v=Y91tW4-BawY&list=PLF135D5B2A6F39BB2&index=8',
        },
        {
          title: 'Pelo Interfone',
          link: 'https://www.youtube.com/watch?v=nTYojs64cc0&list=PLF135D5B2A6F39BB2&index=9',
        },
        {
          title: 'Ponto Cego',
          link: 'https://www.youtube.com/watch?v=Hr8R-EmYfEU&list=PLF135D5B2A6F39BB2&index=10',
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
