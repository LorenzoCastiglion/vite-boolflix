
<template>

    <Transition name="slidetitle">
        <div class="position-relative">
            <div v-show="list.length" class=" screen px-5 position-absolute">{{ schermo }}</div>
        </div>
    </Transition>


    <div class="scroller d-flex align-items-center mt-3  m-auto">


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
                this.list = res.data.results;
                let midpoint = 'movie'
                if (this.endPoint.includes('tv')) {
                    midpoint = 'tv'
                }
                this.list.forEach((element) => {
                    axios.get(`${store.apiUrl}/${midpoint}/${element.id}/credits`, store.options).then((cast) => {
                        element.cast = cast.data.cast
                        console.log(element.cast)
                        console.log(this.list)
                    })
                });
            })
        },
    },

    computed: {
        schermo() {
            if (this.endPoint.includes('trending')) {
                if (this.endPoint.includes('tv')) {
                    return 'Trending Tv Shows'
                } else if (this.endPoint.includes('movie')) {
                    return 'Trending Movies'
                }
            } else if (this.endPoint.includes('movie')) {
                return 'I like it when you Movies'
            } else if (this.endPoint.includes('tv')) {
                return 'Why so Series?'

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

    left: 7%;
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 40px;
    color: #CE1000;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;


}


.scroller {

    width: 80%;
    margin-bottom: 10px;
    height: 400px;
    overflow: auto;
    display: flex;

    &::-webkit-scrollbar {
        height: 6px;
        width: 0;
        border-radius: 10px;
    }

    &::-webkit-scrollbar-track {
        background: rgb(58, 58, 58);


    }

    &::-webkit-scrollbar-thumb {
        border-bottom: 100vh solid #CE1000;
        border-radius: 10px;



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