<template>
  <div class='v-catalog'>
    <vSlider/>    <!-- Компонент слайдера -->

    <div class="position">
      <div class="position__filter">
        <vFilter/>
      </div>

      <div class="v-catalog__list">
        <v-catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        :product_data="product"
        />
      </div>

    </div>


  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item'
  import vSlider from '../slider/v-slider-main.vue'
  import vFilter from '../filter/v-filter.vue'

  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: "v-catalog",
    components: {
      vCatalogItem,
      vSlider,
      vFilter
    },
    props: {},
    data() {
      return {
        showFilter: false
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

  .position{
    display:flex;
    @media (max-width: $breakpoint_sm) {
      display: block;
      max-width: 100%;
    }
    &__filter{
      border-right: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: $radius;
      width: 100%;
      @media (max-width: $breakpoint_sm) {
      border: 1px solid rgba(0, 0, 0, 0.1);
      }

    }
  }

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

    &-filter{
      margin: 0 auto;
      width: 100%;

    }
    &-filter-button {
      display: flex;
      justify-content: flex-end;
    }
    &-filter__image {
      width: 55px;
      height: 40px;
      padding: $padding;
      margin: $margin $margin*2;

      border: 1px solid rgba(0, 0, 0, 0.1);
      border-radius: $radius;
      &:hover {
        background-color: #dedede;

      }
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
