<template lang="html">
  <div class="v-select">
    <p>Категории</p>
    <div class="title"
    @click="areOptionsVisible = !areOptionsVisible"
    >
      <div class="selected-name">
        {{selected}}
        <img class="select-image" src="https://image.flaticon.com/icons/svg/565/565620.svg" width="15px" alt="">

      </div>
    </div>

    <div class="options"
      v-if="areOptionsVisible"
    >

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
      default: ''
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit ('select',option)
      this.areOptionsVisible = false;
    },
    hideSelect(){
      this.areOptionsVisible = false
    }
  }
}
</script>

<style lang="scss" >
.v-select{

}
.select-image {
  float: right;
  margin-top: 5px;
}
.title{

  border: 1px solid #000;
  padding:  $padding;
  border: $border;
  border-radius: $radius;
}
.options{
  border: $border;
  border-radius: $radius;
    &-item{
      &:hover{
        background-color: #efefef
      }
    }
}
</style>
