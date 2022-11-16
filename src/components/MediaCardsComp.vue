
<template>
    <div class="scroller">

        <TransitionGroup name="list">
            <MediaCardComp v-for="(item, index) in list" :key="index" :card="item" />
        </TransitionGroup>


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
.scroller {
    margin-bottom: 50px;
    height: 300px;
    overflow: auto;
    display: flex;
}

// transition in progress

.list-enter-active,
.list-leave-active {
    transition: all 0.8s ease;
}

.list-enter-from,
.list-leave-to {
    opacity: 0;
    transform: translateX(100px);
}
</style>