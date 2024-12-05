var uemail=document.getElementById("Your-Email")
var uname=document.getElementById('Your-Name')
var upassword=document.getElementById('Password')
var signbtn=document.getElementById('Sign-Up')
var logbtn=document.getElementById('Login')
var success=document.getElementById('success')

// اضافة المعلومات 
// signbtn.onclick=signup
var userslist = JSON.parse(localStorage.getItem("users")) || [];

signbtn.addEventListener('click',chick)
function signup(){
var uinfo={
    name:uname.value,
    email:uemail.value,
    password:upassword.value
}
userslist.push(uinfo)
localStorage.setItem("users",JSON.stringify(userslist))
reset()
}
function chick() {
    // التحقق إذا كانت الحقول فارغة
    if (uemail.value === "" || upassword.value === "" || uname.value === "") {
        success.className = "text-danger";
        success.innerHTML = `<span>All inputs are required</span>`;
        return; // إيقاف التنفيذ إذا كانت الحقول فارغة
    }

    // التحقق من وجود البريد الإلكتروني بالفعل
    for (let i = 0; i < userslist.length; i++) {
        if (uemail.value === userslist[i].email) {
            success.className = "text-danger";
            success.innerHTML = `<span>Email already exists</span>`;
            return; // إيقاف التنفيذ إذا كان البريد الإلكتروني مكررًا
        }
    }

    // إذا كانت جميع الشروط صحيحة
    success.className = "text-success";
    success.innerHTML = `<span>Success</span>`;
    signup(); // استدعاء دالة الإضافة بعد التحقق من الشروط
}

function reset(){
    uname.value=""
    uemail.value=""
    upassword.value=""
}

