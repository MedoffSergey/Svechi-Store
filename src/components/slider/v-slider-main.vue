<template lang="html">
  <div class="">
    <div class="slider">
      <b-carousel id="carousel-1"
        :interval="4000"
        controls indicators background="#ababab"
        img-width="1024" img-height="480"
        style="text-shadow: 1px 1px 2px #333;"
        >
        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/slider/121.jpg" alt="image slot">
          </template>
          <h1 class="title-new">Новинки</h1>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/slider/121.jpg" alt="image slot">
          </template>
          <h1>Акции</h1>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/slider/121.jpg" alt="image slot">
          </template>
          <h1 class="title-new">Новогодняя Распродажа</h1>
        </b-carousel-slide>

        <b-carousel-slide>
          <template v-slot:img>
            <img class="v-modal-item__images img-fluid w-100" src="../../assets/images/slider/121.jpg" alt="image slot">
          </template>
          <h1 class="title-new">И тд...</h1>
        </b-carousel-slide>
      </b-carousel>


      <!-- <div class="carousel">
        <b-carousel
          id="carousel-fade"
          style="text-shadow: 0px 0px 2px #000"
          fade
          indicators
          img-width="1024"
          img-height="480"
        >
          <b-carousel-slide
            caption="First slide"
            img-src="https://picsum.photos/1024/480/?image=10"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Second Slide"
            img-src="https://picsum.photos/1024/480/?image=12"
          ></b-carousel-slide>
          <b-carousel-slide
            caption="Third Slide"
            img-src="https://picsum.photos/1024/480/?image=22"
          ></b-carousel-slide>
        </b-carousel>
      </div> -->


    </div>
  </div>

</template>

<script>
export default {
}
</script>

<style lang="css" scoped>
.carousel{
  max-width: 1300px;
}

h1{
  color: #000;
}
</style>
