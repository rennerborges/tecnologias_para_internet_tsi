<template>
  <main>
    <h1>Informe um aluno</h1>
    <Formulario @addList="addList" />
    <Lista :values="items" />
  </main>
</template>

<script>
import { defineComponent } from 'vue';

import Lista from './components/Lista';
import Formulario from './components/Formulario';

export default defineComponent({
  name: 'App',
  data: function () {
    return {
      items: ['Renner', 'Rafael'],
      value: '',
    };
  },
  methods: {
    addList: function (value) {
      this.items.push(value);
    },
  },
  components: {
    Lista,
    Formulario,
  },
});
</script>

<style>
h1 {
  font-size: 25px;
}
main {
  margin: 20px;
}
</style>
