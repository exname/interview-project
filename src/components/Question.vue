<template>
  <div class="question" v-html="$attrs.q"/>
</template>

<style scoped>
.question{
  width: 78.5%;
  height: 25%;
  display: inline-flex;
  position: relative;
  background-color: cadetblue;
  border-radius: 25px;
  left: 21%;
  top:30%;
  align-items: center;
  justify-content: center;
}
</style>
