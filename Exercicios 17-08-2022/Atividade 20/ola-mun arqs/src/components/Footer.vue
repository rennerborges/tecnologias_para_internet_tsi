<template>
  <footer>
    <div class="container">
      <div class="streamings">
        <a
          href="https://open.spotify.com/artist/6a5wUPC879Kyfw0aXxVatB"
          target="_blank"
        >
          <figure>
            <img src="../assets/images/icons/spotify.svg" alt="Spotify" />
          </figure>
        </a>

        <a
          href="https://music.youtube.com/channel/UCq99XmhDdwzvunMdxgVHyWQ"
          target="_blank"
        >
          <figure>
            <img
              src="../assets/images/icons/yt-music.png"
              alt="Youtube Music"
            />
          </figure>
        </a>

        <a href="https://www.deezer.com/en/artist/145731" target="_blank">
          <figure>
            <img src="../assets/images/icons/deezer.webp" alt="Deezer" />
          </figure>
        </a>
      </div>
      <h2>
        &copy; 2022 &middot; Renner Borges &middot; Todos os direitos reservados
      </h2>
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FooterCiceroPage',
  props: {
    title: {
      type: String,
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
