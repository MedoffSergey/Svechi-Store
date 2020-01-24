<template>
  <div class="main">
    <vSlider/>    <!-- Компонент слайдера -->

    <div class='v-catalog'>   <!-- Компонент Каталога -->
      <div class="position">

        <div class="position__filter">
          <vSelected
            :options="categories"
            @selected="sortByCategories"
          />
        </div>

        <div class="v-catalog__list">
          <v-catalog-item
            v-for="product in filterProducts"
            :key="product.article"
            :product_data="product"
          />
        </div>

      </div>
    </div>
  </div>
</template>

<script>
  import vCatalogItem from './v-catalog-item'
  import vSlider from '../slider/v-slider-main.vue'
  import vSelected from '../selected/v-selected.vue'

  import {mapActions, mapGetters} from 'vuex'
  export default {
    name: "v-catalog",

    components: {
      vCatalogItem,
      vSlider,
      vSelected
    },

    props: {},
    data() {
      return {
        categories: [
          {name:'Ароматизированные'},
          {name:'Витая'},
          {name:'Резная'},
          {name:'Сердечки'},
          {name:'Церковные'},
          {name:'Цилиндр'},
          {name:'Цветы'},
        ],
        selected: "Ароматизированные",

        sortedProducts: []
      }
    },

    computed: {
      ...mapGetters([
        'PRODUCTS'
      ]),
      filterProducts() {
        if (this.sortedProducts.length) {
          return this.sortedProducts
        }
        else {
          this.sortByCategories(this.categories[0])
          return this.sortedProducts
        }
      },
    },
    methods: {
      ...mapActions([
        'GET_PRODUCTS_FROM_API'
      ]),
      sortByCategories(category) {
        this.sortedProducts = [];

        let vm = this;
        this.PRODUCTS.map(function (item){
          if (item.category === category.name) {
            vm.sortedProducts.push(item);
          }
        })
      }
    },
    mounted() {
      this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Данные получены!')
        }
      })
    }
  }
</script>

<style lang="scss">

  .position{
    display:flex;
    margin-top: $margin*2;
    @media (max-width: $breakpoint_sm) {
      display: block;

    }
    &__filter{
      border-right: $border;
      min-width: 220px;
      padding: $padding*2 0;
    }
  }

  .v-catalog {
    &__list {
      display: flex;
      flex-wrap: wrap;
      align-items: center;
    }
  }

</style>
