<template>

    <MediaCardsComp v-for="(el, i) in listEndPoint" :key="i" :endPoint="el" />
</template>

<script>
import MediaCardsComp from './MediaCardsComp.vue'

export default {
    data() {
        return {
            listEndPoint: ['/search/movie', '/search/tv']
        }
    },

    components: {
        MediaCardsComp
    }
}


</script>

<style lang="scss" scoped>

</style>