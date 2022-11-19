<template>
    <div :class="{ loader: true, fadeout: !isLoading }">
        <div class="load" id="app">
            <video autoplay muted id="myLoad">
                <source src="/video/loader.mp4" type="video/mp4">
            </video>
        </div>
    </div>
</template>
  
<script>
export default {

    props: ["isLoading"]
};
</script>
  
<style lang="scss" scoped>
.loader {
    background-color: black;
    bottom: 0;
    margin: 0 auto;
    display: block;
    font-size: 32px;
    left: 0;
    overflow: hidden;

    position: fixed;
    right: 0;
    text-align: center;
    top: 0;
}

.fadeout {
    animation: fadeout 2s forwards;
}

@keyframes fadeout {
    to {
        opacity: 0;
        visibility: hidden;
    }
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

}

.load {
    margin-top: 0px;
    height: 800px;
    position: relative;


    #myLoad {
        position: absolute;
        left: 0;
        top: 0;
        width: 100%;
    }
}
</style>