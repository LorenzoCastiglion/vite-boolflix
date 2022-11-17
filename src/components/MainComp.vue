<template>
    <MediaCardsComp v-for="(el, i) in listEndPoint" :key="i" :endPoint="el" v-if="store.options.params.query" />

    <MediaCardsComp v-for="(element, j) in listTrend" :key="j" :endPoint="element" v-else />

</template>

<script>
import MediaCardsComp from './MediaCardsComp.vue';
import { store } from '../store';

export default {
    data() {
        return {
            listEndPoint: ['/search/movie', '/search/tv'],
            listTrend: ['/trending/movie/day', '/trending/tv/day'],
            store


        }
    },

    components: {
        MediaCardsComp

    }
}


</script>

<style lang="scss" scoped>

</style>