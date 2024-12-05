var out=document.getElementById("out")
var welcom=document.getElementById("welcom")

var userslist = [];

if (localStorage.getItem("users") !== null) {
    userslist = JSON.parse(localStorage.getItem("users"));

    
}
var username=JSON.parse(localStorage.getItem( "current"))
welcom.innerHTML=`welcom ${username}`

out.onclick=function(){
    window.location.href='index.html'
    localStorage.removeItem("current")
}
