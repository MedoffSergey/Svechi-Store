<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
  import vMainWrapper from './components/v-main-wrapper'

export default {
  name: 'app',
  components: {
    vMainWrapper
  }
}
</script>

<style>
#app {
  font-family: 'Gotham Pro' , Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
}
</style>
