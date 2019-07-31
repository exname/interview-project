<template>
  <div class="reward">
 <img class="coin"  src="../assets/coin.png">
    <p class="coin">{{$attrs.reward}}
 </p>
  </div>
</template>

<style scoped>
.reward{
  width: 10%;
  height: 50px;
  display: inline-block;
  border-radius: 15px;
  background-color: coral;
  right: 0;
  position: absolute;
}
  .coin{
    height: 50px;
    width: 50px;
    display: inline-block;
    vertical-align: top;
  }

</style>
