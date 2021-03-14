import domUtils from "./domUtils.js"
import observer from "./observer.js"
export default class Component {
  constructor(container, wechatInfo) {
    //title userlist 
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
    this.bindScrollEvent();
  }
  // 生成ul列表
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
  // 遍历list 生成users li
  createChat = (parentDom) => {
    let doms = ''
    this.list.forEach(item => {
      let child = this.tempalteTransf(item);
      doms += child;
    })
    return doms;
  }
  // users temp
  tempalteTransf = (chat) => {
    let template =
      `
      <li> 
        <div class="img" style="background:url(./images/${chat.img}.jpeg);background-size: cover"></div>
        <div>
            <span>${chat.name}</span>
        </div>
      </li>
      `
    return template
  }
  // 绑定scroll事件
  bindScrollEvent = () => {
    console.log(observer.messageMap)
    observer.addListener('scorll', (e) => {
      console.log(e)
    })
  }

  //  scroll触发事件
  trigger = () => {

  }
  
}