<template>


    <div class="d-flex justify-content-between p-3 px-5 align-items-center blur ">

        <div>
            <img src="../../public/img/BOOLFLIX.png" alt="">
        </div>


        <div class="col-4 d-flex ">
            <div class="col my-1">

                <div class="input-group">
                    <input type="text" class="form-control text-danger bg-transparent" id="serchMedia"
                        placeholder="Search..." v-model="store.options.params.query"
                        @keyup.enter="store.clicker = !store.clicker">
                </div>
            </div>
            <div class=" my-1">
                <button class="btn" @click="store.clicker = !store.clicker"><i
                        class="fa-solid fa-magnifying-glass"></i></button>
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
            store
        }
    }
}

</script>

<style lang="scss" scoped>
.blur {
    backdrop-filter: blur(10px);
    border-bottom: 2px solid #CE1000;
}

img {
    width: 200px;

}

i {
    color: #CE1000;
}
</style>
