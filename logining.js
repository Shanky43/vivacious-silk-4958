let otpnomes = document.getElementById("otp")
let mobno = JSON.parse(localStorage.getItem("mobile_number"))
let otpnumber = document.getElementById("mobno")
let loginbutton = document.getElementById("loginbtn")
let resendOTP=document.getElementById("resendotp")

 let ans = otpnomes.innerText = +mobno[0]
let x;
function generateotp(ans){
   
    if (ans > 0) {
       x = Math.floor((Math.random() * 1000000) + 1);
        setTimeout(function () {
            alert(x);
        }, 1000);
}
}
generateotp(ans)
let popmessage= document.getElementById("loginstatus")
let isregister= false;

resendOTP.addEventListener("click",()=>{
    generateotp(ans)
})

    loginbutton.addEventListener("click", () => {
        console.log(otpnumber.value)
        console.log("login button is working")
        if (otpnumber.value == x) {
        isregister = true;
        localStorage.setItem("isregister",isregister);    
        popmessage.style.display="block";
        setTimeout(()=>{
            popmessage.style.display="none";
        },1000)
        setTimeout(()=>{
            window.location.href = "./productpage.html"
        },1000);
        }else{
            alert("wrong otp")
        }
    })


   

















