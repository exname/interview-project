<template>
  <div>
<the-game></the-game>
  </div>
</template>
<script>
  import Game from './components/Game';


  export default {
    name: "App.vue",
    components:{
      'the-game': Game,
    }
  }
</script>

<style>
  body{
    background-color: #2c3e50;
  }
</style>
