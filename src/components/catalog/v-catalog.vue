<template>
  <div class='v-catalog'>
    <!-- <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="v-catalog__link_to_cart">
        <img src="https://image.flaticon.com/icons/svg/1170/1170678.svg" alt="" height="20px;">
        Корзина: {{CART.length}}</div>
    </router-link>         Корзина -->
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
          @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item'
  import {mapActions, mapGetters} from 'vuex'

  export default {
    name: "v-catalog",
    components: {
      vCatalogItem
    },
    props: {},
    data() {
      return {

      }
    },
    computed: {
      ...mapGetters([
        'PRODUCTS',
        'CART'
      ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API',
        'ADD_TO_CART'
      ]),
      addToCart(data) {
        this.ADD_TO_CART(data)
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Data arrived!')
        }
      })
    }
  }
</script>

<style lang="scss">
  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;

      align-items: center;
    }
    &__link_to_cart {
      position: absolute;
      color: #333;
      top: 6px;
      right: 16px;
      padding: 8px;
      border: solid 1px #aeaeae;
      background: #ffffff;
      z-index: 9999;
    }
  }
</style>
