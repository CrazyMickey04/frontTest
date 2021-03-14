import domUtils from "./domUtils.js"
export default class Component {
 constructor(container, wechatInfo) {
  this.title = wechatInfo.title;
  this.list = wechatInfo.users;
  this.offsetTop = false;
  this.offsetEnd = false;
  this.container = container;
  this.init();
 }
 // 初始化 
 init = () => {
  this.createChatList();
 }
 // 生成列表 
 createChatList = () => {
  let chats = this.createChat(this.list);
  let template = 
  `<ul class="chat_list ${this.title}">
    <li class="title">
     ${this.title}
    </li>
    ${chats}
  </ul>`;
  let dom = domUtils.createDom(template, `.${this.title}`);
  this.container.appendChild(dom)

 }
 // 生成 每一列 
 createChat = (parentDom) => {
  let doms = ''
  this.list.forEach(item => {
   let child = this.tempalteTransf(item);
   doms += child;
  })
  return doms;
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
  return template
 }
}