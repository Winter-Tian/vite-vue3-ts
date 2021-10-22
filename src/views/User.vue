<template>
  <el-button type="parmily" @click="getUser">获取数据</el-button>
  <div v-for="(item, index) in userList" :key="index">
    姓名：{{item}}
  </div>
</template>

<script setup lang="ts">
import { ref, toRef } from 'vue'
let a = {}
let userList = ref([])
const getUser = function() {
  fetch('/api/getUsers').then(res => res.json().then(res => {
    console.log(res.data);
    userList.value = res.data
  }))
}
</script>

<style lang="scss" scoped>
</style>