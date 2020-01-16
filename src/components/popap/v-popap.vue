<template lang="html">
  <div>
    <b-button @click="showModal" ref="btnShow">Open Modal</b-button>
    <b-modal id="modal-1">
      <div class="d-block">Hello From My Modal!</div>
      <b-button @click="hideModal">Close Me</b-button>
    </b-modal>
  </div>
</template>

<script>

</script>

<style lang="css" scoped>
</style>
