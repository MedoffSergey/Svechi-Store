<template lang="html">
  <div class="v-select">
    <p class="title-name">Категории</p>

      <p class="options-item"
      v-for="option in options"
      :key="option.value"
      @click="selectOption(option)"
      >
      {{option.name}}
      </p>
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

  }
}
</script>

<style lang="scss" >
.v-select {

}

.title {
  border: 1px solid #000;
  padding:  $padding;
  border: $border;
  border-radius: $radius;
  &-name {
    display: flex;
    font-weight: bold;
    padding: $padding 10px;
  }
}
.options {
  border: $border;
  border-radius: $radius;
    &-item {
    display: flex;
    margin: 0;
    padding: $padding 10px;
      &:hover {
        transition-duration: .15s;
        background-color: #efefef
      }
    }
}
</style>
