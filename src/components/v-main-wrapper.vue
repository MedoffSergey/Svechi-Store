<template>
  <div class="main">
    <b-navbar toggleable="lg" type="light"  sticky class="navbar navbar-expand-lg navbar-light ">
      <img src="https://image.flaticon.com/icons/svg/1419/1419164.svg" width="40px" height="40px" class="logo" >
      <b-navbar-brand href="/"><router-link class="nav-logo" to="/"><i>Svechi-Store</i></router-link></b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="nav-menu">
          <li class="nav-item active">
            <router-link class="nav-link" to="/">Главная</router-link>
          </li>
          <b-dropdown class="bg-light"  right text="Каталог">
            <b-dropdown-item>Витая</b-dropdown-item>
            <b-dropdown-item>Резная</b-dropdown-item>
            <b-dropdown-item>Сердечки</b-dropdown-item>
            <b-dropdown-item>Церковные</b-dropdown-item>
            <b-dropdown-item>Цилиндр</b-dropdown-item>
            <b-dropdown-item>Цветы</b-dropdown-item>
          </b-dropdown>
          <li class="nav-item">
            <router-link class="nav-link" to="/order">Оплата</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/delivery">Доставка</router-link>
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

<style lang="scss">
.v-main-wrapper {
  max-width: 100%;
  margin: 40px auto;
}

.navbar{
  background-color: #e8e8e8
}

.main {
      position: relative;
      top: 0px;
      width: 100%;

}
.nav-link{
  margin: 0 15px;
}

.nav-menu{
  text-align: right;
}

.nav-logo{
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

.btn-secondary{
  color: rgba(0, 0, 0, 0.5)!important;
  background-color: rgba(0, 0, 0, 0.06)!important;
  border: 0px!important;


  &:focus{
    box-shadow: 0 0 0 0rem rgba(130, 138, 145, 0.5)!important;
  }
}

.dropdown-menu{
    transform: translate3d(-13px, 40px, 0px)!important;
    top: 9px!important;

}
</style>
