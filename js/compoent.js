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
    // 获取每个 .title元素
    this.titles = domUtils.quertClass('title')
    this.currentTitle = ''
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
      // console.log(e)
      this.currentTitle = this.watchTitle(this.titles)
      console.log('currentTitle', this.currentTitle)
    })
  }

  //  scroll触发事件
  trigger = () => {

  }
  // 监听fixed title
  watchTitle = (ele) => {
    for(let i = 0; i < ele.length; i++) {
      let offTop = ele[i].getBoundingClientRect().top
      if (offTop >= 50 && offTop <= 90) {
        return ele[i].innerText
      }
    }
  }
  
}