<template>
  <div class='v-catalog'>
    <div class="v-catalog__list">
      <vSlider/>
      <v-catalog-item
          v-for="product in PRODUCTS"
          :key="product.article"
          :product_data="product"
      />
    </div>
    <ul class="pagination justify-content-end" style="margin:20px 0">
      <li class="page-item"><a class="page-link" href="#">Previous</a></li>
      <li class="page-item"><a class="page-link" href="#">1</a></li>
      <li class="page-item"><a class="page-link" href="#">2</a></li>
      <li class="page-item"><a class="page-link" href="#">3</a></li>
      <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item'
  import vSlider from '../slider/v-slider-main.vue'
  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: "v-catalog",
    components: {
      vCatalogItem,
      vSlider
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
