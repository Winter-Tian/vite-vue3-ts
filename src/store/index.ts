import { InjectionKey } from "vue";
import { createStore, Store } from "vuex";

// 1、创建一个injectionKey
export type State = {
  counter: number,
  name: string
}
export const key: InjectionKey<Store<State>> = Symbol()


export default createStore({
  state: {
    counter: 3,
    name: '李逵'
  },
  mutations: {
    add(state) {
      state.counter++
    }
  }
})