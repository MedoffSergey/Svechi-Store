<template>
  <div class='v-catalog-item'>

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
    padding: $padding*2;
    margin: $margin*2 auto;

    @media (max-width: $breakpoint_xl) {
      flex-basis: 45%;
    }

    @media (max-width: $breakpoint_sm) {
      flex-basis: 100%;
    }

    &:hover {
        box-shadow: 0 3px 0 hsla(0, 48%, 85%, 0.5);
    }
    &__image {
        width: 100%;
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
