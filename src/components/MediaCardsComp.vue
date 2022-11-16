
<template>
    <div class="screen px-5">{{ schermo }}</div>
    <div class="scroller">


        <TransitionGroup name="slide">
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

    computed: {
        schermo() {

            if (this.endPoint.includes('tv')) {
                return 'Tv Show'
            } else if (this.endPoint.includes('movie')) {
                return 'Movie'
            }

        }
    }


}

</script>

<style lang="scss" scoped>
.screen {
    font-size: 30px;
    color: white;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

.scroller {
    margin-bottom: 10px;
    height: 300px;
    overflow: auto;
    display: flex;
}

// transition in progress

.slide-enter-active,
.slide-leave-active {
    transition: all 0.5s ease;
}

.slide-enter-from,
.slide-leave-to {

    opacity: 0;
    transform: translateX(100px);
}
</style>