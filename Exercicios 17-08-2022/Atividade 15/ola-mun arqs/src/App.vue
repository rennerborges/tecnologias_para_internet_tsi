<template>
  <main class="columns is-gapless is-multiline">
    <div class="column is-one-quarter">
      <BarraLateral />
    </div>
    <div class="column is-three-quarter">
      <formulario />
      <TitleComponent>Componente de título para teste</TitleComponent>
    </div>
  </main>
</template>

<script>
import { defineComponent } from 'vue';
import BarraLateral from './components/BarraLateral.vue';
import Formulario from './components/Formulario.vue';
import TitleComponent from './components/TitleComponent.vue';

export default defineComponent({
  name: 'App',
  components: {
    BarraLateral,
    Formulario,
    TitleComponent,
  },
});
</script>

<style></style>
