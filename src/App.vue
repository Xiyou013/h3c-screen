<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import * as echarts from 'echarts';
import { provide } from 'vue';
provide('ec', echarts)
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
body,
html,
#app {
  margin: 0;
  padding: 0;
  width: 100vw;
  height: 100vh;
}
</style>
