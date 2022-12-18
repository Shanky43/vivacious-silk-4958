let otpnomes = document.getElementById("otp")
let mobno = JSON.parse(localStorage.getItem("mobile_number"))
let otpnumber = document.getElementById("mobno")
let loginbutton = document.getElementById("loginbtn")


let ans = otpnomes.innerText = +mobno[0]
console.log(ans, typeof ans)
if (ans > 0) {
    let x = Math.floor((Math.random() * 1000000) + 1);
    setTimeout(function () {
        alert(x);
    }, 1000);

    loginbutton.addEventListener("click", () => {
        console.log(otpnumber.value)
        console.log("login button is working")
        if (otpnumber.value == x) {
        window.location="./index.html"

        }else{
            alert("wrong otp")
        }
    })


}

















