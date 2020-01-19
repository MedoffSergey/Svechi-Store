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
  font-family: 'GothamPro',sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
};


//ШРИФТ
@font-face {
	font-family:  'GothamPro';
	src: url('./assets/fonts/GothamPro.eot');
	src: local('Gotham Pro'), local('GothamPro'),
		url('./assets/fonts/GothamPro.eot?#iefix') format('embedded-opentype'),
		url('./assets/fonts/GothamPro.woff') format('woff'),
		url('./assets/fonts/GothamPro.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}

</style>
