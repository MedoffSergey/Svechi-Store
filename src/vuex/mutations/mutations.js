export default  {
  SWITCH_MOBILE: (state) => {
    state.isMobile = true;
    state.isDesktop = false;
  },
  SWITCH_DESKTOP: (state) => {
    state.isMobile = false;
    state.isDesktop = true;
  },

  SET_PRODUCTS_TO_STATE: (state, products) => {
    state.products = products;
  }

}
