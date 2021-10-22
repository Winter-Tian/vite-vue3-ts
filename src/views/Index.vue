<template>
  <Comp :userinfo="data"></Comp>
  <div>我是首页</div>
</template>

<script setup lang="ts">
import Comp from '../components/Comp.vue'
import { ref } from '@vue/reactivity'
const data = ref({
  name: '张三',
  age: 18,
  sex: '男'
})
</script>

<style>

</style>