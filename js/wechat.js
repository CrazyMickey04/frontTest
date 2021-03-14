import Componet from "./compoent"
class WeChat {
 data = []
 initalization = () => {
  this.generateData();
  this.data.forEach(item => {
   Componet(item)
  })
 }
 // 生成1000好友 
 generateData = () => {
  return []
 }
}