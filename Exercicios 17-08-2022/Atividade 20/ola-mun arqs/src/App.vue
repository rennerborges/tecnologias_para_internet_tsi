<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
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
