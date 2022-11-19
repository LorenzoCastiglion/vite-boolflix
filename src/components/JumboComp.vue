<template>
    <div class="jumbo">
        <video autoplay muted loop id="myVideo">
            <source src="/video/trailer.mp4" type="video/mp4">
        </video>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.jumbo {
    z-index: -1;
    margin-top: 0px;

    position: relative;



    #myVideo {
        height: 980px;

        left: 0;
        top: 0;
        width: 100%;
    }
}
</style>