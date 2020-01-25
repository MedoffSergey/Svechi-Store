<template>
  <div class="main">
    <b-navbar toggleable="lg" type="light"  sticky class="navbar navbar-expand-lg navbar-light ">
      <img src="https://image.flaticon.com/icons/svg/1419/1419164.svg" width="48px" height="48px" class="logo" >
      <b-navbar-brand href="/"><router-link class="nav-logo" to="/"><i>Svechi Store</i></router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-menu">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Каталог</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/order">Заказ</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/contacts">Контакты</router-link>
          </li>

          <li class="nav-item">
            <router-link class="nav-link" to="/aboutUs">О Нас</router-link>
          </li>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>

    <div class="v-main-wrapper">
      <keep-alive>
        <router-view></router-view>
      </keep-alive>
    </div>

  </div>
</template>

<script>
export default {
  name: 'v-main-wrapper',
  props: {},
  data() {
    return {}
  },
  computed: {},
  methods: {},
  watch: {}
}
</script>

<style lang="scss" scoped>
.v-main-wrapper {
  max-width: 100%;
  margin: 40px auto;
}
.navbar{
  background-color: #fff;

  &-collapse{
    @media (max-width: $breakpoint_sm) {
      margin: 0!important;
    }
  }
}

.nav-link{
  margin: 0 15px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 0.5px;
  padding: 0px 20px;

  &:hover{
    color: #000!important;
  }
}

.nav-item{
  text-align: center;
}
.nav-menu{
  text-align: right;
}
.nav-logo{
    font-weight: bold;
    margin: 0 10px;
    color: #555;
    font-size: 24px;
}
.nav-logo:hover{
    color: #000;
    text-decoration: none;
}
.navbar-collapse{
  justify-content: center;
  margin-right: 150px;
}
</style>
