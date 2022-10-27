<template>
  <div class="voltar">
    <router-link to="/">
      <a>
        <div>
          <img
            src="../assets/images/icons/keyboard_backspace.svg"
            alt="Voltar"
          />
        </div>
        <span>Voltar</span>
      </a>
    </router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ArrowPage',
});
</script>

<style scoped>
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
</style>
