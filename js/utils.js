// 随机生成好友名字
export function initUser(count) {
 // var firstName  = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
 var userList = [];
 for (var i = 0; i < count; i++) {
  var user = {}
  var randAZ = Math.ceil(Math.random() * 25);
  // A-Z ASCII：65-90
  var firstName = String.fromCharCode(65 + randAZ)
  var lastName = Math.floor(Math.random() * 100);

  user.title = firstName
  user.name = firstName + lastName;
  user.img = 'userIcon' + Math.floor(Math.random() * 10);

  userList.push(user)
 }
 console.log(`------随机生成 ${count} 个好友-----`)
 console.log(userList)
 return sortUser(userList)
}

// 数组重新封装 按字母分类
export function sortUser(arr) {
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

export function throttling(fn, wait, maxTimelong) {
 var timeout = null,
  startTime = Date.parse(new Date);

 return function (e) {
  if (timeout !== null) clearTimeout(timeout);
  var curTime = Date.parse(new Date);
  if (curTime - startTime >= maxTimelong) {
   fn(e);
   startTime = curTime;
  } else {
   timeout = setTimeout(fn, wait);
  }
 }
}