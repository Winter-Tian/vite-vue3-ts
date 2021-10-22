<template>
  <ul class="nav-wrap">
    <li
      v-for="(item, index) in routerList"
      :key="index"
    >
      <router-link :to="item.path" :class="{'current-tab': item.name === currentTab}">{{item.name}}</router-link>
    </li>
  </ul>
  {{currentTab}}
  <div>
    <router-view></router-view>
  </div>
  <!-- <img alt="Vue logo" src="./assets/logo.png" /> -->
</template>

<script setup lang="ts">
import { computed } from "@vue/reactivity";
import { useRouter } from 'vue-router'
const router = useRouter()
// 当前路由名称
const currentTab = computed(() => {
  return router.currentRoute.value.name
})
const routerList = [
  { name: 'home', path: '/', text: '首页' },
  { name: 'user', path: '/user', text: '数据' }
]
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
li {
  list-style: none;
}
.nav-wrap {
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #373d41;
  }
}
.current-tab {
  color: #3385f2 !important;
}
</style>
