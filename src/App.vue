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
  },
  computed: {
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Montserrat',sans-serif ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscsale;
  text-align: center;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
};


</style>
