<template>
  {{name}}
  {{counter}}
  <button @click="store.commit('add')">
    加法
  </button>
  <button @click="reduce">
    减法
  </button>
  {{num}}
</template>
<script setup lang="ts">
import { ref, PropType, computed } from 'vue'
import { useStore } from 'vuex'
import { key } from '../store'
type UserInfo = {
  name: string,
  age: number,
  sex: string
}
const store = useStore(key)
const counter = computed(() => store.state.counter)
const name = computed(() => store.state.name)
function add() {
  store.commit('add')
}
const num = ref(100)
const reduce = function() {
  num.value--
}
defineProps({
  userinfo: {
    type: Object as PropType<UserInfo>,
    required: true
  }
})
</script>