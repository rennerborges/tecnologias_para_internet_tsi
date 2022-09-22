<template>
  <h1>
    <slot></slot>
  </h1>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TitleComponent',
});
</script>

<style scoped>
h1 {
  padding: 1rem;
  font-size: 20px;
  font-weight: bold;
}
</style>
