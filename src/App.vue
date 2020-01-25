<template>
  <div id="app">
    <v-main-wrapper />
  </div>
</template>

<script>
import vMainWrapper from './components/v-main-wrapper'
import {mapActions, mapGetters} from 'vuex'


export default {
  name: 'app',
  components: {
    vMainWrapper
  },
  computed: {
    ...mapGetters([
      'IS_MOBILE',
      'IS_DESKTOP'
    ])
  },
  methods: {
    ...mapActions([
      'SET_MOBILE',
      'SET_DESKTOP'
    ]),
  },
  mounted() {
    let vm = this;
    window.addEventListener('resize', function () {
      if (window.innerWidth > 767) {
        vm.SET_DESKTOP()
        console.log('Desktop',vm.IS_DESKTOP)
      } else {
        vm.SET_MOBILE()
        console.log('Mobile',vm.IS_MOBILE)
      }
    })
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
