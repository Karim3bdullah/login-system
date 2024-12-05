   // عناصر تسجيل الدخول
    var lopassword = document.getElementById("log-Password");
    var loemail = document.getElementById("log-Email");
    var logbtn = document.getElementById("Login");
    var incorect=document.getElementById('incorrect')

    // جلب المستخدمين من localStorage
    var userslist = [];
    if (localStorage.getItem("users") !== null) {
        userslist = JSON.parse(localStorage.getItem("users"));
        console.log(userslist)
    }


    // وظيفة تسجيل الدخول
    logbtn.addEventListener("click",chick)
     function chick() {
        for (let i = 0; i < userslist.length; i++) {
            if (loemail.value === userslist[i].email && lopassword.value === userslist[i].password) {
                var currentuser=userslist[i].name 
                localStorage.setItem( "current",JSON.stringify(currentuser))
               window.location.href="welcom.html"

            }else if (loemail.value === "" && lopassword.value ===""){
                incorect.innerHTML = `<span>All inputs is required</span>`
           }
            else if(loemail.value !== userslist[i].email || lopassword.value !== userslist[i].password){
                incorect.innerHTML = `<span>incorrect email or password</span>`
                
            } 
        }
      

        
    };
    

