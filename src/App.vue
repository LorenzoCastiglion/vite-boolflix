<template>
  <div>
    <SearchBarComp />
  </div>

</template>

<script>
import SearchBarComp from './components/SearchBarComp.vue';

import { store } from './store';
import axios from 'axios';

export default {
  data() {
    return {
      store,
      endPointMovie: '/search/movie',
      endPointTvShow: '/search/tv'
    }
  },

  methods: {
    getApi() {
      const urlMovie = store.apiUrl + this.endPointMovie;
      axios.get(urlMovie, store.options).then((res) => {
        store.listMovie = [...res.data.results];
        console.log(res.data.results)
      }
      )

      const urlTvShow = store.apiUrl + this.endPointTvShow;
      axios.get(urlTvShow, store.options).then((res) => {
        store.listTvShow = [...res.data.results];
        console.log(res.data.results)
      }
      )
    }

  },

  created() {
    this.getApi();
  },

  components: {
    SearchBarComp,
  }
}
</script>

<style lang="scss">

</style>