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

<style lang="scss">
#app {
  font-family: 'Montserrat' ;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscsale;
  text-align: center;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
};




@font-face {
    font-family: 'Gotham Pro';
    src: url('./assets/fonts/GothamPro-Black.woff') format('woff'),
         url('./assets/fonts/GothamPro-Black.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
}

</style>
