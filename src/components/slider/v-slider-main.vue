<template lang="html">
  <div class="">
    <div class="slider">
      <b-carousel id="carousel-1"
        :interval="4000"
        controls indicators background="#ababab"
        img-width="1024" img-height="320"
        style="text-shadow: 1px 1px 2px #333;"
        >
        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/slider/10.jpg" alt="image slot">
          </template>
          <h1 class="title-new">Новинки</h1>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/slider/10.jpg" alt="image slot">
          </template>
          <h1>Акции</h1>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/slider/10.jpg" alt="image slot">
          </template>
          <h1 class="title-new">Новогодняя Распродажа</h1>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100" src="../../assets/images/slider/10.jpg" alt="image slot">
          </template>
          <h1 class="title-new">И тд...</h1>
        </b-carousel-slide>
      </b-carousel>



    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
h1{
  color: #000;
  font-style: oblique
}
</style>
