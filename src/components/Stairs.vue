<template>
    <div class="stair">
        <div class="prizeBox" v-for="prize in prizes" :key="prize"
             :style="[prizes.indexOf(prize)==$attrs.level ? {'background-color': 'aqua'} : {'background-color': 'aquamarine'}]">
            {{prize}}
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                prizes: [10000, 9000, 8000, 7000, 6000, 5000, 2000, 1500, 1000, 800, 500, 200, 150, 100, 50]
            }
        }


    }
</script>

<style scoped>
    .stair {
        width: 20%;
        height: 100%;
        display: inline-block;
        border-radius: 15px;
        position: fixed;
    }

    .prizeBox {
        padding-top: 4%;
        width: 100%;
        height: 4%;
        display: block;
        border-radius: 25px;
        background-color: aquamarine;
        position: relative;
        text-align: center;
        border:aqua dotted ;
    }

</style>
