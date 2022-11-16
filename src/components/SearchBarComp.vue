<template>


    <div class="d-flex justify-content-between p-4 px-5 align-items-center blur">

        <div>
            <img src="../../public/img/BOOLFLIX.png" alt="">
        </div>


        <div class="col-4 d-flex ">
            <div class="col my-1">

                <div class="input-group">
                    <input type="text" class="form-control text-danger bg-transparent" id="serchMedia"
                        placeholder="search">
                </div>
            </div>
            <div class=" my-1">
                <button type="submit" class="btn"> <i class="fa-solid fa-magnifying-glass"></i></button>
            </div>
        </div>

    </div>



</template>

<script>

export default {
    name: 'SearchBarComp',
}

</script>

<style lang="scss" scoped>
.blur {
    backdrop-filter: blur(10px);
}

img {
    width: 200px;

}

i {
    color: #CE1000;
}
</style>
