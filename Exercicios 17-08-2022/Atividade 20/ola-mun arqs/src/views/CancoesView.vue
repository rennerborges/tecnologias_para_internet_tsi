<template>
  <HeaderDiskDetail
    id="cancoes"
    title="Canções de apartamento"
    :img="require('../assets/images/capas/cancoes.jpg')"
  />
  <section class="s-musicas">
    <div class="container">
      <ol>
        <li>
          <a
            href="https://www.youtube.com/watch?v=4tcXqoGZT5Q&list=PLF135D5B2A6F39BB2"
            >Tempo de Pipa
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=u9xca10Qw34&list=PLF135D5B2A6F39BB2&index=2"
            >Vagalumes Cegos
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=UPgsJQvf-og&list=PLF135D5B2A6F39BB2&index=3"
            >Cecília & os Balões
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=sWNfRYuIiKI&list=PLF135D5B2A6F39BB2&index=4"
            >João e o Pé de Feijão
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=umBMuX9S5U4&list=PLF135D5B2A6F39BB2&index=5"
            >Ensaio Sobre Ela
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=ActJUnUHLXU&list=PLF135D5B2A6F39BB2&index=6"
            >Açúcar ou Adoçante
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=d-zOgL0q1iE&list=PLF135D5B2A6F39BB2&index=7"
            >Eu Não Tenho um Barco, Disse a Árvore
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=Y91tW4-BawY&list=PLF135D5B2A6F39BB2&index=8"
            >Laiá Laiá
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=nTYojs64cc0&list=PLF135D5B2A6F39BB2&index=9"
            >Pelo Interfone
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=Hr8R-EmYfEU&list=PLF135D5B2A6F39BB2&index=10"
            >Ponto Cego
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
  name: 'CancoesView',
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
