$(function(){
    $('.footer_tab li').click(function(e){
      $('.footer_tab li').removeClass("active")
      $(this).addClass("active")
    })
    $('.right_bar li').click(function(e){
      $('.right_bar li').removeClass("active")
      $(this).addClass("active")
    })
    // get User
    var Users = initUser(20);
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
    var lastName = Math.ceil(Math.random(0,100))

    user.title = firstName
    user.name = firstName + lastName;
    user.img =  'userIcon' + Math.floor(Math.random() * 10);
    
    userList.push(user)
  }
  console.log(userList)
  return userList
}

