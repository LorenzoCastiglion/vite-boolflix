<template>

    <div class="carta mx-3 col-xl-3 col-md-6 col-sm-12  position-relative flex-shrink-0" @mouseover="hover = true"
        @mouseleave="hover = false">
        <div class="img-container">


            <Transition name="stars">
                <div class=" position-absolute sopra w-100" v-if="hover">

                    <div class="d-flex flex-column position-absolute stelline">
                        <i v-for="n in 5" class="fa-star" :class="(n <= vote) ? 'fa-solid' : 'fa-regular'"></i>

                    </div>

                    <div class="overview  py-1 pe-3 overflow-auto h-75">
                        <div class="mb-0 d-flex">
                            <div v-for="el in store.listGenre">
                                <span class="me-1 genere " v-if="card.genre_ids.includes(el.id)">|{{
                                        el.name.toUpperCase()
                                }}|</span>
                            </div>
                        </div>
                        <p class="trama">{{ card.overview }}</p>
                        <!-- fare v-for per prendere i primi 5 res -->
                        <div>
                            <p class="mb-0">CAST:</p>
                            <p class="cast-members mb-0" v-for="(el, i) in card.cast" v-show="i <= 4">- {{ el.name
                            }} / {{ el.character }}</p>
                        </div>
                    </div>

                    <div class="lang-flag position-absolute">
                        <img :src="flag" class="h-100">
                    </div>
                </div>
            </Transition>


            <img :src="(card.backdrop_path) ? `https://image.tmdb.org/t/p/w300/${card.backdrop_path}` : '/img/BOOLFLIX.png'"
                :alt="(card.title || card.name)">
        </div>

        <div class="descrizione px-4 position-absolute w-100 d-flex align-content-center align-items-center gap-4">


            <div class="col">

                <p class=" text-white " v-html="this.card.title || this.card.name"></p>
                <p id="og-name" v-html="card.original_title || card.original_name"></p>
            </div>


        </div>



    </div>

</template>

<script>

import { store } from '../store';

export default {
    name: 'MediaCardComp',
    props: ['card'],

    data() {
        return {
            store,
            hover: false,


        }
    },


    computed: {
        collassa() {
            const taglia = (!!this.card.title) ? this.card.title : this.card.name;
            return store.truncate(taglia, 10)

        },

        vote() {
            return Math.ceil(this.card.vote_average / 2)
        },

        // genre() {

        //     for (let i = 0; i < store.listGenre.length; i++) {

        //         if (store.listGenre.id.includes(this.card.genre_id)) {
        //             return store.listGenre.name
        //         }

        //     }
        // },

        // flag e controlli mancanti
        flag() {
            let flag = this.card.original_language;
            if (flag == 'en') {
                flag = 'gb';
            }
            else if (flag == 'ja') {
                flag = 'jp';
            }
            else if (flag == 'zh') {
                flag = 'cn';
            }
            else if (flag == 'ko') {
                flag = 'kr';
            }
            else if (flag == 'cs') {
                flag = 'sk';
            }
            else if (flag == 'da') {
                flag = 'dk';
            }
            let flagUp = flag.toUpperCase();
            const urlFlag = `https://www.countryflagicons.com/SHINY/64/${flagUp}.png`
            return urlFlag;
        }

    }
}



</script>



<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@400;700&display=swap');

.carta {
    height: 300px;
    transition: 0.4s ease-in-out;
    border-bottom: 4px solid #CE1000;


    .sopra {
        border-top: 2px solid #CE1000;
        color: white;
        background-color: rgba(0, 0, 0, 0.414);
        height: 230px;
        top: 30px;
    }

    .sopra i {
        color: #CE1000;

    }

}

.stelline {
    top: 38px;
    left: 10px;
}

.overview {

    top: 0px;
    left: 50px;
    position: absolute;
}

.lang-flag {

    top: 6px;
    left: 5px;
    width: 30px;
    height: 30px;
}

.genere {
    font-size: 11px;
    color: white // background-color: black;

}

.carta:hover {

    z-index: 10000;
    transform: scale(1.2);
    transform-origin: top left;

}

.descrizione {

    z-index: 1000;
    bottom: 0;
    left: 0;
    height: 100px;
    background: linear-gradient(180deg, rgba(207, 207, 207, 0) 1%, rgba(0, 0, 0, 1) 40%);

    p {
        font-family: 'Alfa Slab One', cursive;
        font-size: 18px;
        margin-bottom: 0;
    }

    .trama {
        color: white;
        font-family: 'Montserrat', sans-serif;
        font-size: 12px;
    }



}

#og-name {
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
    color: white;
}

.img-container {
    img {
        height: 250px;
        width: 100%;
    }
}



//animaz stelle

.stars-enter-active,
.stars-leave-active {
    transition: all 0.5s ease;
}

.stars-enter-from,
.stars-leave-to {

    opacity: 0;
    transform: translateY(100px);
}
</style>