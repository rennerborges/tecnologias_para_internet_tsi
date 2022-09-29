<template>
  <main>
    <h1>Informe um aluno</h1>
    <Formulario @addList="addList" @clear="clear" @copy="copy" />
    <h2>Alunos</h2>
    <Lista :values="items" />

    <h2>Copia Alunos</h2>
    <button type="button" class="btn btn-danger" @click="clearCopy">
      Limpar lista
    </button>
    <Lista :values="copyItems" />
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
      copyItems: [],
      value: '',
    };
  },
  methods: {
    addList: function (value) {
      this.items.push(value);
    },
    clear: function () {
      this.items = [];
    },
    clearCopy: function () {
      this.copyItems = [];
    },
    copy: function () {
      this.copyItems = [...this.items];
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

h2 {
  font-size: 16px;
  margin: 10px 0;
}

main {
  margin: 20px;
}
</style>
