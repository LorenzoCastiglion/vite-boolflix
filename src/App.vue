<template>
  <header class=" sticky-top position-sticky">
    <SearchBarComp />
  </header>

  <main>
    <MainComp />
  </main>

  <footer>

  </footer>

</template>

<script>
import SearchBarComp from './components/SearchBarComp.vue';
import MainComp from './components/MainComp.vue';

import { store } from './store';


export default {
  data() {
    return {
      store,

    }
  },

  components: {
    SearchBarComp,
    MainComp
  }
}
</script>

<style lang="scss">

</style>