<!--
 * @Description: 
 * @Author: PhilRandWu
 * @Github: https://github/PhilRandWu
 * @Date: 2022-04-13 08:10:08
 * @LastEditTime: 2022-04-13 08:32:28
 * @LastEditors: PhilRandWu
-->
<template>
  <input v-model="msg" />
  <div ref = "display" @click="clickHandle">{{ msg }}</div>
</template>

<script>
export default {
  data() {
    return {
      msg: "",
    };
  },
  methods: {
      clickHandle() {
          this.ref.display.color = '#ff0';
          alert(this.msg);
      }
  },
};
</script>

<style>
input {
    width: 200pc;
    height: 30px;
    border: 2px solid #000;
}
</style>
