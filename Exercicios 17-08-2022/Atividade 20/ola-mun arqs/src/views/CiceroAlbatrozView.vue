<template>
  <HeaderDiskDetail
    id="ciceroealbatroz"
    title="Cícero & Albatroz"
    :img="require('../assets/images/capas/ciceroealbatroz.jpg')"
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
  name: 'CiceroAlbatrozView',
  data() {
    return {
      musics: [
        {
          title: 'Aurora Nº 1',
          link: 'https://www.youtube.com/watch?v=08yAr8bOB_g&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr',
        },
        {
          title: 'A Ilha',
          link: 'https://www.youtube.com/watch?v=q01MHaQ8VTY&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=2',
        },
        {
          title: 'Não Se Vá',
          link: 'https://www.youtube.com/watch?v=H0YiKPc0QU0&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=3',
        },
        {
          title: 'À Deriva',
          link: 'https://www.youtube.com/watch?v=fkPH5Gp4VaY&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=4',
        },
        {
          title: 'A Cidade',
          link: 'https://www.youtube.com/watch?v=UkxpmKudpkc&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=5',
        },
        {
          title: 'Velho Sitio',
          link: 'https://www.youtube.com/watch?v=-WJAFlk_wcM&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=6',
        },
        {
          title: 'A Rua Mais Deserta',
          link: 'https://www.youtube.com/watch?v=mNcKdsMi1VE&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=7',
        },
        {
          title: 'A Grande Onda',
          link: 'https://www.youtube.com/watch?v=iepKbTPH13Q&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=8',
        },
        {
          title: 'Aquele Adeus',
          link: 'https://www.youtube.com/watch?v=AnShDihu1EI&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=9',
        },
        {
          title: 'Um Arco',
          link: 'https://www.youtube.com/watch?v=8k_ZdYGSyzQ&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=10',
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
