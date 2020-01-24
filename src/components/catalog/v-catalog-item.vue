<template>
  <div class='v-catalog-item'>
      <vModal
          :product_data="product_data"
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
    border-radius: $radius;

    @media (max-width: $breakpoint_lg) {
      flex-basis: 45%;
    }

    @media (max-width: $breakpoint_sm) {
      flex-basis: 100%;
    }

    &:hover {
        background-image: linear-gradient(to top, #efefef 0%, #fff 100%);

    }

    &__price {
        color: #f37f00;
        font-weight: 400;
        font-size: 14px;
        line-height: 1.35;
        &-bold{
          font-weight: bold;
          font-size: 15px;

        }
    }
}
</style>
