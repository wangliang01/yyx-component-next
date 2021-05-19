<template>
  <Layout></Layout>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import Layout from './layout/index.vue'

export default defineComponent({
  name: 'App',
  components: {
    Layout
  }
})
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
h2{
  margin: 26px 0;
}
h3 {
  margin: 12px 0;
}
.desc {
  font-size: 12px;
}
.section {
  margin-top: 20px;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
}
.row {
  margin-top: 20px;
}
.row:first-child{
  margin-top: 0;
}
</style>
