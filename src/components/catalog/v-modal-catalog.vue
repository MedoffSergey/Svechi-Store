<template>
  <div class="v-modal-item ">
    <div class="v-modal-item__name" id="show-btn" @click="showModal">
      <img class="v-modal-item__images" :src=" require('../../assets/images/' + product_data.image)" width="50%" alt="img">
      {{product_data.name}}
      <b-badge class ="v-modal-item__discount">
        {{product_data.discount}}
      </b-badge>
  </div>

    <b-modal size="xl" ref="my-modal" hide-footer title="Информация о свече">
      <div class="d-flex ">
        <img class="v-modal-item__image" :src=" require('../../assets/images/' + product_data.image)" width="50%" alt="img">
        <!-- <b-carousel id="carousel-1"
          :interval="4000"
          controls indicators background="#ababab"
          img-width="1024" img-height="320"
          style="text-shadow: 1px 1px 2px #333;"
          >


          <b-carousel-slide>
            <template v-slot:img>
               <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/1.jpg" alt="image slot">
            </template>
          </b-carousel-slide>

          <b-carousel-slide>
            <template v-slot:img>
              <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/10.jpg" alt="image slot">
            </template>
            <h1>hello</h1>
          </b-carousel-slide>

          <b-carousel-slide>
            <template v-slot:img>
              <img class="v-modal-item__images img-fluid w-100"  src="../../assets/images/5.jpg" alt="image slot">
            </template>
          </b-carousel-slide>

          <b-carousel-slide>
            <template v-slot:img>
              <img class="v-modal-item__images img-fluid w-100" src="../../assets/images/6.jpg" alt="image slot">
            </template>
          </b-carousel-slide>
        </b-carousel> -->

        <!-- <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
          <ol class="carousel-indicators">
            <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img class="v-modal-item__images img-fluid w-100" src="../../assets/images/6.jpg" alt="image slot">
            </div>
            <div class="carousel-item">
              <img class="v-modal-item__images img-fluid w-100" src="../../assets/images/5.jpg" alt="image slot">
            </div>
            <div class="carousel-item">
              <img class="v-modal-item__images img-fluid w-100" src="../../assets/images/4.jpg" alt="image slot">
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div> -->

        <div class="v-modal-item__info">

          <p class = "v-modal-item__name-title" > Наименование: {{product_data.name}} </p>
          <p class = "v-modal-item__price" > Цена: {{product_data.price}} Р.</p>
          <p class = "v-modal-item__article" > Артикул: {{product_data.article}}</p>
          <p class = "v-modal-item__text" > Артикул: {{product_data.article}}</p>
        </div>
      </div>


    </b-modal>



  </div>
</template>

<script>
export default {
  props: {
    product_data: {
      type: Object,
      default () {
        return {
        }
      }
    },
    modalShow: {
      type: Boolean,
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
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
  }
}
</script>

<style lang="scss" scoped>


.carousel-control-next,
.carousel-control-prev {
    filter: invert(100%);
}
.v-modal-item {
  box-sizing: border-box;

  &__name {
    font-family: 'Gotham Pro',Arial,sans-serif;
    line-height: 1.35;
    font-size: 18px;
    font-weight: 700;
    color: #1683c6;
    margin-bottom: 0;
    cursor: pointer;
    outline: none;
    margin-bottom: 5px;
    &-title{
      font-size: 18px;
      line-height: 1.35;
      font-weight: 700;
      color: #1683c6;
    }

    &:hover {
        color: #7c0596b3;
    }

  }


  &__discount{
    margin-left: 8px;
    background-color: #e81616;
  }


  &__images{
    width: 100%;
    margin: 0 auto;
    display: flex;
  }

  &__info{
    width: 100%;
    display: inline;
    float: left;
    margin-left: 20px;
    margin-right: 20px;
  }
}






</style>
