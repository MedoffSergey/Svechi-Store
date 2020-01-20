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


    @media (max-width: $breakpoint_xl) {
      flex-basis: 45%;
    }

    @media (max-width: $breakpoint_sm) {
      flex-basis: 100%;
    }

    &:hover {
        background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
        background-blend-mode: normal,color-burn;
        box-shadow: 0 3px 0 hsla(0, 48%, 85%, 0.5);
        border-radius: $radius
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
