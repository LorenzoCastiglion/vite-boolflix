<template>


    <div class="d-flex justify-content-between p-2 px-5 align-items-center blur ">

        <img src="../../public/img/BOOLFLIX.png" alt="">

        <div class="d-flex flex-grow-1 ms-4">
            <ul class="d-flex gap-3  list-unstyled mb-0 ">

                <li><a href="">Home</a></li>

                <li><a href="">Serie Tv</a></li>

                <li><a href="">Film</a></li>

                <li><a href="">Generi<i class="fa-sharp fa-solid fa-chevron-down ms-2"></i></a></li>

            </ul>
        </div>



        <div class="col-4 d-flex ">
            <div class="col my-1">

                <div class="input-group">
                    <input type="text" class="form-control text-danger bg-transparent" id="serchMedia"
                        placeholder="Search..." v-model="text" @keyup.enter="search">
                </div>
            </div>
            <div class=" my-1">
                <button class="btn" @click="search"><i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>

    </div>



</template>

<script>
import { store } from '../store';

export default {
    name: 'SearchBarComp',

    data() {
        return {
            store,
            text: ''

        }
    },

    methods: {
        search() {
            store.options.params.query = this.text
        }
    }
}

</script>

<style lang="scss" scoped>
li a {
    color: white;
    text-decoration: none;

    &:hover {
        color: #CE1000;
    }
}

.blur {
    z-index: 1000;
    backdrop-filter: blur(10px);
    border-bottom: 2px solid #CE1000;
}

img {
    width: 200px;
    position: relative;

}

i {
    color: #CE1000;
}
</style>
