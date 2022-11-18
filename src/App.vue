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
import axios from 'axios';

import { store } from './store';


export default {
  data() {
    return {
      store,
      options: {
        params: {
          api_key: '17f37c920e1c0e0a5f05cac02361fe4c',
        }
      }
    }
  },

  components: {
    SearchBarComp,
    MainComp
  },

  methods: {
    getGenre() {
      axios.get(store.genreUrl, this.options).then((res) => {
        store.listGenre = [...res.data.genres];
        console.log(store.listGenre)
      })

    }
  },

  created() {
    this.getGenre();
    console.log(store.listGenre)
  }
}
</script>

<style lang="scss">

</style>