
// 全局引入element3
// import element3 from 'element3'
// import 'element3/lib/theme-chalk/index.css'
// export default function(app: any) {
//   app.use(element3)
// }

// 按需加载
import { ElButton } from "element3"
import 'element3/lib/theme-chalk/button.css'

export default function(app: any) {
  app.use(ElButton)
}
