<template lang="html">
  <div class="v-select">
    <div>
      <b-navbar toggleable="lg">


        <b-navbar-toggle target="nav-collapse1"></b-navbar-toggle>

        <b-collapse id="nav-collapse1" is-nav>
          <b-navbar-nav>
            <div class="filter">

              <div class="article">
                <p class="title-name">Артикул</p>
                <div class="article-input">
                  <b-form-input v-model="article" placeholder="Введите артикул"></b-form-input>
                  <b-button class="article-btn " size='sm' variant="outline-success">Искать</b-button>
                </div>
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
          </b-navbar-nav>

        </b-collapse>
      </b-navbar>
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

<style lang="scss" scoped>
.navbar-collapse{
  margin: 0px!important;
}

.navbar{
  justify-content: flex-end;
}

.article {


  &-input {
    width: 100%;
    display: flex;

    @media (max-width: $breakpoint_sm) {
      display: flex;
      width: 100%;
    }
  }

  &-btn {

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
