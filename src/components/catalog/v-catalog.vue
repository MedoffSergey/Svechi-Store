<template>
  <div class='v-catalog'>
    <vSlider/>

    <div class="btn-group">
      <button class="button">Ароматизированные</button>
      <button class="button">Витая</button>
      <button class="button">Резная</button>
      <button class="button">Сердечки</button>
      <button class="button">Церковные</button>
      <button class="button">Цилиндр</button>
      <button class="button">Цветы</button>
    </div>

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


  .btn-group{
    margin: 10px auto;
    display: block!important;
  }

  .btn-group .button {
  background-color: #fff;
  color: #000;
  padding: 16px 32px;
  text-align: center;
  font-size: 16px;
  cursor: pointer;
  outline: none;
  border: 1px solid #F5EFEF;
}


.btn-group .button:hover {
  background-color: #F5EFEF;
  border-radius: 7px;
}
</style>
