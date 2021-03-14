$(function(){
    $('.footer_tab li').click(function(e){
      $('.footer_tab li').removeClass("active")
      $(this).addClass("active")
    })
    $('.right_bar li').click(function(e){
      $('.right_bar li').removeClass("active")
      $(this).addClass("active")
    })
    // get User 初始化数据
    var Users = initUser(100);
    var initData = sortUser(Users);
    for(let i = 0; i < initData.length; i++ ) {
      $(".user_list").append(`<li class="title">${initData[i].title}</li>`)
      let usersData = initData[i].users
      for (let j = 0; j < usersData.length; j++) {
        $(".user_list").append(`
          <li>
              <div class="img" style="background: url('..、/images/${usersData[j].img}.jpg')"></div>
              <div>
                  <span>${usersData[j].name}</span>
              </div>
          </li>
        `)
      }
    }
})


// 随机生成好友名字
function initUser(count) {
  // var firstName  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
  var userList = [];
  for(var i = 0; i < count; i++) {
    var user = {}
    var randAZ =  Math.ceil(Math.random() * 25);
    // A-Z ASCII：65-90
    var firstName = String.fromCharCode(65 + randAZ) 
    var lastName = Math.floor(Math.random() * 100);

    user.title = firstName
    user.name = firstName + lastName;
    user.img =  'userIcon' + Math.floor(Math.random() * 10);
    
    userList.push(user)
  }
  console.log(`------随机生成 ${count} 个好友-----`)
  console.log(userList)
  return userList
}

// 数组重新封装 按字母分类
function sortUser(arr) {
  var titelArr = [];
  var newArr = [];
  for (var i = 0; i < arr.length; i++) {
    if (titelArr.indexOf(arr[i].title) === -1) {
      newArr.push({
        title: arr[i].title,
        users: [
          {
            name: arr[i].name, 
            img: arr[i].img
          }
        ]
      });
      titelArr.push(arr[i].title);
    } else {
      for (var j = 0; j < newArr.length; j++) {
        if (newArr[j].title == arr[i].title) {
          newArr[j].users.push(
            {
              name: arr[i].name, 
              img: arr[i].img
            }
          );
          break;
        }
      }
    }
  }

  console.log("------好友数据分类-----")
  console.log(newArr)

  var propComparator = (propName) =>
  (a, b) => a[propName].toLowerCase() == b[propName].toLowerCase() ? 0 : a[propName].toLowerCase() < b[propName].toLowerCase() ? -1 : 1
  
  console.log('-------按字母排序----')
  console.log(newArr.sort(propComparator('title'))); 
  return newArr
}