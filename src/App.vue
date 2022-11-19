<template>
  <header class=" sticky-top position-sticky " v-if="!isLoading">
    <SearchBarComp />
  </header>

  <div class="splash position-relative">
    <LoadingComp :isLoading="isLoading" />
  </div>

  <div :class="{ 'd-none': isLoading }">
    <JumboComp />
  </div>

  <main v-if="!isLoading">
    <MainComp />
  </main>

  <footer>

  </footer>

</template>

<script>
import LoadingComp from './components/LoadingComp.vue';
import SearchBarComp from './components/SearchBarComp.vue';
import JumboComp from './components/JumboComp.vue';
import MainComp from './components/MainComp.vue';
import axios from 'axios';

import { store } from './store';


export default {
  data() {
    return {
      store,
      isLoading: true,
      options: {
        params: {
          api_key: '17f37c920e1c0e0a5f05cac02361fe4c',
        },

      }
    }
  },

  components: {
    SearchBarComp,
    MainComp,
    JumboComp, LoadingComp
  },

  methods: {
    getGenre() {
      axios.get(store.genreUrl, this.options).then((res) => {
        store.listGenre = [...res.data.genres];
        console.log(store.listGenre)
      })

    }
  },

  mounted() {
    setTimeout(() => {
      this.isLoading = false;
      console.log(this.isLoading)

    }, 5000);
    this.getGenre();
  }


}
</script>

<style lang="scss">
.splash {
  z-index: 10000;
}
</style>