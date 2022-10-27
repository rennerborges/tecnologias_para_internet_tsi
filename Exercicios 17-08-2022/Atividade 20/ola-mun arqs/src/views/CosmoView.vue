<template>
  <HeaderDiskDetail
    id="cosmo"
    title="Cosmo"
    :img="require('../assets/images/capas/cosmo.jpg')"
  />

  <section class="s-musicas">
    <div class="container">
      <ol>
        <li>
          <a href="https://www.youtube.com/watch?v=YuccUSOmfaM"
            >Falso Azul
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a href="https://www.youtube.com/watch?v=2nEfEo-jYks"
            >Some Lazy Days
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=vIgHiQoVRuw&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf"
            >Esquinas
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=IuFipoLdDDc&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=2"
            >Às Luzes
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=SicE54IBPVk&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=3"
            >Marinheiro Astronauta
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=d_wWWJqD3oo&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=4"
            >Miradouro Nova Esperança
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=QAY1DS94rJ0&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=5"
            >O Que Ficou
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=-ppNGiTrVNM&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=6"
            >A Chuva
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=EiQqhyJ54gg&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=7"
            >Banzo <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=m8F7hpzYOMM&list=PLG2E1aU2yEVvviXZouNS-WEUONgRfr8mf&index=8"
            >Nada ao Redor
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
  name: 'CosmoView',
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
