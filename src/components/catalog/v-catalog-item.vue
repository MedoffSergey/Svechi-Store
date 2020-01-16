<template>
  <div class='v-catalog-item'>
    <img class="v-catalog-item__image" :src=" require('../../assets/images/' + product_data.image) " alt="img">
    <p class="v-catalog-item__name">{{product_data.name}}</p>
    <p class="v-catalog-item__price">Цена: {{product_data.price}} Р.</p>
  </div>
</template>

<script>
  export default {
    name: "v-catalog-item",
    props: {
      product_data: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    data() {
      return {}
    },
    computed: {},
    methods: {
    },
  }
</script>

<style lang="scss">
  .v-catalog-item {
    flex-basis: 20%;
    box-shadow: 0 0 8px 0 #e0e0e0;
    padding: 16px;
    margin-bottom: 16px;
    &:hover{
      box-shadow: 0 3px 0 #1683c6;;
    }
    &__image {
      width: 75%;
    }
    &__name {
      color: #1683c6;
      margin-bottom: 0px;
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
