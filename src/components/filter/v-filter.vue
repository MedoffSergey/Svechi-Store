<template>
  <div>
    <b-form >

      <b-form-group id="input-group-2" label="Название свечи" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.name"
          required
          placeholder="Введите название"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Категории" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="form.categories"
          :options="categories"
          required
        ></b-form-select>
      </b-form-group>


      <div class="price">
        <label>Цена </label>
        <b-form-input id="range-2" v-model="price" type="range" min="0" max="1000" step="1"></b-form-input>
        <div class="my-2">Цена: {{ price }} Рублей</div>
      </div>

      <b-button type="submit" variant="success">Искать</b-button>

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

<style media="screen">
  .price{
    max-width: 40%;
  }

</style>
