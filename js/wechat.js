import Componet from "./compoent.js"
import domUtils from "./domUtils.js"
import { initUser, throttling } from "./utils.js"
import observer from "./observer.js"
class WeChat {
 data = []
 constructor(domStr) {
  this.dom = domUtils.query(domStr);
  this.initalization();
  window.addEventListener('scroll',
   throttling(this.publish, 100, 100));
 }
 publish = (e) => {
  observer.publish('scorll', e)
 }
 initalization = () => {
  this.generateData();
  this.data.forEach(item => {
   new Componet(this.dom, item)
  })
 }
 // 生成1000好友 
 generateData = () => {
  this.data = initUser(100)
 }
}
export default new WeChat('container')