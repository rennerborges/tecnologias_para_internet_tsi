<template>
  <header id="cancoes">
    <div class="h-superior">
      <div class="container">
        <div class="capa-album">
          <figure>
            <img
              src="../assets/images/capas/cancoes.jpg"
              alt="Canções de apartamento"
            />
          </figure>
        </div>
      </div>
    </div>
    <div class="h-inferior">
      <div class="container">
        <h1>Canções de apartamento</h1>
      </div>
    </div>
    <div class="voltar">
      <a href="../index.html">
        <div>
          <img
            src="../assets/images/icons/keyboard_backspace.svg"
            alt="Voltar"
          />
        </div>
        <span>Voltar</span>
      </a>
    </div>
  </header>
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
  name: 'CancoesView',
  components: {},
});
</script>

<style>
/* =========== HEADER ========== */

/* =========== ESPECIFICOS ========== */

#cancoes {
  background: linear-gradient(rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.9)),
    url('../assets/images/capas/cancoes.jpg');
  background-position: center;
  background-size: cover;
}

#cosmo {
  background: linear-gradient(rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.9)),
    url('../assets/images/capas/cosmo.jpg');
  background-position: center;
  background-size: cover;
}

#praia {
  background: linear-gradient(rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.9)),
    url('../assets/images/capas/apraia.webp');
  background-position: center;
  background-size: cover;
}

#ciceroealbatroz {
  background: linear-gradient(rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.9)),
    url('../assets/images/capas/ciceroealbatroz.jpg');
  background-position: center;
  background-size: cover;
}

#sabado {
  background: linear-gradient(rgba(0, 0, 0, 0.1) 35%, rgba(0, 0, 0, 0.9)),
    url('../assets/images/capas/sabado.jpg');
  background-position: center;
  background-size: cover;
}

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

/* =========== VOLTAR ========== */

.voltar {
  position: absolute;
  top: 0;
  left: 0;
  margin: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s;
}

.voltar a {
  display: flex;
  text-decoration: none;
  justify-content: center;
  align-items: center;
}

.voltar div {
  width: 35px;
  height: 35px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: 50%;
  margin-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.voltar:hover div {
  background-color: rgba(255, 255, 255, 1);
  transition: 0.6s;
}

.voltar span {
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
}

.voltar:hover span {
  color: rgba(255, 255, 255, 1);
  transition: 0.6s;
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
