<template lang="html">
  <div class="">
    <div class="slider">
      <b-carousel id="carousel-1"
        :interval="4000"
        controls indicators background="#000"

        img-width="1024" img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        >
        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/slider/121.jpg" alt="image slot">
          </template>
          <caption class="carousel-caption ">Новинки</caption>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/slider/122.jpg" alt="image slot">
          </template>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/slider/121.jpg" alt="image slot">
          </template>
          <caption class="carousel-caption ">Новогодняя Распродажа</caption>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100" src="../../assets/images/slider/122.jpg" alt="image slot">
          </template>
          <caption class="carousel-caption ">И тд...</caption>
        </b-carousel-slide>
      </b-carousel>
    </div>


    </div>

</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>


</style>
