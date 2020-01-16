<template>
  <div class='v-catalog-item'>
    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">

    <div>
     <b-button v-b-modal.modal-1> {{product_data.name}} </b-button>
     <b-modal id = "modal-1" title = "BootstrapVue">
       <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
       <p class = "my-4" > Цена {{product_data.price}} Р.</p>
     </b-modal>
   </div>
   <div>
  </div>

    <p class="v-catalog-item__price">Цена: {{product_data.price}} Р.</p>
  </div>
</template>

<script>
export default {
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
  methods: {
    showModal() {
      this.showProduct = !this.showProduct
      this.$root.$emit('bv::show::modal', 'modal-1', '#btnShow')
    },
    hideModal() {
      this.$root.$emit('bv::hide::modal', 'modal-1', '#btnShow')
    }
  }
}
</script>

<style lang="scss">
.v-catalog-item {
    flex-basis: 20%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
    &:hover {
        box-shadow: 0 3px 0 #1683c6;
    }
    &__image {
        width: 75%;
    }
    &__name {
        color: #1683c6;
        margin-bottom: 0;
        cursor: pointer;
    }
    &__name:hover {
        color: #7c0596;

    }
    &__price {
        color: #f37f00;
    }
}
</style>
