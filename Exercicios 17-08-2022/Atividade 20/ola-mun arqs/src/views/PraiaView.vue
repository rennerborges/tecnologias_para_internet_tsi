<template>
  <HeaderDiskDetail
    id="praia"
    title="A Praia"
    :img="require('../assets/images/capas/apraia.webp')"
  />

  <section class="s-musicas">
    <div class="container">
      <ol>
        <li>
          <a
            href="https://www.youtube.com/watch?v=74v5XBZqBys&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh"
            >Frevo por Acaso Nº 2
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=k_nJfb_FTmc&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=2"
            >A Praia
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=IiGe9haKYWU&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=3"
            >Camomila
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=9RmKC0j70w8&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=4"
            >De Passagem
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=sEVlwiDa1K8&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=5"
            >O Bobo <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=n3djzGDMnr8&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=6"
            >Soneto de Santa Cruz
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=mEN5hL6_eA8&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=7"
            >Isabel (Carta de um Pai Aflito)
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=pNRBt1nD8ok&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=8"
            >Albatroz
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=v1pGUPX_-co&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=9"
            >Cecília e a Máquina (part. Luiza Mayall)
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=VSnnfUJ-umI&list=PLh_agSKFbsfpClr0eFdJ2WvHEntTcTNgh&index=10"
            >Terminal Alvorada
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
  name: 'PraiaView',
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
