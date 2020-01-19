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
  font-family:  "Gotham Pro";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #fff;
  max-width: 1200px;
  margin: 0 auto;
};

@font-face {
	font-family: 'Gotham Pro';
	src: url('../public/fonts/GothamPro.eot');
	src: local('Gotham Pro'), local('GothamPro'),
		url('../public/fonts/GothamPro.eot?#iefix') format('embedded-opentype'),
		url('../public/fonts/GothamPro.woff') format('woff'),
		url('../public/fonts/GothamPro.ttf') format('truetype');
	font-weight: normal;
	font-style: normal;
}


</style>
