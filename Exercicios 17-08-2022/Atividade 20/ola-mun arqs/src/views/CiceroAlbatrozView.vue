<template>
  <HeaderDiskDetail
    id="ciceroealbatroz"
    title="Cícero & Albatroz"
    :img="require('../assets/images/capas/ciceroealbatroz.jpg')"
  />
  <section class="s-musicas">
    <div class="container">
      <ol>
        <li>
          <a
            href="https://www.youtube.com/watch?v=08yAr8bOB_g&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr"
            >Aurora Nº 1
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=q01MHaQ8VTY&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=2"
            >A Ilha <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=H0YiKPc0QU0&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=3"
            >Não Se Vá
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=fkPH5Gp4VaY&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=4"
            >À Deriva
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=UkxpmKudpkc&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=5"
            >A Cidade
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=-WJAFlk_wcM&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=6"
            >Velho Sitio
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=mNcKdsMi1VE&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=7"
            >A Rua Mais Deserta
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=iepKbTPH13Q&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=8"
            >A Grande Onda
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=AnShDihu1EI&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=9"
            >Aquele Adeus
            <img src="../assets/images/icons/youtube.png" alt="Youtube"
          /></a>
        </li>

        <li>
          <a
            href="https://www.youtube.com/watch?v=8k_ZdYGSyzQ&list=PLOAqsSvwqufvbFihuuroIehHPcPSmECIr&index=10"
            >Um Arco
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
  name: 'CiceroAlbatrozView',
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
