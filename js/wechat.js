import Componet from "./compoent.js"
import domUtils from "./domUtils.js"
import { initUser, throttling } from "./utils.js"
import observer from "./observer.js"
class WeChat {
 data = []
 constructor(domStr) {
  this.dom = domUtils.query(domStr);
  this.tab = domUtils.quertClass('tab_item')
  this.tabToggle(this.tab, 'tab_item', 'tab_item active');
  this.initalization();
  window.addEventListener('scroll',
   throttling(this.publish, 100, 100));
 }
 publish = (e) => {
   console.log('触发了' )
  observer.publish('scorll', e)
 }
 initalization = () => {
   // 初始化好友数量 
  this.generateData(50);

  this.data.forEach(item => {
   new Componet(this.dom, item)
  })
 }
 // 生成1000好友 
 generateData = (count) => {
  this.data = initUser(count)
 }
 // 切换footer tab
 tabToggle = (ele, defaultClass, activeClass) => {
  for(var i = 0; i < ele.length; i++) {
    ele[i].onclick = function () {
      for(var i = 0; i < ele.length; i++){
        ele[i].className = defaultClass;
      }
      this.className = activeClass;
    }
  }
 }
}
export default new WeChat('container')