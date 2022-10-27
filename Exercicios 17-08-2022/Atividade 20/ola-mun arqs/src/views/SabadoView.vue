<template>
  <HeaderDiskDetail
    id="sabado"
    title="Sábado"
    :img="require('../assets/images/capas/sabado.jpg')"
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
  name: 'SabadoView',
  data() {
    return {
      musics: [
        {
          title: 'Fuga Nº 3 da Rua Nestor',
          link: 'https://www.youtube.com/watch?v=zqOlcZkUOjc&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v',
        },
        {
          title: 'Capim-Limão',
          link: 'https://www.youtube.com/watch?v=usJ0ASCXyys&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=2',
        },
        {
          title: 'Ela e a Lata',
          link: 'https://www.youtube.com/watch?v=l7gDg8LdfwM&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=3',
        },
        {
          title: 'Fuga Nº 4',
          link: 'https://www.youtube.com/watch?v=gnOJAkE5XUU&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=4',
        },
        {
          title: 'Pra Animar o Bar',
          link: 'https://www.youtube.com/watch?v=LGxpAF2tBWI&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=5',
        },
        {
          title: 'Por Botafogo',
          link: 'https://www.youtube.com/watch?v=mzk8p9ojMB8&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=6',
        },
        {
          title: 'Duas Quadras',
          link: 'https://www.youtube.com/watch?v=dZtRllCbnSw&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=7',
        },
        {
          title: 'Asa Delta',
          link: 'https://www.youtube.com/watch?v=Bx7M22kXJtY&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=8',
        },
        {
          title: 'Porta, Retrato',
          link: 'https://www.youtube.com/watch?v=rdLL_9lQHkU&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=9',
        },
        {
          title: 'Frevo por Acaso',
          link: 'https://www.youtube.com/watch?v=vZU6YYRk_L0&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=10',
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
