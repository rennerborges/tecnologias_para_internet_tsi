<template>
  <header :id="id">
    <div :style="banner" class="banner"></div>
    <div class="backdrop"></div>

    <div class="h-superior">
      <div class="container">
        <div class="capa-album">
          <figure>
            <img :src="img" :alt="title" />
          </figure>
        </div>
      </div>
    </div>
    <div class="h-inferior">
      <div class="container">
        <h1>{{ title }}</h1>
      </div>
    </div>
    <BackHome />
  </header>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import BackHome from './ArrowBack.vue';

export default defineComponent({
  name: 'HeaderDiskDetail',
  props: {
    title: { type: String, required: true },
    img: { type: String, required: true },
    id: { type: String, required: true },
  },
  data() {
    return {
      banner: {
        background: `url('${this.img}')`,
        backgroundPosition: 'center',
        backgroundSize: 'cover',
      },
    };
  },
  components: { BackHome },
});
</script>

<style scoped>
/* =========== HEADER ========== */

header {
  width: 100%;
  height: 70vh;
  display: flex;
  flex-direction: column;
  position: relative;
}

.banner {
  position: absolute;
  width: 100%;
  height: 100%;
  filter: blur(2px);
}

.backdrop {
  position: absolute;
  width: 100%;
  height: calc(100% + 4px);
  bottom: -4px;
  background: linear-gradient(
    rgba(0, 0, 0, 0.1) 30%,
    rgba(0, 0, 0, 0.7) 70%,
    rgba(0, 0, 0, 1)
  );
}
.h-superior .container,
.h-inferior .container {
  z-index: 2;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.h-superior {
  width: 100%;
  height: 90%;
  display: flex;
  align-items: flex-end;
}

.h-inferior {
  z-index: 2;
  width: 100%;
  height: 10%;
}

.h-inferior h1 {
  color: white;
  font-weight: 500;
  font-size: 32px;
  margin-top: 20px;
}

.capa-album {
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  box-shadow: 2px 8px 28px -1px rgb(44 42 42 / 59%);
}

.capa-album figure {
  margin: 0;
}

.capa-album img {
  width: 100%;
  height: 100%;
}
</style>
