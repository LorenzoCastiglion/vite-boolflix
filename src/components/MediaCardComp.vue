<template>

    <div class="carta col-4 position-relative">
        <div class="img-container">

            <img :src="(card.backdrop_path) ? `https://image.tmdb.org/t/p/w300/${card.backdrop_path}` : '/img/BOOLFLIX.png'"
                :alt="(!!card.title) ? card.title : card.name">
        </div>

        <div class="descrizione px-3 position-absolute w-100 d-flex align-content-center align-items-center gap-4">
            <div class="col-4">
                <p class=" text-white " v-html="(!!card.title) ? card.title : card.name"></p>
                <p id="og-name" v-html="(!!card.original_title) ? card.original_title : card.original_name"></p>
            </div>
            <div class="col-6 flex-grow-1 py-1 overflow-auto h-75">
                <p class="trama">{{ card.overview }}</p>
            </div>

        </div>



    </div>

</template>

<script>
export default {
    name: 'MediaCardComp',
    props: ['card']
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Alfa+Slab+One&family=Montserrat:wght@400;700&display=swap');

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
</style>