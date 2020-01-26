<template lang="html">
  <div class="v-select">
    <div>
      <b-navbar toggleable="lg">
        <b-navbar-toggle target="nav-collapse1"></b-navbar-toggle>
        <b-collapse ref="navbar" id="nav-collapse1" is-nav>
          <div class="filter">

              <div class="article">
                <p class="title">Артикул</p>

                <div class="article-input ">
                  <input
                    :value="value"
                    @input="input"
                    placeholder="Введите артикул" />
                </div>
              </div>

              <div class="categories" >
                <p class="title">Категории</p>
                <p class="options-item "
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
                >
                {{option.name}}
              </p>

            </div>
            </div>

        </b-collapse>
      </b-navbar>
    </div>
  </div>
</template>


<script >
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: String,
      default: ""
    },
    isExpanded: {
      type: Boolean,
      default: false
    },
    value: {
      type: [String, Number],
      default: ''
    }
  },
  data() {
    return {
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('selected', option);
      this.$refs.navbar.show = false;                                            //Опасная штука скрывает окно навбара в мобильном приложении
    },
    input(e) {
      let value = e.target.value;
      this.$emit('input', value)
    }
  }

}
</script>

<style lang="scss" scoped>
.navbar-collapse {
    margin: 0;
}

.navbar {
    justify-content: flex-end;
}

.article {

    &-input {
        width: 100%;
        display: flex;
        margin: 0 0 30px 0;
        @media (max-width: $breakpoint_sm) {
            display: flex;
            width: 100%;
        }
    }

    &-btn {
        }
}

.title {
    display: flex;
    font-weight: bold;
    padding: $padding 10px;
}

.options-item {
    display: flex;
    margin: 0;
    padding: $padding 10px;

    &:hover {
        transition-duration: 0.15s;
        background-color: #efefef;
    }
}

input {
  border: $border;
  max-width: 200px;
  border-radius: $radius;
  padding: $padding;
  &:focus{
    outline: none;
  }
}

</style>
