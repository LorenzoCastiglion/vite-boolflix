
<template>
    <div>
        <MediaCardComp v-for="(item, index) in list" :key="index" :card="item" />
    </div>
</template>

<script>
import MediaCardComp from './MediaCardComp.vue';
import { store } from '../store';
import axios from 'axios';

export default {
    name: 'MediaCardsComp',

    data() {
        return {
            store,
            list: []
        }
    },

    components: {
        MediaCardComp
    },

    watch: {
        'store.clicker'() {
            this.getApi()
        }
    },

    props: ['endPoint'],

    methods: {
        getApi() {

            const url = store.apiUrl + this.endPoint;
            axios.get(url, store.options).then((res) => {
                this.list = [...res.data.results];

            })


        }
    },


}

</script>

<style lang="scss" scoped>

</style>