<template>
  <div class='v-catalog-item'>
    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">

      <vModal
          :product_data="product_data"
          :modalShow="modalShow"
      />

    <p class="v-catalog-item__price">Цена: <span class="v-catalog-item__price-bold">{{product_data.price}} Р.</span></p>
  </div>
</template>

<script>
import vModal from './v-modal-catalog'

export default {
  components: {
    vModal
  },
  name: "v-catalog-item",
  props: {
    product_data: {
      type: Object,
      default () {
        return {
        }
      }
    }
  },
  data() {
    return {
      modalShow: false
    }
  },
  computed: {},

}
</script>

<style lang="scss">
.v-catalog-item {
    flex-basis: 30%;

    padding: 16px;
    margin: 20px;
    &:hover {
        box-shadow: 0 3px 0 hsla(0, 48%, 85%, 0.5);
    }
    &__image {
        width: 75%;
    }


    &__price {
        color: #f37f00;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.35;
        &-bold{
          font-weight: bold;
        }
    }
}
</style>
