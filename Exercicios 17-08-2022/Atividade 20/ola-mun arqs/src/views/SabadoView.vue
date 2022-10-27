<template>
  <HeaderDiskDetail
    id="sabado"
    title="Sábado"
    :img="require('../assets/images/capas/sabado.jpg')"
  />

  <section class="s-musicas">
    <div class="container">
      <ol>
        <li>
          <a
            href="https://www.youtube.com/watch?v=zqOlcZkUOjc&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v"
            >Fuga Nº 3 da Rua Nestor
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=usJ0ASCXyys&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=2"
            >Capim-Limão
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=l7gDg8LdfwM&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=3"
            >Ela e a Lata
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=gnOJAkE5XUU&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=4"
            >Fuga Nº 4
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=LGxpAF2tBWI&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=5"
            >Pra Animar o Bar
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=mzk8p9ojMB8&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=6"
            >Por Botafogo
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=dZtRllCbnSw&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=7"
            >Duas Quadras
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=Bx7M22kXJtY&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=8"
            >Asa Delta
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=rdLL_9lQHkU&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=9"
            >Porta, Retrato
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=vZU6YYRk_L0&list=PLgZeT-MJEnhadH6_oa_FigOi3AmVbXJ1v&index=10"
            >Frevo por Acaso
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>
      </ol>
    </div>
  </section>
  <FooterCiceroPage />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterCiceroPage from '../components/Footer.vue';
import HeaderDiskDetail from '../components/HeaderDiskDetail.vue';

export default defineComponent({
  name: 'SabadoView',
  components: {
    FooterCiceroPage,
    HeaderDiskDetail,
  },
});
</script>

<style>
/* =========== MÚSICAS ========== */
.s-musicas {
  width: 100%;
  display: flex;
  justify-content: center;
}

.s-musicas ol {
  width: 90%;
  margin: 0 auto;
  margin-top: 40px;
  padding: 0;
  list-style-position: inside;
}

.s-musicas li {
  width: 100%;
  padding: 20px 0px;
  color: white;
  border-top: 1px solid #909090;
  font-size: 15pt;
  box-sizing: border-box;
}

.s-musicas li:first-child {
  border-top: none;
}

.s-musicas a {
  width: 100%;
  height: 100%;
  color: white;
  font-size: 15pt;
  text-decoration: none;
}

.s-musicas a:hover {
  font-weight: 500;
}

.s-musicas li:first-child a {
  border-top: none;
}

.s-musicas li:hover a img {
  opacity: 1;
  animation: fadein 0.5s;
}

.s-musicas a img {
  opacity: 0;
  width: 31px;
  float: right;
}

/* =========== UTEIS ========== */

.sombraCinza {
  box-shadow: #a8a8a8 0px 1px 3px 0px, #c3c3c3 0px 1px 1px 0px,
    #d5d5d5 0px 2px 1px -1px;
}

/* =========== ANIMAÇÕES ========== */
@keyframes fadein {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeout {
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
