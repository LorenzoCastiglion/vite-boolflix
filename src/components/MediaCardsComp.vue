
<template>

    <Transition name="slidetitle">
        <div v-show="list.length" class="screen px-5">{{ schermo }}</div>
    </Transition>


    <div class="scroller d-flex align-items-center ">


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
        'store.options.params.query'() {
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


        },


    },

    computed: {
        schermo() {
            if (this.endPoint.includes('trending')) {
                return 'Trending Now'
            } else if (this.endPoint.includes('movie')) {
                return 'Movies'
            } else if (this.endPoint.includes('tv')) {
                return 'Tv Shows'

            }
        }
    },

    created() {
        this.getApi()
    }


}

</script>

<style lang="scss" scoped>
.screen {
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 30px;
    color: #CE1000;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
}

.scroller {


    margin-bottom: 10px;
    height: 400px;
    overflow: auto;
    display: flex;

    &::-webkit-scrollbar {
        display: none;
    }
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

.slidetitle-enter-active,
.slidetitle-leave-active {
    transition: all 0.5s ease;
}

.slidetitle-enter-from,
.slidetitle-leave-to {

    opacity: 0;
    transform: translateX(-100px);
}
</style>