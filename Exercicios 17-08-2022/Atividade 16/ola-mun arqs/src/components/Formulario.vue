<template>
  <form v-on:submit="submit">
    <div class="input-group mb-3">
      <span class="input-group-text" id="basic-addon1">@</span>
      <input
        v-model="text"
        type="text"
        class="form-control"
        placeholder="Username"
        aria-label="Username"
        aria-describedby="basic-addon1"
      />
    </div>
    <button type="button" class="btn btn-primary submit" @click="submit">
      Salvar
    </button>
  </form>
  <button type="button" class="btn btn-danger" @click="clear">
    Limpar lista
  </button>
  <button type="button" class="btn btn-info" @click="copy">Copiar</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FormularioC',
  data: function () {
    return {
      text: '',
    };
  },
  methods: {
    submit: function () {
      if (this.text) {
        this.$emit('addList', this.text);
        this.text = '';
      }
    },
    clear: function () {
      this.$emit('clear');
    },
    copy: function () {
      this.$emit('copy');
    },
  },
});
</script>

<style>
form {
  display: flex;
}

.submit {
  margin-left: 10px;
  height: fit-content;
}
</style>
