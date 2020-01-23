<template>
  <div class="filter-form">
    <b-form >

      <b-form-group class="name" label="Название свечи">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Введите название"
        ></b-form-input>
      </b-form-group>

      <b-form-group class="categories" label="Категории" >
        <b-form-select
          id="input-3"
          v-model="form.categories"
          :options="categories"
          required
        ></b-form-select>
      </b-form-group>


      <div class="price">
        <label>Цена </label>
        <b-form-input id="range-2" v-model="price" type="range" min="0" max="1000" step="5"></b-form-input>
        <div class="my-2"> {{ price }} Рублей</div>
      </div>

      <b-button class="my-2" type="submit" variant="success">Искать</b-button>

    </b-form>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        price: '0',
        form: {
          name: '',
          categories: null
        },
        categories: [{ text: 'Все', value: null }, 'Ароматизированные','Витая', 'Резная', 'Сердечки', 'Церковные','Цилиндр','Цветы'],
        show: true
      }
    },
    methods: {

      onReset(evt) {
        evt.preventDefault()
        this.form.name = ''
        this.form.categories = null
      }
    }
  }
</script>

<style lang="scss">
  .filter-form{
    max-width: 50%;
    margin: 0 auto;
    box-sizing: border-box;
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: $radius;
    padding: $padding $padding*2;

    @media (max-width: $breakpoint_xl) {
      max-width: 75%;
    }


    @media (max-width: $breakpoint_sm) {
      max-width: 100%;


    }

  }

  .price{
      max-width: 100%;

  }

  .name {

  }

  .categories {

  }

</style>
