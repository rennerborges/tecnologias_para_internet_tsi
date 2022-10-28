<template>
  <section class="s-musicas">
    <div class="container">
      <ol>
        <li v-for="(_, i) in musics" :key="i">
          <a>
            <skeleton-text effect="fade"
              >Isabel carta de um pai aflito</skeleton-text
            >
          </a>
        </li>
      </ol>
    </div>
  </section>
</template>

<script lang="js">
import { defineComponent } from 'vue';
import { SkeletonText } from '@skeleton-elements/vue';


export default defineComponent({
  name: 'ContainerMusicSkeleton',
  data() {
    return {
      musics: Array(10),
    };
  },
  components: { SkeletonText },
});
</script>

<style scoped>
@import '@skeleton-elements/vue/skeleton-elements.css';

.skeleton-effect-fade {
  animation: skeleton-effect-fade 2s infinite;
  border-radius: 5px;
}

.skeleton-text,
.skeleton-text * {
  color: #252525 !important;
}
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
