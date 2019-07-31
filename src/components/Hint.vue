<template>
  <div class="hint" v-if="$attrs.hint.used === false" >
  <img width="50px" height="50px" :src="$attrs.hint.image" :alt="$attrs.hint.name"/>
  </div>
</template>

<style scoped>
.hint{
  width: 50px;
  height: 50px;
  display: inline-block;
  border-radius: 15px;
}
</style>
