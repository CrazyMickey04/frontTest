import Componet from "./compoent.js"
import domUtils from "./domUtils.js"
import { initUser, throttling } from "./utils.js"
import observer from "./observer.js"
class WeChat {
 data = []
 constructor(domStr) {
  this.dom = domUtils.query(domStr);
  this.tab = domUtils.quertClass('tab_item')
  this.tabToggle(this.tab);
  this.initalization();
  window.addEventListener('scroll',
   throttling(this.publish, 100, 100));
 }
 publish = (e) => {
  observer.publish('scorll', e)
 }
 initalization = () => {
   // 初始化好友数量
  this.generateData(100);
  this.data.forEach(item => {
   new Componet(this.dom, item)
  })
 }
 // 生成1000好友 
 generateData = (count) => {
  this.data = initUser(count)
 }
 // 切换footer tab
 tabToggle = (ele) => {
  for(var i = 0; i < ele.length; i++) {
    ele[i].onclick = function () {
      for(var i=0;i<ele.length;i++){
        ele[i].className='tab_item';
      }
      this.className='tab_item active';
    }
  }
 }
}
export default new WeChat('container')