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
    this.createChatList(); // 联系人列表
    this.createBar(); // 右侧bar
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
  // rightBar list
  createBar = () => {
    let template =
      `<li class="bar_item">
        ${this.title}
        </li>`;
    let dom = domUtils.createDom(template, `.bar_item`);
    domUtils.query('bar_wrap').appendChild(dom)
    this.scrollTitle(dom)
  }
  
  // 绑定scroll事件
  bindScrollEvent = () => {
    console.log('接受到了',this.title)
    observer.addListener('scorll', (e) => {
      // console.log(e)
      this.currentTitle = this.watchTitle(this.titles)
      console.log('currentTitle', this.currentTitle)
      if(this.title===this.currentTitle){
        this.activeBar('bar_item','bar_item active')
        console.log(this.title,true )
      }else{
        console.log(this.title,false )
      }
    })
  }
  // 监听fixed title
  watchTitle = (ele) => {
    for(let i = 0; i < ele.length; i++) {
      let offTop = ele[i].getBoundingClientRect().top
      let topHeight = domUtils.query('headCon').offsetHeight
      let selfHeght = ele[i].offsetHeight
      ele[i].className = 'title'
      if (offTop >= topHeight && offTop <= (topHeight + selfHeght)) {
        ele[i].className = 'title active'
        return ele[i].innerText
      }
    }
    // Array.from(ele).forEach((item) => {
    //   let offTop =  item.getBoundingClientRect().top
    //   let topHeight = domUtils.query('headCon').offsetHeight
    //   let selfHeght = item.offsetHeight
    //   item.className = 'title'
    //   if (offTop >= topHeight && offTop <= (topHeight + selfHeght)) {
    //     item.className = 'title active'
    //     return item.innerText
    //   }
    // })
  }
  // right bar
  activeBar(defaultClass, activeClass) {
    let barDom = domUtils.quertClass(defaultClass);
    Array.from(barDom).forEach(item => {
      item.className = defaultClass
      if (item.innerText == this.currentTitle) {
        item.className = activeClass
      }
    })
  }
 //scrollTitle bar联动
  scrollTitle = (ele) => {
    ele.onclick = (e) => {
      console.log('barClick', e.target.innerText)
      let clickText = e.target.innerText;
      Array.from(domUtils.quertClass('title')).forEach(item => {
        if(item.innerText == clickText) {
          window.scrollTo({
            top: item.offsetTop - item.offsetHeight,
            behavior: "smooth"
          });
        }
      })
    }
  }
}