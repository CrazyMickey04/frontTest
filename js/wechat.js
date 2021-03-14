import Componet from "./compoent"
import domUtils from "./domUtils"
class WeChat {
 data = []
 constructor(domStr) {
  this.dom = domUtils.query(domStr);
 }
 initalization = () => {
  this.generateData();
  this.data.forEach(item => {
   Componet(this.dom, item)
  })
 }
 // 生成1000好友 
 generateData = () => {
  this.data = []
 }
}