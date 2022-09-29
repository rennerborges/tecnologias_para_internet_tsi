<template>
  <form>
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
    <button type="button" class="btn btn-primary" @click="submit">
      Salvar
    </button>
  </form>
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
      this.$emit('addList', this.text);
    },
  },
});
</script>

<style>
.box {
  padding: 20px;
}

div[role='form'] .collumn {
  margin-top: 10px;
}
</style>
