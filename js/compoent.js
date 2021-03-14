import domUtils from "./domUtils"
class Component {
 constructor(container, wechatInfo) {
  this.title = wechatInfo.title;
  this.list = wechatInfo.list;
  this.offsetTop = false;
  this.offsetEnd = false;
 }
 // 初始化 
 init = () => {

 }
 // 生成列表 
 createChatList = () => {
  let template = `<ul class="chat_list ${this.title}"></ul>`;
  let dom = domUtils.parentDom(template);
  let domChild = this.createChat(dom);
 }
 // 生成 每一列 
 createChat = (parentDom) => {
  let doms = []
  this.list.forEach(item=>{
   let child= this.tempalteTransf(item);
   doms.push(child);
  })
  domUtils.appendChild(parentDom,doms);
 }

 // 绑定scroll事件
 bindScrollEvent = () => {

 }

 //  scroll触发事件
 trigger = () => {

 }
 tempalteTransf = (chat) => {
  let template =
   `
   <li> 
    <div class="img">x</div>
    <div>
        <span>${chat.name}</span>
    </div>
  </li>
  `
  return template;
 }
}