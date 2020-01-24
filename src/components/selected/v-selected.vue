<template lang="html">
  <div class="v-select">
    <div class="article">
      <p class="title-name">Артикул</p>
      <b-form-input v-model="article" placeholder="Введите артикул"></b-form-input>
      <b-button class="article-btn" size='sm' variant="outline-success">Искать</b-button>
    </div>


      <p class="title-name">Категории</p>

      <div class="categories">
        <p class="options-item"
          v-for="option in options"
          :key="option.value"
          @click="selectOption(option)"
          >
          {{option.name}}
        </p>
      </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default() {
        return []
      }
    },
    selected: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      article: ''
    }
  },
  methods: {
    selectOption(option) {
      this.$emit ('selected',option)
    },

  }
}
</script>

<style lang="scss" >

.article {
  padding: 0 $padding*2;
  
  &-btn{
    display: block;
    margin: $margin 0
  }
}

.title-name {
    display: flex;
    font-weight: bold;
    padding: $padding 10px;
}

.options-item {
    display: flex;
    margin: 0;
    padding: $padding 10px;

      &:hover {
        transition-duration: .15s;
        background-color: #efefef
    }
  }

</style>
