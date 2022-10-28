<template>
  <header :id="id" :style="banner">
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
    loading: { type: Boolean, required: false },
  },
  data() {
    return {
      banner: {
        background: `linear-gradient(rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.9)), url('${this.img}')`,
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
  height: 60vh;
  display: flex;
  flex-direction: column;
}

.h-superior .container,
.h-inferior .container {
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
  width: 100%;
  height: 10%;
  background: linear-gradient(rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.9));
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
}

.capa-album figure {
  margin: 0;
}

.capa-album img {
  width: 100%;
  height: 100%;
}
</style>
