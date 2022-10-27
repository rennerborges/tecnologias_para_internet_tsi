<template>
  <div class="home">
    <header>
      <div class="container">
        <div class="informacoes-cantor">
          <h1>Cícero Lins</h1>
          <div class="descricao">
            <h2>
              Cícero Rosa Lins, mais conhecido por Cícero (Rio de Janeiro, 7 de
              abril de 1986) é compositor e cantor com influências de bossa
              nova, indie e folk, além de artistas como Radiohead e Caetano
              Veloso.
            </h2>
          </div>
        </div>
        <div class="arrow">
          <a>
            <img alt="Seta" src="../assets/images/icons/down-arrow.svg" />
          </a>
        </div>
      </div>
    </header>
    <section id="discografia" class="s-albuns">
      <div class="container">
        <Disk v-for="disk in disks" :key="disk.title" :disk="disk" />
      </div>
    </section>
    <FooterCiceroPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FooterCiceroPage from '../components/Footer.vue';
import Disk from '../components/Disk.vue';

export default defineComponent({
  name: 'HomeView',
  data: function () {
    return {
      disks: [
        {
          title: 'Cosmo',
          image: require('@/assets/images/capas/cosmo.jpg'),
          link: '/cosmo',
        },
        {
          title: 'Canções de apartamento',
          image: require('@/assets/images/capas/cancoes.jpg'),
          link: '/cancoes',
        },
        {
          title: 'Cícero e Albatroz',
          image: require('@/assets/images/capas/ciceroealbatroz.jpg'),
          link: '/ciceroalbatroz',
        },
        {
          title: 'A Praia',
          image: require('@/assets/images/capas/apraia.webp'),
          link: '/praia',
        },
        {
          title: 'Sábado',
          image: require('@/assets/images/capas/sabado.jpg'),
          link: '/sabado',
        },
      ],
    };
  },
  components: {
    FooterCiceroPage,
    Disk,
  },
});
</script>

<style>
/* =========== HEADER ========== */

header {
  width: 100%;
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.9)),
    url('../assets/images/background/cicero.jpg');
  background-position: center;
  background-size: cover;
  display: flex;
  align-items: flex-end;
}

header h1 {
  font-weight: 500;
}

.informacoes-cantor {
  color: white;
}

.descricao h2 {
  font-weight: 400;
  font-size: 14pt;
}

/* =========== ALBUNS ========== */

.s-albuns {
  padding: 0px 0px 40px;
  box-sizing: border-box;
}

.s-albuns .container {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.album-item {
  overflow: hidden;
  border-radius: 8px;
  width: 300px;
  height: 300px;
  margin-top: 40px;
  margin-left: 40px;
}

.album-item figure {
  margin: 0;
  position: relative;
}

.album-item img {
  width: 100%;
  height: 100%;
}

.album-item figcaption {
  width: 100%;
  color: white;
  position: absolute;
  bottom: 20px;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
  text-shadow: 1px 2px 2px rgba(0, 0, 0, 0.3);
}

.album-item:hover figcaption {
  transition: 0.5s;
  opacity: 1;
}

/* =========== ARROW ========== */
.arrow {
  width: 100%;
  margin: 20px 0px;
  display: flex;
  justify-content: center;
}

.arrow img {
  width: 30px;
  height: 30px;
  animation: arrow 0.8s infinite;
}

/* =========== ANIMAÇÕES ========== */
@keyframes arrow {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
