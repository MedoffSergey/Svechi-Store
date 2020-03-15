<template>
<div class="main">
  <vSlider /> <!-- Компонент слайдера -->

  <div class='v-catalog'>
    <!-- Компонент Каталога -->
    <div class="position">

      <div class="position__filter">
        <vSelected :options="categories" @selected="sortByCategories" v-model="article" />
        <p class='title'>Цена</p>
        <div class="range-slider">
          <b-form-input v-model.number="minPrice" type="range" min="0" max="1000" step="10" @change="setRangeSlider"></b-form-input>
          <b-form-input v-model.number="maxPrice" type="range" min="0" max="1000" step="10" @change="setRangeSlider"></b-form-input>
        </div>
        <div class="range-values">
          <p>Min: {{minPrice}} P</p>
          <p>Max: {{maxPrice}} P</p>
        </div>
      </div>


      <div class="v-catalog__list">
        <v-catalog-item v-for="product in filterProducts" :key="product.article" :product_data="product" />
      </div>

    </div>
  </div>
</div>
</template>

<script>
import vCatalogItem from './v-catalog-item'
import vSlider from '../slider/v-slider-main.vue'
import vSelected from '../selected/v-selected.vue'

import {
  mapActions,
  mapGetters
} from 'vuex'

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
      categories: [{
          name: 'Ароматизированные'
        },
        {
          name: 'Витая'
        },
        {
          name: 'Резная'
        },
        {
          name: 'Сердечки'
        },
        {
          name: 'Церковные'
        },
        {
          name: 'Цилиндр'
        },
        {
          name: 'Цветы'
        },
      ],

      sortedProducts: [],
      article: '',
      maxPrice: 1000,
      minPrice: 0,
    }
  },

  computed: {
    ...mapGetters([
      'PRODUCTS'
    ]),
    filterProducts() {
      if (this.article) {
        this.sortByArticle(this.article)
        return this.sortedProducts
      } else if (this.sortedProducts.length) {
        return this.sortedProducts
      } else {
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
      let vm = this;
      this.sortedProducts = [...this.PRODUCTS]
      this.sortedProducts = this.sortedProducts.filter(function(item) {
        return item.price >= vm.minPrice && item.price <= vm.maxPrice
      })
      if(category) {
        this.sortedProducts = this.sortedProducts.filter(function(item) {
          vm.selected === category.name
          return item.category === category.name
        })
      }
    },
    sortByArticle(art) {
      this.sortedProducts = [];

      let vm = this;
      this.PRODUCTS.map(function(item) {
        if (item.article === art) {
          vm.sortedProducts.push(item);
        }
      })
    },
    setRangeSlider() {
      if (this.minPrice > this.maxPrice) {
        let temp = this.maxPrice
        this.maxPrice = this.minPrice;
        this.minPrice = temp;
      }
      this.sortByCategories()
    }

  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
      .then((response) => {
        if (response.data) {
          console.log('Данные получены!')
          this.sortByCategories()
        }
      })
  }
}
</script>

<style lang="scss" scoped>
.position {
    display: flex;
    margin-top: $margin*2;
    box-sizing: border-box;
    @media (max-width: $breakpoint_sm) {
        display: block;
    }
    &__filter {
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

.range-slider {
    margin: 30px 15px;
    text-align: center;
    position: relative;
}

.range-slider input[type=range],
.range-slider svg {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;

}

input[type=range]::-webkit-slider-thumb {
    z-index: 2;
    position: relative;
    top: 2px;
    margin-top: -7px;

}

.range-values {
  display: flex;
  justify-content: space-between;
  margin: 20px 15px;
}
</style>
