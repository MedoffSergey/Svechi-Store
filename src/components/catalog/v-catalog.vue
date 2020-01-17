<template>
  <div class='v-catalog'>
    <div class="v-catalog__list">
      <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
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
      ]),
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API'
      ]),
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
