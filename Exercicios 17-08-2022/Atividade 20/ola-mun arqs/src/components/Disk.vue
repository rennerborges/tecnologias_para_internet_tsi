<template>
  <div class="album-item">
    <router-link :to="disk.link">
      <a>
        <figure>
          <img :src="disk.image" :alt="disk.title" />
          <figcaption>{{ disk.title }}</figcaption>
        </figure>
      </a>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import DiskInterface from '../interfaces/disk';

export default defineComponent({
  name: 'DiskCirero',
  props: {
    disk: {
      type: Object as PropType<DiskInterface>,
      required: true,
    },
  },
});
</script>

<style scoped>
/* =========== FOOTER ========== */

footer > .container {
  width: 100%;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

footer > .container h2 {
  color: white;
  font-size: 13pt;
  font-weight: 400;
}

footer .streamings {
  position: absolute;
  left: 35px;
  display: flex;
}

footer .streamings figure {
  margin: 0px;
}

footer .streamings a {
  margin-left: 20px;
}

footer .streamings a:first-child {
  margin: 0px;
}

footer .streamings img {
  width: 35px;
}
</style>
